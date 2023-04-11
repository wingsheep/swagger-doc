/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** AccountBookAddRequest */
export interface AccountBookAddRequest {
  /**
   * 金额 (单位分)
   * @format int64
   * @example 1000
   */
  amount?: number;
  /**
   * 类型名称
   * @example "加油"
   */
  categoryName?: string;
  /**
   * 时间
   * @format date
   * @example "yyyy-MM-dd"
   */
  occurrenceTime?: string;
  /**
   * 备注
   * @example "买的燃油宝"
   */
  remarks?: string;
  /**
   * 运单id
   * @format int64
   * @example 1750148943159
   */
  taskId?: number;
  /**
   * 类别 0:收入 1:支出
   * @format int32
   * @example 1
   */
  type?: number;
}

/** AccountBookAnalysisResponse */
export interface AccountBookAnalysisResponse {
  /** 分类列表 */
  records?: PieChartItemResponse[];
  /**
   * 总收支
   * @format int64
   * @example 100
   */
  totalAmount?: number;
}

/** AccountBookDeleteRequest */
export interface AccountBookDeleteRequest {
  /**
   * 账单流水id
   * @format int64
   * @example 1750148943159
   */
  accountBookId?: number;
}

/** AccountBookDetailResponse */
export interface AccountBookDetailResponse {
  /**
   * 账单流水id
   * @format int64
   * @example 1750148943159
   */
  accountBookId?: number;
  /**
   * 金额 (单位分)
   * @format int64
   * @example 1000
   */
  amount?: number;
  /**
   * 类型名称
   * @example "加油"
   */
  categoryName?: string;
  /**
   * 时间
   * @format date
   * @example "yyyy-MM-dd HH:mm:ss"
   */
  occurrenceTime?: string;
  /**
   * 备注
   * @example "买的燃油宝"
   */
  remarks?: string;
  /**
   * 任务目的地
   * @example "南京市"
   */
  taskEndCity?: string;
  /**
   * 运单id
   * @format int64
   * @example 1750148943159
   */
  taskId?: number;
  /**
   * 任务起始地
   * @example "苏州市"
   */
  taskStartCity?: string;
  /**
   * 任务开始时间
   * @format date
   * @example "2023-02-01"
   */
  taskStartDate?: string;
  /**
   * 类别 0:收入 1:支出
   * @format int32
   * @example 1
   */
  type?: number;
}

/** AccountBookItemResponse */
export interface AccountBookItemResponse {
  /**
   * 账单流水id
   * @format int64
   * @example 1750148943159
   */
  accountBookId?: number;
  /**
   * 金额 (单位分)
   * @format int64
   * @example 1000
   */
  amount?: number;
  /**
   * 类型名称
   * @example "加油"
   */
  categoryName?: string;
  /**
   * 时间
   * @format date
   * @example "yyyy-MM-dd HH:mm:ss"
   */
  occurrenceTime?: string;
  /**
   * 备注
   * @example "买的燃油宝"
   */
  remarks?: string;
  /**
   * 运单id
   * @format int64
   * @example 1750148943159
   */
  taskId?: number;
  /**
   * 类别 0:收入 1:支出
   * @format int32
   * @example 1
   */
  type?: number;
}

/** AccountBookUpdateRequest */
export interface AccountBookUpdateRequest {
  /**
   * 账单流水id
   * @format int64
   * @example 1750148943159
   */
  accountBookId?: number;
  /**
   * 金额 (单位分)
   * @format int64
   * @example 1000
   */
  amount?: number;
  /**
   * 类型名称
   * @example "加油"
   */
  categoryName?: string;
  /**
   * 时间
   * @format date-time
   * @example "yyyy-MM-dd HH:mm:ss"
   */
  occurrenceTime?: string;
  /**
   * 备注
   * @example "买的燃油宝"
   */
  remarks?: string;
  /**
   * 0:收入 1:支出
   * @format int32
   * @min 0
   * @exclusiveMin false
   * @max 9223372036854776000
   * @exclusiveMax false
   * @example 1750148943159
   */
  type?: number;
}

/** AddressDeleteRequest */
export interface AddressDeleteRequest {
  /**
   * 地址簿id
   * @format int64
   */
  addressId?: number;
}

