import { ElLoading } from 'element-plus'

let defaultOptions = {
  target: document.querySelector('#loading-area'),
  text: 'Loading',
  spinner: 'el-icon-loading',
  background: 'rgba(0, 0, 0, 0.8)',
}
let initLoading = (options = {}) => {
  options = Object.assign(defaultOptions, options)
  return ElLoading.service(options)
}

export default initLoading
