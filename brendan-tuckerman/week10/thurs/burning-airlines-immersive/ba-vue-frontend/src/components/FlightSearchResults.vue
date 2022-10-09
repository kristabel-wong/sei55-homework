<template>
<div>
  <h2>Flight Search Results for {{origin }} to {{destination}}</h2>

            <div v-if="error !== null">
             We were unable to process your flights.
            </div>
            <div v-else-if="loading">
                Loading Results...
            </div>
            <!-- There are two versions of the click below: A click handler and a router link (you don''t need both)--one was done for HW and one in class -->
            <div v-else>
                <div 
                v-for="flight in flights" v-bind:key="flight.id"
                class="results"
                @click="selectFlight(flight.id)"
                >
                    <ul>
                        <router-link :to="`/flights/${flight.id}`">
                        <li>{{flight.flight_number}}</li>    
                        <li>Departure Date: {{flight.departure_date_formatted}}</li>    
                        <li>Flying on: {{flight.airplane.name}}</li>  </router-link>  
                    </ul>
                

                </div>

            </div>

</div>
</template>



<script>

const BASE_URL = 'http://localhost:3000';
 import axios from 'axios' 

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
    //note that mounted is top-level (rather than within the method component)
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
            date = date.split("-").reverse().join("/")
            console.log(date);
            const zTime = (time.split('T')[1]);
            const realTime = (zTime.slice(0, 5));
            return `${date} at ${realTime}`

        }, 

        selectFlight( id) {
            console.log(`Here ${id}`);
            this.$router.push({
                name: 'FlightShow',
                params: { flightId: id }

            });
        }

        

    }


}
</script>

<style >
.results{
    background-color: salmon;
    width: 33%;
    padding: 10px;
    margin: 10px auto;
}

.results:hover{
    cursor:pointer;
    text-decoration: underline;
    color: gold;
}

.results li{
    list-style: none;
}
    



</style>