/** AddressDetailRequest */
export interface AddressDetailRequest {
  /** 详细地址 */
  address?: string;
  /**
   * 地址id
   * @format int64
   */
  addressId?: number;
  /** lat<纬度>,lng<经度> 经纬度拼起来,逗号分隔 */
  location?: string;
  /** 地址标题 */
  title?: string;
}

/** AddressDetailResponse */
export interface AddressDetailResponse {
  /** 详细地址 */
  address?: string;
  /**
   * 地址id
   * @format int64
   */
  addressId?: number;
  /** 市 */
  city?: string;
  /** 省 */
  province?: string;
  /** 区 */
  region?: string;
  /** 地址标题 */
  title?: string;
}

/** CategoryAddRequest */
export interface CategoryAddRequest {
  /** 分类名称 */
  categoryName?: string;
  /**
   * 类别 0:收入 1:支出
   * @format int32
   * @example 1
   */
  type?: number;
}

/** CategoryDeleteRequest */
export interface CategoryDeleteRequest {
  /**
   * 分类id
   * @format int64
   */
  categoryId?: number;
}

/** CategoryListResponse */
export interface CategoryListResponse {
  /**
   * 账目分类id
   * @format int64
   */
  categoryId?: number;
  /** 账目分类名称 */
  categoryName?: string;
  /**
   * 分类类型 0:基础分类 1:用户新增分类
   * @format int32
   */
  categoryType?: number;
  /** 父id */
  pid?: string;
  /**
   * 0:收入 1:支出
   * @format int32
   */
  type?: number;
}

/** CustomerAddRequest */
export interface CustomerAddRequest {
  /** 客户名称 */
  customerName?: string;
}

/** CustomerDeleteRequest */
export interface CustomerDeleteRequest {
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;
}

/** CustomerListResponse */
export interface CustomerListResponse {
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;
  /** 客户名称 */
  customerName?: string;
}

/** CustomerProfitResponse */
export interface CustomerProfitResponse {
  /**
   * 平均利润(分)
   * @format int64
   * @example 200000
   */
  averageProfit?: number;
  /**
   * 客户id
   * @format int64
   * @example 200000
   */
  customerId?: number;
  /**
   * 客户名称
   * @example 200000
   */
  customerName?: string;
  /**
   * 任务数量
   * @format int32
   * @example 2
   */
  taskAmount?: number;
  /**
   * 总利润
   * @format int64
   * @example 200000
   */
  totalProfit?: number;
}

/** CustomerResponse */
export interface CustomerResponse {
  /**
   * 平均利润(分)
   * @format int64
   * @example 200000
   */
  averageProfit?: number;
  /**
   * 客户名称
   * @example "张总"
   */
  customerName?: string;
  /**
   * 次数
   * @format int32
   */
  times?: number;
}

/** FreightTaskAddRequest */
export interface FreightTaskAddRequest {
  /** 记流水参数 */
  accountBookList?: AccountBookAddRequest[];
  /**
   * 客户id
   * @format int64
   * @example 1559431138848817400
   */
  customerId?: number;
  /** 目的地地理位置信息 */
  destinationDetail?: AddressDetailRequest;
  /** 文件id列表 */
  fileIds?: string[];
  /**
   * 货物名称
   * @example "钢筋5斤"
   */
  goodsName?: string;
  /** 起始地地理位置信息 */
  originDetail?: AddressDetailRequest;
  /**
   * 备注
   * @example "给王总送的货"
   */
  remarks?: string;
  /**
   * 开始时间
   * @format date
   * @example "2023-02-10"
   */
  startDate?: string;
  /**
   * 业务单号
   * @example "YD1559431138848817535"
   */
  tradeNo?: string;
}

/** FreightTaskDeleteRequest */
export interface FreightTaskDeleteRequest {
  /**
   * 任务id
   * @format int64
   * @example 1559431138848817400
   */
  taskId?: number;
}

