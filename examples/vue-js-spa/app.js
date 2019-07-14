"use strict";

import Vue from "./vendor/vue_module.js";
import renderVueComponentToString from "./vendor/vue-server-renderer/basic_module.js";


(function() {
    var vm = new Vue({
      template: `<div>{{ msg }}</div>`,
      data: {
        msg: 'hello'
      }
    })
    // exposed by `vue-server-renderer/basic.js`
    renderVueComponentToString(vm, (err, res) => {
      console.log(res)
    })
})();




