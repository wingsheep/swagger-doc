/* eslint-disable */
/* tslint:disable */

import {
  AccountBookAnalysisResponse,
  MonthlySummaryResponse,
  ProfitAnalysisCustomerResponse,
  ProfitAnalysisLineResponse,
  ProfitAnalysisTaskResponse,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Profit<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 利润分析
   * @name CustomerProfitAnalysisUsingGet
   * @summary 客户利润列表
   * @request GET:/profit/analysis/customer
   */
  customerProfitAnalysisUsingGet = (
    query?: {
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
    this.request<ProfitAnalysisCustomerResponse, void>({
      path: `/profit/analysis/customer`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags 利润分析
   * @name IncomeProfitAnalysisUsingGet
   * @summary 收入支出分析
   * @request GET:/profit/analysis/income
   */
  incomeProfitAnalysisUsingGet = (
    query?: {
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
      /**
       * 类别 0:收入 1:支出
       * @format int32
       */
      type?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<AccountBookAnalysisResponse, void>({
      path: `/profit/analysis/income`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags 利润分析
   * @name LineProfitAnalysisUsingGet
   * @summary 线路利润列表
   * @request GET:/profit/analysis/line
   */
  lineProfitAnalysisUsingGet = (
    query?: {
      /**
       * 路线排序 0:按市  1:按区
       * @format int32
       */
      sortType?: number;
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
    this.request<ProfitAnalysisLineResponse, void>({
      path: `/profit/analysis/line`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags 利润分析
   * @name DetailUsingGet1
   * @summary 月度汇总
   * @request GET:/profit/analysis/monthlySummary
   */
  detailUsingGet1 = (params: RequestParams = {}) =>
    this.request<MonthlySummaryResponse, void>({
      path: `/profit/analysis/monthlySummary`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags 利润分析
   * @name TaskProfitAnalysisUsingGet
   * @summary 任务利润列表
   * @request GET:/profit/analysis/task
   */
  taskProfitAnalysisUsingGet = (
    query?: {
      /**
       * 路线排序 0:按金额 1:按时间 2:按利润率
       * @format int32
       */
      sortType?: number;
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
    this.request<ProfitAnalysisTaskResponse, void>({
      path: `/profit/analysis/task`,
      method: "GET",
      query: query,
      ...params,
    });
}