/** FreightTaskDetailResponse */
export interface FreightTaskDetailResponse {
  /**
   * 任务id
   * @format int64
   * @example 1559431138848817400
   */
  customerId?: number;
  /**
   * 客户名称
   * @example "王总"
   */
  customerName?: string;
  /** 目的地地理位置信息 */
  destinationDetail?: AddressDetailResponse;
  /**
   * 支出(分)
   * @format int64
   * @example 10000
   */
  expenditure?: number;
  /** 照片列表 */
  fileIds?: string[];
  /**
   * 货物名称
   * @example "钢筋5斤"
   */
  goodsName?: string;
  /**
   * 收入 (分)
   * @format int64
   * @example 18000
   */
  income?: number;
  /** 起始地地理位置信息 */
  originDetail?: AddressDetailResponse;
  /**
   * 利润(分)
   * @format int64
   * @example 80000
   */
  profit?: number;
  /**
   * 利润率
   * @example 78
   */
  profitRate?: string;
  /**
   * 备注
   * @example "给王总送的货"
   */
  remarks?: string;
  /**
   * 开始时间
   * @format date
   * @example "2023-02-10"
   */
  startDate?: string;
  /**
   * 任务id
   * @format int64
   * @example 1559431138848817400
   */
  taskId?: number;
  /**
   * 任务编号
   * @example "YD1559431138848817535"
   */
  taskNo?: string;
  /**
   * 业务单号
   * @example "JDZFB1559431138848817535"
   */
  tradeNo?: string;
}

/** FreightTaskListResponse */
export interface FreightTaskListResponse {
  /**
   * 客户名称
   * @example "王总"
   */
  customerName?: string;
  /** 目的地地理位置信息 */
  destinationDetail?: AddressDetailResponse;
  /**
   * 支出(分)
   * @format int64
   * @example 10000
   */
  expenditure?: number;
  /**
   * 货物名称
   * @example "钢筋5斤"
   */
  goodsName?: string;
  /**
   * 收入 (分)
   * @format int64
   * @example 18000
   */
  income?: number;
  /** 起始地地理位置信息 */
  originDetail?: AddressDetailResponse;
  /**
   * 利润(分)
   * @format int64
   * @example 80000
   */
  profit?: number;
  /**
   * 利润率
   * @example 78
   */
  profitRate?: string;
  /**
   * 备注
   * @example "给王总送的货"
   */
  remarks?: string;
  /**
   * 开始时间
   * @format date
   * @example "2023-02-10"
   */
  startDate?: string;
  /**
   * 任务id
   * @format int64
   * @example 1559431138848817400
   */
  taskId?: number;
  /**
   * 任务编号
   * @example "YD1559431138848817535"
   */
  taskNo?: string;
  /**
   * 业务单号
   * @example "JDZFB1559431138848817535"
   */
  tradeNo?: string;
}

/** FreightTaskQueryResponse */
export interface FreightTaskQueryResponse {
  /** 客户筛选条件 */
  customerList?: CustomerListResponse[];
  /**
   * 目的地城市列表
   * @example 130504
   */
  destinationCity?: string[];
  /** 货物筛选条件 */
  goodsName?: string[];
  /**
   * 起始地城市列表
   * @example 130504
   */
  originCity?: string[];
}

/** FreightTaskUpdateRequest */
export interface FreightTaskUpdateRequest {
  /**
   * 客户id
   * @format int64
   * @example 1559431138848817400
   */
  customerId?: number;
  /** 目的地地理位置信息 */
  destinationDetail?: AddressDetailRequest;
  /** 文件id列表 */
  fileIds?: string[];
  /**
   * 货物名称
   * @example "钢筋5斤"
   */
  goodsName?: string;
  /** 起始地地理位置信息 */
  originDetail?: AddressDetailRequest;
  /**
   * 备注
   * @example "给王总送的货"
   */
  remarks?: string;
  /**
   * 开始时间
   * @format date
   * @example "2023-02-10"
   */
  startDate?: string;
  /**
   * 任务id
   * @format int64
   * @example "YD1559431138848817535"
   */
  taskId?: number;
  /**
   * 业务单号
   * @example "YD1559431138848817535"
   */
  tradeNo?: string;
}

/** LineProfitResponse */
export interface LineProfitResponse {
  /**
   * 平均利润(分)
   * @format int64
   * @example 200000
   */
  averageProfit?: number;
  /**
   * 目的地 城市
   * @example "南京市"
   */
  destinationCity?: string;
  /**
   * 目的地 区
   * @example "鼓楼区"
   */
  destinationRegion?: string;
  /**
   * 起始地 城市
   * @example "苏州市"
   */
  originCity?: string;
  /**
   * 起始地 区
   * @example "工业园区"
   */
  originRegion?: string;
  /**
   * 总利润
   * @format int64
   * @example 200000
   */
  profit?: number;
  /**
   * 任务数量
   * @format int32
   * @example 2
   */
  taskAmount?: number;
  /** 任务id列表 */
  taskIds?: string[];
}

