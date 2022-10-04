<template>
    <div>
        <h2>Search Results for {{ origin }} to {{ destination }}</h2>
        <div v-if="error !== null ">
            {{error}}
        </div>
        <div v-else-if="loading">
            Loading results...
        </div>
        <div v-else>
        
            <div 
                v-for="flight in flights" v-bind:key="flight.id"
                class="results" 
                
            >
            <router-link :to="{name: 'FlightDetails', params: {flightId: flight.id}}">
                <div>

                    {{ flight.flight_number  }} ({{flight.airplane.name}})
                    -
                    {{ flight.departure_date_formatted }}
                </div>
            </router-link>
            </div>    
            
        </div> <!-- v-else -->  
        
    </div>
    </template>
    
    <script>
    const BASE_URL = 'http://localhost:3000';
    import axios from 'axios';
    export default {
      name: 'FlightSearchResults',
      props: ['origin', 'destination'],
      // this.origin
      data(){
        return {
          flights: [],
          loading: true,
          error: null,
        };
      },
      // React: componentDidMount()
      // Vue:
      async mounted(){
        console.log('Mounted!');
        try {
          const res = await axios.get(`${BASE_URL}/flights/search/${this.origin}/${this.destination}`);
          console.log('flights:', res.data);
          this.flights = res.data;  // Save the array of flight results into state for render
          this.loading = false;     // No longer loading!
        } catch( err ){
          console.error('Error loading flight search results:', err);
        //   console.dir(err);
        
          this.error = err;
          this.loading = false;
        }
      }, // mounted()

      methods: {
        // formerly used like this :
        // <div @click="selectFlight( flight.id )"> </div>
        selectFlight(id){
            console.log(`selected flight ${id}`, id);
            this.$router.push({
                name: 'FlightDetails',
                params: { flightId: id } // implies /flights/:flightId
            });
        }, // selectFlight

      }, // methods
    }
    </script>
    
    <style scoped>
    .results div {
        cursor: pointer;
    }

    .results div:hover {
        text-decoration: underline;
        /* font-weight: bold; */
        background-color: lightblue;
    }

    .results a {
        text-decoration: none;
        color:black
    }
    </style>