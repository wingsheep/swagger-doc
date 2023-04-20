/* eslint-disable */
/* tslint:disable */

import { AddressDeleteRequest, AddressDetailRequest, MixmicroPageTaskAddressDetail } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Address<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 地址簿相关
   * @name DeleteUserAddressUsingPost
   * @summary 删除用户地址簿
   * @request POST:/address/delete
   */
  deleteUserAddressUsingPost = (request: AddressDeleteRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/address/delete`,
      method: "POST",
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 地址簿相关
   * @name ListUsingGet2
   * @summary 查看用户地址簿
   * @request GET:/address/list
   */
  listUsingGet2 = (
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
    },
    params: RequestParams = {},
  ) =>
    this.request<MixmicroPageTaskAddressDetail, void>({
      path: `/address/list`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags 地址簿相关
   * @name VagueQueryUsingGet
   * @summary 模糊搜索
   * @request GET:/address/vagueQuery
   */
  vagueQueryUsingGet = (
    query: {
      /** queryStr */
      queryStr: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<AddressDetailRequest[], void>({
      path: `/address/vagueQuery`,
      method: "GET",
      query: query,
      ...params,
    });
}
