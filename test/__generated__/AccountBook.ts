/* eslint-disable */
/* tslint:disable */

import {
  AccountBookAddRequest,
  AccountBookDeleteRequest,
  AccountBookDetailResponse,
  AccountBookItemResponse,
  AccountBookUpdateRequest,
  MixmicroPageAccountBookItemResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class AccountBook<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 账单流水相关
   * @name AddUsingPost
   * @summary 记支出/收入
   * @request POST:/accountBook/add
   */
  addUsingPost = (request: AccountBookAddRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/accountBook/add`,
      method: "POST",
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 账单流水相关
   * @name DeleteUsingPost
   * @summary 删除账单流水
   * @request POST:/accountBook/delete
   */
  deleteUsingPost = (request: AccountBookDeleteRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/accountBook/delete`,
      method: "POST",
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 账单流水相关
   * @name DetailUsingGet
   * @summary 流水详情
   * @request GET:/accountBook/detail
   */
  detailUsingGet = (
    query?: {
      /**
       * 账单流水id
       * @format int64
       */
      accountBookId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<AccountBookDetailResponse, void>({
      path: `/accountBook/detail`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags 账单流水相关
   * @name ListUsingGet
   * @summary 查询流水记录
   * @request GET:/accountBook/list
   */
  listUsingGet = (
    query?: {
      /** 账目分类列表 */
      categoryNameList?: string[];
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
      /**
       * 开始时间
       * @format date
       */
      startDate?: string;
      /**
       * 结束时间
       * @format date
       */
      endDate?: string;
      /** 账目分类名称 */
      categoryName?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<MixmicroPageAccountBookItemResponse, void>({
      path: `/accountBook/list`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags 账单流水相关
   * @name ListByTaskIdUsingGet
   * @summary 根据运单任务id查询流水记录
   * @request GET:/accountBook/listByTaskId
   */
  listByTaskIdUsingGet = (
    query?: {
      /**
       * 运单id
       * @format int64
       */
      taskId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<AccountBookItemResponse[], void>({
      path: `/accountBook/listByTaskId`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags 账单流水相关
   * @name ListByYearMonthUsingGet
   * @summary 根据年月日期 查询列表
   * @request GET:/accountBook/listByYearMonth
   */
  listByYearMonthUsingGet = (
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
      /** 查询月份 */
      monthDate?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<MixmicroPageAccountBookItemResponse, void>({
      path: `/accountBook/listByYearMonth`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags 账单流水相关
   * @name UpdateUsingPost
   * @summary 编辑支出/收入
   * @request POST:/accountBook/update
   */
  updateUsingPost = (request: AccountBookUpdateRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/accountBook/update`,
      method: "POST",
      body: request,
      type: ContentType.Json,
      ...params,
    });
}
