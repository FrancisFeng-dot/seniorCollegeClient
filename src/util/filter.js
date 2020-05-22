/**
 * 时间戳转换
 */
const timestr = (number, type) => {
  if (!number) return '';
  let date = new Date(number * 1000);
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let time = type == 'year' ? (Y + M + D) : (M + D);
  return time;
}

/**
 * 时间戳转换
 */
const ca_timestr = (number, type) => {
  if (!number) return '';
  let date = new Date(number * 1000);
  let Y = date.getFullYear() + '年';
  let M = (date.getMonth() + 1) + '月';
  let D = date.getDate() + '日';
  let time = type == 'year' ? (Y + M + D) : (M + D);
  return time;
}

export default {
  timestr,
  ca_timestr
}