const MUTATION_TYPE_VUE_TOAST_OPEN = 'vueToast/OPEN'
const MUTATION_TYPE_VUE_TOAST_CLOSE = 'vueToast/CLOSE'

const generateID = function () {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let value = ''
  for (let i = 0; i < 16; i++) {
    value += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return value
}

export default {
  state: {
    items: [],
    timers: {}
  },
  getters: {
    vueToastItems (state) {
      return state.items
    }
  },
  actions: {
    vueToastOpen (context, payload) {
      // unique id
      const id = generateID()

      // commit to open
      context.commit(MUTATION_TYPE_VUE_TOAST_OPEN, Object.assign({ _id: id }, payload))
    },

    vueToastClose (context, payload) {
      // commit to close
      context.commit(MUTATION_TYPE_VUE_TOAST_CLOSE, { _id: payload.id })
    }
  },
  mutations: {
    [MUTATION_TYPE_VUE_TOAST_OPEN] (state, payload) {
      state.items.push(payload)

      // timer to delete the item
      state.timers[payload._id] = setTimeout(() => {
        // find specified item and delete
        for (let i = state.items.length - 1; i >= 0; i--) {
          if (state.items[i]._id === payload._id) {
            state.items.splice(i, 1)
          }
        }
        clearTimeout(state.timers[payload._id])
        delete state.timers[payload._id]
      }, payload.ttl)
    },

    [MUTATION_TYPE_VUE_TOAST_CLOSE] (state, payload) {
      if (state.items.length <= 0) return

      if (typeof payload === 'object' && payload !== null && typeof payload._id === 'string') {
        // find specified item and delete
        for (let i = state.items.length - 1; i >= 0; i--) {
          if (state.items[i]._id === payload._id) {
            state.items.splice(i, 1)
          }
        }
        clearTimeout(state.timers[payload._id])
        delete state.timers[payload._id]
      } else {
        // delete the last item
        state.items.pop()
      }
    }
  }
}
