import { describe, expect, it } from 'vitest'
import { SwaggerApi } from '../src/api/swaggerApi'
describe('should', () => {
  it('exported', async () => {
    // const url = 'https://beta-apisix.hgj.com/sonny-vehicle-account-book/v2/api-docs'
    const mockUrl = 'http://127.0.0.1:3000/v2/example'
    await SwaggerApi.getDocJson(mockUrl)
    // await expect(SwaggerApi.docJson).toMatchInlineSnapshot()
    // await expect(SwaggerApi.tagTree).toMatchInlineSnapshot()
    // expect(SwaggerApi.getApiDetail('/accountBook/add', 'post')).toMatchInlineSnapshot()
    expect(SwaggerApi.getApiDetail('/freightTask/add', 'post')).toMatchInlineSnapshot(`
      {
        "consumes": [
          "application/json",
        ],
        "operationId": "addUsingPOST_1",
        "parameters": [
          {
            "description": "request",
            "examples": {
              "accountBookList": [
                {
                  "amount": 1000,
                  "categoryName": "加油",
                  "occurrenceTime": "yyyy-MM-dd",
                  "remarks": "买的燃油宝",
                  "taskId": 1750148943159,
                  "type": 1,
                },
              ],
              "customerId": 1559431138848817400,
              "destinationDetail": {
                "address": "default string value",
                "addressId": 0,
                "location": "default string value",
                "title": "default string value",
              },
              "fileIds": [
                "default string value",
              ],
              "goodsName": "钢筋5斤",
              "originDetail": {
                "address": "default string value",
                "addressId": 0,
                "location": "default string value",
                "title": "default string value",
              },
              "remarks": "给王总送的货",
              "startDate": "2023-02-10",
              "tradeNo": "YD1559431138848817535",
            },
            "in": "body",
            "name": "request",
            "required": true,
            "schema": {
              "properties": {
                "accountBookList": {
                  "allowEmptyValue": false,
                  "description": "记流水参数",
                  "items": {
                    "properties": {
                      "amount": {
                        "allowEmptyValue": false,
                        "description": "金额 (单位分)",
                        "example": 1000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "categoryName": {
                        "allowEmptyValue": false,
                        "description": "类型名称",
                        "example": "加油",
                        "type": "string",
                      },
                      "occurrenceTime": {
                        "allowEmptyValue": false,
                        "description": "时间",
                        "example": "yyyy-MM-dd",
                        "format": "date",
                        "type": "string",
                      },
                      "remarks": {
                        "allowEmptyValue": false,
                        "description": "备注",
                        "example": "买的燃油宝",
                        "type": "string",
                      },
                      "taskId": {
                        "allowEmptyValue": false,
                        "description": "运单id",
                        "example": 1750148943159,
                        "format": "int64",
                        "type": "integer",
                      },
                      "type": {
                        "allowEmptyValue": false,
                        "description": "类别 0:收入 1:支出",
                        "example": 1,
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    "title": "AccountBookAddRequest",
                    "type": "object",
                  },
                  "type": "array",
                },
                "customerId": {
                  "allowEmptyValue": false,
                  "description": "客户id",
                  "example": 1559431138848817400,
                  "format": "int64",
                  "type": "integer",
                },
                "destinationDetail": {
                  "allowEmptyValue": false,
                  "description": "目的地地理位置信息",
                  "properties": {
                    "address": {
                      "allowEmptyValue": false,
                      "description": "详细地址",
                      "type": "string",
                    },
                    "addressId": {
                      "allowEmptyValue": false,
                      "description": "地址id",
                      "format": "int64",
                      "type": "integer",
                    },
                    "location": {
                      "allowEmptyValue": false,
                      "description": "lat<纬度>,lng<经度> 经纬度拼起来,逗号分隔",
                      "type": "string",
                    },
                    "title": {
                      "allowEmptyValue": false,
                      "description": "地址标题",
                      "type": "string",
                    },
                  },
                  "title": "AddressDetailRequest",
                  "type": "object",
                },
                "fileIds": {
                  "allowEmptyValue": false,
                  "description": "文件id列表",
                  "items": {
                    "type": "string",
                  },
                  "type": "array",
                },
                "goodsName": {
                  "allowEmptyValue": false,
                  "description": "货物名称",
                  "example": "钢筋5斤",
                  "type": "string",
                },
                "originDetail": {
                  "allowEmptyValue": false,
                  "description": "起始地地理位置信息",
                  "properties": {
                    "address": {
                      "allowEmptyValue": false,
                      "description": "详细地址",
                      "type": "string",
                    },
                    "addressId": {
                      "allowEmptyValue": false,
                      "description": "地址id",
                      "format": "int64",
                      "type": "integer",
                    },
                    "location": {
                      "allowEmptyValue": false,
                      "description": "lat<纬度>,lng<经度> 经纬度拼起来,逗号分隔",
                      "type": "string",
                    },
                    "title": {
                      "allowEmptyValue": false,
                      "description": "地址标题",
                      "type": "string",
                    },
                  },
                  "title": "AddressDetailRequest",
                  "type": "object",
                },
                "remarks": {
                  "allowEmptyValue": false,
                  "description": "备注",
                  "example": "给王总送的货",
                  "type": "string",
                },
                "startDate": {
                  "allowEmptyValue": false,
                  "description": "开始时间",
                  "example": "2023-02-10",
                  "format": "date",
                  "type": "string",
                },
                "tradeNo": {
                  "allowEmptyValue": false,
                  "description": "业务单号",
                  "example": "YD1559431138848817535",
                  "type": "string",
                },
              },
              "title": "FreightTaskAddRequest",
              "type": "object",
            },
          },
        ],
        "produces": [
          "*/*",
        ],
        "responses": {
          "200": {
            "description": "OK",
          },
          "201": {
            "description": "Created",
          },
          "401": {
            "description": "Unauthorized",
          },
          "403": {
            "description": "Forbidden",
          },
          "404": {
            "description": "Not Found",
          },
        },
        "summary": "新增运单",
        "tags": [
          "运单任务相关",
        ],
      }
    `)
  })
})
