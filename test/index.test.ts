import { describe, expect, it } from 'vitest'
import { SwaggerApi } from '../src/swaggerApi'

describe('should', () => {
  it('exported', async () => {
    await SwaggerApi.getDocJson('https://dev-apisix.hgj.com/sonny-vehicle-account-book/v2/api-docs')
    await expect(SwaggerApi.docJson).toMatchInlineSnapshot(`
      {
        "basePath": "/",
        "definitions": {
          "AccountBookAddRequest": {
            "properties": {
              "amount": {
                "allowEmptyValue": false,
                "description": "金额 (单位分)",
                "example": 1000,
                "format": "int64",
                "type": "integer",
              },
              "categoryId": {
                "allowEmptyValue": false,
                "description": "类型Id",
                "example": 1567054180388524000,
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
          "AccountBookAnalysisResponse": {
            "properties": {
              "records": {
                "allowEmptyValue": false,
                "description": "分类列表",
                "items": {
                  "properties": {
                    "amount": {
                      "allowEmptyValue": false,
                      "description": "总计 (分)",
                      "example": 1257100,
                      "format": "int64",
                      "type": "integer",
                    },
                    "categoryId": {
                      "allowEmptyValue": false,
                      "description": "分类Id",
                      "example": 123123123,
                      "type": "string",
                    },
                    "categoryIdList": {
                      "allowEmptyValue": false,
                      "description": "其余列表",
                      "items": {
                        "type": "string",
                      },
                      "type": "array",
                    },
                    "categoryName": {
                      "allowEmptyValue": false,
                      "description": "分类名称",
                      "example": "加油",
                      "type": "string",
                    },
                  },
                  "title": "PieChartItemResponse",
                  "type": "object",
                },
                "type": "array",
              },
              "totalAmount": {
                "allowEmptyValue": false,
                "description": "总收支",
                "example": 100,
                "format": "int64",
                "type": "integer",
              },
            },
            "title": "AccountBookAnalysisResponse",
            "type": "object",
          },
          "AccountBookDeleteRequest": {
            "properties": {
              "accountBookId": {
                "allowEmptyValue": false,
                "description": "账单流水id",
                "example": 1750148943159,
                "format": "int64",
                "type": "integer",
              },
            },
            "title": "AccountBookDeleteRequest",
            "type": "object",
          },
          "AccountBookDetailResponse": {
            "properties": {
              "accountBookId": {
                "allowEmptyValue": false,
                "description": "账单流水id",
                "example": 1750148943159,
                "format": "int64",
                "type": "integer",
              },
              "amount": {
                "allowEmptyValue": false,
                "description": "金额 (单位分)",
                "example": 1000,
                "format": "int64",
                "type": "integer",
              },
              "categoryId": {
                "allowEmptyValue": false,
                "description": "类型Id",
                "example": 12312312312312,
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
                "example": "yyyy-MM-dd HH:mm:ss",
                "format": "date",
                "type": "string",
              },
              "remarks": {
                "allowEmptyValue": false,
                "description": "备注",
                "example": "买的燃油宝",
                "type": "string",
              },
              "taskEndCity": {
                "allowEmptyValue": false,
                "description": "任务目的地",
                "example": "南京市",
                "type": "string",
              },
              "taskId": {
                "allowEmptyValue": false,
                "description": "运单id",
                "example": 1750148943159,
                "format": "int64",
                "type": "integer",
              },
              "taskStartCity": {
                "allowEmptyValue": false,
                "description": "任务起始地",
                "example": "苏州市",
                "type": "string",
              },
              "taskStartDate": {
                "allowEmptyValue": false,
                "description": "任务开始时间",
                "example": "2023-02-01",
                "format": "date",
                "type": "string",
              },
              "type": {
                "allowEmptyValue": false,
                "description": "类别 0:收入 1:支出",
                "example": 1,
                "format": "int32",
                "type": "integer",
              },
            },
            "title": "AccountBookDetailResponse",
            "type": "object",
          },
          "AccountBookItemResponse": {
            "properties": {
              "accountBookId": {
                "allowEmptyValue": false,
                "description": "账单流水id",
                "example": 1750148943159,
                "format": "int64",
                "type": "integer",
              },
              "amount": {
                "allowEmptyValue": false,
                "description": "金额 (单位分)",
                "example": 1000,
                "format": "int64",
                "type": "integer",
              },
              "categoryId": {
                "allowEmptyValue": false,
                "description": "类型Id",
                "example": 12312312312312,
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
                "example": "yyyy-MM-dd HH:mm:ss",
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
            "title": "AccountBookItemResponse",
            "type": "object",
          },
          "AccountBookListResponse": {
            "properties": {
              "records": {
                "allowEmptyValue": false,
                "description": "记录列表",
                "items": {
                  "properties": {
                    "accountBookId": {
                      "allowEmptyValue": false,
                      "description": "账单流水id",
                      "example": 1750148943159,
                      "format": "int64",
                      "type": "integer",
                    },
                    "amount": {
                      "allowEmptyValue": false,
                      "description": "金额 (单位分)",
                      "example": 1000,
                      "format": "int64",
                      "type": "integer",
                    },
                    "categoryId": {
                      "allowEmptyValue": false,
                      "description": "类型Id",
                      "example": 12312312312312,
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
                      "example": "yyyy-MM-dd HH:mm:ss",
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
                  "title": "AccountBookItemResponse",
                  "type": "object",
                },
                "type": "array",
              },
              "yearMonth": {
                "allowEmptyValue": false,
                "description": "月份",
                "example": "2023年5月",
                "type": "string",
              },
            },
            "title": "AccountBookListResponse",
            "type": "object",
          },
          "AccountBookUpdateRequest": {
            "properties": {
              "accountBookId": {
                "allowEmptyValue": false,
                "description": "账单流水id",
                "example": 1750148943159,
                "format": "int64",
                "type": "integer",
              },
              "amount": {
                "allowEmptyValue": false,
                "description": "金额 (单位分)",
                "example": 1000,
                "format": "int64",
                "type": "integer",
              },
              "categoryId": {
                "allowEmptyValue": false,
                "description": "类型id",
                "example": 1750148943159,
                "type": "string",
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
                "example": "yyyy-MM-dd HH:mm:ss",
                "format": "date-time",
                "type": "string",
              },
              "remarks": {
                "allowEmptyValue": false,
                "description": "备注",
                "example": "买的燃油宝",
                "type": "string",
              },
              "type": {
                "allowEmptyValue": false,
                "description": "0:收入 1:支出",
                "example": 1750148943159,
                "exclusiveMaximum": false,
                "exclusiveMinimum": false,
                "format": "int32",
                "maximum": 9223372036854776000,
                "minimum": 0,
                "type": "integer",
              },
            },
            "title": "AccountBookUpdateRequest",
            "type": "object",
          },
          "AddressDeleteRequest": {
            "properties": {
              "addressId": {
                "allowEmptyValue": false,
                "description": "地址簿id",
                "format": "int64",
                "type": "integer",
              },
            },
            "title": "AddressDeleteRequest",
            "type": "object",
          },
          "AddressDetailRequest": {
            "properties": {
              "address": {
                "allowEmptyValue": false,
                "description": "详细地址",
                "type": "string",
              },
              "location": {
                "allowEmptyValue": false,
                "description": "lat<纬度>,lng<经度> 经纬度拼起来,逗号分隔",
                "type": "string",
              },
              "tittle": {
                "allowEmptyValue": false,
                "description": "地址标题",
                "type": "string",
              },
            },
            "title": "AddressDetailRequest",
            "type": "object",
          },
          "AddressDetailResponse": {
            "properties": {
              "address": {
                "allowEmptyValue": false,
                "description": "详细地址",
                "type": "string",
              },
              "city": {
                "allowEmptyValue": false,
                "description": "市",
                "type": "string",
              },
              "province": {
                "allowEmptyValue": false,
                "description": "省",
                "type": "string",
              },
              "region": {
                "allowEmptyValue": false,
                "description": "区",
                "type": "string",
              },
              "tittle": {
                "allowEmptyValue": false,
                "description": "地址标题",
                "type": "string",
              },
            },
            "title": "AddressDetailResponse",
            "type": "object",
          },
          "CategoryAddRequest": {
            "properties": {
              "categoryName": {
                "allowEmptyValue": false,
                "description": "分类名称",
                "type": "string",
              },
              "type": {
                "allowEmptyValue": false,
                "description": "类别 0:收入 1:支出",
                "example": 1,
                "format": "int32",
                "type": "integer",
              },
            },
            "title": "CategoryAddRequest",
            "type": "object",
          },
          "CategoryDeleteRequest": {
            "properties": {
              "categoryId": {
                "allowEmptyValue": false,
                "description": "分类id",
                "format": "int64",
                "type": "integer",
              },
            },
            "title": "CategoryDeleteRequest",
            "type": "object",
          },
          "CategoryListResponse": {
            "properties": {
              "categoryId": {
                "allowEmptyValue": false,
                "description": "账目分类id",
                "format": "int64",
                "type": "integer",
              },
              "categoryName": {
                "allowEmptyValue": false,
                "description": "账目分类名称",
                "type": "string",
              },
              "categoryType": {
                "allowEmptyValue": false,
                "description": "分类类型 0:基础分类 1:用户新增分类",
                "format": "int32",
                "type": "integer",
              },
              "pid": {
                "allowEmptyValue": false,
                "description": "父id",
                "type": "string",
              },
              "type": {
                "allowEmptyValue": false,
                "description": "0:收入 1:支出",
                "format": "int32",
                "type": "integer",
              },
            },
            "title": "CategoryListResponse",
            "type": "object",
          },
          "CustomerAddRequest": {
            "properties": {
              "customerName": {
                "allowEmptyValue": false,
                "description": "客户名称",
                "type": "string",
              },
            },
            "title": "CustomerAddRequest",
            "type": "object",
          },
          "CustomerDeleteRequest": {
            "properties": {
              "customerId": {
                "allowEmptyValue": false,
                "description": "客户id",
                "format": "int64",
                "type": "integer",
              },
            },
            "title": "CustomerDeleteRequest",
            "type": "object",
          },
          "CustomerListResponse": {
            "properties": {
              "customerId": {
                "allowEmptyValue": false,
                "description": "客户id",
                "format": "int64",
                "type": "integer",
              },
              "customerName": {
                "allowEmptyValue": false,
                "description": "客户名称",
                "type": "string",
              },
            },
            "title": "CustomerListResponse",
            "type": "object",
          },
          "CustomerProfitResponse": {
            "properties": {
              "averageProfit": {
                "allowEmptyValue": false,
                "description": "平均利润(分)",
                "example": 200000,
                "format": "int64",
                "type": "integer",
              },
              "customerId": {
                "allowEmptyValue": false,
                "description": "客户id",
                "example": 200000,
                "format": "int64",
                "type": "integer",
              },
              "customerName": {
                "allowEmptyValue": false,
                "description": "客户名称",
                "example": 200000,
                "type": "string",
              },
              "maxTaskDate": {
                "allowEmptyValue": false,
                "description": "最新任务时间",
                "example": "2023-02-02",
                "format": "date",
                "type": "string",
              },
              "taskAmount": {
                "allowEmptyValue": false,
                "description": "任务数量",
                "example": 2,
                "format": "int32",
                "type": "integer",
              },
              "totalProfit": {
                "allowEmptyValue": false,
                "description": "总利润",
                "example": 200000,
                "format": "int64",
                "type": "integer",
              },
            },
            "title": "CustomerProfitResponse",
            "type": "object",
          },
          "CustomerResponse": {
            "properties": {
              "averageProfit": {
                "allowEmptyValue": false,
                "description": "平均利润(分)",
                "example": 200000,
                "format": "int64",
                "type": "integer",
              },
              "customerName": {
                "allowEmptyValue": false,
                "description": "客户名称",
                "example": "张总",
                "type": "string",
              },
              "times": {
                "allowEmptyValue": false,
                "description": "次数",
                "format": "int32",
                "type": "integer",
              },
            },
            "title": "CustomerResponse",
            "type": "object",
          },
          "FreightTaskAddRequest": {
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
                    "categoryId": {
                      "allowEmptyValue": false,
                      "description": "类型Id",
                      "example": 1567054180388524000,
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
                  "location": {
                    "allowEmptyValue": false,
                    "description": "lat<纬度>,lng<经度> 经纬度拼起来,逗号分隔",
                    "type": "string",
                  },
                  "tittle": {
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
                  "location": {
                    "allowEmptyValue": false,
                    "description": "lat<纬度>,lng<经度> 经纬度拼起来,逗号分隔",
                    "type": "string",
                  },
                  "tittle": {
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
          "FreightTaskDeleteRequest": {
            "properties": {
              "taskId": {
                "allowEmptyValue": false,
                "description": "任务id",
                "example": 1559431138848817400,
                "format": "int64",
                "type": "integer",
              },
            },
            "title": "FreightTaskDeleteRequest",
            "type": "object",
          },
          "FreightTaskDetailResponse": {
            "properties": {
              "customerId": {
                "allowEmptyValue": false,
                "description": "任务id",
                "example": 1559431138848817400,
                "format": "int64",
                "type": "integer",
              },
              "customerName": {
                "allowEmptyValue": false,
                "description": "客户名称",
                "example": "王总",
                "type": "string",
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
                  "city": {
                    "allowEmptyValue": false,
                    "description": "市",
                    "type": "string",
                  },
                  "province": {
                    "allowEmptyValue": false,
                    "description": "省",
                    "type": "string",
                  },
                  "region": {
                    "allowEmptyValue": false,
                    "description": "区",
                    "type": "string",
                  },
                  "tittle": {
                    "allowEmptyValue": false,
                    "description": "地址标题",
                    "type": "string",
                  },
                },
                "title": "AddressDetailResponse",
                "type": "object",
              },
              "expenditure": {
                "allowEmptyValue": false,
                "description": "支出(分)",
                "example": 10000,
                "format": "int64",
                "type": "integer",
              },
              "fileIds": {
                "allowEmptyValue": false,
                "description": "照片列表",
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
              "income": {
                "allowEmptyValue": false,
                "description": "收入 (分)",
                "example": 18000,
                "format": "int64",
                "type": "integer",
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
                  "city": {
                    "allowEmptyValue": false,
                    "description": "市",
                    "type": "string",
                  },
                  "province": {
                    "allowEmptyValue": false,
                    "description": "省",
                    "type": "string",
                  },
                  "region": {
                    "allowEmptyValue": false,
                    "description": "区",
                    "type": "string",
                  },
                  "tittle": {
                    "allowEmptyValue": false,
                    "description": "地址标题",
                    "type": "string",
                  },
                },
                "title": "AddressDetailResponse",
                "type": "object",
              },
              "profit": {
                "allowEmptyValue": false,
                "description": "利润(分)",
                "example": 80000,
                "format": "int64",
                "type": "integer",
              },
              "profitRate": {
                "allowEmptyValue": false,
                "description": "利润率",
                "example": 78,
                "format": "int32",
                "type": "integer",
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
              "taskId": {
                "allowEmptyValue": false,
                "description": "任务id",
                "example": 1559431138848817400,
                "format": "int64",
                "type": "integer",
              },
              "taskNo": {
                "allowEmptyValue": false,
                "description": "任务编号",
                "example": "YD1559431138848817535",
                "type": "string",
              },
              "tradeNo": {
                "allowEmptyValue": false,
                "description": "业务单号",
                "example": "JDZFB1559431138848817535",
                "type": "string",
              },
            },
            "title": "FreightTaskDetailResponse",
            "type": "object",
          },
          "FreightTaskListResponse": {
            "properties": {
              "customerName": {
                "allowEmptyValue": false,
                "description": "客户名称",
                "example": "王总",
                "type": "string",
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
                  "city": {
                    "allowEmptyValue": false,
                    "description": "市",
                    "type": "string",
                  },
                  "province": {
                    "allowEmptyValue": false,
                    "description": "省",
                    "type": "string",
                  },
                  "region": {
                    "allowEmptyValue": false,
                    "description": "区",
                    "type": "string",
                  },
                  "tittle": {
                    "allowEmptyValue": false,
                    "description": "地址标题",
                    "type": "string",
                  },
                },
                "title": "AddressDetailResponse",
                "type": "object",
              },
              "expenditure": {
                "allowEmptyValue": false,
                "description": "支出(分)",
                "example": 10000,
                "format": "int64",
                "type": "integer",
              },
              "goodsName": {
                "allowEmptyValue": false,
                "description": "货物名称",
                "example": "钢筋5斤",
                "type": "string",
              },
              "income": {
                "allowEmptyValue": false,
                "description": "收入 (分)",
                "example": 18000,
                "format": "int64",
                "type": "integer",
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
                  "city": {
                    "allowEmptyValue": false,
                    "description": "市",
                    "type": "string",
                  },
                  "province": {
                    "allowEmptyValue": false,
                    "description": "省",
                    "type": "string",
                  },
                  "region": {
                    "allowEmptyValue": false,
                    "description": "区",
                    "type": "string",
                  },
                  "tittle": {
                    "allowEmptyValue": false,
                    "description": "地址标题",
                    "type": "string",
                  },
                },
                "title": "AddressDetailResponse",
                "type": "object",
              },
              "profit": {
                "allowEmptyValue": false,
                "description": "利润(分)",
                "example": 80000,
                "format": "int64",
                "type": "integer",
              },
              "profitRate": {
                "allowEmptyValue": false,
                "description": "利润率",
                "example": 78,
                "type": "string",
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
              "taskId": {
                "allowEmptyValue": false,
                "description": "任务id",
                "example": 1559431138848817400,
                "format": "int64",
                "type": "integer",
              },
              "taskNo": {
                "allowEmptyValue": false,
                "description": "任务编号",
                "example": "YD1559431138848817535",
                "type": "string",
              },
              "tradeNo": {
                "allowEmptyValue": false,
                "description": "业务单号",
                "example": "JDZFB1559431138848817535",
                "type": "string",
              },
            },
            "title": "FreightTaskListResponse",
            "type": "object",
          },
          "FreightTaskQueryResponse": {
            "properties": {
              "customerList": {
                "allowEmptyValue": false,
                "description": "客户筛选条件",
                "items": {
                  "properties": {
                    "customerId": {
                      "allowEmptyValue": false,
                      "description": "客户id",
                      "format": "int64",
                      "type": "integer",
                    },
                    "customerName": {
                      "allowEmptyValue": false,
                      "description": "客户名称",
                      "type": "string",
                    },
                  },
                  "title": "CustomerListResponse",
                  "type": "object",
                },
                "type": "array",
              },
              "endCities": {
                "allowEmptyValue": false,
                "description": "目的地筛选条件",
                "items": {
                  "type": "string",
                },
                "type": "array",
              },
              "goodsName": {
                "allowEmptyValue": false,
                "description": "货物筛选条件",
                "items": {
                  "type": "string",
                },
                "type": "array",
              },
              "startCities": {
                "allowEmptyValue": false,
                "description": "起始地筛选条件",
                "items": {
                  "type": "string",
                },
                "type": "array",
              },
            },
            "title": "FreightTaskQueryResponse",
            "type": "object",
          },
          "FreightTaskUpdateRequest": {
            "properties": {
              "accountBookList": {
                "allowEmptyValue": false,
                "description": "编辑流水参数",
                "items": {
                  "properties": {
                    "accountBookId": {
                      "allowEmptyValue": false,
                      "description": "账单流水id",
                      "example": 1750148943159,
                      "format": "int64",
                      "type": "integer",
                    },
                    "amount": {
                      "allowEmptyValue": false,
                      "description": "金额 (单位分)",
                      "example": 1000,
                      "format": "int64",
                      "type": "integer",
                    },
                    "categoryId": {
                      "allowEmptyValue": false,
                      "description": "类型id",
                      "example": 1750148943159,
                      "type": "string",
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
                      "example": "yyyy-MM-dd HH:mm:ss",
                      "format": "date-time",
                      "type": "string",
                    },
                    "remarks": {
                      "allowEmptyValue": false,
                      "description": "备注",
                      "example": "买的燃油宝",
                      "type": "string",
                    },
                    "type": {
                      "allowEmptyValue": false,
                      "description": "0:收入 1:支出",
                      "example": 1750148943159,
                      "exclusiveMaximum": false,
                      "exclusiveMinimum": false,
                      "format": "int32",
                      "maximum": 9223372036854776000,
                      "minimum": 0,
                      "type": "integer",
                    },
                  },
                  "title": "AccountBookUpdateRequest",
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
                  "location": {
                    "allowEmptyValue": false,
                    "description": "lat<纬度>,lng<经度> 经纬度拼起来,逗号分隔",
                    "type": "string",
                  },
                  "tittle": {
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
                  "location": {
                    "allowEmptyValue": false,
                    "description": "lat<纬度>,lng<经度> 经纬度拼起来,逗号分隔",
                    "type": "string",
                  },
                  "tittle": {
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
              "taskId": {
                "allowEmptyValue": false,
                "description": "任务id",
                "example": "YD1559431138848817535",
                "format": "int64",
                "type": "integer",
              },
              "tradeNo": {
                "allowEmptyValue": false,
                "description": "业务单号",
                "example": "YD1559431138848817535",
                "type": "string",
              },
            },
            "title": "FreightTaskUpdateRequest",
            "type": "object",
          },
          "LineProfitResponse": {
            "properties": {
              "averageProfit": {
                "allowEmptyValue": false,
                "description": "平均利润(分)",
                "example": 200000,
                "format": "int64",
                "type": "integer",
              },
              "destinationCity": {
                "allowEmptyValue": false,
                "description": "目的地 城市",
                "example": "南京市",
                "type": "string",
              },
              "destinationRegion": {
                "allowEmptyValue": false,
                "description": "目的地 区",
                "example": "鼓楼区",
                "type": "string",
              },
              "originCity": {
                "allowEmptyValue": false,
                "description": "起始地 城市",
                "example": "苏州市",
                "type": "string",
              },
              "originRegion": {
                "allowEmptyValue": false,
                "description": "起始地 区",
                "example": "工业园区",
                "type": "string",
              },
              "taskAmount": {
                "allowEmptyValue": false,
                "description": "任务数量",
                "example": 2,
                "format": "int32",
                "type": "integer",
              },
              "taskIds": {
                "allowEmptyValue": false,
                "description": "任务id列表",
                "items": {
                  "type": "string",
                },
                "type": "array",
              },
            },
            "title": "LineProfitResponse",
            "type": "object",
          },
          "LineResponse": {
            "properties": {
              "averageProfit": {
                "allowEmptyValue": false,
                "description": "平均利润(分)",
                "example": 200000,
                "format": "int64",
                "type": "integer",
              },
              "destinationCity": {
                "allowEmptyValue": false,
                "description": "目的地城市",
                "example": "南京市",
                "type": "string",
              },
              "originCity": {
                "allowEmptyValue": false,
                "description": "起始地城市",
                "example": "苏州市",
                "type": "string",
              },
              "profit": {
                "allowEmptyValue": false,
                "description": "总利润",
                "example": 200000,
                "format": "int64",
                "type": "integer",
              },
              "times": {
                "allowEmptyValue": false,
                "description": "次数",
                "format": "int32",
                "type": "integer",
              },
            },
            "title": "LineResponse",
            "type": "object",
          },
          "MixmicroPage«AccountBookItemResponse»": {
            "properties": {
              "current": {
                "format": "int32",
                "type": "integer",
              },
              "records": {
                "items": {
                  "properties": {
                    "accountBookId": {
                      "allowEmptyValue": false,
                      "description": "账单流水id",
                      "example": 1750148943159,
                      "format": "int64",
                      "type": "integer",
                    },
                    "amount": {
                      "allowEmptyValue": false,
                      "description": "金额 (单位分)",
                      "example": 1000,
                      "format": "int64",
                      "type": "integer",
                    },
                    "categoryId": {
                      "allowEmptyValue": false,
                      "description": "类型Id",
                      "example": 12312312312312,
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
                      "example": "yyyy-MM-dd HH:mm:ss",
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
                  "title": "AccountBookItemResponse",
                  "type": "object",
                },
                "type": "array",
              },
              "size": {
                "format": "int32",
                "type": "integer",
              },
              "total": {
                "format": "int32",
                "type": "integer",
              },
            },
            "title": "MixmicroPage«AccountBookItemResponse»",
            "type": "object",
          },
          "MixmicroPage«CustomerListResponse»": {
            "properties": {
              "current": {
                "format": "int32",
                "type": "integer",
              },
              "records": {
                "items": {
                  "properties": {
                    "customerId": {
                      "allowEmptyValue": false,
                      "description": "客户id",
                      "format": "int64",
                      "type": "integer",
                    },
                    "customerName": {
                      "allowEmptyValue": false,
                      "description": "客户名称",
                      "type": "string",
                    },
                  },
                  "title": "CustomerListResponse",
                  "type": "object",
                },
                "type": "array",
              },
              "size": {
                "format": "int32",
                "type": "integer",
              },
              "total": {
                "format": "int32",
                "type": "integer",
              },
            },
            "title": "MixmicroPage«CustomerListResponse»",
            "type": "object",
          },
          "MixmicroPage«CustomerProfitResponse»": {
            "properties": {
              "current": {
                "format": "int32",
                "type": "integer",
              },
              "records": {
                "items": {
                  "properties": {
                    "averageProfit": {
                      "allowEmptyValue": false,
                      "description": "平均利润(分)",
                      "example": 200000,
                      "format": "int64",
                      "type": "integer",
                    },
                    "customerId": {
                      "allowEmptyValue": false,
                      "description": "客户id",
                      "example": 200000,
                      "format": "int64",
                      "type": "integer",
                    },
                    "customerName": {
                      "allowEmptyValue": false,
                      "description": "客户名称",
                      "example": 200000,
                      "type": "string",
                    },
                    "maxTaskDate": {
                      "allowEmptyValue": false,
                      "description": "最新任务时间",
                      "example": "2023-02-02",
                      "format": "date",
                      "type": "string",
                    },
                    "taskAmount": {
                      "allowEmptyValue": false,
                      "description": "任务数量",
                      "example": 2,
                      "format": "int32",
                      "type": "integer",
                    },
                    "totalProfit": {
                      "allowEmptyValue": false,
                      "description": "总利润",
                      "example": 200000,
                      "format": "int64",
                      "type": "integer",
                    },
                  },
                  "title": "CustomerProfitResponse",
                  "type": "object",
                },
                "type": "array",
              },
              "size": {
                "format": "int32",
                "type": "integer",
              },
              "total": {
                "format": "int32",
                "type": "integer",
              },
            },
            "title": "MixmicroPage«CustomerProfitResponse»",
            "type": "object",
          },
          "MixmicroPage«FreightTaskListResponse»": {
            "properties": {
              "current": {
                "format": "int32",
                "type": "integer",
              },
              "records": {
                "items": {
                  "properties": {
                    "customerName": {
                      "allowEmptyValue": false,
                      "description": "客户名称",
                      "example": "王总",
                      "type": "string",
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
                        "city": {
                          "allowEmptyValue": false,
                          "description": "市",
                          "type": "string",
                        },
                        "province": {
                          "allowEmptyValue": false,
                          "description": "省",
                          "type": "string",
                        },
                        "region": {
                          "allowEmptyValue": false,
                          "description": "区",
                          "type": "string",
                        },
                        "tittle": {
                          "allowEmptyValue": false,
                          "description": "地址标题",
                          "type": "string",
                        },
                      },
                      "title": "AddressDetailResponse",
                      "type": "object",
                    },
                    "expenditure": {
                      "allowEmptyValue": false,
                      "description": "支出(分)",
                      "example": 10000,
                      "format": "int64",
                      "type": "integer",
                    },
                    "goodsName": {
                      "allowEmptyValue": false,
                      "description": "货物名称",
                      "example": "钢筋5斤",
                      "type": "string",
                    },
                    "income": {
                      "allowEmptyValue": false,
                      "description": "收入 (分)",
                      "example": 18000,
                      "format": "int64",
                      "type": "integer",
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
                        "city": {
                          "allowEmptyValue": false,
                          "description": "市",
                          "type": "string",
                        },
                        "province": {
                          "allowEmptyValue": false,
                          "description": "省",
                          "type": "string",
                        },
                        "region": {
                          "allowEmptyValue": false,
                          "description": "区",
                          "type": "string",
                        },
                        "tittle": {
                          "allowEmptyValue": false,
                          "description": "地址标题",
                          "type": "string",
                        },
                      },
                      "title": "AddressDetailResponse",
                      "type": "object",
                    },
                    "profit": {
                      "allowEmptyValue": false,
                      "description": "利润(分)",
                      "example": 80000,
                      "format": "int64",
                      "type": "integer",
                    },
                    "profitRate": {
                      "allowEmptyValue": false,
                      "description": "利润率",
                      "example": 78,
                      "type": "string",
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
                    "taskId": {
                      "allowEmptyValue": false,
                      "description": "任务id",
                      "example": 1559431138848817400,
                      "format": "int64",
                      "type": "integer",
                    },
                    "taskNo": {
                      "allowEmptyValue": false,
                      "description": "任务编号",
                      "example": "YD1559431138848817535",
                      "type": "string",
                    },
                    "tradeNo": {
                      "allowEmptyValue": false,
                      "description": "业务单号",
                      "example": "JDZFB1559431138848817535",
                      "type": "string",
                    },
                  },
                  "title": "FreightTaskListResponse",
                  "type": "object",
                },
                "type": "array",
              },
              "size": {
                "format": "int32",
                "type": "integer",
              },
              "total": {
                "format": "int32",
                "type": "integer",
              },
            },
            "title": "MixmicroPage«FreightTaskListResponse»",
            "type": "object",
          },
          "MixmicroPage«LineProfitResponse»": {
            "properties": {
              "current": {
                "format": "int32",
                "type": "integer",
              },
              "records": {
                "items": {
                  "properties": {
                    "averageProfit": {
                      "allowEmptyValue": false,
                      "description": "平均利润(分)",
                      "example": 200000,
                      "format": "int64",
                      "type": "integer",
                    },
                    "destinationCity": {
                      "allowEmptyValue": false,
                      "description": "目的地 城市",
                      "example": "南京市",
                      "type": "string",
                    },
                    "destinationRegion": {
                      "allowEmptyValue": false,
                      "description": "目的地 区",
                      "example": "鼓楼区",
                      "type": "string",
                    },
                    "originCity": {
                      "allowEmptyValue": false,
                      "description": "起始地 城市",
                      "example": "苏州市",
                      "type": "string",
                    },
                    "originRegion": {
                      "allowEmptyValue": false,
                      "description": "起始地 区",
                      "example": "工业园区",
                      "type": "string",
                    },
                    "taskAmount": {
                      "allowEmptyValue": false,
                      "description": "任务数量",
                      "example": 2,
                      "format": "int32",
                      "type": "integer",
                    },
                    "taskIds": {
                      "allowEmptyValue": false,
                      "description": "任务id列表",
                      "items": {
                        "type": "string",
                      },
                      "type": "array",
                    },
                  },
                  "title": "LineProfitResponse",
                  "type": "object",
                },
                "type": "array",
              },
              "size": {
                "format": "int32",
                "type": "integer",
              },
              "total": {
                "format": "int32",
                "type": "integer",
              },
            },
            "title": "MixmicroPage«LineProfitResponse»",
            "type": "object",
          },
          "MixmicroPage«TaskAddressDetail»": {
            "properties": {
              "current": {
                "format": "int32",
                "type": "integer",
              },
              "records": {
                "items": {
                  "properties": {
                    "address": {
                      "allowEmptyValue": false,
                      "description": "详细地址",
                      "type": "string",
                    },
                    "addressId": {
                      "allowEmptyValue": false,
                      "description": "地址簿id",
                      "format": "int64",
                      "type": "integer",
                    },
                    "city": {
                      "allowEmptyValue": false,
                      "description": "市",
                      "type": "string",
                    },
                    "province": {
                      "allowEmptyValue": false,
                      "description": "省",
                      "type": "string",
                    },
                    "region": {
                      "allowEmptyValue": false,
                      "description": "区",
                      "type": "string",
                    },
                    "tittle": {
                      "allowEmptyValue": false,
                      "description": "标题",
                      "type": "string",
                    },
                  },
                  "title": "TaskAddressDetail",
                  "type": "object",
                },
                "type": "array",
              },
              "size": {
                "format": "int32",
                "type": "integer",
              },
              "total": {
                "format": "int32",
                "type": "integer",
              },
            },
            "title": "MixmicroPage«TaskAddressDetail»",
            "type": "object",
          },
          "MixmicroPage«TaskProfitResponse»": {
            "properties": {
              "current": {
                "format": "int32",
                "type": "integer",
              },
              "records": {
                "items": {
                  "properties": {
                    "destinationDetail": {
                      "allowEmptyValue": false,
                      "description": "目的地地理位置信息",
                      "properties": {
                        "address": {
                          "allowEmptyValue": false,
                          "description": "详细地址",
                          "type": "string",
                        },
                        "city": {
                          "allowEmptyValue": false,
                          "description": "市",
                          "type": "string",
                        },
                        "province": {
                          "allowEmptyValue": false,
                          "description": "省",
                          "type": "string",
                        },
                        "region": {
                          "allowEmptyValue": false,
                          "description": "区",
                          "type": "string",
                        },
                        "tittle": {
                          "allowEmptyValue": false,
                          "description": "地址标题",
                          "type": "string",
                        },
                      },
                      "title": "AddressDetailResponse",
                      "type": "object",
                    },
                    "goodsName": {
                      "allowEmptyValue": false,
                      "description": "货物名称",
                      "example": "钢筋",
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
                        "city": {
                          "allowEmptyValue": false,
                          "description": "市",
                          "type": "string",
                        },
                        "province": {
                          "allowEmptyValue": false,
                          "description": "省",
                          "type": "string",
                        },
                        "region": {
                          "allowEmptyValue": false,
                          "description": "区",
                          "type": "string",
                        },
                        "tittle": {
                          "allowEmptyValue": false,
                          "description": "地址标题",
                          "type": "string",
                        },
                      },
                      "title": "AddressDetailResponse",
                      "type": "object",
                    },
                    "profit": {
                      "allowEmptyValue": false,
                      "description": "利润(分)",
                      "example": 200000,
                      "format": "int64",
                      "type": "integer",
                    },
                    "profitRate": {
                      "allowEmptyValue": false,
                      "description": "利润率",
                      "example": 78,
                      "type": "string",
                    },
                    "startDate": {
                      "allowEmptyValue": false,
                      "description": "任务开始时间",
                      "example": "yyyy-MM-dd",
                      "format": "date",
                      "type": "string",
                    },
                    "taskId": {
                      "allowEmptyValue": false,
                      "description": "任务id",
                      "example": 17545616598741464,
                      "format": "int64",
                      "type": "integer",
                    },
                  },
                  "title": "TaskProfitResponse",
                  "type": "object",
                },
                "type": "array",
              },
              "size": {
                "format": "int32",
                "type": "integer",
              },
              "total": {
                "format": "int32",
                "type": "integer",
              },
            },
            "title": "MixmicroPage«TaskProfitResponse»",
            "type": "object",
          },
          "MonthlySummaryCustomerResponse": {
            "properties": {
              "customerAmount": {
                "allowEmptyValue": false,
                "description": "客户数量",
                "format": "int32",
                "type": "integer",
              },
              "leastProfitCustomer": {
                "allowEmptyValue": false,
                "description": "利润均值最低客户",
                "properties": {
                  "averageProfit": {
                    "allowEmptyValue": false,
                    "description": "平均利润(分)",
                    "example": 200000,
                    "format": "int64",
                    "type": "integer",
                  },
                  "customerName": {
                    "allowEmptyValue": false,
                    "description": "客户名称",
                    "example": "张总",
                    "type": "string",
                  },
                  "times": {
                    "allowEmptyValue": false,
                    "description": "次数",
                    "format": "int32",
                    "type": "integer",
                  },
                },
                "title": "CustomerResponse",
                "type": "object",
              },
              "mostProfitCustomer": {
                "allowEmptyValue": false,
                "description": "利润均值最高客户",
                "properties": {
                  "averageProfit": {
                    "allowEmptyValue": false,
                    "description": "平均利润(分)",
                    "example": 200000,
                    "format": "int64",
                    "type": "integer",
                  },
                  "customerName": {
                    "allowEmptyValue": false,
                    "description": "客户名称",
                    "example": "张总",
                    "type": "string",
                  },
                  "times": {
                    "allowEmptyValue": false,
                    "description": "次数",
                    "format": "int32",
                    "type": "integer",
                  },
                },
                "title": "CustomerResponse",
                "type": "object",
              },
            },
            "title": "MonthlySummaryCustomerResponse",
            "type": "object",
          },
          "MonthlySummaryHomeResponse": {
            "properties": {
              "expenditure": {
                "allowEmptyValue": false,
                "description": "支出(分)",
                "example": 10000,
                "format": "int64",
                "type": "integer",
              },
              "hasTask": {
                "allowEmptyValue": false,
                "description": "是否有任务,没任务则显示 示例信息",
                "example": false,
                "type": "boolean",
              },
              "income": {
                "allowEmptyValue": false,
                "description": "收入(分)",
                "example": 10000,
                "format": "int64",
                "type": "integer",
              },
              "mostProfitLine": {
                "allowEmptyValue": false,
                "description": "利润均值最高路线",
                "properties": {
                  "averageProfit": {
                    "allowEmptyValue": false,
                    "description": "平均利润(分)",
                    "example": 200000,
                    "format": "int64",
                    "type": "integer",
                  },
                  "destinationCity": {
                    "allowEmptyValue": false,
                    "description": "目的地城市",
                    "example": "南京市",
                    "type": "string",
                  },
                  "originCity": {
                    "allowEmptyValue": false,
                    "description": "起始地城市",
                    "example": "苏州市",
                    "type": "string",
                  },
                  "profit": {
                    "allowEmptyValue": false,
                    "description": "总利润",
                    "example": 200000,
                    "format": "int64",
                    "type": "integer",
                  },
                  "times": {
                    "allowEmptyValue": false,
                    "description": "次数",
                    "format": "int32",
                    "type": "integer",
                  },
                },
                "title": "LineResponse",
                "type": "object",
              },
              "profit": {
                "allowEmptyValue": false,
                "description": "利润",
                "example": 10000,
                "format": "int64",
                "type": "integer",
              },
              "summaryMonth": {
                "allowEmptyValue": false,
                "description": "统计月份",
                "example": 5,
                "type": "string",
              },
            },
            "title": "MonthlySummaryHomeResponse",
            "type": "object",
          },
          "MonthlySummaryLineResponse": {
            "properties": {
              "leastProfitLine": {
                "allowEmptyValue": false,
                "description": "利润均值最低路线",
                "properties": {
                  "averageProfit": {
                    "allowEmptyValue": false,
                    "description": "平均利润(分)",
                    "example": 200000,
                    "format": "int64",
                    "type": "integer",
                  },
                  "destinationCity": {
                    "allowEmptyValue": false,
                    "description": "目的地城市",
                    "example": "南京市",
                    "type": "string",
                  },
                  "originCity": {
                    "allowEmptyValue": false,
                    "description": "起始地城市",
                    "example": "苏州市",
                    "type": "string",
                  },
                  "profit": {
                    "allowEmptyValue": false,
                    "description": "总利润",
                    "example": 200000,
                    "format": "int64",
                    "type": "integer",
                  },
                  "times": {
                    "allowEmptyValue": false,
                    "description": "次数",
                    "format": "int32",
                    "type": "integer",
                  },
                },
                "title": "LineResponse",
                "type": "object",
              },
              "lineAmount": {
                "allowEmptyValue": false,
                "description": "线路数量",
                "format": "int32",
                "type": "integer",
              },
              "mostProfitLine": {
                "allowEmptyValue": false,
                "description": "利润均值最高路线",
                "properties": {
                  "averageProfit": {
                    "allowEmptyValue": false,
                    "description": "平均利润(分)",
                    "example": 200000,
                    "format": "int64",
                    "type": "integer",
                  },
                  "destinationCity": {
                    "allowEmptyValue": false,
                    "description": "目的地城市",
                    "example": "南京市",
                    "type": "string",
                  },
                  "originCity": {
                    "allowEmptyValue": false,
                    "description": "起始地城市",
                    "example": "苏州市",
                    "type": "string",
                  },
                  "profit": {
                    "allowEmptyValue": false,
                    "description": "总利润",
                    "example": 200000,
                    "format": "int64",
                    "type": "integer",
                  },
                  "times": {
                    "allowEmptyValue": false,
                    "description": "次数",
                    "format": "int32",
                    "type": "integer",
                  },
                },
                "title": "LineResponse",
                "type": "object",
              },
            },
            "title": "MonthlySummaryLineResponse",
            "type": "object",
          },
          "MonthlySummaryResponse": {
            "properties": {
              "customerResponse": {
                "allowEmptyValue": false,
                "description": "客户报告",
                "properties": {
                  "customerAmount": {
                    "allowEmptyValue": false,
                    "description": "客户数量",
                    "format": "int32",
                    "type": "integer",
                  },
                  "leastProfitCustomer": {
                    "allowEmptyValue": false,
                    "description": "利润均值最低客户",
                    "properties": {
                      "averageProfit": {
                        "allowEmptyValue": false,
                        "description": "平均利润(分)",
                        "example": 200000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "customerName": {
                        "allowEmptyValue": false,
                        "description": "客户名称",
                        "example": "张总",
                        "type": "string",
                      },
                      "times": {
                        "allowEmptyValue": false,
                        "description": "次数",
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    "title": "CustomerResponse",
                    "type": "object",
                  },
                  "mostProfitCustomer": {
                    "allowEmptyValue": false,
                    "description": "利润均值最高客户",
                    "properties": {
                      "averageProfit": {
                        "allowEmptyValue": false,
                        "description": "平均利润(分)",
                        "example": 200000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "customerName": {
                        "allowEmptyValue": false,
                        "description": "客户名称",
                        "example": "张总",
                        "type": "string",
                      },
                      "times": {
                        "allowEmptyValue": false,
                        "description": "次数",
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    "title": "CustomerResponse",
                    "type": "object",
                  },
                },
                "title": "MonthlySummaryCustomerResponse",
                "type": "object",
              },
              "expenditure": {
                "allowEmptyValue": false,
                "description": "支出(分)",
                "example": 10000,
                "format": "int64",
                "type": "integer",
              },
              "income": {
                "allowEmptyValue": false,
                "description": "收入(分)",
                "example": 10000,
                "format": "int64",
                "type": "integer",
              },
              "lineResponse": {
                "allowEmptyValue": false,
                "description": "线路报告",
                "properties": {
                  "leastProfitLine": {
                    "allowEmptyValue": false,
                    "description": "利润均值最低路线",
                    "properties": {
                      "averageProfit": {
                        "allowEmptyValue": false,
                        "description": "平均利润(分)",
                        "example": 200000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "destinationCity": {
                        "allowEmptyValue": false,
                        "description": "目的地城市",
                        "example": "南京市",
                        "type": "string",
                      },
                      "originCity": {
                        "allowEmptyValue": false,
                        "description": "起始地城市",
                        "example": "苏州市",
                        "type": "string",
                      },
                      "profit": {
                        "allowEmptyValue": false,
                        "description": "总利润",
                        "example": 200000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "times": {
                        "allowEmptyValue": false,
                        "description": "次数",
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    "title": "LineResponse",
                    "type": "object",
                  },
                  "lineAmount": {
                    "allowEmptyValue": false,
                    "description": "线路数量",
                    "format": "int32",
                    "type": "integer",
                  },
                  "mostProfitLine": {
                    "allowEmptyValue": false,
                    "description": "利润均值最高路线",
                    "properties": {
                      "averageProfit": {
                        "allowEmptyValue": false,
                        "description": "平均利润(分)",
                        "example": 200000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "destinationCity": {
                        "allowEmptyValue": false,
                        "description": "目的地城市",
                        "example": "南京市",
                        "type": "string",
                      },
                      "originCity": {
                        "allowEmptyValue": false,
                        "description": "起始地城市",
                        "example": "苏州市",
                        "type": "string",
                      },
                      "profit": {
                        "allowEmptyValue": false,
                        "description": "总利润",
                        "example": 200000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "times": {
                        "allowEmptyValue": false,
                        "description": "次数",
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    "title": "LineResponse",
                    "type": "object",
                  },
                },
                "title": "MonthlySummaryLineResponse",
                "type": "object",
              },
              "profit": {
                "allowEmptyValue": false,
                "description": "利润",
                "example": 10000,
                "format": "int64",
                "type": "integer",
              },
              "summaryMonth": {
                "allowEmptyValue": false,
                "description": "统计月份",
                "example": "2023年2月",
                "type": "string",
              },
              "taskResponse": {
                "allowEmptyValue": false,
                "description": "任务报告",
                "properties": {
                  "leastProfitRateTasK": {
                    "allowEmptyValue": false,
                    "description": "利润率最低任务",
                    "properties": {
                      "destinationAddress": {
                        "allowEmptyValue": false,
                        "description": "目的地地址",
                        "example": "夫子庙",
                        "type": "string",
                      },
                      "destinationCity": {
                        "allowEmptyValue": false,
                        "description": "目的地城市",
                        "example": "南京市",
                        "type": "string",
                      },
                      "originAddress": {
                        "allowEmptyValue": false,
                        "description": "起始地地址",
                        "example": "腾飞苏州创新园",
                        "type": "string",
                      },
                      "originCity": {
                        "allowEmptyValue": false,
                        "description": "起始地城市",
                        "example": "苏州市",
                        "type": "string",
                      },
                      "profit": {
                        "allowEmptyValue": false,
                        "description": "利润(分)",
                        "example": 200000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "profitRate": {
                        "allowEmptyValue": false,
                        "description": "利润率",
                        "example": 81,
                        "type": "string",
                      },
                      "startDate": {
                        "allowEmptyValue": false,
                        "description": "开始时间",
                        "example": "yyyy-MM-dd",
                        "format": "date",
                        "type": "string",
                      },
                    },
                    "title": "TaskResponse",
                    "type": "object",
                  },
                  "leastProfitTask": {
                    "allowEmptyValue": false,
                    "description": "利润最低任务",
                    "properties": {
                      "destinationAddress": {
                        "allowEmptyValue": false,
                        "description": "目的地地址",
                        "example": "夫子庙",
                        "type": "string",
                      },
                      "destinationCity": {
                        "allowEmptyValue": false,
                        "description": "目的地城市",
                        "example": "南京市",
                        "type": "string",
                      },
                      "originAddress": {
                        "allowEmptyValue": false,
                        "description": "起始地地址",
                        "example": "腾飞苏州创新园",
                        "type": "string",
                      },
                      "originCity": {
                        "allowEmptyValue": false,
                        "description": "起始地城市",
                        "example": "苏州市",
                        "type": "string",
                      },
                      "profit": {
                        "allowEmptyValue": false,
                        "description": "利润(分)",
                        "example": 200000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "profitRate": {
                        "allowEmptyValue": false,
                        "description": "利润率",
                        "example": 81,
                        "type": "string",
                      },
                      "startDate": {
                        "allowEmptyValue": false,
                        "description": "开始时间",
                        "example": "yyyy-MM-dd",
                        "format": "date",
                        "type": "string",
                      },
                    },
                    "title": "TaskResponse",
                    "type": "object",
                  },
                  "mostProfitRateTasK": {
                    "allowEmptyValue": false,
                    "description": "利润率最高任务",
                    "properties": {
                      "destinationAddress": {
                        "allowEmptyValue": false,
                        "description": "目的地地址",
                        "example": "夫子庙",
                        "type": "string",
                      },
                      "destinationCity": {
                        "allowEmptyValue": false,
                        "description": "目的地城市",
                        "example": "南京市",
                        "type": "string",
                      },
                      "originAddress": {
                        "allowEmptyValue": false,
                        "description": "起始地地址",
                        "example": "腾飞苏州创新园",
                        "type": "string",
                      },
                      "originCity": {
                        "allowEmptyValue": false,
                        "description": "起始地城市",
                        "example": "苏州市",
                        "type": "string",
                      },
                      "profit": {
                        "allowEmptyValue": false,
                        "description": "利润(分)",
                        "example": 200000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "profitRate": {
                        "allowEmptyValue": false,
                        "description": "利润率",
                        "example": 81,
                        "type": "string",
                      },
                      "startDate": {
                        "allowEmptyValue": false,
                        "description": "开始时间",
                        "example": "yyyy-MM-dd",
                        "format": "date",
                        "type": "string",
                      },
                    },
                    "title": "TaskResponse",
                    "type": "object",
                  },
                  "mostProfitTask": {
                    "allowEmptyValue": false,
                    "description": "利润最高任务",
                    "properties": {
                      "destinationAddress": {
                        "allowEmptyValue": false,
                        "description": "目的地地址",
                        "example": "夫子庙",
                        "type": "string",
                      },
                      "destinationCity": {
                        "allowEmptyValue": false,
                        "description": "目的地城市",
                        "example": "南京市",
                        "type": "string",
                      },
                      "originAddress": {
                        "allowEmptyValue": false,
                        "description": "起始地地址",
                        "example": "腾飞苏州创新园",
                        "type": "string",
                      },
                      "originCity": {
                        "allowEmptyValue": false,
                        "description": "起始地城市",
                        "example": "苏州市",
                        "type": "string",
                      },
                      "profit": {
                        "allowEmptyValue": false,
                        "description": "利润(分)",
                        "example": 200000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "profitRate": {
                        "allowEmptyValue": false,
                        "description": "利润率",
                        "example": 81,
                        "type": "string",
                      },
                      "startDate": {
                        "allowEmptyValue": false,
                        "description": "开始时间",
                        "example": "yyyy-MM-dd",
                        "format": "date",
                        "type": "string",
                      },
                    },
                    "title": "TaskResponse",
                    "type": "object",
                  },
                  "taskAmount": {
                    "allowEmptyValue": false,
                    "description": "任务数量",
                    "format": "int32",
                    "type": "integer",
                  },
                },
                "title": "MonthlySummaryTaskResponse",
                "type": "object",
              },
            },
            "title": "MonthlySummaryResponse",
            "type": "object",
          },
          "MonthlySummaryTaskResponse": {
            "properties": {
              "leastProfitRateTasK": {
                "allowEmptyValue": false,
                "description": "利润率最低任务",
                "properties": {
                  "destinationAddress": {
                    "allowEmptyValue": false,
                    "description": "目的地地址",
                    "example": "夫子庙",
                    "type": "string",
                  },
                  "destinationCity": {
                    "allowEmptyValue": false,
                    "description": "目的地城市",
                    "example": "南京市",
                    "type": "string",
                  },
                  "originAddress": {
                    "allowEmptyValue": false,
                    "description": "起始地地址",
                    "example": "腾飞苏州创新园",
                    "type": "string",
                  },
                  "originCity": {
                    "allowEmptyValue": false,
                    "description": "起始地城市",
                    "example": "苏州市",
                    "type": "string",
                  },
                  "profit": {
                    "allowEmptyValue": false,
                    "description": "利润(分)",
                    "example": 200000,
                    "format": "int64",
                    "type": "integer",
                  },
                  "profitRate": {
                    "allowEmptyValue": false,
                    "description": "利润率",
                    "example": 81,
                    "type": "string",
                  },
                  "startDate": {
                    "allowEmptyValue": false,
                    "description": "开始时间",
                    "example": "yyyy-MM-dd",
                    "format": "date",
                    "type": "string",
                  },
                },
                "title": "TaskResponse",
                "type": "object",
              },
              "leastProfitTask": {
                "allowEmptyValue": false,
                "description": "利润最低任务",
                "properties": {
                  "destinationAddress": {
                    "allowEmptyValue": false,
                    "description": "目的地地址",
                    "example": "夫子庙",
                    "type": "string",
                  },
                  "destinationCity": {
                    "allowEmptyValue": false,
                    "description": "目的地城市",
                    "example": "南京市",
                    "type": "string",
                  },
                  "originAddress": {
                    "allowEmptyValue": false,
                    "description": "起始地地址",
                    "example": "腾飞苏州创新园",
                    "type": "string",
                  },
                  "originCity": {
                    "allowEmptyValue": false,
                    "description": "起始地城市",
                    "example": "苏州市",
                    "type": "string",
                  },
                  "profit": {
                    "allowEmptyValue": false,
                    "description": "利润(分)",
                    "example": 200000,
                    "format": "int64",
                    "type": "integer",
                  },
                  "profitRate": {
                    "allowEmptyValue": false,
                    "description": "利润率",
                    "example": 81,
                    "type": "string",
                  },
                  "startDate": {
                    "allowEmptyValue": false,
                    "description": "开始时间",
                    "example": "yyyy-MM-dd",
                    "format": "date",
                    "type": "string",
                  },
                },
                "title": "TaskResponse",
                "type": "object",
              },
              "mostProfitRateTasK": {
                "allowEmptyValue": false,
                "description": "利润率最高任务",
                "properties": {
                  "destinationAddress": {
                    "allowEmptyValue": false,
                    "description": "目的地地址",
                    "example": "夫子庙",
                    "type": "string",
                  },
                  "destinationCity": {
                    "allowEmptyValue": false,
                    "description": "目的地城市",
                    "example": "南京市",
                    "type": "string",
                  },
                  "originAddress": {
                    "allowEmptyValue": false,
                    "description": "起始地地址",
                    "example": "腾飞苏州创新园",
                    "type": "string",
                  },
                  "originCity": {
                    "allowEmptyValue": false,
                    "description": "起始地城市",
                    "example": "苏州市",
                    "type": "string",
                  },
                  "profit": {
                    "allowEmptyValue": false,
                    "description": "利润(分)",
                    "example": 200000,
                    "format": "int64",
                    "type": "integer",
                  },
                  "profitRate": {
                    "allowEmptyValue": false,
                    "description": "利润率",
                    "example": 81,
                    "type": "string",
                  },
                  "startDate": {
                    "allowEmptyValue": false,
                    "description": "开始时间",
                    "example": "yyyy-MM-dd",
                    "format": "date",
                    "type": "string",
                  },
                },
                "title": "TaskResponse",
                "type": "object",
              },
              "mostProfitTask": {
                "allowEmptyValue": false,
                "description": "利润最高任务",
                "properties": {
                  "destinationAddress": {
                    "allowEmptyValue": false,
                    "description": "目的地地址",
                    "example": "夫子庙",
                    "type": "string",
                  },
                  "destinationCity": {
                    "allowEmptyValue": false,
                    "description": "目的地城市",
                    "example": "南京市",
                    "type": "string",
                  },
                  "originAddress": {
                    "allowEmptyValue": false,
                    "description": "起始地地址",
                    "example": "腾飞苏州创新园",
                    "type": "string",
                  },
                  "originCity": {
                    "allowEmptyValue": false,
                    "description": "起始地城市",
                    "example": "苏州市",
                    "type": "string",
                  },
                  "profit": {
                    "allowEmptyValue": false,
                    "description": "利润(分)",
                    "example": 200000,
                    "format": "int64",
                    "type": "integer",
                  },
                  "profitRate": {
                    "allowEmptyValue": false,
                    "description": "利润率",
                    "example": 81,
                    "type": "string",
                  },
                  "startDate": {
                    "allowEmptyValue": false,
                    "description": "开始时间",
                    "example": "yyyy-MM-dd",
                    "format": "date",
                    "type": "string",
                  },
                },
                "title": "TaskResponse",
                "type": "object",
              },
              "taskAmount": {
                "allowEmptyValue": false,
                "description": "任务数量",
                "format": "int32",
                "type": "integer",
              },
            },
            "title": "MonthlySummaryTaskResponse",
            "type": "object",
          },
          "PieChartItemResponse": {
            "properties": {
              "amount": {
                "allowEmptyValue": false,
                "description": "总计 (分)",
                "example": 1257100,
                "format": "int64",
                "type": "integer",
              },
              "categoryId": {
                "allowEmptyValue": false,
                "description": "分类Id",
                "example": 123123123,
                "type": "string",
              },
              "categoryIdList": {
                "allowEmptyValue": false,
                "description": "其余列表",
                "items": {
                  "type": "string",
                },
                "type": "array",
              },
              "categoryName": {
                "allowEmptyValue": false,
                "description": "分类名称",
                "example": "加油",
                "type": "string",
              },
            },
            "title": "PieChartItemResponse",
            "type": "object",
          },
          "ProfitAnalysisCustomerResponse": {
            "properties": {
              "expenditure": {
                "allowEmptyValue": false,
                "description": "支出(分)",
                "example": 10000,
                "format": "int64",
                "type": "integer",
              },
              "income": {
                "allowEmptyValue": false,
                "description": "收入 (分)",
                "example": 18000,
                "format": "int64",
                "type": "integer",
              },
              "pageResponse": {
                "allowEmptyValue": false,
                "description": "利润分析数据",
                "properties": {
                  "current": {
                    "format": "int32",
                    "type": "integer",
                  },
                  "records": {
                    "items": {
                      "properties": {
                        "averageProfit": {
                          "allowEmptyValue": false,
                          "description": "平均利润(分)",
                          "example": 200000,
                          "format": "int64",
                          "type": "integer",
                        },
                        "customerId": {
                          "allowEmptyValue": false,
                          "description": "客户id",
                          "example": 200000,
                          "format": "int64",
                          "type": "integer",
                        },
                        "customerName": {
                          "allowEmptyValue": false,
                          "description": "客户名称",
                          "example": 200000,
                          "type": "string",
                        },
                        "maxTaskDate": {
                          "allowEmptyValue": false,
                          "description": "最新任务时间",
                          "example": "2023-02-02",
                          "format": "date",
                          "type": "string",
                        },
                        "taskAmount": {
                          "allowEmptyValue": false,
                          "description": "任务数量",
                          "example": 2,
                          "format": "int32",
                          "type": "integer",
                        },
                        "totalProfit": {
                          "allowEmptyValue": false,
                          "description": "总利润",
                          "example": 200000,
                          "format": "int64",
                          "type": "integer",
                        },
                      },
                      "title": "CustomerProfitResponse",
                      "type": "object",
                    },
                    "type": "array",
                  },
                  "size": {
                    "format": "int32",
                    "type": "integer",
                  },
                  "total": {
                    "format": "int32",
                    "type": "integer",
                  },
                },
                "title": "MixmicroPage«CustomerProfitResponse»",
                "type": "object",
              },
              "profit": {
                "allowEmptyValue": false,
                "description": "利润(分)",
                "example": 200000,
                "format": "int64",
                "type": "integer",
              },
              "total": {
                "allowEmptyValue": false,
                "description": "总条数",
                "example": 100,
                "format": "int32",
                "type": "integer",
              },
            },
            "title": "ProfitAnalysisCustomerResponse",
            "type": "object",
          },
          "ProfitAnalysisLineResponse": {
            "properties": {
              "expenditure": {
                "allowEmptyValue": false,
                "description": "支出(分)",
                "example": 10000,
                "format": "int64",
                "type": "integer",
              },
              "income": {
                "allowEmptyValue": false,
                "description": "收入 (分)",
                "example": 18000,
                "format": "int64",
                "type": "integer",
              },
              "pageResponse": {
                "allowEmptyValue": false,
                "description": "利润分析数据",
                "properties": {
                  "current": {
                    "format": "int32",
                    "type": "integer",
                  },
                  "records": {
                    "items": {
                      "properties": {
                        "averageProfit": {
                          "allowEmptyValue": false,
                          "description": "平均利润(分)",
                          "example": 200000,
                          "format": "int64",
                          "type": "integer",
                        },
                        "destinationCity": {
                          "allowEmptyValue": false,
                          "description": "目的地 城市",
                          "example": "南京市",
                          "type": "string",
                        },
                        "destinationRegion": {
                          "allowEmptyValue": false,
                          "description": "目的地 区",
                          "example": "鼓楼区",
                          "type": "string",
                        },
                        "originCity": {
                          "allowEmptyValue": false,
                          "description": "起始地 城市",
                          "example": "苏州市",
                          "type": "string",
                        },
                        "originRegion": {
                          "allowEmptyValue": false,
                          "description": "起始地 区",
                          "example": "工业园区",
                          "type": "string",
                        },
                        "taskAmount": {
                          "allowEmptyValue": false,
                          "description": "任务数量",
                          "example": 2,
                          "format": "int32",
                          "type": "integer",
                        },
                        "taskIds": {
                          "allowEmptyValue": false,
                          "description": "任务id列表",
                          "items": {
                            "type": "string",
                          },
                          "type": "array",
                        },
                      },
                      "title": "LineProfitResponse",
                      "type": "object",
                    },
                    "type": "array",
                  },
                  "size": {
                    "format": "int32",
                    "type": "integer",
                  },
                  "total": {
                    "format": "int32",
                    "type": "integer",
                  },
                },
                "title": "MixmicroPage«LineProfitResponse»",
                "type": "object",
              },
              "profit": {
                "allowEmptyValue": false,
                "description": "利润(分)",
                "example": 200000,
                "format": "int64",
                "type": "integer",
              },
              "total": {
                "allowEmptyValue": false,
                "description": "总条数",
                "example": 100,
                "format": "int32",
                "type": "integer",
              },
            },
            "title": "ProfitAnalysisLineResponse",
            "type": "object",
          },
          "ProfitAnalysisTaskResponse": {
            "properties": {
              "expenditure": {
                "allowEmptyValue": false,
                "description": "支出(分)",
                "example": 10000,
                "format": "int64",
                "type": "integer",
              },
              "income": {
                "allowEmptyValue": false,
                "description": "收入 (分)",
                "example": 18000,
                "format": "int64",
                "type": "integer",
              },
              "pageResponse": {
                "allowEmptyValue": false,
                "description": "利润分析数据",
                "properties": {
                  "current": {
                    "format": "int32",
                    "type": "integer",
                  },
                  "records": {
                    "items": {
                      "properties": {
                        "destinationDetail": {
                          "allowEmptyValue": false,
                          "description": "目的地地理位置信息",
                          "properties": {
                            "address": {
                              "allowEmptyValue": false,
                              "description": "详细地址",
                              "type": "string",
                            },
                            "city": {
                              "allowEmptyValue": false,
                              "description": "市",
                              "type": "string",
                            },
                            "province": {
                              "allowEmptyValue": false,
                              "description": "省",
                              "type": "string",
                            },
                            "region": {
                              "allowEmptyValue": false,
                              "description": "区",
                              "type": "string",
                            },
                            "tittle": {
                              "allowEmptyValue": false,
                              "description": "地址标题",
                              "type": "string",
                            },
                          },
                          "title": "AddressDetailResponse",
                          "type": "object",
                        },
                        "goodsName": {
                          "allowEmptyValue": false,
                          "description": "货物名称",
                          "example": "钢筋",
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
                            "city": {
                              "allowEmptyValue": false,
                              "description": "市",
                              "type": "string",
                            },
                            "province": {
                              "allowEmptyValue": false,
                              "description": "省",
                              "type": "string",
                            },
                            "region": {
                              "allowEmptyValue": false,
                              "description": "区",
                              "type": "string",
                            },
                            "tittle": {
                              "allowEmptyValue": false,
                              "description": "地址标题",
                              "type": "string",
                            },
                          },
                          "title": "AddressDetailResponse",
                          "type": "object",
                        },
                        "profit": {
                          "allowEmptyValue": false,
                          "description": "利润(分)",
                          "example": 200000,
                          "format": "int64",
                          "type": "integer",
                        },
                        "profitRate": {
                          "allowEmptyValue": false,
                          "description": "利润率",
                          "example": 78,
                          "type": "string",
                        },
                        "startDate": {
                          "allowEmptyValue": false,
                          "description": "任务开始时间",
                          "example": "yyyy-MM-dd",
                          "format": "date",
                          "type": "string",
                        },
                        "taskId": {
                          "allowEmptyValue": false,
                          "description": "任务id",
                          "example": 17545616598741464,
                          "format": "int64",
                          "type": "integer",
                        },
                      },
                      "title": "TaskProfitResponse",
                      "type": "object",
                    },
                    "type": "array",
                  },
                  "size": {
                    "format": "int32",
                    "type": "integer",
                  },
                  "total": {
                    "format": "int32",
                    "type": "integer",
                  },
                },
                "title": "MixmicroPage«TaskProfitResponse»",
                "type": "object",
              },
              "profit": {
                "allowEmptyValue": false,
                "description": "利润(分)",
                "example": 200000,
                "format": "int64",
                "type": "integer",
              },
              "total": {
                "allowEmptyValue": false,
                "description": "总条数",
                "example": 100,
                "format": "int32",
                "type": "integer",
              },
            },
            "title": "ProfitAnalysisTaskResponse",
            "type": "object",
          },
          "TaskAddressDetail": {
            "properties": {
              "address": {
                "allowEmptyValue": false,
                "description": "详细地址",
                "type": "string",
              },
              "addressId": {
                "allowEmptyValue": false,
                "description": "地址簿id",
                "format": "int64",
                "type": "integer",
              },
              "city": {
                "allowEmptyValue": false,
                "description": "市",
                "type": "string",
              },
              "province": {
                "allowEmptyValue": false,
                "description": "省",
                "type": "string",
              },
              "region": {
                "allowEmptyValue": false,
                "description": "区",
                "type": "string",
              },
              "tittle": {
                "allowEmptyValue": false,
                "description": "标题",
                "type": "string",
              },
            },
            "title": "TaskAddressDetail",
            "type": "object",
          },
          "TaskProfitResponse": {
            "properties": {
              "destinationDetail": {
                "allowEmptyValue": false,
                "description": "目的地地理位置信息",
                "properties": {
                  "address": {
                    "allowEmptyValue": false,
                    "description": "详细地址",
                    "type": "string",
                  },
                  "city": {
                    "allowEmptyValue": false,
                    "description": "市",
                    "type": "string",
                  },
                  "province": {
                    "allowEmptyValue": false,
                    "description": "省",
                    "type": "string",
                  },
                  "region": {
                    "allowEmptyValue": false,
                    "description": "区",
                    "type": "string",
                  },
                  "tittle": {
                    "allowEmptyValue": false,
                    "description": "地址标题",
                    "type": "string",
                  },
                },
                "title": "AddressDetailResponse",
                "type": "object",
              },
              "goodsName": {
                "allowEmptyValue": false,
                "description": "货物名称",
                "example": "钢筋",
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
                  "city": {
                    "allowEmptyValue": false,
                    "description": "市",
                    "type": "string",
                  },
                  "province": {
                    "allowEmptyValue": false,
                    "description": "省",
                    "type": "string",
                  },
                  "region": {
                    "allowEmptyValue": false,
                    "description": "区",
                    "type": "string",
                  },
                  "tittle": {
                    "allowEmptyValue": false,
                    "description": "地址标题",
                    "type": "string",
                  },
                },
                "title": "AddressDetailResponse",
                "type": "object",
              },
              "profit": {
                "allowEmptyValue": false,
                "description": "利润(分)",
                "example": 200000,
                "format": "int64",
                "type": "integer",
              },
              "profitRate": {
                "allowEmptyValue": false,
                "description": "利润率",
                "example": 78,
                "type": "string",
              },
              "startDate": {
                "allowEmptyValue": false,
                "description": "任务开始时间",
                "example": "yyyy-MM-dd",
                "format": "date",
                "type": "string",
              },
              "taskId": {
                "allowEmptyValue": false,
                "description": "任务id",
                "example": 17545616598741464,
                "format": "int64",
                "type": "integer",
              },
            },
            "title": "TaskProfitResponse",
            "type": "object",
          },
          "TaskResponse": {
            "properties": {
              "destinationAddress": {
                "allowEmptyValue": false,
                "description": "目的地地址",
                "example": "夫子庙",
                "type": "string",
              },
              "destinationCity": {
                "allowEmptyValue": false,
                "description": "目的地城市",
                "example": "南京市",
                "type": "string",
              },
              "originAddress": {
                "allowEmptyValue": false,
                "description": "起始地地址",
                "example": "腾飞苏州创新园",
                "type": "string",
              },
              "originCity": {
                "allowEmptyValue": false,
                "description": "起始地城市",
                "example": "苏州市",
                "type": "string",
              },
              "profit": {
                "allowEmptyValue": false,
                "description": "利润(分)",
                "example": 200000,
                "format": "int64",
                "type": "integer",
              },
              "profitRate": {
                "allowEmptyValue": false,
                "description": "利润率",
                "example": 81,
                "type": "string",
              },
              "startDate": {
                "allowEmptyValue": false,
                "description": "开始时间",
                "example": "yyyy-MM-dd",
                "format": "date",
                "type": "string",
              },
            },
            "title": "TaskResponse",
            "type": "object",
          },
        },
        "host": "dev-apisix.hgj.com",
        "info": {
          "contact": {
            "email": "developer@yunlsp.com",
            "name": "YunLSP+ Developer",
            "url": "http://developer.yunlsp.com",
          },
          "description": "Workshop Module's Apis Documents",
          "license": {
            "name": "MIT",
            "url": "https://choosealicense.com/licenses/mit/",
          },
          "title": "Workshop Module's Apis",
          "version": "\${project.version}",
        },
        "paths": {
          "/accountBook/add": {
            "post": {
              "consumes": [
                "application/json",
              ],
              "operationId": "addUsingPOST",
              "parameters": [
                {
                  "description": "request",
                  "in": "body",
                  "name": "request",
                  "required": true,
                  "schema": {
                    "properties": {
                      "amount": {
                        "allowEmptyValue": false,
                        "description": "金额 (单位分)",
                        "example": 1000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "categoryId": {
                        "allowEmptyValue": false,
                        "description": "类型Id",
                        "example": 1567054180388524000,
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
              "summary": "记支出/收入",
              "tags": [
                "账单流水相关",
              ],
            },
          },
          "/accountBook/delete": {
            "post": {
              "consumes": [
                "application/json",
              ],
              "operationId": "deleteUsingPOST",
              "parameters": [
                {
                  "description": "request",
                  "in": "body",
                  "name": "request",
                  "required": true,
                  "schema": {
                    "properties": {
                      "accountBookId": {
                        "allowEmptyValue": false,
                        "description": "账单流水id",
                        "example": 1750148943159,
                        "format": "int64",
                        "type": "integer",
                      },
                    },
                    "title": "AccountBookDeleteRequest",
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
              "summary": "删除账单流水",
              "tags": [
                "账单流水相关",
              ],
            },
          },
          "/accountBook/detail": {
            "get": {
              "operationId": "detailUsingGET",
              "parameters": [
                {
                  "description": "账单流水id",
                  "format": "int64",
                  "in": "query",
                  "name": "accountBookId",
                  "required": false,
                  "type": "integer",
                },
              ],
              "produces": [
                "*/*",
              ],
              "responses": {
                "200": {
                  "description": "OK",
                  "schema": {
                    "properties": {
                      "accountBookId": {
                        "allowEmptyValue": false,
                        "description": "账单流水id",
                        "example": 1750148943159,
                        "format": "int64",
                        "type": "integer",
                      },
                      "amount": {
                        "allowEmptyValue": false,
                        "description": "金额 (单位分)",
                        "example": 1000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "categoryId": {
                        "allowEmptyValue": false,
                        "description": "类型Id",
                        "example": 12312312312312,
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
                        "example": "yyyy-MM-dd HH:mm:ss",
                        "format": "date",
                        "type": "string",
                      },
                      "remarks": {
                        "allowEmptyValue": false,
                        "description": "备注",
                        "example": "买的燃油宝",
                        "type": "string",
                      },
                      "taskEndCity": {
                        "allowEmptyValue": false,
                        "description": "任务目的地",
                        "example": "南京市",
                        "type": "string",
                      },
                      "taskId": {
                        "allowEmptyValue": false,
                        "description": "运单id",
                        "example": 1750148943159,
                        "format": "int64",
                        "type": "integer",
                      },
                      "taskStartCity": {
                        "allowEmptyValue": false,
                        "description": "任务起始地",
                        "example": "苏州市",
                        "type": "string",
                      },
                      "taskStartDate": {
                        "allowEmptyValue": false,
                        "description": "任务开始时间",
                        "example": "2023-02-01",
                        "format": "date",
                        "type": "string",
                      },
                      "type": {
                        "allowEmptyValue": false,
                        "description": "类别 0:收入 1:支出",
                        "example": 1,
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    "title": "AccountBookDetailResponse",
                    "type": "object",
                  },
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
              "summary": "流水详情",
              "tags": [
                "账单流水相关",
              ],
            },
          },
          "/accountBook/list": {
            "get": {
              "operationId": "listUsingGET",
              "parameters": [
                {
                  "collectionFormat": "multi",
                  "description": "账目分类列表",
                  "in": "query",
                  "items": {
                    "format": "int64",
                    "type": "integer",
                  },
                  "name": "categoryIdList",
                  "required": false,
                  "type": "array",
                },
                {
                  "description": "分页 页码",
                  "format": "int32",
                  "in": "query",
                  "name": "pageNo",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "分页 每页数量",
                  "format": "int32",
                  "in": "query",
                  "name": "pageSize",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "开始时间",
                  "format": "date",
                  "in": "query",
                  "name": "startDate",
                  "required": false,
                  "type": "string",
                },
                {
                  "description": "结束时间",
                  "format": "date",
                  "in": "query",
                  "name": "endDate",
                  "required": false,
                  "type": "string",
                },
                {
                  "description": "账目分类id",
                  "format": "int64",
                  "in": "query",
                  "name": "categoryId",
                  "required": false,
                  "type": "integer",
                },
              ],
              "produces": [
                "*/*",
              ],
              "responses": {
                "200": {
                  "description": "OK",
                  "schema": {
                    "properties": {
                      "current": {
                        "format": "int32",
                        "type": "integer",
                      },
                      "records": {
                        "items": {
                          "properties": {
                            "accountBookId": {
                              "allowEmptyValue": false,
                              "description": "账单流水id",
                              "example": 1750148943159,
                              "format": "int64",
                              "type": "integer",
                            },
                            "amount": {
                              "allowEmptyValue": false,
                              "description": "金额 (单位分)",
                              "example": 1000,
                              "format": "int64",
                              "type": "integer",
                            },
                            "categoryId": {
                              "allowEmptyValue": false,
                              "description": "类型Id",
                              "example": 12312312312312,
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
                              "example": "yyyy-MM-dd HH:mm:ss",
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
                          "title": "AccountBookItemResponse",
                          "type": "object",
                        },
                        "type": "array",
                      },
                      "size": {
                        "format": "int32",
                        "type": "integer",
                      },
                      "total": {
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    "title": "MixmicroPage«AccountBookItemResponse»",
                    "type": "object",
                  },
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
              "summary": "查询流水记录",
              "tags": [
                "账单流水相关",
              ],
            },
          },
          "/accountBook/listByTaskId": {
            "get": {
              "operationId": "listByTaskIdUsingGET",
              "parameters": [
                {
                  "description": "运单id",
                  "format": "int64",
                  "in": "query",
                  "name": "taskId",
                  "required": false,
                  "type": "integer",
                },
              ],
              "produces": [
                "*/*",
              ],
              "responses": {
                "200": {
                  "description": "OK",
                  "schema": {
                    "items": {
                      "properties": {
                        "records": {
                          "allowEmptyValue": false,
                          "description": "记录列表",
                          "items": {
                            "properties": {
                              "accountBookId": {
                                "allowEmptyValue": false,
                                "description": "账单流水id",
                                "example": 1750148943159,
                                "format": "int64",
                                "type": "integer",
                              },
                              "amount": {
                                "allowEmptyValue": false,
                                "description": "金额 (单位分)",
                                "example": 1000,
                                "format": "int64",
                                "type": "integer",
                              },
                              "categoryId": {
                                "allowEmptyValue": false,
                                "description": "类型Id",
                                "example": 12312312312312,
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
                                "example": "yyyy-MM-dd HH:mm:ss",
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
                            "title": "AccountBookItemResponse",
                            "type": "object",
                          },
                          "type": "array",
                        },
                        "yearMonth": {
                          "allowEmptyValue": false,
                          "description": "月份",
                          "example": "2023年5月",
                          "type": "string",
                        },
                      },
                      "title": "AccountBookListResponse",
                      "type": "object",
                    },
                    "type": "array",
                  },
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
              "summary": "根据运单任务id查询流水记录",
              "tags": [
                "账单流水相关",
              ],
            },
          },
          "/accountBook/listByYearMonth": {
            "get": {
              "operationId": "listByYearMonthUsingGET",
              "parameters": [
                {
                  "description": "分页 页码",
                  "format": "int32",
                  "in": "query",
                  "name": "pageNo",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "分页 每页数量",
                  "format": "int32",
                  "in": "query",
                  "name": "pageSize",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "查询月份",
                  "in": "query",
                  "name": "monthDate",
                  "required": false,
                  "type": "string",
                },
              ],
              "produces": [
                "*/*",
              ],
              "responses": {
                "200": {
                  "description": "OK",
                  "schema": {
                    "properties": {
                      "current": {
                        "format": "int32",
                        "type": "integer",
                      },
                      "records": {
                        "items": {
                          "properties": {
                            "accountBookId": {
                              "allowEmptyValue": false,
                              "description": "账单流水id",
                              "example": 1750148943159,
                              "format": "int64",
                              "type": "integer",
                            },
                            "amount": {
                              "allowEmptyValue": false,
                              "description": "金额 (单位分)",
                              "example": 1000,
                              "format": "int64",
                              "type": "integer",
                            },
                            "categoryId": {
                              "allowEmptyValue": false,
                              "description": "类型Id",
                              "example": 12312312312312,
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
                              "example": "yyyy-MM-dd HH:mm:ss",
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
                          "title": "AccountBookItemResponse",
                          "type": "object",
                        },
                        "type": "array",
                      },
                      "size": {
                        "format": "int32",
                        "type": "integer",
                      },
                      "total": {
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    "title": "MixmicroPage«AccountBookItemResponse»",
                    "type": "object",
                  },
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
              "summary": "根据年月日期 查询列表",
              "tags": [
                "账单流水相关",
              ],
            },
          },
          "/accountBook/update": {
            "post": {
              "consumes": [
                "application/json",
              ],
              "operationId": "updateUsingPOST",
              "parameters": [
                {
                  "description": "request",
                  "in": "body",
                  "name": "request",
                  "required": true,
                  "schema": {
                    "properties": {
                      "accountBookId": {
                        "allowEmptyValue": false,
                        "description": "账单流水id",
                        "example": 1750148943159,
                        "format": "int64",
                        "type": "integer",
                      },
                      "amount": {
                        "allowEmptyValue": false,
                        "description": "金额 (单位分)",
                        "example": 1000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "categoryId": {
                        "allowEmptyValue": false,
                        "description": "类型id",
                        "example": 1750148943159,
                        "type": "string",
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
                        "example": "yyyy-MM-dd HH:mm:ss",
                        "format": "date-time",
                        "type": "string",
                      },
                      "remarks": {
                        "allowEmptyValue": false,
                        "description": "备注",
                        "example": "买的燃油宝",
                        "type": "string",
                      },
                      "type": {
                        "allowEmptyValue": false,
                        "description": "0:收入 1:支出",
                        "example": 1750148943159,
                        "exclusiveMaximum": false,
                        "exclusiveMinimum": false,
                        "format": "int32",
                        "maximum": 9223372036854776000,
                        "minimum": 0,
                        "type": "integer",
                      },
                    },
                    "title": "AccountBookUpdateRequest",
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
              "summary": "编辑支出/收入",
              "tags": [
                "账单流水相关",
              ],
            },
          },
          "/accountCategory/add": {
            "post": {
              "consumes": [
                "application/json",
              ],
              "operationId": "addAccountCategoryUsingPOST",
              "parameters": [
                {
                  "description": "categoryAddRequest",
                  "in": "body",
                  "name": "categoryAddRequest",
                  "required": true,
                  "schema": {
                    "properties": {
                      "categoryName": {
                        "allowEmptyValue": false,
                        "description": "分类名称",
                        "type": "string",
                      },
                      "type": {
                        "allowEmptyValue": false,
                        "description": "类别 0:收入 1:支出",
                        "example": 1,
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    "title": "CategoryAddRequest",
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
              "summary": "新增账单类型",
              "tags": [
                "收支分类相关",
              ],
            },
          },
          "/accountCategory/delete": {
            "post": {
              "consumes": [
                "application/json",
              ],
              "operationId": "deleteAccountCategoryUsingPOST",
              "parameters": [
                {
                  "description": "categoryDeleteRequest",
                  "in": "body",
                  "name": "categoryDeleteRequest",
                  "required": true,
                  "schema": {
                    "properties": {
                      "categoryId": {
                        "allowEmptyValue": false,
                        "description": "分类id",
                        "format": "int64",
                        "type": "integer",
                      },
                    },
                    "title": "CategoryDeleteRequest",
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
              "summary": "删除账单类型",
              "tags": [
                "收支分类相关",
              ],
            },
          },
          "/accountCategory/list": {
            "get": {
              "operationId": "accountCategoryListUsingGET",
              "parameters": [
                {
                  "description": "类别 0:收入 1:支出 不传则全部",
                  "format": "int32",
                  "in": "query",
                  "name": "type",
                  "required": false,
                  "type": "integer",
                },
              ],
              "produces": [
                "*/*",
              ],
              "responses": {
                "200": {
                  "description": "OK",
                  "schema": {
                    "items": {
                      "properties": {
                        "categoryId": {
                          "allowEmptyValue": false,
                          "description": "账目分类id",
                          "format": "int64",
                          "type": "integer",
                        },
                        "categoryName": {
                          "allowEmptyValue": false,
                          "description": "账目分类名称",
                          "type": "string",
                        },
                        "categoryType": {
                          "allowEmptyValue": false,
                          "description": "分类类型 0:基础分类 1:用户新增分类",
                          "format": "int32",
                          "type": "integer",
                        },
                        "pid": {
                          "allowEmptyValue": false,
                          "description": "父id",
                          "type": "string",
                        },
                        "type": {
                          "allowEmptyValue": false,
                          "description": "0:收入 1:支出",
                          "format": "int32",
                          "type": "integer",
                        },
                      },
                      "title": "CategoryListResponse",
                      "type": "object",
                    },
                    "type": "array",
                  },
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
              "summary": "账单类型分类列表",
              "tags": [
                "收支分类相关",
              ],
            },
          },
          "/address/delete": {
            "post": {
              "consumes": [
                "application/json",
              ],
              "operationId": "deleteUserAddressUsingPOST",
              "parameters": [
                {
                  "description": "request",
                  "in": "body",
                  "name": "request",
                  "required": true,
                  "schema": {
                    "properties": {
                      "addressId": {
                        "allowEmptyValue": false,
                        "description": "地址簿id",
                        "format": "int64",
                        "type": "integer",
                      },
                    },
                    "title": "AddressDeleteRequest",
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
              "summary": "删除用户地址簿",
              "tags": [
                "地址簿相关",
              ],
            },
          },
          "/address/list": {
            "get": {
              "operationId": "listUsingGET_2",
              "parameters": [
                {
                  "description": "分页 页码",
                  "format": "int32",
                  "in": "query",
                  "name": "pageNo",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "分页 每页数量",
                  "format": "int32",
                  "in": "query",
                  "name": "pageSize",
                  "required": false,
                  "type": "integer",
                },
              ],
              "produces": [
                "*/*",
              ],
              "responses": {
                "200": {
                  "description": "OK",
                  "schema": {
                    "properties": {
                      "current": {
                        "format": "int32",
                        "type": "integer",
                      },
                      "records": {
                        "items": {
                          "properties": {
                            "address": {
                              "allowEmptyValue": false,
                              "description": "详细地址",
                              "type": "string",
                            },
                            "addressId": {
                              "allowEmptyValue": false,
                              "description": "地址簿id",
                              "format": "int64",
                              "type": "integer",
                            },
                            "city": {
                              "allowEmptyValue": false,
                              "description": "市",
                              "type": "string",
                            },
                            "province": {
                              "allowEmptyValue": false,
                              "description": "省",
                              "type": "string",
                            },
                            "region": {
                              "allowEmptyValue": false,
                              "description": "区",
                              "type": "string",
                            },
                            "tittle": {
                              "allowEmptyValue": false,
                              "description": "标题",
                              "type": "string",
                            },
                          },
                          "title": "TaskAddressDetail",
                          "type": "object",
                        },
                        "type": "array",
                      },
                      "size": {
                        "format": "int32",
                        "type": "integer",
                      },
                      "total": {
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    "title": "MixmicroPage«TaskAddressDetail»",
                    "type": "object",
                  },
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
              "summary": "查看用户地址簿",
              "tags": [
                "地址簿相关",
              ],
            },
          },
          "/address/vagueQuery": {
            "get": {
              "operationId": "vagueQueryUsingGET",
              "parameters": [
                {
                  "description": "queryStr",
                  "in": "query",
                  "name": "queryStr",
                  "required": true,
                  "type": "string",
                },
              ],
              "produces": [
                "*/*",
              ],
              "responses": {
                "200": {
                  "description": "OK",
                  "schema": {
                    "items": {
                      "properties": {
                        "address": {
                          "allowEmptyValue": false,
                          "description": "详细地址",
                          "type": "string",
                        },
                        "city": {
                          "allowEmptyValue": false,
                          "description": "市",
                          "type": "string",
                        },
                        "province": {
                          "allowEmptyValue": false,
                          "description": "省",
                          "type": "string",
                        },
                        "region": {
                          "allowEmptyValue": false,
                          "description": "区",
                          "type": "string",
                        },
                        "tittle": {
                          "allowEmptyValue": false,
                          "description": "地址标题",
                          "type": "string",
                        },
                      },
                      "title": "AddressDetailResponse",
                      "type": "object",
                    },
                    "type": "array",
                  },
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
              "summary": "模糊搜索",
              "tags": [
                "地址簿相关",
              ],
            },
          },
          "/customer/add": {
            "post": {
              "consumes": [
                "application/json",
              ],
              "operationId": "addUsingPOST_2",
              "parameters": [
                {
                  "description": "request",
                  "in": "body",
                  "name": "request",
                  "required": true,
                  "schema": {
                    "properties": {
                      "customerName": {
                        "allowEmptyValue": false,
                        "description": "客户名称",
                        "type": "string",
                      },
                    },
                    "title": "CustomerAddRequest",
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
              "summary": "新增客户",
              "tags": [
                "客户相关",
              ],
            },
          },
          "/customer/delete": {
            "post": {
              "consumes": [
                "application/json",
              ],
              "operationId": "deleteUsingPOST_2",
              "parameters": [
                {
                  "description": "request",
                  "in": "body",
                  "name": "request",
                  "required": true,
                  "schema": {
                    "properties": {
                      "customerId": {
                        "allowEmptyValue": false,
                        "description": "客户id",
                        "format": "int64",
                        "type": "integer",
                      },
                    },
                    "title": "CustomerDeleteRequest",
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
              "summary": "删除客户",
              "tags": [
                "客户相关",
              ],
            },
          },
          "/customer/list": {
            "get": {
              "operationId": "listUsingGET_3",
              "parameters": [
                {
                  "description": "分页 页码",
                  "format": "int32",
                  "in": "query",
                  "name": "pageNo",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "分页 每页数量",
                  "format": "int32",
                  "in": "query",
                  "name": "pageSize",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "搜索参数",
                  "in": "query",
                  "name": "queryStr",
                  "required": false,
                  "type": "string",
                },
              ],
              "produces": [
                "*/*",
              ],
              "responses": {
                "200": {
                  "description": "OK",
                  "schema": {
                    "properties": {
                      "current": {
                        "format": "int32",
                        "type": "integer",
                      },
                      "records": {
                        "items": {
                          "properties": {
                            "customerId": {
                              "allowEmptyValue": false,
                              "description": "客户id",
                              "format": "int64",
                              "type": "integer",
                            },
                            "customerName": {
                              "allowEmptyValue": false,
                              "description": "客户名称",
                              "type": "string",
                            },
                          },
                          "title": "CustomerListResponse",
                          "type": "object",
                        },
                        "type": "array",
                      },
                      "size": {
                        "format": "int32",
                        "type": "integer",
                      },
                      "total": {
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    "title": "MixmicroPage«CustomerListResponse»",
                    "type": "object",
                  },
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
              "summary": "查看用户客户列表",
              "tags": [
                "客户相关",
              ],
            },
          },
          "/freightTask/add": {
            "post": {
              "consumes": [
                "application/json",
              ],
              "operationId": "addUsingPOST_1",
              "parameters": [
                {
                  "description": "request",
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
                            "categoryId": {
                              "allowEmptyValue": false,
                              "description": "类型Id",
                              "example": 1567054180388524000,
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
                          "location": {
                            "allowEmptyValue": false,
                            "description": "lat<纬度>,lng<经度> 经纬度拼起来,逗号分隔",
                            "type": "string",
                          },
                          "tittle": {
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
                          "location": {
                            "allowEmptyValue": false,
                            "description": "lat<纬度>,lng<经度> 经纬度拼起来,逗号分隔",
                            "type": "string",
                          },
                          "tittle": {
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
            },
          },
          "/freightTask/delete": {
            "post": {
              "consumes": [
                "application/json",
              ],
              "operationId": "deleteUsingPOST_1",
              "parameters": [
                {
                  "description": "request",
                  "in": "body",
                  "name": "request",
                  "required": true,
                  "schema": {
                    "properties": {
                      "taskId": {
                        "allowEmptyValue": false,
                        "description": "任务id",
                        "example": 1559431138848817400,
                        "format": "int64",
                        "type": "integer",
                      },
                    },
                    "title": "FreightTaskDeleteRequest",
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
              "summary": "删除运单",
              "tags": [
                "运单任务相关",
              ],
            },
          },
          "/freightTask/getDetail": {
            "get": {
              "operationId": "getDetailUsingGET",
              "parameters": [
                {
                  "description": "任务id",
                  "format": "int64",
                  "in": "query",
                  "name": "taskId",
                  "required": false,
                  "type": "integer",
                },
              ],
              "produces": [
                "*/*",
              ],
              "responses": {
                "200": {
                  "description": "OK",
                  "schema": {
                    "properties": {
                      "customerId": {
                        "allowEmptyValue": false,
                        "description": "任务id",
                        "example": 1559431138848817400,
                        "format": "int64",
                        "type": "integer",
                      },
                      "customerName": {
                        "allowEmptyValue": false,
                        "description": "客户名称",
                        "example": "王总",
                        "type": "string",
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
                          "city": {
                            "allowEmptyValue": false,
                            "description": "市",
                            "type": "string",
                          },
                          "province": {
                            "allowEmptyValue": false,
                            "description": "省",
                            "type": "string",
                          },
                          "region": {
                            "allowEmptyValue": false,
                            "description": "区",
                            "type": "string",
                          },
                          "tittle": {
                            "allowEmptyValue": false,
                            "description": "地址标题",
                            "type": "string",
                          },
                        },
                        "title": "AddressDetailResponse",
                        "type": "object",
                      },
                      "expenditure": {
                        "allowEmptyValue": false,
                        "description": "支出(分)",
                        "example": 10000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "fileIds": {
                        "allowEmptyValue": false,
                        "description": "照片列表",
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
                      "income": {
                        "allowEmptyValue": false,
                        "description": "收入 (分)",
                        "example": 18000,
                        "format": "int64",
                        "type": "integer",
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
                          "city": {
                            "allowEmptyValue": false,
                            "description": "市",
                            "type": "string",
                          },
                          "province": {
                            "allowEmptyValue": false,
                            "description": "省",
                            "type": "string",
                          },
                          "region": {
                            "allowEmptyValue": false,
                            "description": "区",
                            "type": "string",
                          },
                          "tittle": {
                            "allowEmptyValue": false,
                            "description": "地址标题",
                            "type": "string",
                          },
                        },
                        "title": "AddressDetailResponse",
                        "type": "object",
                      },
                      "profit": {
                        "allowEmptyValue": false,
                        "description": "利润(分)",
                        "example": 80000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "profitRate": {
                        "allowEmptyValue": false,
                        "description": "利润率",
                        "example": 78,
                        "format": "int32",
                        "type": "integer",
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
                      "taskId": {
                        "allowEmptyValue": false,
                        "description": "任务id",
                        "example": 1559431138848817400,
                        "format": "int64",
                        "type": "integer",
                      },
                      "taskNo": {
                        "allowEmptyValue": false,
                        "description": "任务编号",
                        "example": "YD1559431138848817535",
                        "type": "string",
                      },
                      "tradeNo": {
                        "allowEmptyValue": false,
                        "description": "业务单号",
                        "example": "JDZFB1559431138848817535",
                        "type": "string",
                      },
                    },
                    "title": "FreightTaskDetailResponse",
                    "type": "object",
                  },
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
              "summary": "获取任务详情",
              "tags": [
                "运单任务相关",
              ],
            },
          },
          "/freightTask/getQuery": {
            "get": {
              "operationId": "getQueryUsingGET",
              "produces": [
                "*/*",
              ],
              "responses": {
                "200": {
                  "description": "OK",
                  "schema": {
                    "properties": {
                      "customerList": {
                        "allowEmptyValue": false,
                        "description": "客户筛选条件",
                        "items": {
                          "properties": {
                            "customerId": {
                              "allowEmptyValue": false,
                              "description": "客户id",
                              "format": "int64",
                              "type": "integer",
                            },
                            "customerName": {
                              "allowEmptyValue": false,
                              "description": "客户名称",
                              "type": "string",
                            },
                          },
                          "title": "CustomerListResponse",
                          "type": "object",
                        },
                        "type": "array",
                      },
                      "endCities": {
                        "allowEmptyValue": false,
                        "description": "目的地筛选条件",
                        "items": {
                          "type": "string",
                        },
                        "type": "array",
                      },
                      "goodsName": {
                        "allowEmptyValue": false,
                        "description": "货物筛选条件",
                        "items": {
                          "type": "string",
                        },
                        "type": "array",
                      },
                      "startCities": {
                        "allowEmptyValue": false,
                        "description": "起始地筛选条件",
                        "items": {
                          "type": "string",
                        },
                        "type": "array",
                      },
                    },
                    "title": "FreightTaskQueryResponse",
                    "type": "object",
                  },
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
              "summary": "获取筛选条件",
              "tags": [
                "运单任务相关",
              ],
            },
          },
          "/freightTask/list": {
            "get": {
              "operationId": "listUsingGET_1",
              "parameters": [
                {
                  "collectionFormat": "multi",
                  "description": "起始地城市列表",
                  "in": "query",
                  "items": {
                    "type": "string",
                  },
                  "name": "originCity",
                  "required": false,
                  "type": "array",
                },
                {
                  "collectionFormat": "multi",
                  "description": "目的地城市列表",
                  "in": "query",
                  "items": {
                    "type": "string",
                  },
                  "name": "destinationCity",
                  "required": false,
                  "type": "array",
                },
                {
                  "collectionFormat": "multi",
                  "description": "客户id列表",
                  "in": "query",
                  "items": {
                    "format": "int64",
                    "type": "integer",
                  },
                  "name": "customerIds",
                  "required": false,
                  "type": "array",
                },
                {
                  "collectionFormat": "multi",
                  "description": "货物名称列表",
                  "in": "query",
                  "items": {
                    "type": "string",
                  },
                  "name": "goodsNameList",
                  "required": false,
                  "type": "array",
                },
                {
                  "description": "分页 页码",
                  "format": "int32",
                  "in": "query",
                  "name": "pageNo",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "分页 每页数量",
                  "format": "int32",
                  "in": "query",
                  "name": "pageSize",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "开始时间 不传默认本月第一天",
                  "format": "date",
                  "in": "query",
                  "name": "startDate",
                  "required": false,
                  "type": "string",
                },
                {
                  "description": "结束时间 不传默认当前",
                  "format": "date",
                  "in": "query",
                  "name": "endDate",
                  "required": false,
                  "type": "string",
                },
              ],
              "produces": [
                "*/*",
              ],
              "responses": {
                "200": {
                  "description": "OK",
                  "schema": {
                    "properties": {
                      "current": {
                        "format": "int32",
                        "type": "integer",
                      },
                      "records": {
                        "items": {
                          "properties": {
                            "customerName": {
                              "allowEmptyValue": false,
                              "description": "客户名称",
                              "example": "王总",
                              "type": "string",
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
                                "city": {
                                  "allowEmptyValue": false,
                                  "description": "市",
                                  "type": "string",
                                },
                                "province": {
                                  "allowEmptyValue": false,
                                  "description": "省",
                                  "type": "string",
                                },
                                "region": {
                                  "allowEmptyValue": false,
                                  "description": "区",
                                  "type": "string",
                                },
                                "tittle": {
                                  "allowEmptyValue": false,
                                  "description": "地址标题",
                                  "type": "string",
                                },
                              },
                              "title": "AddressDetailResponse",
                              "type": "object",
                            },
                            "expenditure": {
                              "allowEmptyValue": false,
                              "description": "支出(分)",
                              "example": 10000,
                              "format": "int64",
                              "type": "integer",
                            },
                            "goodsName": {
                              "allowEmptyValue": false,
                              "description": "货物名称",
                              "example": "钢筋5斤",
                              "type": "string",
                            },
                            "income": {
                              "allowEmptyValue": false,
                              "description": "收入 (分)",
                              "example": 18000,
                              "format": "int64",
                              "type": "integer",
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
                                "city": {
                                  "allowEmptyValue": false,
                                  "description": "市",
                                  "type": "string",
                                },
                                "province": {
                                  "allowEmptyValue": false,
                                  "description": "省",
                                  "type": "string",
                                },
                                "region": {
                                  "allowEmptyValue": false,
                                  "description": "区",
                                  "type": "string",
                                },
                                "tittle": {
                                  "allowEmptyValue": false,
                                  "description": "地址标题",
                                  "type": "string",
                                },
                              },
                              "title": "AddressDetailResponse",
                              "type": "object",
                            },
                            "profit": {
                              "allowEmptyValue": false,
                              "description": "利润(分)",
                              "example": 80000,
                              "format": "int64",
                              "type": "integer",
                            },
                            "profitRate": {
                              "allowEmptyValue": false,
                              "description": "利润率",
                              "example": 78,
                              "type": "string",
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
                            "taskId": {
                              "allowEmptyValue": false,
                              "description": "任务id",
                              "example": 1559431138848817400,
                              "format": "int64",
                              "type": "integer",
                            },
                            "taskNo": {
                              "allowEmptyValue": false,
                              "description": "任务编号",
                              "example": "YD1559431138848817535",
                              "type": "string",
                            },
                            "tradeNo": {
                              "allowEmptyValue": false,
                              "description": "业务单号",
                              "example": "JDZFB1559431138848817535",
                              "type": "string",
                            },
                          },
                          "title": "FreightTaskListResponse",
                          "type": "object",
                        },
                        "type": "array",
                      },
                      "size": {
                        "format": "int32",
                        "type": "integer",
                      },
                      "total": {
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    "title": "MixmicroPage«FreightTaskListResponse»",
                    "type": "object",
                  },
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
              "summary": "运单列表",
              "tags": [
                "运单任务相关",
              ],
            },
          },
          "/freightTask/listFromAnalysis": {
            "get": {
              "operationId": "listFromAnalysisUsingGET",
              "parameters": [
                {
                  "collectionFormat": "multi",
                  "description": "任务id列表 ",
                  "in": "query",
                  "items": {
                    "format": "int64",
                    "type": "integer",
                  },
                  "name": "taskIds",
                  "required": false,
                  "type": "array",
                },
                {
                  "description": "分页 页码",
                  "format": "int32",
                  "in": "query",
                  "name": "pageNo",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "分页 每页数量",
                  "format": "int32",
                  "in": "query",
                  "name": "pageSize",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "客户id ",
                  "format": "int64",
                  "in": "query",
                  "name": "customerId",
                  "required": false,
                  "type": "integer",
                },
              ],
              "produces": [
                "*/*",
              ],
              "responses": {
                "200": {
                  "description": "OK",
                  "schema": {
                    "properties": {
                      "current": {
                        "format": "int32",
                        "type": "integer",
                      },
                      "records": {
                        "items": {
                          "properties": {
                            "customerName": {
                              "allowEmptyValue": false,
                              "description": "客户名称",
                              "example": "王总",
                              "type": "string",
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
                                "city": {
                                  "allowEmptyValue": false,
                                  "description": "市",
                                  "type": "string",
                                },
                                "province": {
                                  "allowEmptyValue": false,
                                  "description": "省",
                                  "type": "string",
                                },
                                "region": {
                                  "allowEmptyValue": false,
                                  "description": "区",
                                  "type": "string",
                                },
                                "tittle": {
                                  "allowEmptyValue": false,
                                  "description": "地址标题",
                                  "type": "string",
                                },
                              },
                              "title": "AddressDetailResponse",
                              "type": "object",
                            },
                            "expenditure": {
                              "allowEmptyValue": false,
                              "description": "支出(分)",
                              "example": 10000,
                              "format": "int64",
                              "type": "integer",
                            },
                            "goodsName": {
                              "allowEmptyValue": false,
                              "description": "货物名称",
                              "example": "钢筋5斤",
                              "type": "string",
                            },
                            "income": {
                              "allowEmptyValue": false,
                              "description": "收入 (分)",
                              "example": 18000,
                              "format": "int64",
                              "type": "integer",
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
                                "city": {
                                  "allowEmptyValue": false,
                                  "description": "市",
                                  "type": "string",
                                },
                                "province": {
                                  "allowEmptyValue": false,
                                  "description": "省",
                                  "type": "string",
                                },
                                "region": {
                                  "allowEmptyValue": false,
                                  "description": "区",
                                  "type": "string",
                                },
                                "tittle": {
                                  "allowEmptyValue": false,
                                  "description": "地址标题",
                                  "type": "string",
                                },
                              },
                              "title": "AddressDetailResponse",
                              "type": "object",
                            },
                            "profit": {
                              "allowEmptyValue": false,
                              "description": "利润(分)",
                              "example": 80000,
                              "format": "int64",
                              "type": "integer",
                            },
                            "profitRate": {
                              "allowEmptyValue": false,
                              "description": "利润率",
                              "example": 78,
                              "type": "string",
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
                            "taskId": {
                              "allowEmptyValue": false,
                              "description": "任务id",
                              "example": 1559431138848817400,
                              "format": "int64",
                              "type": "integer",
                            },
                            "taskNo": {
                              "allowEmptyValue": false,
                              "description": "任务编号",
                              "example": "YD1559431138848817535",
                              "type": "string",
                            },
                            "tradeNo": {
                              "allowEmptyValue": false,
                              "description": "业务单号",
                              "example": "JDZFB1559431138848817535",
                              "type": "string",
                            },
                          },
                          "title": "FreightTaskListResponse",
                          "type": "object",
                        },
                        "type": "array",
                      },
                      "size": {
                        "format": "int32",
                        "type": "integer",
                      },
                      "total": {
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    "title": "MixmicroPage«FreightTaskListResponse»",
                    "type": "object",
                  },
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
              "summary": "从利润分析跳转运单列表",
              "tags": [
                "运单任务相关",
              ],
            },
          },
          "/freightTask/update": {
            "post": {
              "consumes": [
                "application/json",
              ],
              "operationId": "updateUsingPOST_1",
              "parameters": [
                {
                  "description": "request",
                  "in": "body",
                  "name": "request",
                  "required": true,
                  "schema": {
                    "properties": {
                      "accountBookList": {
                        "allowEmptyValue": false,
                        "description": "编辑流水参数",
                        "items": {
                          "properties": {
                            "accountBookId": {
                              "allowEmptyValue": false,
                              "description": "账单流水id",
                              "example": 1750148943159,
                              "format": "int64",
                              "type": "integer",
                            },
                            "amount": {
                              "allowEmptyValue": false,
                              "description": "金额 (单位分)",
                              "example": 1000,
                              "format": "int64",
                              "type": "integer",
                            },
                            "categoryId": {
                              "allowEmptyValue": false,
                              "description": "类型id",
                              "example": 1750148943159,
                              "type": "string",
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
                              "example": "yyyy-MM-dd HH:mm:ss",
                              "format": "date-time",
                              "type": "string",
                            },
                            "remarks": {
                              "allowEmptyValue": false,
                              "description": "备注",
                              "example": "买的燃油宝",
                              "type": "string",
                            },
                            "type": {
                              "allowEmptyValue": false,
                              "description": "0:收入 1:支出",
                              "example": 1750148943159,
                              "exclusiveMaximum": false,
                              "exclusiveMinimum": false,
                              "format": "int32",
                              "maximum": 9223372036854776000,
                              "minimum": 0,
                              "type": "integer",
                            },
                          },
                          "title": "AccountBookUpdateRequest",
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
                          "location": {
                            "allowEmptyValue": false,
                            "description": "lat<纬度>,lng<经度> 经纬度拼起来,逗号分隔",
                            "type": "string",
                          },
                          "tittle": {
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
                          "location": {
                            "allowEmptyValue": false,
                            "description": "lat<纬度>,lng<经度> 经纬度拼起来,逗号分隔",
                            "type": "string",
                          },
                          "tittle": {
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
                      "taskId": {
                        "allowEmptyValue": false,
                        "description": "任务id",
                        "example": "YD1559431138848817535",
                        "format": "int64",
                        "type": "integer",
                      },
                      "tradeNo": {
                        "allowEmptyValue": false,
                        "description": "业务单号",
                        "example": "YD1559431138848817535",
                        "type": "string",
                      },
                    },
                    "title": "FreightTaskUpdateRequest",
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
              "summary": "编辑运单",
              "tags": [
                "运单任务相关",
              ],
            },
          },
          "/home/monthlySummary": {
            "get": {
              "operationId": "monthlySummaryUsingGET",
              "produces": [
                "*/*",
              ],
              "responses": {
                "200": {
                  "description": "OK",
                  "schema": {
                    "properties": {
                      "expenditure": {
                        "allowEmptyValue": false,
                        "description": "支出(分)",
                        "example": 10000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "hasTask": {
                        "allowEmptyValue": false,
                        "description": "是否有任务,没任务则显示 示例信息",
                        "example": false,
                        "type": "boolean",
                      },
                      "income": {
                        "allowEmptyValue": false,
                        "description": "收入(分)",
                        "example": 10000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "mostProfitLine": {
                        "allowEmptyValue": false,
                        "description": "利润均值最高路线",
                        "properties": {
                          "averageProfit": {
                            "allowEmptyValue": false,
                            "description": "平均利润(分)",
                            "example": 200000,
                            "format": "int64",
                            "type": "integer",
                          },
                          "destinationCity": {
                            "allowEmptyValue": false,
                            "description": "目的地城市",
                            "example": "南京市",
                            "type": "string",
                          },
                          "originCity": {
                            "allowEmptyValue": false,
                            "description": "起始地城市",
                            "example": "苏州市",
                            "type": "string",
                          },
                          "profit": {
                            "allowEmptyValue": false,
                            "description": "总利润",
                            "example": 200000,
                            "format": "int64",
                            "type": "integer",
                          },
                          "times": {
                            "allowEmptyValue": false,
                            "description": "次数",
                            "format": "int32",
                            "type": "integer",
                          },
                        },
                        "title": "LineResponse",
                        "type": "object",
                      },
                      "profit": {
                        "allowEmptyValue": false,
                        "description": "利润",
                        "example": 10000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "summaryMonth": {
                        "allowEmptyValue": false,
                        "description": "统计月份",
                        "example": 5,
                        "type": "string",
                      },
                    },
                    "title": "MonthlySummaryHomeResponse",
                    "type": "object",
                  },
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
              "summary": "首页月度统计",
              "tags": [
                "首页相关",
              ],
            },
          },
          "/profit/analysis/customer": {
            "get": {
              "operationId": "customerProfitAnalysisUsingGET",
              "parameters": [
                {
                  "description": "分页 页码",
                  "format": "int32",
                  "in": "query",
                  "name": "pageNo",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "分页 每页数量",
                  "format": "int32",
                  "in": "query",
                  "name": "pageSize",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "开始时间",
                  "format": "date",
                  "in": "query",
                  "name": "startDate",
                  "required": false,
                  "type": "string",
                },
                {
                  "description": "结束时间",
                  "format": "date",
                  "in": "query",
                  "name": "endDate",
                  "required": false,
                  "type": "string",
                },
              ],
              "produces": [
                "*/*",
              ],
              "responses": {
                "200": {
                  "description": "OK",
                  "schema": {
                    "properties": {
                      "expenditure": {
                        "allowEmptyValue": false,
                        "description": "支出(分)",
                        "example": 10000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "income": {
                        "allowEmptyValue": false,
                        "description": "收入 (分)",
                        "example": 18000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "pageResponse": {
                        "allowEmptyValue": false,
                        "description": "利润分析数据",
                        "properties": {
                          "current": {
                            "format": "int32",
                            "type": "integer",
                          },
                          "records": {
                            "items": {
                              "properties": {
                                "averageProfit": {
                                  "allowEmptyValue": false,
                                  "description": "平均利润(分)",
                                  "example": 200000,
                                  "format": "int64",
                                  "type": "integer",
                                },
                                "customerId": {
                                  "allowEmptyValue": false,
                                  "description": "客户id",
                                  "example": 200000,
                                  "format": "int64",
                                  "type": "integer",
                                },
                                "customerName": {
                                  "allowEmptyValue": false,
                                  "description": "客户名称",
                                  "example": 200000,
                                  "type": "string",
                                },
                                "maxTaskDate": {
                                  "allowEmptyValue": false,
                                  "description": "最新任务时间",
                                  "example": "2023-02-02",
                                  "format": "date",
                                  "type": "string",
                                },
                                "taskAmount": {
                                  "allowEmptyValue": false,
                                  "description": "任务数量",
                                  "example": 2,
                                  "format": "int32",
                                  "type": "integer",
                                },
                                "totalProfit": {
                                  "allowEmptyValue": false,
                                  "description": "总利润",
                                  "example": 200000,
                                  "format": "int64",
                                  "type": "integer",
                                },
                              },
                              "title": "CustomerProfitResponse",
                              "type": "object",
                            },
                            "type": "array",
                          },
                          "size": {
                            "format": "int32",
                            "type": "integer",
                          },
                          "total": {
                            "format": "int32",
                            "type": "integer",
                          },
                        },
                        "title": "MixmicroPage«CustomerProfitResponse»",
                        "type": "object",
                      },
                      "profit": {
                        "allowEmptyValue": false,
                        "description": "利润(分)",
                        "example": 200000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "total": {
                        "allowEmptyValue": false,
                        "description": "总条数",
                        "example": 100,
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    "title": "ProfitAnalysisCustomerResponse",
                    "type": "object",
                  },
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
              "summary": "客户利润列表",
              "tags": [
                "利润分析",
              ],
            },
          },
          "/profit/analysis/income": {
            "get": {
              "operationId": "incomeProfitAnalysisUsingGET",
              "parameters": [
                {
                  "description": "开始时间",
                  "format": "date",
                  "in": "query",
                  "name": "startDate",
                  "required": false,
                  "type": "string",
                },
                {
                  "description": "结束时间",
                  "format": "date",
                  "in": "query",
                  "name": "endDate",
                  "required": false,
                  "type": "string",
                },
                {
                  "description": "类别 0:收入 1:支出",
                  "format": "int32",
                  "in": "query",
                  "name": "type",
                  "required": false,
                  "type": "integer",
                },
              ],
              "produces": [
                "*/*",
              ],
              "responses": {
                "200": {
                  "description": "OK",
                  "schema": {
                    "properties": {
                      "records": {
                        "allowEmptyValue": false,
                        "description": "分类列表",
                        "items": {
                          "properties": {
                            "amount": {
                              "allowEmptyValue": false,
                              "description": "总计 (分)",
                              "example": 1257100,
                              "format": "int64",
                              "type": "integer",
                            },
                            "categoryId": {
                              "allowEmptyValue": false,
                              "description": "分类Id",
                              "example": 123123123,
                              "type": "string",
                            },
                            "categoryIdList": {
                              "allowEmptyValue": false,
                              "description": "其余列表",
                              "items": {
                                "type": "string",
                              },
                              "type": "array",
                            },
                            "categoryName": {
                              "allowEmptyValue": false,
                              "description": "分类名称",
                              "example": "加油",
                              "type": "string",
                            },
                          },
                          "title": "PieChartItemResponse",
                          "type": "object",
                        },
                        "type": "array",
                      },
                      "totalAmount": {
                        "allowEmptyValue": false,
                        "description": "总收支",
                        "example": 100,
                        "format": "int64",
                        "type": "integer",
                      },
                    },
                    "title": "AccountBookAnalysisResponse",
                    "type": "object",
                  },
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
              "summary": "收入支出分析",
              "tags": [
                "利润分析",
              ],
            },
          },
          "/profit/analysis/line": {
            "get": {
              "operationId": "lineProfitAnalysisUsingGET",
              "parameters": [
                {
                  "description": "分页 页码",
                  "format": "int32",
                  "in": "query",
                  "name": "pageNo",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "分页 每页数量",
                  "format": "int32",
                  "in": "query",
                  "name": "pageSize",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "路线排序 0:按市  1:按区",
                  "format": "int32",
                  "in": "query",
                  "name": "sortType",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "开始时间",
                  "format": "date",
                  "in": "query",
                  "name": "startDate",
                  "required": false,
                  "type": "string",
                },
                {
                  "description": "结束时间",
                  "format": "date",
                  "in": "query",
                  "name": "endDate",
                  "required": false,
                  "type": "string",
                },
              ],
              "produces": [
                "*/*",
              ],
              "responses": {
                "200": {
                  "description": "OK",
                  "schema": {
                    "properties": {
                      "expenditure": {
                        "allowEmptyValue": false,
                        "description": "支出(分)",
                        "example": 10000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "income": {
                        "allowEmptyValue": false,
                        "description": "收入 (分)",
                        "example": 18000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "pageResponse": {
                        "allowEmptyValue": false,
                        "description": "利润分析数据",
                        "properties": {
                          "current": {
                            "format": "int32",
                            "type": "integer",
                          },
                          "records": {
                            "items": {
                              "properties": {
                                "averageProfit": {
                                  "allowEmptyValue": false,
                                  "description": "平均利润(分)",
                                  "example": 200000,
                                  "format": "int64",
                                  "type": "integer",
                                },
                                "destinationCity": {
                                  "allowEmptyValue": false,
                                  "description": "目的地 城市",
                                  "example": "南京市",
                                  "type": "string",
                                },
                                "destinationRegion": {
                                  "allowEmptyValue": false,
                                  "description": "目的地 区",
                                  "example": "鼓楼区",
                                  "type": "string",
                                },
                                "originCity": {
                                  "allowEmptyValue": false,
                                  "description": "起始地 城市",
                                  "example": "苏州市",
                                  "type": "string",
                                },
                                "originRegion": {
                                  "allowEmptyValue": false,
                                  "description": "起始地 区",
                                  "example": "工业园区",
                                  "type": "string",
                                },
                                "taskAmount": {
                                  "allowEmptyValue": false,
                                  "description": "任务数量",
                                  "example": 2,
                                  "format": "int32",
                                  "type": "integer",
                                },
                                "taskIds": {
                                  "allowEmptyValue": false,
                                  "description": "任务id列表",
                                  "items": {
                                    "type": "string",
                                  },
                                  "type": "array",
                                },
                              },
                              "title": "LineProfitResponse",
                              "type": "object",
                            },
                            "type": "array",
                          },
                          "size": {
                            "format": "int32",
                            "type": "integer",
                          },
                          "total": {
                            "format": "int32",
                            "type": "integer",
                          },
                        },
                        "title": "MixmicroPage«LineProfitResponse»",
                        "type": "object",
                      },
                      "profit": {
                        "allowEmptyValue": false,
                        "description": "利润(分)",
                        "example": 200000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "total": {
                        "allowEmptyValue": false,
                        "description": "总条数",
                        "example": 100,
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    "title": "ProfitAnalysisLineResponse",
                    "type": "object",
                  },
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
              "summary": "线路利润列表",
              "tags": [
                "利润分析",
              ],
            },
          },
          "/profit/analysis/monthlySummary": {
            "get": {
              "operationId": "detailUsingGET_1",
              "produces": [
                "*/*",
              ],
              "responses": {
                "200": {
                  "description": "OK",
                  "schema": {
                    "properties": {
                      "customerResponse": {
                        "allowEmptyValue": false,
                        "description": "客户报告",
                        "properties": {
                          "customerAmount": {
                            "allowEmptyValue": false,
                            "description": "客户数量",
                            "format": "int32",
                            "type": "integer",
                          },
                          "leastProfitCustomer": {
                            "allowEmptyValue": false,
                            "description": "利润均值最低客户",
                            "properties": {
                              "averageProfit": {
                                "allowEmptyValue": false,
                                "description": "平均利润(分)",
                                "example": 200000,
                                "format": "int64",
                                "type": "integer",
                              },
                              "customerName": {
                                "allowEmptyValue": false,
                                "description": "客户名称",
                                "example": "张总",
                                "type": "string",
                              },
                              "times": {
                                "allowEmptyValue": false,
                                "description": "次数",
                                "format": "int32",
                                "type": "integer",
                              },
                            },
                            "title": "CustomerResponse",
                            "type": "object",
                          },
                          "mostProfitCustomer": {
                            "allowEmptyValue": false,
                            "description": "利润均值最高客户",
                            "properties": {
                              "averageProfit": {
                                "allowEmptyValue": false,
                                "description": "平均利润(分)",
                                "example": 200000,
                                "format": "int64",
                                "type": "integer",
                              },
                              "customerName": {
                                "allowEmptyValue": false,
                                "description": "客户名称",
                                "example": "张总",
                                "type": "string",
                              },
                              "times": {
                                "allowEmptyValue": false,
                                "description": "次数",
                                "format": "int32",
                                "type": "integer",
                              },
                            },
                            "title": "CustomerResponse",
                            "type": "object",
                          },
                        },
                        "title": "MonthlySummaryCustomerResponse",
                        "type": "object",
                      },
                      "expenditure": {
                        "allowEmptyValue": false,
                        "description": "支出(分)",
                        "example": 10000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "income": {
                        "allowEmptyValue": false,
                        "description": "收入(分)",
                        "example": 10000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "lineResponse": {
                        "allowEmptyValue": false,
                        "description": "线路报告",
                        "properties": {
                          "leastProfitLine": {
                            "allowEmptyValue": false,
                            "description": "利润均值最低路线",
                            "properties": {
                              "averageProfit": {
                                "allowEmptyValue": false,
                                "description": "平均利润(分)",
                                "example": 200000,
                                "format": "int64",
                                "type": "integer",
                              },
                              "destinationCity": {
                                "allowEmptyValue": false,
                                "description": "目的地城市",
                                "example": "南京市",
                                "type": "string",
                              },
                              "originCity": {
                                "allowEmptyValue": false,
                                "description": "起始地城市",
                                "example": "苏州市",
                                "type": "string",
                              },
                              "profit": {
                                "allowEmptyValue": false,
                                "description": "总利润",
                                "example": 200000,
                                "format": "int64",
                                "type": "integer",
                              },
                              "times": {
                                "allowEmptyValue": false,
                                "description": "次数",
                                "format": "int32",
                                "type": "integer",
                              },
                            },
                            "title": "LineResponse",
                            "type": "object",
                          },
                          "lineAmount": {
                            "allowEmptyValue": false,
                            "description": "线路数量",
                            "format": "int32",
                            "type": "integer",
                          },
                          "mostProfitLine": {
                            "allowEmptyValue": false,
                            "description": "利润均值最高路线",
                            "properties": {
                              "averageProfit": {
                                "allowEmptyValue": false,
                                "description": "平均利润(分)",
                                "example": 200000,
                                "format": "int64",
                                "type": "integer",
                              },
                              "destinationCity": {
                                "allowEmptyValue": false,
                                "description": "目的地城市",
                                "example": "南京市",
                                "type": "string",
                              },
                              "originCity": {
                                "allowEmptyValue": false,
                                "description": "起始地城市",
                                "example": "苏州市",
                                "type": "string",
                              },
                              "profit": {
                                "allowEmptyValue": false,
                                "description": "总利润",
                                "example": 200000,
                                "format": "int64",
                                "type": "integer",
                              },
                              "times": {
                                "allowEmptyValue": false,
                                "description": "次数",
                                "format": "int32",
                                "type": "integer",
                              },
                            },
                            "title": "LineResponse",
                            "type": "object",
                          },
                        },
                        "title": "MonthlySummaryLineResponse",
                        "type": "object",
                      },
                      "profit": {
                        "allowEmptyValue": false,
                        "description": "利润",
                        "example": 10000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "summaryMonth": {
                        "allowEmptyValue": false,
                        "description": "统计月份",
                        "example": "2023年2月",
                        "type": "string",
                      },
                      "taskResponse": {
                        "allowEmptyValue": false,
                        "description": "任务报告",
                        "properties": {
                          "leastProfitRateTasK": {
                            "allowEmptyValue": false,
                            "description": "利润率最低任务",
                            "properties": {
                              "destinationAddress": {
                                "allowEmptyValue": false,
                                "description": "目的地地址",
                                "example": "夫子庙",
                                "type": "string",
                              },
                              "destinationCity": {
                                "allowEmptyValue": false,
                                "description": "目的地城市",
                                "example": "南京市",
                                "type": "string",
                              },
                              "originAddress": {
                                "allowEmptyValue": false,
                                "description": "起始地地址",
                                "example": "腾飞苏州创新园",
                                "type": "string",
                              },
                              "originCity": {
                                "allowEmptyValue": false,
                                "description": "起始地城市",
                                "example": "苏州市",
                                "type": "string",
                              },
                              "profit": {
                                "allowEmptyValue": false,
                                "description": "利润(分)",
                                "example": 200000,
                                "format": "int64",
                                "type": "integer",
                              },
                              "profitRate": {
                                "allowEmptyValue": false,
                                "description": "利润率",
                                "example": 81,
                                "type": "string",
                              },
                              "startDate": {
                                "allowEmptyValue": false,
                                "description": "开始时间",
                                "example": "yyyy-MM-dd",
                                "format": "date",
                                "type": "string",
                              },
                            },
                            "title": "TaskResponse",
                            "type": "object",
                          },
                          "leastProfitTask": {
                            "allowEmptyValue": false,
                            "description": "利润最低任务",
                            "properties": {
                              "destinationAddress": {
                                "allowEmptyValue": false,
                                "description": "目的地地址",
                                "example": "夫子庙",
                                "type": "string",
                              },
                              "destinationCity": {
                                "allowEmptyValue": false,
                                "description": "目的地城市",
                                "example": "南京市",
                                "type": "string",
                              },
                              "originAddress": {
                                "allowEmptyValue": false,
                                "description": "起始地地址",
                                "example": "腾飞苏州创新园",
                                "type": "string",
                              },
                              "originCity": {
                                "allowEmptyValue": false,
                                "description": "起始地城市",
                                "example": "苏州市",
                                "type": "string",
                              },
                              "profit": {
                                "allowEmptyValue": false,
                                "description": "利润(分)",
                                "example": 200000,
                                "format": "int64",
                                "type": "integer",
                              },
                              "profitRate": {
                                "allowEmptyValue": false,
                                "description": "利润率",
                                "example": 81,
                                "type": "string",
                              },
                              "startDate": {
                                "allowEmptyValue": false,
                                "description": "开始时间",
                                "example": "yyyy-MM-dd",
                                "format": "date",
                                "type": "string",
                              },
                            },
                            "title": "TaskResponse",
                            "type": "object",
                          },
                          "mostProfitRateTasK": {
                            "allowEmptyValue": false,
                            "description": "利润率最高任务",
                            "properties": {
                              "destinationAddress": {
                                "allowEmptyValue": false,
                                "description": "目的地地址",
                                "example": "夫子庙",
                                "type": "string",
                              },
                              "destinationCity": {
                                "allowEmptyValue": false,
                                "description": "目的地城市",
                                "example": "南京市",
                                "type": "string",
                              },
                              "originAddress": {
                                "allowEmptyValue": false,
                                "description": "起始地地址",
                                "example": "腾飞苏州创新园",
                                "type": "string",
                              },
                              "originCity": {
                                "allowEmptyValue": false,
                                "description": "起始地城市",
                                "example": "苏州市",
                                "type": "string",
                              },
                              "profit": {
                                "allowEmptyValue": false,
                                "description": "利润(分)",
                                "example": 200000,
                                "format": "int64",
                                "type": "integer",
                              },
                              "profitRate": {
                                "allowEmptyValue": false,
                                "description": "利润率",
                                "example": 81,
                                "type": "string",
                              },
                              "startDate": {
                                "allowEmptyValue": false,
                                "description": "开始时间",
                                "example": "yyyy-MM-dd",
                                "format": "date",
                                "type": "string",
                              },
                            },
                            "title": "TaskResponse",
                            "type": "object",
                          },
                          "mostProfitTask": {
                            "allowEmptyValue": false,
                            "description": "利润最高任务",
                            "properties": {
                              "destinationAddress": {
                                "allowEmptyValue": false,
                                "description": "目的地地址",
                                "example": "夫子庙",
                                "type": "string",
                              },
                              "destinationCity": {
                                "allowEmptyValue": false,
                                "description": "目的地城市",
                                "example": "南京市",
                                "type": "string",
                              },
                              "originAddress": {
                                "allowEmptyValue": false,
                                "description": "起始地地址",
                                "example": "腾飞苏州创新园",
                                "type": "string",
                              },
                              "originCity": {
                                "allowEmptyValue": false,
                                "description": "起始地城市",
                                "example": "苏州市",
                                "type": "string",
                              },
                              "profit": {
                                "allowEmptyValue": false,
                                "description": "利润(分)",
                                "example": 200000,
                                "format": "int64",
                                "type": "integer",
                              },
                              "profitRate": {
                                "allowEmptyValue": false,
                                "description": "利润率",
                                "example": 81,
                                "type": "string",
                              },
                              "startDate": {
                                "allowEmptyValue": false,
                                "description": "开始时间",
                                "example": "yyyy-MM-dd",
                                "format": "date",
                                "type": "string",
                              },
                            },
                            "title": "TaskResponse",
                            "type": "object",
                          },
                          "taskAmount": {
                            "allowEmptyValue": false,
                            "description": "任务数量",
                            "format": "int32",
                            "type": "integer",
                          },
                        },
                        "title": "MonthlySummaryTaskResponse",
                        "type": "object",
                      },
                    },
                    "title": "MonthlySummaryResponse",
                    "type": "object",
                  },
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
              "summary": "月度汇总",
              "tags": [
                "利润分析",
              ],
            },
          },
          "/profit/analysis/task": {
            "get": {
              "operationId": "taskProfitAnalysisUsingGET",
              "parameters": [
                {
                  "description": "分页 页码",
                  "format": "int32",
                  "in": "query",
                  "name": "pageNo",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "分页 每页数量",
                  "format": "int32",
                  "in": "query",
                  "name": "pageSize",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "路线排序 0:按金额 1:按时间 2:按利润率",
                  "format": "int32",
                  "in": "query",
                  "name": "sortType",
                  "required": false,
                  "type": "integer",
                },
                {
                  "description": "开始时间",
                  "format": "date",
                  "in": "query",
                  "name": "startDate",
                  "required": false,
                  "type": "string",
                },
                {
                  "description": "结束时间",
                  "format": "date",
                  "in": "query",
                  "name": "endDate",
                  "required": false,
                  "type": "string",
                },
              ],
              "produces": [
                "*/*",
              ],
              "responses": {
                "200": {
                  "description": "OK",
                  "schema": {
                    "properties": {
                      "expenditure": {
                        "allowEmptyValue": false,
                        "description": "支出(分)",
                        "example": 10000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "income": {
                        "allowEmptyValue": false,
                        "description": "收入 (分)",
                        "example": 18000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "pageResponse": {
                        "allowEmptyValue": false,
                        "description": "利润分析数据",
                        "properties": {
                          "current": {
                            "format": "int32",
                            "type": "integer",
                          },
                          "records": {
                            "items": {
                              "properties": {
                                "destinationDetail": {
                                  "allowEmptyValue": false,
                                  "description": "目的地地理位置信息",
                                  "properties": {
                                    "address": {
                                      "allowEmptyValue": false,
                                      "description": "详细地址",
                                      "type": "string",
                                    },
                                    "city": {
                                      "allowEmptyValue": false,
                                      "description": "市",
                                      "type": "string",
                                    },
                                    "province": {
                                      "allowEmptyValue": false,
                                      "description": "省",
                                      "type": "string",
                                    },
                                    "region": {
                                      "allowEmptyValue": false,
                                      "description": "区",
                                      "type": "string",
                                    },
                                    "tittle": {
                                      "allowEmptyValue": false,
                                      "description": "地址标题",
                                      "type": "string",
                                    },
                                  },
                                  "title": "AddressDetailResponse",
                                  "type": "object",
                                },
                                "goodsName": {
                                  "allowEmptyValue": false,
                                  "description": "货物名称",
                                  "example": "钢筋",
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
                                    "city": {
                                      "allowEmptyValue": false,
                                      "description": "市",
                                      "type": "string",
                                    },
                                    "province": {
                                      "allowEmptyValue": false,
                                      "description": "省",
                                      "type": "string",
                                    },
                                    "region": {
                                      "allowEmptyValue": false,
                                      "description": "区",
                                      "type": "string",
                                    },
                                    "tittle": {
                                      "allowEmptyValue": false,
                                      "description": "地址标题",
                                      "type": "string",
                                    },
                                  },
                                  "title": "AddressDetailResponse",
                                  "type": "object",
                                },
                                "profit": {
                                  "allowEmptyValue": false,
                                  "description": "利润(分)",
                                  "example": 200000,
                                  "format": "int64",
                                  "type": "integer",
                                },
                                "profitRate": {
                                  "allowEmptyValue": false,
                                  "description": "利润率",
                                  "example": 78,
                                  "type": "string",
                                },
                                "startDate": {
                                  "allowEmptyValue": false,
                                  "description": "任务开始时间",
                                  "example": "yyyy-MM-dd",
                                  "format": "date",
                                  "type": "string",
                                },
                                "taskId": {
                                  "allowEmptyValue": false,
                                  "description": "任务id",
                                  "example": 17545616598741464,
                                  "format": "int64",
                                  "type": "integer",
                                },
                              },
                              "title": "TaskProfitResponse",
                              "type": "object",
                            },
                            "type": "array",
                          },
                          "size": {
                            "format": "int32",
                            "type": "integer",
                          },
                          "total": {
                            "format": "int32",
                            "type": "integer",
                          },
                        },
                        "title": "MixmicroPage«TaskProfitResponse»",
                        "type": "object",
                      },
                      "profit": {
                        "allowEmptyValue": false,
                        "description": "利润(分)",
                        "example": 200000,
                        "format": "int64",
                        "type": "integer",
                      },
                      "total": {
                        "allowEmptyValue": false,
                        "description": "总条数",
                        "example": 100,
                        "format": "int32",
                        "type": "integer",
                      },
                    },
                    "title": "ProfitAnalysisTaskResponse",
                    "type": "object",
                  },
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
              "summary": "任务利润列表",
              "tags": [
                "利润分析",
              ],
            },
          },
        },
        "swagger": "2.0",
        "tags": [
          {
            "description": "Profit Analysis Endpoint",
            "name": "利润分析",
          },
          {
            "description": "Ab User Address Endpoint",
            "name": "地址簿相关",
          },
          {
            "description": "Ab User Customer Endpoint",
            "name": "客户相关",
          },
          {
            "description": "Ab Account Category Endpoint",
            "name": "收支分类相关",
          },
          {
            "description": "Ab Account Book Endpoint",
            "name": "账单流水相关",
          },
          {
            "description": "Ab Freight Task Endpoint",
            "name": "运单任务相关",
          },
          {
            "description": "Home Endpoint",
            "name": "首页相关",
          },
        ],
      }
    `)
    await expect(SwaggerApi.tagTree).toMatchInlineSnapshot(`
      [
        {
          "children": [
            {
              "api": {
                "method": "get",
                "path": "/profit/analysis/customer",
                "tags": [
                  "利润分析",
                ],
              },
              "id": "customerProfitAnalysisUsingGET",
              "name": "GET 客户利润列表",
            },
            {
              "api": {
                "method": "get",
                "path": "/profit/analysis/income",
                "tags": [
                  "利润分析",
                ],
              },
              "id": "incomeProfitAnalysisUsingGET",
              "name": "GET 收入支出分析",
            },
            {
              "api": {
                "method": "get",
                "path": "/profit/analysis/line",
                "tags": [
                  "利润分析",
                ],
              },
              "id": "lineProfitAnalysisUsingGET",
              "name": "GET 线路利润列表",
            },
            {
              "api": {
                "method": "get",
                "path": "/profit/analysis/monthlySummary",
                "tags": [
                  "利润分析",
                ],
              },
              "id": "detailUsingGET_1",
              "name": "GET 月度汇总",
            },
            {
              "api": {
                "method": "get",
                "path": "/profit/analysis/task",
                "tags": [
                  "利润分析",
                ],
              },
              "id": "taskProfitAnalysisUsingGET",
              "name": "GET 任务利润列表",
            },
          ],
          "description": "(5)",
          "name": "利润分析",
        },
        {
          "children": [
            {
              "api": {
                "method": "post",
                "path": "/address/delete",
                "tags": [
                  "地址簿相关",
                ],
              },
              "id": "deleteUserAddressUsingPOST",
              "name": "POST 删除用户地址簿",
            },
            {
              "api": {
                "method": "get",
                "path": "/address/list",
                "tags": [
                  "地址簿相关",
                ],
              },
              "id": "listUsingGET_2",
              "name": "GET 查看用户地址簿",
            },
            {
              "api": {
                "method": "get",
                "path": "/address/vagueQuery",
                "tags": [
                  "地址簿相关",
                ],
              },
              "id": "vagueQueryUsingGET",
              "name": "GET 模糊搜索",
            },
          ],
          "description": "(3)",
          "name": "地址簿相关",
        },
        {
          "children": [
            {
              "api": {
                "method": "post",
                "path": "/customer/add",
                "tags": [
                  "客户相关",
                ],
              },
              "id": "addUsingPOST_2",
              "name": "POST 新增客户",
            },
            {
              "api": {
                "method": "post",
                "path": "/customer/delete",
                "tags": [
                  "客户相关",
                ],
              },
              "id": "deleteUsingPOST_2",
              "name": "POST 删除客户",
            },
            {
              "api": {
                "method": "get",
                "path": "/customer/list",
                "tags": [
                  "客户相关",
                ],
              },
              "id": "listUsingGET_3",
              "name": "GET 查看用户客户列表",
            },
          ],
          "description": "(3)",
          "name": "客户相关",
        },
        {
          "children": [
            {
              "api": {
                "method": "post",
                "path": "/accountCategory/add",
                "tags": [
                  "收支分类相关",
                ],
              },
              "id": "addAccountCategoryUsingPOST",
              "name": "POST 新增账单类型",
            },
            {
              "api": {
                "method": "post",
                "path": "/accountCategory/delete",
                "tags": [
                  "收支分类相关",
                ],
              },
              "id": "deleteAccountCategoryUsingPOST",
              "name": "POST 删除账单类型",
            },
            {
              "api": {
                "method": "get",
                "path": "/accountCategory/list",
                "tags": [
                  "收支分类相关",
                ],
              },
              "id": "accountCategoryListUsingGET",
              "name": "GET 账单类型分类列表",
            },
          ],
          "description": "(3)",
          "name": "收支分类相关",
        },
        {
          "children": [
            {
              "api": {
                "method": "post",
                "path": "/accountBook/add",
                "tags": [
                  "账单流水相关",
                ],
              },
              "id": "addUsingPOST",
              "name": "POST 记支出/收入",
            },
            {
              "api": {
                "method": "post",
                "path": "/accountBook/delete",
                "tags": [
                  "账单流水相关",
                ],
              },
              "id": "deleteUsingPOST",
              "name": "POST 删除账单流水",
            },
            {
              "api": {
                "method": "get",
                "path": "/accountBook/detail",
                "tags": [
                  "账单流水相关",
                ],
              },
              "id": "detailUsingGET",
              "name": "GET 流水详情",
            },
            {
              "api": {
                "method": "get",
                "path": "/accountBook/list",
                "tags": [
                  "账单流水相关",
                ],
              },
              "id": "listUsingGET",
              "name": "GET 查询流水记录",
            },
            {
              "api": {
                "method": "get",
                "path": "/accountBook/listByTaskId",
                "tags": [
                  "账单流水相关",
                ],
              },
              "id": "listByTaskIdUsingGET",
              "name": "GET 根据运单任务id查询流水记录",
            },
            {
              "api": {
                "method": "get",
                "path": "/accountBook/listByYearMonth",
                "tags": [
                  "账单流水相关",
                ],
              },
              "id": "listByYearMonthUsingGET",
              "name": "GET 根据年月日期 查询列表",
            },
            {
              "api": {
                "method": "post",
                "path": "/accountBook/update",
                "tags": [
                  "账单流水相关",
                ],
              },
              "id": "updateUsingPOST",
              "name": "POST 编辑支出/收入",
            },
          ],
          "description": "(7)",
          "name": "账单流水相关",
        },
        {
          "children": [
            {
              "api": {
                "method": "post",
                "path": "/freightTask/add",
                "tags": [
                  "运单任务相关",
                ],
              },
              "id": "addUsingPOST_1",
              "name": "POST 新增运单",
            },
            {
              "api": {
                "method": "post",
                "path": "/freightTask/delete",
                "tags": [
                  "运单任务相关",
                ],
              },
              "id": "deleteUsingPOST_1",
              "name": "POST 删除运单",
            },
            {
              "api": {
                "method": "get",
                "path": "/freightTask/getDetail",
                "tags": [
                  "运单任务相关",
                ],
              },
              "id": "getDetailUsingGET",
              "name": "GET 获取任务详情",
            },
            {
              "api": {
                "method": "get",
                "path": "/freightTask/getQuery",
                "tags": [
                  "运单任务相关",
                ],
              },
              "id": "getQueryUsingGET",
              "name": "GET 获取筛选条件",
            },
            {
              "api": {
                "method": "get",
                "path": "/freightTask/list",
                "tags": [
                  "运单任务相关",
                ],
              },
              "id": "listUsingGET_1",
              "name": "GET 运单列表",
            },
            {
              "api": {
                "method": "get",
                "path": "/freightTask/listFromAnalysis",
                "tags": [
                  "运单任务相关",
                ],
              },
              "id": "listFromAnalysisUsingGET",
              "name": "GET 从利润分析跳转运单列表",
            },
            {
              "api": {
                "method": "post",
                "path": "/freightTask/update",
                "tags": [
                  "运单任务相关",
                ],
              },
              "id": "updateUsingPOST_1",
              "name": "POST 编辑运单",
            },
          ],
          "description": "(7)",
          "name": "运单任务相关",
        },
        {
          "children": [
            {
              "api": {
                "method": "get",
                "path": "/home/monthlySummary",
                "tags": [
                  "首页相关",
                ],
              },
              "id": "monthlySummaryUsingGET",
              "name": "GET 首页月度统计",
            },
          ],
          "description": "(1)",
          "name": "首页相关",
        },
      ]
    `)
    expect(SwaggerApi.getApiDetail('/accountBook/add', 'post')).toMatchInlineSnapshot(`
      {
        "consumes": [
          "application/json",
        ],
        "operationId": "addUsingPOST",
        "parameters": [
          {
            "description": "request",
            "in": "body",
            "name": "request",
            "required": true,
            "schema": {
              "properties": {
                "amount": {
                  "allowEmptyValue": false,
                  "description": "金额 (单位分)",
                  "example": 1000,
                  "format": "int64",
                  "type": "integer",
                },
                "categoryId": {
                  "allowEmptyValue": false,
                  "description": "类型Id",
                  "example": 1567054180388524000,
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
        "summary": "记支出/收入",
        "tags": [
          "账单流水相关",
        ],
      }
    `)
    expect(SwaggerApi.getApiDetail('/address/list', 'get')).toMatchInlineSnapshot(`
      {
        "operationId": "listUsingGET_2",
        "parameters": [
          {
            "description": "分页 页码",
            "format": "int32",
            "in": "query",
            "name": "pageNo",
            "required": false,
            "type": "integer",
          },
          {
            "description": "分页 每页数量",
            "format": "int32",
            "in": "query",
            "name": "pageSize",
            "required": false,
            "type": "integer",
          },
        ],
        "produces": [
          "*/*",
        ],
        "responses": {
          "200": {
            "description": "OK",
            "examples": {
              "current": 0,
              "records": [
                {
                  "address": "default string value",
                  "addressId": 0,
                  "city": "default string value",
                  "province": "default string value",
                  "region": "default string value",
                  "tittle": "default string value",
                },
              ],
              "size": 0,
              "total": 0,
            },
            "schema": {
              "properties": {
                "current": {
                  "format": "int32",
                  "type": "integer",
                },
                "records": {
                  "items": {
                    "properties": {
                      "address": {
                        "allowEmptyValue": false,
                        "description": "详细地址",
                        "type": "string",
                      },
                      "addressId": {
                        "allowEmptyValue": false,
                        "description": "地址簿id",
                        "format": "int64",
                        "type": "integer",
                      },
                      "city": {
                        "allowEmptyValue": false,
                        "description": "市",
                        "type": "string",
                      },
                      "province": {
                        "allowEmptyValue": false,
                        "description": "省",
                        "type": "string",
                      },
                      "region": {
                        "allowEmptyValue": false,
                        "description": "区",
                        "type": "string",
                      },
                      "tittle": {
                        "allowEmptyValue": false,
                        "description": "标题",
                        "type": "string",
                      },
                    },
                    "title": "TaskAddressDetail",
                    "type": "object",
                  },
                  "type": "array",
                },
                "size": {
                  "format": "int32",
                  "type": "integer",
                },
                "total": {
                  "format": "int32",
                  "type": "integer",
                },
              },
              "title": "MixmicroPage«TaskAddressDetail»",
              "type": "object",
            },
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
        "summary": "查看用户地址簿",
        "tags": [
          "地址簿相关",
        ],
      }
    `)
  })
})
