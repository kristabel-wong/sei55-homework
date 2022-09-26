

<template>
  <div>
    <h2>
        Search Results for {{origin}} to {{destination}}
    </h2>

    <div v-if="loading">
        Loading results 
    </div>
    <div v-else>
        <!-- Results here! -->
        <div v-for="flight in flights" class="flight-results">
            <!-- <p>Flight number: {{ flight.flight_number }}</p> -->
            <router-link to="/flights/:id">{{ flight.flight_number }}</router-link> 
            <p>Departure Date: {{formatDate(flight.departure_date)}}</p>
            <p>Plane name: {{flight.airplane.name}} </p>
            <p>Origin: {{ flight.origin}}</p>
            <p>Destination: {{flight.destination}}</p>



            
        </div>
    </div>

  </div>
</template>

<script>

    const BASE_URL = " http://localhost:3000";
    import axios from 'axios';
    import moment from 'moment';


export default {
    name: 'FlightSearchResults',
    props: ['origin', 'destination'],
    // this.origin 
    // component needs to expect props that you specified in index.js

    data(){
        return{
            flights: [],
            loading: true, // did the loading work
            error: null // or was it an error
        }
    },

     methods: {
        formatDate: function (date) {
            return moment(date).format('MMMM Do YYYY, h:mm:ss a')
        }
    },

    // React: componentDidMount()
    // Vue:
    async mounted(){
        console.log('Mounted!');
        try {
            const res = await axios.get(`${BASE_URL}/flights/search/${this.origin}/${this.destination}`)
            console.log('flights:', res.data);
            this.flights = res.data; // Save the array of flight results into state for render
            this.loading = false; // no longer loading
        } catch( err ){
            console.error(`Error loading flight search results:`, err);
            this.error = err; 
            this.loading = false; 
        }
    }

}
</script>

<style>
    .flight-results{
        
        text-align: left;
        width: 30vw;
        margin: 0 auto; 
        line-height: 10px;
       
    }
    

</style>