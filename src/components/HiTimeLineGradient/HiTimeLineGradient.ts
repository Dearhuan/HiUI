export interface TimeLineItem {
  content: string | Array<string> // 内容
  time?: string // 时间
  title?: string // 标题
  origin?: string // 来源
  link?: string // 链接
  linkText?: string // 链接文字
}