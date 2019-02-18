import Toast from './toast'

export default {
  install (Vue, options) {
    Vue.prototype.$toast = function (message) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor()
      toast.$slots.default = [message] //必须放mount前面
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
} 