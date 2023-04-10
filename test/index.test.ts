import { describe, expect, it } from 'vitest'
import { SwaggerApi } from '../src/api/swaggerApi'
describe('should', () => {
  it('exported', async () => {
    // const url = 'https://beta-apisix.hgj.com/sonny-vehicle-account-book/v2/api-docs'
    const mockUrl = 'http://127.0.0.1:3000/v2/example'
    await SwaggerApi.getDocJson(mockUrl)
    // await expect(SwaggerApi.docJson).toMatchInlineSnapshot()
    // await expect(SwaggerApi.tagTree).toMatchInlineSnapshot()
    await expect(SwaggerApi.tagList).toMatchInlineSnapshot(`
      [
        {
          "api": {
            "method": "get",
            "path": "/profit/analysis/customer",
            "tags": [
              "利润分析",
            ],
          },
          "id": "customerProfitAnalysisUsingGET",
          "label": "GET 客户利润列表",
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
          "label": "GET 收入支出分析",
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
          "label": "GET 线路利润列表",
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
          "label": "GET 月度汇总",
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
          "label": "GET 任务利润列表",
        },
        {
          "api": {
            "method": "post",
            "path": "/address/delete",
            "tags": [
              "地址簿相关",
            ],
          },
          "id": "deleteUserAddressUsingPOST",
          "label": "POST 删除用户地址簿",
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
          "label": "GET 查看用户地址簿",
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
          "label": "GET 模糊搜索",
        },
        {
          "api": {
            "method": "post",
            "path": "/customer/add",
            "tags": [
              "客户相关",
            ],
          },
          "id": "addUsingPOST_2",
          "label": "POST 新增客户",
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
          "label": "POST 删除客户",
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
          "label": "GET 查看用户客户列表",
        },
        {
          "api": {
            "method": "post",
            "path": "/accountCategory/add",
            "tags": [
              "收支分类相关",
            ],
          },
          "id": "addAccountCategoryUsingPOST",
          "label": "POST 新增账单类型",
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
          "label": "POST 删除账单类型",
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
          "label": "GET 账单类型分类列表",
        },
        {
          "api": {
            "method": "post",
            "path": "/accountBook/add",
            "tags": [
              "账单流水相关",
            ],
          },
          "id": "addUsingPOST",
          "label": "POST 记支出/收入",
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
          "label": "POST 删除账单流水",
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
          "label": "GET 流水详情",
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
          "label": "GET 查询流水记录",
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
          "label": "GET 根据运单任务id查询流水记录",
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
          "label": "GET 根据年月日期 查询列表",
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
          "label": "POST 编辑支出/收入",
        },
        {
          "api": {
            "method": "post",
            "path": "/freightTask/add",
            "tags": [
              "运单任务相关",
            ],
          },
          "id": "addUsingPOST_1",
          "label": "POST 新增运单",
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
          "label": "POST 删除运单",
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
          "label": "GET 获取任务详情",
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
          "label": "GET 获取筛选条件",
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
          "label": "GET 运单列表",
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
          "label": "GET 从利润分析跳转运单列表",
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
          "label": "POST 编辑运单",
        },
        {
          "api": {
            "method": "get",
            "path": "/home/monthlySummary",
            "tags": [
              "首页相关",
            ],
          },
          "id": "monthlySummaryUsingGET",
          "label": "GET 首页月度统计",
        },
      ]
    `)
    // expect(SwaggerApi.getApiDetail('/accountBook/add', 'post')).toMatchInlineSnapshot()
    // expect(SwaggerApi.getApiDetail('/freightTask/add', 'post')).toMatchInlineSnapshot()
  })
})
