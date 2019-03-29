# vue-modal-toast-plugin

[![Version](https://img.shields.io/npm/v/vue-modal-toast-plugin.svg)](https://www.npmjs.com/package/vue-modal-toast-plugin)
[![Downloads](https://img.shields.io/npm/dm/vue-modal-toast-plugin.svg)](https://npmcharts.com/compare/vue-modal-toast-plugin?minimal=true)
[![License](https://img.shields.io/npm/l/vue-modal-toast-plugin.svg)](https://www.npmjs.com/package/vue-modal-toast-plugin)

A modal toast plugin for mobile, integrated with Vue.js and Vuex.

## Features

- Integrated with Vue.js as a plugin
- Show multiple toasts meanwhile in one view
- Able to customize theme (with any scopes)
- Able to customize TTL for toast auto-hiding

## Usage

Register the plugin first.

```js
import Vue from 'vue'
import Vuex from 'vuex'
import vueModalToastPlugin from 'vue-modal-toast-plugin'

const store = new Vuex.Store()

Vue.use(vueModalToastPlugin, { store })

new Vue({ store })
```

Then include plugin css and add the holder tag to your root Vue node.

```vue
<template>
  <div id="app">
    <vue-toast-holder />
  </div>
</template>

<style>
@import '~vue-modal-toast-plugin/dist/vue-modal-toast-plugin.min.css';
</style>
```

Finally, use it anywhere.

```js
Vue.extend({
  mounted () {
    // normal text
    this.$toast.open('Test.')

    // normal long text
    this.$toast.open('Terrarum naturae animus derecti inclusum haec. Congestaque imagine erectos. Exemit numero ventos.')

    // Error instance with message
    this.$toast.open(new Error('Fatal Error!'))

    // success scope
    this.$toast.success('Successfully Uploaded.')

    // info scope
    this.$toast.info('You\'ve logged out.')

    // warn scope
    this.$toast.warn('You don\'t have permissions.')

    // error scope
    this.$toast.error('Server error, please try again.')
  }
})
```

## Credits

- [Ionicons](https://github.com/ionic-team/ionicons)

## License

[MIT](http://opensource.org/licenses/MIT)
