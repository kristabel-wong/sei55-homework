import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import FlightSearch from '@/components/FlightSearch'
import FlightSearchResults from '@/components/FlightSearchResults'
import ShowFlight from '@/components/ShowFlight'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // <Route path='/' component={HelloWorld} />
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/search',
      name: 'Search', // Rails 'path' helper
      component: FlightSearch
    },

    {
      path: '/search/:origin/:destination',
      name: 'SearchResults',
      component: FlightSearchResults,

      // Instead of accessing these params inside 
      // FlightSearchResults as
      //  this.$route.params.origin
      // if we ask for them as props, we can just write
      //  this.origin
      props: true,
      // <FlightSearchResults origin="SYD" />
    },

    {
      path: '/flights/:id',
      name: 'ShowFlight',
      component: ShowFlight,

      props: true,

    }


  ]
})
