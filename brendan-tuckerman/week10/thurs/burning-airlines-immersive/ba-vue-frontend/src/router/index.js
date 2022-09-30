import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FlightSearch from '@/components/FlightSearch'
import FlightSearchResults from '@/components/FlightSearchResults'
import FlightShow from '@/components/FlightShow'

if(!process || process.env.NODE_ENV !== 'testing'){
  Vue.use(Router)
}

// Here is where we keep our routes in Vue

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/search',
      name: 'Search',
      component: FlightSearch
    },

    {
      path: '/search/:origin/:destination',
      name: 'SearchResults',
      component: FlightSearchResults,
      props: true //avoids being sent to $attra
    },

    {
      path: '/flights/:flightId/',
      name: 'FlightShow',
      component: FlightShow,
      props: true //avoids being sent to $attra , and so
      //you can use this.origin etc.
    },




  ]
})
