/**
 * 添加事件监听器
 * @param  target - 目标对象（窗口或 HTML 元素）
 * @param  event - 事件类型
 * @param  handler - 事件处理函数
 * @param  capture - 是否在捕获阶段调用事件处理程序
 */
export function addEventListen(
  target: Window | HTMLElement,
  event: string,
  handler: EventListenerOrEventListenerObject,
  capture = false,
) {
  if (
    target.addEventListener // 检查目标对象是否有 addEventListener 方法
    && typeof target.addEventListener === 'function' // 检查 addEventListener 是否是函数
  ) {
    target.addEventListener(event, handler, capture) // 添加事件监听器
  }
}

/**
 * 移除事件监听器
 * @param  target - 目标对象（窗口或 HTML 元素）
 * @param  event - 事件类型
 * @param  handler - 事件处理函数
 * @param  capture - 是否在捕获阶段调用事件处理程序
 */
export function removeEventListen(
  target: Window | HTMLElement,
  event: string,
  handler: EventListenerOrEventListenerObject,
  capture = false,
) {
  if (
    target.removeEventListener // 检查目标对象是否有 removeEventListener 方法
    && typeof target.removeEventListener === 'function' // 检查 removeEventListener 是否是函数
  ) {
    target.removeEventListener(event, handler, capture) // 移除事件监听器
  }
}