/** LineResponse */
export interface LineResponse {
  /**
   * 平均利润(分)
   * @format int64
   * @example 200000
   */
  averageProfit?: number;
  /**
   * 目的地城市
   * @example "南京市"
   */
  destinationCity?: string;
  /**
   * 起始地城市
   * @example "苏州市"
   */
  originCity?: string;
  /**
   * 总利润
   * @format int64
   * @example 200000
   */
  profit?: number;
  /**
   * 次数
   * @format int32
   */
  times?: number;
}

/** MonthlySummaryCustomerResponse */
export interface MonthlySummaryCustomerResponse {
  /**
   * 客户数量
   * @format int32
   */
  customerAmount?: number;
  /** 利润均值最低客户 */
  leastProfitCustomer?: CustomerResponse;
  /** 利润均值最高客户 */
  mostProfitCustomer?: CustomerResponse;
}

/** MonthlySummaryHomeResponse */
export interface MonthlySummaryHomeResponse {
  /**
   * 支出(分)
   * @format int64
   * @example 10000
   */
  expenditure?: number;
  /**
   * 是否有任务,没任务则显示 示例信息
   * @example false
   */
  hasTask?: boolean;
  /**
   * 收入(分)
   * @format int64
   * @example 10000
   */
  income?: number;
  /** 利润均值最高路线 */
  mostProfitLine?: LineResponse;
  /**
   * 利润
   * @format int64
   * @example 10000
   */
  profit?: number;
  /**
   * 统计月份
   * @example 5
   */
  summaryMonth?: string;
}

/** MonthlySummaryLineResponse */
export interface MonthlySummaryLineResponse {
  /** 利润均值最低路线 */
  leastProfitLine?: LineResponse;
  /**
   * 线路数量
   * @format int32
   */
  lineAmount?: number;
  /** 利润均值最高路线 */
  mostProfitLine?: LineResponse;
}

/** MonthlySummaryResponse */
export interface MonthlySummaryResponse {
  /** 客户报告 */
  customerResponse?: MonthlySummaryCustomerResponse;
  /**
   * 支出(分)
   * @format int64
   * @example 10000
   */
  expenditure?: number;
  /**
   * 收入(分)
   * @format int64
   * @example 10000
   */
  income?: number;
  /** 线路报告 */
  lineResponse?: MonthlySummaryLineResponse;
  /**
   * 利润
   * @format int64
   * @example 10000
   */
  profit?: number;
  /**
   * 统计月份
   * @example "2023年2月"
   */
  summaryMonth?: string;
  /** 任务报告 */
  taskResponse?: MonthlySummaryTaskResponse;
}

/** MonthlySummaryTaskResponse */
export interface MonthlySummaryTaskResponse {
  /** 利润率最低任务 */
  leastProfitRateTasK?: TaskResponse;
  /** 利润最低任务 */
  leastProfitTask?: TaskResponse;
  /** 利润率最高任务 */
  mostProfitRateTasK?: TaskResponse;
  /** 利润最高任务 */
  mostProfitTask?: TaskResponse;
  /**
   * 任务数量
   * @format int32
   */
  taskAmount?: number;
}

/** PieChartItemResponse */
export interface PieChartItemResponse {
  /**
   * 总计 (分)
   * @format int64
   * @example 1257100
   */
  amount?: number;
  /**
   * 分类名称
   * @example "加油"
   */
  categoryName?: string;
  /** 其余列表 */
  categoryNameList?: string[];
}

/** ProfitAnalysisCustomerResponse */
export interface ProfitAnalysisCustomerResponse {
  /**
   * 支出(分)
   * @format int64
   * @example 10000
   */
  expenditure?: number;
  /**
   * 收入 (分)
   * @format int64
   * @example 18000
   */
  income?: number;
  /** 利润分析数据 */
  pageResponse?: CustomerProfitResponse[];
  /**
   * 利润(分)
   * @format int64
   * @example 200000
   */
  profit?: number;
  /**
   * 总条数
   * @format int32
   * @example 100
   */
  total?: number;
}

