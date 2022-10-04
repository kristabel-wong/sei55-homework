<template>
  <div>
    <h2>Search Results for {{origin}} to {{destination}}</h2>

    <div v-if="error !== null" class="error">
      We were unable to process your flight search. Please try again shortly.
    </div>
    <div v-else-if="loading" class="loading">
      Loading results...
    </div>
    <div v-else>

      <div 
        v-for="flight in flights" 
        v-bind:key="flight.id" 
        class="searchResults"
        @click="selectFlight( flight.id )"
      >
      
        <div>
          <router-link :to="`/flights/${flight.id}`">{{ flight.flight_number }}</router-link> ({{flight.airplane.name}})
          -
          {{ formatDate(flight.departure_date) }}

        </div>

      </div>

    </div>

  </div>
</template>

<script>

const BASE_URL = 'http://localhost:3000';

import axios from 'axios';
import moment from 'moment'

export default {
  name: 'FlightSearchResults',
  props: ['origin', 'destination'],
  // this.origin

  data(){
    return {
      flights: [],
      loading: true,
      error: null
    }
  },

  // React: componentDidMount()
  // Vue:
  async mounted(){
    console.log('Mounted!');

    try {
      const res = await axios.get(`${BASE_URL}/flights/search/${this.origin}/${this.destination}`)
      console.log('flights:', res.data);
      this.flights = res.data
      this.loading = false;
    } catch( err ){
      console.error('Error loading flight search results:', err);
      console.dir(err)
      // debugger; // this will work because the dev server publishes a 'source map'
      // this.error = err.response.data.error;
      this.error = err
      this.loading = false;
    }

  },

  methods: {
    formatDate: function(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },

    selectFlight( id ){
      console.log('Selected flight!', id);
      // this.props.history.push(`/flights/${id}`)
      this.$router.push({
          name: 'ShowFlight',
          params: {id : id} 
        })
    }, // selectFlight()

  } // methods
}
</script>

<style scoped>
.searchResults div {
  cursor: pointer;
}

.searchResults div:hover {
  text-decoration: underline;
  /* font-weight: bold; */
  background-color: lightblue;
}

</style>