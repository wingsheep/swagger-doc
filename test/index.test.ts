import { describe, expect, it } from 'vitest'
import { getSwaggerJson } from '../src/fetchData'

describe('should', () => {
  it('exported', async () => {
    await expect(getSwaggerJson()).resolves.toMatchInlineSnapshot(`
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
              "name": "客户利润列表",
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
              "name": "收入支出分析",
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
              "name": "线路利润列表",
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
              "name": "月度汇总",
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
              "name": "任务利润列表",
            },
          ],
          "description": "Profit Analysis Endpoint",
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
              "name": "删除用户地址簿",
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
              "name": "查看用户地址簿",
            },
          ],
          "description": "Ab User Address Endpoint",
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
              "name": "新增客户",
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
              "name": "删除客户",
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
              "name": "查看用户客户列表",
            },
          ],
          "description": "Ab User Customer Endpoint",
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
              "name": "新增账单类型",
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
              "name": "删除账单类型",
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
              "name": "账单类型分类列表",
            },
          ],
          "description": "Ab Account Category Endpoint",
          "name": "收支分类相关",
        },
        {
          "children": [
            {
              "api": {
                "method": "get",
                "path": "/pass/cityCode/getAll",
                "tags": [
                  "省市区code",
                ],
              },
              "id": "getAllUsingGET",
              "name": "获取省市区code 层级",
            },
            {
              "api": {
                "method": "get",
                "path": "/pass/cityCode/getList",
                "tags": [
                  "省市区code",
                ],
              },
              "id": "getListUsingGET",
              "name": "获取省市区code列表",
            },
          ],
          "description": "Ab City Code Endpoint",
          "name": "省市区code",
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
              "name": "记支出/收入",
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
              "name": "删除账单流水",
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
              "name": "流水详情",
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
              "name": "查询流水记录",
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
              "name": "根据运单任务id查询流水记录",
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
              "name": "根据年月日期 查询列表",
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
              "name": "编辑支出/收入",
            },
          ],
          "description": "Ab Account Book Endpoint",
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
              "name": "新增运单",
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
              "name": "删除运单",
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
              "name": "获取任务详情",
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
              "name": "获取筛选条件",
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
              "name": "运单列表",
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
              "name": "从利润分析跳转运单列表",
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
              "name": "编辑运单",
            },
          ],
          "description": "Ab Freight Task Endpoint",
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
              "name": "首页月度统计",
            },
          ],
          "description": "Home Endpoint",
          "name": "首页相关",
        },
      ]
    `)
  })
})
