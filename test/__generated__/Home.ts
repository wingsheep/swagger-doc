/* eslint-disable */
/* tslint:disable */

import { MonthlySummaryHomeResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Home<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 首页相关
   * @name MonthlySummaryUsingGet
   * @summary 首页月度统计
   * @request GET:/home/monthlySummary
   */
  monthlySummaryUsingGet = (params: RequestParams = {}) =>
    this.request<MonthlySummaryHomeResponse, void>({
      path: `/home/monthlySummary`,
      method: "GET",
      ...params,
    });
}