/** ProfitAnalysisLineResponse */
export interface ProfitAnalysisLineResponse {
  /**
   * 支出(分)
   * @format int64
   * @example 10000
   */
  expenditure?: number;
  /**
   * 收入 (分)
   * @format int64
   * @example 18000
   */
  income?: number;
  /** 利润分析数据 */
  pageResponse?: LineProfitResponse[];
  /**
   * 利润(分)
   * @format int64
   * @example 200000
   */
  profit?: number;
  /**
   * 总条数
   * @format int32
   * @example 100
   */
  total?: number;
}

/** ProfitAnalysisTaskResponse */
export interface ProfitAnalysisTaskResponse {
  /**
   * 支出(分)
   * @format int64
   * @example 10000
   */
  expenditure?: number;
  /**
   * 收入 (分)
   * @format int64
   * @example 18000
   */
  income?: number;
  /** 利润分析数据 */
  pageResponse?: TaskProfitResponse[];
  /**
   * 利润(分)
   * @format int64
   * @example 200000
   */
  profit?: number;
  /**
   * 总条数
   * @format int32
   * @example 100
   */
  total?: number;
}

/** TaskAddressDetail */
export interface TaskAddressDetail {
  /** 详细地址 */
  address?: string;
  /**
   * 地址簿id
   * @format int64
   */
  addressId?: number;
  /** 市 */
  city?: string;
  /** 省 */
  province?: string;
  /** 区 */
  region?: string;
  /** 标题 */
  title?: string;
}

/** TaskProfitResponse */
export interface TaskProfitResponse {
  /** 目的地地理位置信息 */
  destinationDetail?: AddressDetailResponse;
  /**
   * 货物名称
   * @example "钢筋"
   */
  goodsName?: string;
  /** 起始地地理位置信息 */
  originDetail?: AddressDetailResponse;
  /**
   * 利润(分)
   * @format int64
   * @example 200000
   */
  profit?: number;
  /**
   * 利润率
   * @example 78
   */
  profitRate?: string;
  /**
   * 任务开始时间
   * @format date
   * @example "yyyy-MM-dd"
   */
  startDate?: string;
  /**
   * 任务id
   * @format int64
   * @example 17545616598741464
   */
  taskId?: number;
}

/** TaskResponse */
export interface TaskResponse {
  /**
   * 目的地地址
   * @example "夫子庙"
   */
  destinationAddress?: string;
  /**
   * 目的地城市
   * @example "南京市"
   */
  destinationCity?: string;
  /**
   * 起始地地址
   * @example "腾飞苏州创新园"
   */
  originAddress?: string;
  /**
   * 起始地城市
   * @example "苏州市"
   */
  originCity?: string;
  /**
   * 利润(分)
   * @format int64
   * @example 200000
   */
  profit?: number;
  /**
   * 利润率
   * @example 81.22
   */
  profitRate?: string;
  /**
   * 开始时间
   * @format date
   * @example "yyyy-MM-dd"
   */
  startDate?: string;
}

/** MixmicroPage«AccountBookItemResponse» */
export interface MixmicroPageAccountBookItemResponse {
  /** @format int32 */
  current?: number;
  records?: AccountBookItemResponse[];
  /** @format int32 */
  size?: number;
  /** @format int32 */
  total?: number;
}

/** MixmicroPage«CustomerListResponse» */
export interface MixmicroPageCustomerListResponse {
  /** @format int32 */
  current?: number;
  records?: CustomerListResponse[];
  /** @format int32 */
  size?: number;
  /** @format int32 */
  total?: number;
}

/** MixmicroPage«FreightTaskListResponse» */
export interface MixmicroPageFreightTaskListResponse {
  /** @format int32 */
  current?: number;
  records?: FreightTaskListResponse[];
  /** @format int32 */
  size?: number;
  /** @format int32 */
  total?: number;
}

