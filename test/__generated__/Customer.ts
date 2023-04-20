/* eslint-disable */
/* tslint:disable */

import { CustomerAddRequest, CustomerDeleteRequest, MixmicroPageCustomerListResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Customer<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 客户相关
   * @name AddUsingPost2
   * @summary 新增客户
   * @request POST:/customer/add
   */
  addUsingPost2 = (request: CustomerAddRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/customer/add`,
      method: "POST",
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 客户相关
   * @name DeleteUsingPost2
   * @summary 删除客户
   * @request POST:/customer/delete
   */
  deleteUsingPost2 = (request: CustomerDeleteRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/customer/delete`,
      method: "POST",
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 客户相关
   * @name ListUsingGet3
   * @summary 查看用户客户列表
   * @request GET:/customer/list
   */
  listUsingGet3 = (
    query?: {
      /**
       * 分页 页码
       * @format int32
       */
      pageNo?: number;
      /**
       * 分页 每页数量
       * @format int32
       */
      pageSize?: number;
      /** 搜索参数 */
      queryStr?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<MixmicroPageCustomerListResponse, void>({
      path: `/customer/list`,
      method: "GET",
      query: query,
      ...params,
    });
}
