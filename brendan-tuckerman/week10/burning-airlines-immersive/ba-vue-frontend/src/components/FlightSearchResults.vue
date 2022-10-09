<template>
<div>
  <h2>Flight Search Results for {{origin }} to {{destination}}</h2>

    <div v-if="loading">
        Loading results...

    </div>
    <div v-else>
        <div v-for="flight in flights">
            <ul>
                <li>Flight: <router-link :to="`/flights/${flight.id}`">{{flight.flight_number}}</router-link></li>    
                <li>Departure Date: {{displayTime(flight.departure_date)}}</li>    
                <li>Flying on: {{flight.airplane.name}}</li>    
            </ul>
            

        </div>

    </div>

</div>
</template>



<script>

const BASE_URL = 'http://localhost:3000'; import axios from 'axios' 

export default {
    name: 'FlightSearchResults',
    props: ['origin', 'destination'], //what are the expected props for this?

    data(){
        return{
            flights: [],
            loading: true,
            error: null,
        };
    },

    async mounted(){
        //here we can do our ajax requests
        //it is the same componentDidMount()

        try {
            const res = await axios.get(`${BASE_URL}/flights/search/${this.origin}/${this.destination}`)
            console.log('Flights', res.data);

            this.flights = res.data;
            this.loading = false

        } catch(err) {
            console.log('There has been an error trying to find those flights.', err);
            this.error = err;
            this.loading = false;
        }
    },

    methods:{

        displayTime(time){
            let date = (time.split('T')[0])
            date = date.split("-").reverse().join("-")
            console.log(date);
            const zTime = (time.split('T')[1]);
            const realTime = (zTime.slice(0, 5));
            return `${date} at ${realTime}`

        }

    }


}
</script>

<style >

    



</style>