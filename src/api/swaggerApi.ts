import SwaggerParser from '@apidevtools/swagger-parser'
import type { OpenAPIV2, OpenAPIV3 } from 'openapi-types'
import Converter from 'api-spec-converter'
import axios from 'axios'
interface TagTree {
  label: string
  description: string
  children: any[]
}
interface TagList {
  label: string
  id: string
  api: {
    path: string
    method: string
    tags: string[]
  }
}
export class SwaggerApi {
  public static currentDoc: SwaggerApi | undefined
  /** Swagger json data */
  public static docJson: OpenAPIV2.Document
  /** Swagger tag tree */
  public static tagTree: TagTree[] | undefined
  public static tagList: TagList[]

  /**
   * Get swagger doc json
   * @param {string} url
   * @memberof SwaggerApi
   */
  public static async getDocJson(url: string | OpenAPIV2.Document) {
    try {
      let converterData = url
      if (typeof url === 'string') {
        const data = await fetchData(url)
        converterData = await converterDoc(data, url)
      }
      const parserSwaggerData = await SwaggerParser.dereference(converterData) as OpenAPIV2.Document
      SwaggerApi.currentDoc = new SwaggerApi(parserSwaggerData)
      return converterData
    }
    catch (error) {
      // console.log(error)
      SwaggerApi.tagTree = undefined
      SwaggerApi.tagList = []
    }
  }

  /**
   * @description GET api detail data
   * @static
   * @param {string} path api url
   * @param {string} method api method
   * @return {*}
   * @memberof SwaggerApi
   */
  public static getApiDetail(path: string, method: string) {
    const { paths } = SwaggerApi.docJson
    const pathValue = paths[path]
    const apiDetail = pathValue && (pathValue as OpenAPIV2.PathsObject)[method] as OpenAPIV2.OperationObject
    Object.keys(apiDetail.responses).forEach((code) => {
      const responseValue = apiDetail.responses[code] as (OpenAPIV2.ResponseObject | OpenAPIV2.ScopesObject)
      if (responseValue && responseValue?.schema)
        responseValue.examples = getSchemaExample(responseValue?.schema)
    })
    apiDetail.parameters?.forEach((parameter: any) => {
      if (parameter.schema)
        parameter.examples = getSchemaExample(parameter.schema)
    })

    return apiDetail
  }

  private constructor(data: OpenAPIV2.Document) {
    SwaggerApi.docJson = data
    SwaggerApi.tagTree = this._generateTagTree()
    SwaggerApi.tagList = this._getTagList()
  }

  /**
   * @description GET tag tree
   * @private
   * @return {*}
   * @memberof SwaggerApi
   */
  private _getTagTree() {
    const { paths, tags } = SwaggerApi.docJson
    const apiTreeList: TagTree[] = []
    tags?.forEach((tag) => {
      const treeItem = {
        label: tag.name,
        description: '',
        children: [] as any,
      }
      Object.keys(paths).forEach((path) => {
        const pathValue = paths[path]
        Object.keys(pathValue).forEach((method) => {
          const methodValue = (pathValue as OpenAPIV2.PathsObject)[method] as OpenAPIV2.OperationObject
          if (methodValue?.tags && methodValue.tags.includes(tag.name)) {
            treeItem.children.push({
              label: `${method.toLocaleUpperCase()} ${methodValue.summary}`,
              id: methodValue.operationId,
              api: {
                method,
                tags: methodValue.tags,
                path,
              },
            })
          }
        })
      })
      treeItem.description = `(${treeItem.children.length})`
      apiTreeList.push(treeItem)
    })
    return apiTreeList
  }

  /**
   * @description GET tag tree
   * @private
   * @return {*}
   * @memberof SwaggerApi
   */
  private _generateTagTree() {
    const { paths } = SwaggerApi.docJson
    const apiTreeList: TagTree[] = []
    Object.keys(paths).forEach((path) => {
      const pathValue = paths[path]
      Object.keys(pathValue).forEach((method) => {
        const methodValue = (pathValue as OpenAPIV2.PathsObject)[method] as OpenAPIV2.OperationObject
        methodValue?.tags?.forEach((tagName) => {
          const findTagItem = apiTreeList.find(item => item.label === tagName)
          const childrenItem = {
            label: `${method.toLocaleUpperCase()} ${methodValue.summary || path}`,
            id: methodValue.operationId,
            api: {
              method,
              tags: methodValue.tags,
              path,
            },
          }
          if (!findTagItem) {
            apiTreeList.push({
              label: tagName,
              description: '',
              children: [childrenItem] as any,
            })
          }
          else {
            findTagItem.children.push(childrenItem)
          }
        })
      })
    })
    return apiTreeList
  }

