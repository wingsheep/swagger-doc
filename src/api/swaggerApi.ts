import SwaggerParser from '@apidevtools/swagger-parser'
import type { OpenAPIV2, OpenAPIV3 } from 'openapi-types'

interface TagTree {
  name: string
  description: string
  children: any[]
}
export class SwaggerApi {
  public static currentDoc: SwaggerApi | undefined
  /** Swagger json data */
  public static docJson: OpenAPIV2.Document
  /** Swagger tag tree */
  public static tagTree: TagTree[] | undefined
  /**
   * Get swagger doc json
   * @param {string} url https://dev-apisix.hgj.com/sonny-vehicle-account-book/v2/api-docs
   * @memberof SwaggerApi
   */
  public static async getDocJson(url: string | OpenAPIV2.Document) {
    try {
      const api = await SwaggerParser.dereference(url) as OpenAPIV2.Document
      SwaggerApi.currentDoc = new SwaggerApi(api)
    }
    catch (error) {
      SwaggerApi.tagTree = undefined
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
    SwaggerApi.tagTree = this._getTagTree()
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
        name: tag.name,
        description: '',
        children: [] as any,
      }
      Object.keys(paths).forEach((path) => {
        const pathValue = paths[path]
        Object.keys(pathValue).forEach((method) => {
          const methodValue = (pathValue as OpenAPIV2.PathsObject)[method] as OpenAPIV2.OperationObject
          if (methodValue?.tags && methodValue.tags.includes(tag.name)) {
            treeItem.children.push({
              name: `${method.toLocaleUpperCase()} ${methodValue.summary}`,
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
