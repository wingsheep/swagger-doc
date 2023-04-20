/* eslint-disable */
/* tslint:disable */

import { CategoryAddRequest, CategoryDeleteRequest, CategoryListResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class AccountCategory<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 收支分类相关
   * @name AddAccountCategoryUsingPost
   * @summary 新增账单类型
   * @request POST:/accountCategory/add
   */
  addAccountCategoryUsingPost = (categoryAddRequest: CategoryAddRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/accountCategory/add`,
      method: "POST",
      body: categoryAddRequest,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 收支分类相关
   * @name DeleteAccountCategoryUsingPost
   * @summary 删除账单类型
   * @request POST:/accountCategory/delete
   */
  deleteAccountCategoryUsingPost = (categoryDeleteRequest: CategoryDeleteRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/accountCategory/delete`,
      method: "POST",
      body: categoryDeleteRequest,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 收支分类相关
   * @name AccountCategoryListUsingGet
   * @summary 账单类型分类列表
   * @request GET:/accountCategory/list
   */
  accountCategoryListUsingGet = (
    query?: {
      /**
       * 类别 0:收入 1:支出 不传则全部
       * @format int32
       */
      type?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<CategoryListResponse[], void>({
      path: `/accountCategory/list`,
      method: "GET",
      query: query,
      ...params,
    });
}
