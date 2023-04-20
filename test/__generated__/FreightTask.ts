/* eslint-disable */
/* tslint:disable */

import {
  FreightTaskAddRequest,
  FreightTaskDeleteRequest,
  FreightTaskDetailResponse,
  FreightTaskQueryResponse,
  FreightTaskUpdateRequest,
  MixmicroPageFreightTaskListResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class FreightTask<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 运单任务相关
   * @name AddUsingPost1
   * @summary 新增运单
   * @request POST:/freightTask/add
   */
  addUsingPost1 = (request: FreightTaskAddRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/freightTask/add`,
      method: "POST",
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 运单任务相关
   * @name DeleteUsingPost1
   * @summary 删除运单
   * @request POST:/freightTask/delete
   */
  deleteUsingPost1 = (request: FreightTaskDeleteRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/freightTask/delete`,
      method: "POST",
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 运单任务相关
   * @name GetDetailUsingGet
   * @summary 获取任务详情
   * @request GET:/freightTask/getDetail
   */
  getDetailUsingGet = (
    query?: {
      /**
       * 任务id
       * @format int64
       */
      taskId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<FreightTaskDetailResponse, void>({
      path: `/freightTask/getDetail`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags 运单任务相关
   * @name GetQueryUsingGet
   * @summary 获取筛选条件
   * @request GET:/freightTask/getQuery
   */
  getQueryUsingGet = (params: RequestParams = {}) =>
    this.request<FreightTaskQueryResponse, void>({
      path: `/freightTask/getQuery`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags 运单任务相关
   * @name ListUsingGet1
   * @summary 运单列表
   * @request GET:/freightTask/list
   */
  listUsingGet1 = (
    query?: {
      /** 起始地城市列表 */
      originCity?: string[];
      /** 目的地城市列表 */
      destinationCity?: string[];
      /** 客户id列表 */
      customerIds?: number[];
      /** 货物名称列表 */
      goodsNameList?: string[];
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
    },
    params: RequestParams = {},
  ) =>
    this.request<MixmicroPageFreightTaskListResponse, void>({
      path: `/freightTask/list`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags 运单任务相关
   * @name ListFromAnalysisUsingGet
   * @summary 从利润分析跳转运单列表
   * @request GET:/freightTask/listFromAnalysis
   */
  listFromAnalysisUsingGet = (
    query?: {
      /** 任务id列表  */
      taskIds?: number[];
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
       * 客户id
       * @format int64
       */
      customerId?: number;
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
    },
    params: RequestParams = {},
  ) =>
    this.request<MixmicroPageFreightTaskListResponse, void>({
      path: `/freightTask/listFromAnalysis`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags 运单任务相关
   * @name UpdateUsingPost1
   * @summary 编辑运单
   * @request POST:/freightTask/update
   */
  updateUsingPost1 = (request: FreightTaskUpdateRequest, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/freightTask/update`,
      method: "POST",
      body: request,
      type: ContentType.Json,
      ...params,
    });
}
