# vue-modal-toast-plugin

[![Version](https://img.shields.io/npm/v/vue-modal-toast-plugin.svg)](https://www.npmjs.com/package/vue-modal-toast-plugin)
[![Downloads](https://img.shields.io/npm/dm/vue-modal-toast-plugin.svg)](https://npmcharts.com/compare/vue-modal-toast-plugin?minimal=true)
[![Issues](https://img.shields.io/github/issues/valesdev/vue-modal-toast-plugin.svg)](https://github.com/valesdev/vue-modal-toast-plugin/issues)
[![License](https://img.shields.io/npm/l/vue-modal-toast-plugin.svg)](https://www.npmjs.com/package/vue-modal-toast-plugin)

A modal toast plugin for mobile, integrated with Vue.js and Vuex.

[Live demo](https://open.vales.io/vue-modal-toast-plugin/demo.html)

## Features

- Only 9.0KB minified while 3.5KB gzipped
- Integrated with Vue.js as a plugin
- Responsive Design
- Show multiple toasts meanwhile
- Able to customize theme (with any scopes)
- Able to customize TTL for toast auto-hiding

## Usage

Register the plugin first.

```js
import Vue from 'vue'
import Vuex from 'vuex'
import vueModalToastPlugin from 'vue-modal-toast-plugin'

const store = new Vuex.Store({ strict: true })

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
    this.$toast.open('Hello toast!')
  }
})
```

## Credits

- [Ionicons](https://github.com/ionic-team/ionicons)

## License

[MIT](http://opensource.org/licenses/MIT)
