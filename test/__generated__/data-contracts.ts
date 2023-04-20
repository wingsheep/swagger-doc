/* eslint-disable */
/* tslint:disable */

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
