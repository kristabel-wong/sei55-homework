<template>
  <div>
    <nav>
        <router-link :to="{path: '/search/' + flight.origin + '/' + flight.destination}">Back to Search</router-link>
    </nav>
    <h2>Flight {{flight.flight_number}}</h2>
    <h3>Origin: {{flight.origin}}</h3>
    <h3>Destination: {{flight.destination}}</h3>
    <h3>Airplane: {{flight.airplane.name}}</h3>
    <h3>Total Seats: {{parseInt(flight.airplane.rows) * parseInt(flight.airplane.cols)}}</h3>
    <h3>Remaining Seats: {{(parseInt(flight.airplane.rows) * parseInt(flight.airplane.cols)) - flight.reservations.length}}</h3>

  </div>
</template>

<script>

const BASE_URL = 'http://localhost:3000';

import axios from 'axios';
import moment from 'moment';
export default {
    name: 'FlightDetails',
    
    

    data(){
        return {
            flight: [],
            loading: true,
            error: null,
        }

    }, // data

    async mounted(){
        console.log('Mounted!');
        try {
            const res = await axios.get(`${BASE_URL}/flights/1`);
            console.log('flight', res.data);
            this.flight = res.data;
            this.loading = false;

        } catch(err){
            this.error = err;
            this.loading = false;

        }
    }, // mounted

    methods: {
        formatDate: function (date) {
            return moment(date).format('MMMM Do YYYY, h:mm a')
        } // formatDate

        
    }, // methods

}
</script>

<style>

</style>