  /**
   * Get tag list
   * @private
   * @return {*}
   * @memberof SwaggerApi
   */
  private _getTagList() {
    const list = flattenTree(SwaggerApi.tagTree)
    return list
  }

  /**
   * @description GET api schemas
   * @private
   * @memberof SwaggerApi
   */
  private _getApiSchemas() {
    const { definitions } = SwaggerApi.docJson
    const apiSchemas: any = []
    if (definitions) {
      Object.keys(definitions).forEach((definition) => {
        const definitionValue = definitions[definition]
        const apiSchemasItem = {
          name: definition,
          jsonSchema: definitionValue,
        }
        apiSchemas.push(apiSchemasItem)
      })
    }
  }
}
/**
 * Tree to list
 * @param {*} tree
 * @return {*}
 */
function flattenTree(tree: TagTree[] | undefined) {
  if (!tree)
    return []
  const result: any = []
  for (let i = 0; i < tree.length; i++) {
    if (!tree[i].children)
      result.push(tree[i])

    if (tree[i].children)
      result.push(...flattenTree(tree[i].children))
  }
  return result
}

/**
 * @description Get response example
 * @param {*} schema
 * @return {*}
 */
function getSchemaExample(schema: any) {
  const example = schema.example || generateExample(schema)
  return example
}

/**
 * @description Generate example data
 * @param {*} schema
 * @return {*}  {unknown}
 */
function generateExample(schema: any): unknown {
  const type = schema.type
  if (type === 'object') {
    const properties = schema.properties
    const example: any = {}
    for (const key in properties) {
      const prop = properties[key]
      example[key] = generateExample(prop)
    }
    return example
  }
  else if (type === 'array') {
    const items = schema.items
    return [generateExample(items)]
  }
  else {
    return schema.example || getDefaultByType(type)
  }
}
/**
 * @description Get default by type
 * @param {OpenAPIV3.NonArraySchemaObjectType} type
 * @return {*}  {unknown}
 */
function getDefaultByType(type: OpenAPIV3.NonArraySchemaObjectType): unknown {
  let result
  switch (type) {
    case 'string':
      result = 'default string value'
      break
    case 'integer':
    case 'number':
      result = 0
      break
    case 'boolean':
      result = true
      break
    default:
      result = null
      break
  }
  return result
}

/**
 * Request the interface for data
 * @param {string} url
 * @return {*}
 */
async function fetchData(url: string) {
  const { status, data } = await axios.get(url)
  if (status === 200)
    return data
}

/**
 * Enumeration of document versions of each type
 * @export
 * @enum {number}
 */
export enum DocVersion {
  swagger_1 = 'swagger_1',
  swagger_2 = 'swagger_2',
  openapi_3 = 'openapi_3',
  api_blueprint = 'api_blueprint',
  io_docs = 'io_docs',
  google = 'io_docs',
  raml = 'raml',
  wadl = 'wadl',
  empty = '',
}

/**
 * Get the corresponding version of swagger json
 * @param {*} swaggerJson
 * @return {*}  {DocVersion}
 */
function getSwaggerVersion(swaggerJson): DocVersion {
  if (swaggerJson.swagger && swaggerJson.swagger.startsWith('1.'))
    return DocVersion.swagger_1

  else if (swaggerJson.swagger === '2.0')
    return DocVersion.swagger_2

  else if (swaggerJson.openapi && swaggerJson.openapi.startsWith('3.'))
    return DocVersion.openapi_3

  else if (swaggerJson.apiVersion === '1.0')
    return DocVersion.io_docs

  else if (swaggerJson.discoveryVersion === 'v1')
    return DocVersion.google

  else if (swaggerJson.version === 'RAML 0.8' || swaggerJson.version === 'RAML 1.0')
    return DocVersion.raml

  else if (swaggerJson['wadl:application'] === 'wadl+xml')
    return DocVersion.wadl

  else
    return DocVersion.empty
}

/**
 * 将swagger json 转换至v2版本
 * @param {object} swaggerJson
 * @param {string} source
 * @return {*}  {Promise<OpenAPIV2.Document<{}>>}
 */
async function converterDoc(swaggerJson: object, source: string): Promise<OpenAPIV2.Document<{}>> {
  const fromVersion = getSwaggerVersion(swaggerJson)
  if (!fromVersion)
    return swaggerJson as OpenAPIV2.Document
  if (fromVersion === DocVersion.swagger_2)
    return swaggerJson as OpenAPIV2.Document
  const converted = await Converter.convert({
    from: fromVersion,
    to: 'swagger_2',
    source,
  })
  await converted.fillMissing()
  try {
    await converted.validate()
  }
  catch (result: any) {
    if (result.errors)
      console.error(JSON.stringify(result.errors, null, 2))
    if (result.warnings)
      console.error(JSON.stringify(result.warnings, null, 2))
  }
  return converted.spec as OpenAPIV2.Document
}
