import vueToastStoreModule from './vueToastStoreModule'
import VueToastHolderComponent from './VueToastHolderComponent.vue'

const vueModalToastPlugin = {
  install (Vue, options = {}) {
    Vue.prototype.$toast = this

    this.store = options.store
    this.defaultTTL = options.defaultTTL || 3e3

    this.store.registerModule('vueToast', vueToastStoreModule)

    Vue.component(VueToastHolderComponent.name, VueToastHolderComponent)
  },

  open ({ message, scope = 'normal', ttl }) {
    const payload = { message, scope, ttl }

    if (typeof arguments[0] === 'string') {
      payload.message = arguments[0]
    }

    if (arguments[0] instanceof Error) {
      payload.message = arguments[0]
    }

    if (!payload.ttl) {
      payload.ttl = this.defaultTTL
    }

    if (payload.message instanceof Error) {
      payload.message = payload.message.message
      payload.scope = 'error'
    }

    return this.store.dispatch('vueToastOpen', payload)
  },

  close ({ id }) {
    return this.store.dispatch('vueToastClose', { id })
  },

  success (message, options = {}) {
    return this.open(Object.assign({
      scope: 'success',
      message
    }, options))
  },

  error (message, options = {}) {
    return this.open(Object.assign({
      scope: 'error',
      message
    }, options))
  },

  info (message, options = {}) {
    return this.open(Object.assign({
      scope: 'info',
      message
    }, options))
  },

  warn (message, options = {}) {
    return this.open(Object.assign({
      scope: 'warn',
      message
    }, options))
  }
}

export default vueModalToastPlugin
