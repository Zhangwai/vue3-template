// 时间格式化函数 utc格式 ->
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

// 将utc扩展到dayjs
dayjs.extend(utc)

// 默认转化格式
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:ss:ss'

export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  // utcOffset(480)修改为东八区时间即北京时间
  return dayjs.utc(utcString).utcOffset(480).format(format)
}
