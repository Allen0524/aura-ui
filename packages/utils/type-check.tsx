export function isFunction(value) {
  return value && Object.prototype.toString.call(value) === '[object Function]'
}
