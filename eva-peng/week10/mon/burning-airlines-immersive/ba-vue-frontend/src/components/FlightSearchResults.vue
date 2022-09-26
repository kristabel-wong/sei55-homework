<template>
  <div>
    <h2>Search results for {{ origin }} to {{ destination }}</h2>

    <div v-if="loading">
        Loading results...
    </div>
    <div v-else>
        <table>
        <tr>
            <th>Flight number</th> 
            <th>Departure Date</th> 
            <th>Origin</th> 
            <th>Destination</th> 
        </tr>
        <tr v-for="flight in flights">
            <td> <router-link :to="{path: '/flights/' + flight.id}">{{ flight.flight_number}}</router-link></td> 
            <td>{{ formatDate(flight.departure_date)}}</td> 
            <td>{{ flight.origin}}</td> 
            <td>{{ flight.destination}}</td> 
        </tr>
        </table>
    </div>
    </div>
  
</template>

<script>

    const BASE_URL = 'http://localhost:3000';

    import axios from 'axios';
    import moment from 'moment';

    
export default {
    name: 'FlightSearchResults',
    props: ['origin', 'destination'],

    data(){
        return {
            flights: [],
            loading: true,
            error: null,
        };
    },

    // react: componentDidMount
    async mounted(){
        // console.log('Mounted!');
        try {
            const res = await axios.get(`${BASE_URL}/flights/search/${this.origin}/${this.destination}`);
            // console.log('flights', res.data);
            this.flights = res.data;
            this.loading = false;

        } catch(err){
            this.error = err;
            this.loading = false;

        }
    }, // mounted

    methods: {
        formatDate: function (date) {
            return moment(date).format('MMMM Do YYYY, h:mm a')
        }, // formatDate

        
    }, // methods
}
</script>

<style>

</style>