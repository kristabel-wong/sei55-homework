import Vue from 'vue'
import Router from 'vue-router'

// @ means from the source tree
import HelloWorld from '@/components/HelloWorld'
import FlightSearch from '@/components/FlightSearch'

import FlightSearchResults from '@/components/FlightSearchResults'
import FlightShow from '@/components/FlightShow'


Vue.use(Router)

export default new Router({
  routes: [
    {
      // In React: <Route path="/" component={HelloWorld}/>
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/search',
      name: 'Search', // Rails 'path helper'
      component: FlightSearch
    },

    {
      path: '/search/:origin/:destination',
      name: 'SearchResults',
      component: FlightSearchResults,
      // Instead of accessing these params inside
      // FlightSearchResults as 
      //      this.$route.params.origin
      // if we ask for them as props, we can just write
      //      this.origin
      props: true, // make them as props
      // <FlightSearchResults origin="SYD" />
    },

    {
      path: '/flights/:id',
      name: 'FlightShow',
      component: FlightShow
    }

  ]
})