/** MixmicroPage«TaskAddressDetail» */
export interface MixmicroPageTaskAddressDetail {
  /** @format int32 */
  current?: number;
  records?: TaskAddressDetail[];
  /** @format int32 */
  size?: number;
  /** @format int32 */
  total?: number;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "//beta-apisix.hgj.com/sonny-vehicle-account-book/",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Workshop Module's Apis
 * @version ${project.version}
 * @license MIT (https://choosealicense.com/licenses/mit/)
 * @baseUrl //beta-apisix.hgj.com/sonny-vehicle-account-book/
 * @contact YunLSP+ Developer <developer@yunlsp.com> (http://developer.yunlsp.com)
 *
 * Workshop Module's Apis Documents
 */
export class Api<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  accountBook = {
    /**
     * No description
     *
     * @tags 账单流水相关
     * @name AddUsingPost
     * @summary 记支出/收入
     * @request POST:/accountBook/add
     */
    addUsingPost: (request: AccountBookAddRequest, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/accountBook/add`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 账单流水相关
     * @name DeleteUsingPost
     * @summary 删除账单流水
     * @request POST:/accountBook/delete
     */
    deleteUsingPost: (request: AccountBookDeleteRequest, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/accountBook/delete`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 账单流水相关
     * @name DetailUsingGet
     * @summary 流水详情
     * @request GET:/accountBook/detail
     */
    detailUsingGet: (
      query?: {
        /**
         * 账单流水id
         * @format int64
         */
        accountBookId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<AccountBookDetailResponse, void>({
        path: `/accountBook/detail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 账单流水相关
     * @name ListUsingGet
     * @summary 查询流水记录
     * @request GET:/accountBook/list
     */
    listUsingGet: (
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
      this.http.request<MixmicroPageAccountBookItemResponse, void>({
        path: `/accountBook/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 账单流水相关
     * @name ListByTaskIdUsingGet
     * @summary 根据运单任务id查询流水记录
     * @request GET:/accountBook/listByTaskId
     */
    listByTaskIdUsingGet: (
      query?: {
        /**
         * 运单id
         * @format int64
         */
        taskId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<AccountBookItemResponse[], void>({
        path: `/accountBook/listByTaskId`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 账单流水相关
     * @name ListByYearMonthUsingGet
     * @summary 根据年月日期 查询列表
     * @request GET:/accountBook/listByYearMonth
     */
    listByYearMonthUsingGet: (
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
      this.http.request<MixmicroPageAccountBookItemResponse, void>({
        path: `/accountBook/listByYearMonth`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 账单流水相关
     * @name UpdateUsingPost
     * @summary 编辑支出/收入
     * @request POST:/accountBook/update
     */
    updateUsingPost: (request: AccountBookUpdateRequest, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/accountBook/update`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),
  };
  accountCategory = {
    /**
     * No description
     *
     * @tags 收支分类相关
     * @name AddAccountCategoryUsingPost
     * @summary 新增账单类型
     * @request POST:/accountCategory/add
     */
    addAccountCategoryUsingPost: (categoryAddRequest: CategoryAddRequest, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/accountCategory/add`,
        method: "POST",
        body: categoryAddRequest,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收支分类相关
     * @name DeleteAccountCategoryUsingPost
     * @summary 删除账单类型
     * @request POST:/accountCategory/delete
     */
    deleteAccountCategoryUsingPost: (categoryDeleteRequest: CategoryDeleteRequest, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/accountCategory/delete`,
        method: "POST",
        body: categoryDeleteRequest,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收支分类相关
     * @name AccountCategoryListUsingGet
     * @summary 账单类型分类列表
     * @request GET:/accountCategory/list
     */
    accountCategoryListUsingGet: (
      query?: {
        /**
         * 类别 0:收入 1:支出 不传则全部
         * @format int32
         */
        type?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<CategoryListResponse[], void>({
        path: `/accountCategory/list`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  address = {
    /**
     * No description
     *
     * @tags 地址簿相关
     * @name DeleteUserAddressUsingPost
     * @summary 删除用户地址簿
     * @request POST:/address/delete
     */
    deleteUserAddressUsingPost: (request: AddressDeleteRequest, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/address/delete`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 地址簿相关
     * @name ListUsingGet2
     * @summary 查看用户地址簿
     * @request GET:/address/list
     */
    listUsingGet2: (
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
      this.http.request<MixmicroPageTaskAddressDetail, void>({
        path: `/address/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 地址簿相关
     * @name VagueQueryUsingGet
     * @summary 模糊搜索
     * @request GET:/address/vagueQuery
     */
    vagueQueryUsingGet: (
      query: {
        /** queryStr */
        queryStr: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<AddressDetailRequest[], void>({
        path: `/address/vagueQuery`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  customer = {
    /**
     * No description
     *
     * @tags 客户相关
     * @name AddUsingPost2
     * @summary 新增客户
     * @request POST:/customer/add
     */
    addUsingPost2: (request: CustomerAddRequest, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/customer/add`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户相关
     * @name DeleteUsingPost2
     * @summary 删除客户
     * @request POST:/customer/delete
     */
    deleteUsingPost2: (request: CustomerDeleteRequest, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/customer/delete`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户相关
     * @name ListUsingGet3
     * @summary 查看用户客户列表
     * @request GET:/customer/list
     */
    listUsingGet3: (
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
      this.http.request<MixmicroPageCustomerListResponse, void>({
        path: `/customer/list`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  freightTask = {
    /**
     * No description
     *
     * @tags 运单任务相关
     * @name AddUsingPost1
     * @summary 新增运单
     * @request POST:/freightTask/add
     */
    addUsingPost1: (request: FreightTaskAddRequest, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/freightTask/add`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运单任务相关
     * @name DeleteUsingPost1
     * @summary 删除运单
     * @request POST:/freightTask/delete
     */
    deleteUsingPost1: (request: FreightTaskDeleteRequest, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/freightTask/delete`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运单任务相关
     * @name GetDetailUsingGet
     * @summary 获取任务详情
     * @request GET:/freightTask/getDetail
     */
    getDetailUsingGet: (
      query?: {
        /**
         * 任务id
         * @format int64
         */
        taskId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<FreightTaskDetailResponse, void>({
        path: `/freightTask/getDetail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运单任务相关
     * @name GetQueryUsingGet
     * @summary 获取筛选条件
     * @request GET:/freightTask/getQuery
     */
    getQueryUsingGet: (params: RequestParams = {}) =>
      this.http.request<FreightTaskQueryResponse, void>({
        path: `/freightTask/getQuery`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运单任务相关
     * @name ListUsingGet1
     * @summary 运单列表
     * @request GET:/freightTask/list
     */
    listUsingGet1: (
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
      this.http.request<MixmicroPageFreightTaskListResponse, void>({
        path: `/freightTask/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运单任务相关
     * @name ListFromAnalysisUsingGet
     * @summary 从利润分析跳转运单列表
     * @request GET:/freightTask/listFromAnalysis
     */
    listFromAnalysisUsingGet: (
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
      this.http.request<MixmicroPageFreightTaskListResponse, void>({
        path: `/freightTask/listFromAnalysis`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运单任务相关
     * @name UpdateUsingPost1
     * @summary 编辑运单
     * @request POST:/freightTask/update
     */
    updateUsingPost1: (request: FreightTaskUpdateRequest, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/freightTask/update`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),
  };
  home = {
    /**
     * No description
     *
     * @tags 首页相关
     * @name MonthlySummaryUsingGet
     * @summary 首页月度统计
     * @request GET:/home/monthlySummary
     */
    monthlySummaryUsingGet: (params: RequestParams = {}) =>
      this.http.request<MonthlySummaryHomeResponse, void>({
        path: `/home/monthlySummary`,
        method: "GET",
        ...params,
      }),
  };
  profit = {
    /**
     * No description
     *
     * @tags 利润分析
     * @name CustomerProfitAnalysisUsingGet
     * @summary 客户利润列表
     * @request GET:/profit/analysis/customer
     */
    customerProfitAnalysisUsingGet: (
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
      this.http.request<ProfitAnalysisCustomerResponse, void>({
        path: `/profit/analysis/customer`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 利润分析
     * @name IncomeProfitAnalysisUsingGet
     * @summary 收入支出分析
     * @request GET:/profit/analysis/income
     */
    incomeProfitAnalysisUsingGet: (
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
      this.http.request<AccountBookAnalysisResponse, void>({
        path: `/profit/analysis/income`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 利润分析
     * @name LineProfitAnalysisUsingGet
     * @summary 线路利润列表
     * @request GET:/profit/analysis/line
     */
    lineProfitAnalysisUsingGet: (
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
      this.http.request<ProfitAnalysisLineResponse, void>({
        path: `/profit/analysis/line`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 利润分析
     * @name DetailUsingGet1
     * @summary 月度汇总
     * @request GET:/profit/analysis/monthlySummary
     */
    detailUsingGet1: (params: RequestParams = {}) =>
      this.http.request<MonthlySummaryResponse, void>({
        path: `/profit/analysis/monthlySummary`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 利润分析
     * @name TaskProfitAnalysisUsingGet
     * @summary 任务利润列表
     * @request GET:/profit/analysis/task
     */
    taskProfitAnalysisUsingGet: (
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
      this.http.request<ProfitAnalysisTaskResponse, void>({
        path: `/profit/analysis/task`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
}
