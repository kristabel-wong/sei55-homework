<template>
  <div>
    <h2>Search Results for {{origin}} to {{destination}}</h2>

    <div v-if="loading">
      Loading results...
    </div>
    <div v-else>

      <div v-for="flight in flights" class="searchResults">
        
        Flight number: <router-link :to="`/flights/${id}`">{{ flight.flight_number }}</router-link><br/>
        Departure Date: {{ formatDate(flight.departure_date) }}<br/>
        Origin: {{ flight.origin }}<br/>
        Destination: {{ flight.destination }}<br/>
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
      this.error = err;
      this.loading = false;
    }

  },

  methods: {
    formatDate: function(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },

  }
}
</script>

<style scoped>
.searchResults {
  margin-bottom: 20px;
}

</style>