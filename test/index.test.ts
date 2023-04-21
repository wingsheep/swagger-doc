import path from 'path'
import { describe, expect, it } from 'vitest'
import { SwaggerApi } from '../src/api/swaggerApi'
import { generateCode } from '../src/api/generateCode'
import SwaggerJson from '../backend/mock/swagger.json'
import { isUrl } from '../src/utils/isUrl'
describe('should', () => {
  it('exported', async () => {
    // const url = 'https://beta-apisix.hgj.com/sonny-vehicle-account-book/v2/api-docs'
    const mockUrl = 'http://localhost:3000/v3/example'
    expect(isUrl(mockUrl)).toMatchInlineSnapshot('true')
    // const mockUrl = 'http://127.0.0.1:3000/v2/example1'
    // await SwaggerApi.getDocJson(mockUrl)
    // await expect(SwaggerApi.docJson).toMatchInlineSnapshot()
    // await expect(SwaggerApi.tagTree).toMatchInlineSnapshot()
    // await expect(SwaggerApi.tagList).toMatchInlineSnapshot()
    // expect(SwaggerApi.getApiDetail('/accountBook/add', 'post')).toMatchInlineSnapshot()
    // expect(SwaggerApi.getApiDetail('/freightTask/add', 'post')).toMatchInlineSnapshot()
  })

  // it('exported', async () => {
  //   expect(generateCode(SwaggerJson, path.resolve(process.cwd(), './test')))
  // })
})
