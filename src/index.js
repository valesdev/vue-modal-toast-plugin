import vueToastStoreModule from './vueToastStoreModule'
import VueToastHolderComponent from './VueToastHolderComponent.vue'

const vueModalToastPlugin = {
  install (Vue, options = {}) {
    Vue.prototype.$toast = this

    this.store = options.store

    this.store.registerModule('vueToast', vueToastStoreModule)

    Vue.component(VueToastHolderComponent.name, VueToastHolderComponent)
  },

  open ({ message, type = 'normal', ttl = 3e3 }) {
    const payload = { message, type, ttl }

    if (typeof arguments[0] === 'string') {
      payload.message = arguments[0]
    }

    if (arguments[0] instanceof Error) {
      payload.message = arguments[0]
    }

    if (payload.message instanceof Error) {
      payload.message = payload.message.message
      payload.type = 'error'
    }

    return this.store.dispatch('vueToastOpen', payload)
  },

  close ({ id }) {
    return this.store.dispatch('vueToastClose', { id })
  },

  success (message) {
    return this.open({
      type: 'success',
      message
    })
  },

  error (message) {
    return this.open({
      type: 'error',
      message
    })
  },

  info (message) {
    return this.open({
      type: 'info',
      message
    })
  },

  warn (message) {
    return this.open({
      type: 'warn',
      message
    })
  }
}

export default vueModalToastPlugin
