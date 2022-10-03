import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FlightSearch from '@/components/FlightSearch'
import FlightSearchResults from '@/components/FlightSearchResults'
import FlightDetails from '@/components/FlightDetails'

Vue.use(Router)

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
      // instead of accessing these params inside FlightSearchResults as this.$route.params.orgin if we ask for them as props, we can just write this.orgin
      props: true
    }, 

    {
      path: '/flights/:flightId',
      name: 'FlightDetails',
      component: FlightDetails,
      
      props: true
    }
  ]
})
