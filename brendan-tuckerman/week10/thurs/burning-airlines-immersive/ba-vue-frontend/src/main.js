// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// This is where the build attaches to the DOM
new Vue({
  el: '#app',
  router,    //ES6 shorthand for  router: router
  components: { App },
  template: '<App/>'  //This is quoted here as this version does not use JSX
})
