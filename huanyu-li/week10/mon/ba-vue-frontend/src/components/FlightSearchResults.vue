<template>
    <div>
        <h2>Search Results for {{origin}} to {{destination}}</h2>
        <div v-if="loading">Loading Results...</div>
        <div v-else>
            <div v-for="flight in flights" :key="flight.id" class="flight" @click="selectFlight(flight.id)">
                <div class="labels">
                    <p>Departure Date:</p>
                    <p>Departure Time:</p>
                    <p>Airplane:</p>
                    <p>Flight number:</p>
                </div>

                <div class="info">
                    <p>{{new Date(flight.departure_date).toLocaleString('en-AU', {
                    year:'numeric',
                    month:'short',
                    day:'2-digit',
                    })}}</p>
                    <p>{{new Date(flight.departure_date).toLocaleString('en-AU', {
                    hour:'2-digit',
                    minute:'2-digit',
                    hour12:false
                    })}}</p>
                    <p>{{flight.airplane.name}}</p>
                    <p>{{flight.flight_number}}</p>
                </div>


            </div>
        </div>
    </div>

</template>

<script>
const BASE_URL = 'http://localhost:3000';

import axios from 'axios';
export default {
    name: 'FlightSearchResults',
    props: ['origin', 'destination'],

    data() {
        return {
            flights: [],
            loading: true,
            error: null
        }
    },

    async mounted() {
        try {
            const res = await axios.get(`${BASE_URL}/flights/search/${this.origin}/${this.destination}`)
            console.log('flights:', res.data);
            this.flights = res.data
            this.loading = false
        } catch (err) {
            console.error('Error loading flight search: ', err);
            this.error = err
            this.loading = false
        }
    },

    methods:{
        selectFlight(id){
            console.log('clicked',id);

            this.$router.push({
                name: 'FlightDetails',
                params: {
                    flightId:id
                }
            })
        }
    }

}
</script>

<style scoped>
.flight {
    font-weight: bold;
    padding: 0 20px;
    width: 250px;
    margin: 5px auto;
    border-radius: 20px;
    background-color: rgb(237, 166, 166);
    display: flex;
    justify-content: space-between;
    text-align: end;
    cursor: pointer;
}

.info {
    text-align: start;
}
</style>