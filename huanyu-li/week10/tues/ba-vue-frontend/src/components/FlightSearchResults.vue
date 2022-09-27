<template>
    <div>
        <h2>Search Results for {{origin}} to {{destination}}</h2>
        <div v-if="loading">Loading Results...</div>
        <div v-else>
            <div v-for="flight in flights" :key="flight.id">

                <router-link :to="{name:'FlightDetails',params:{flightId:flight.id}}" class="flight">
                    <div class="labels">
                        <p>Departure Date:</p>
                        <p>Departure Time:</p>
                        <p>Airplane:</p>
                        <p>Flight number:</p>
                    </div>

                    <div class="info">
                        <!-- <p>{{flight.departure_date_formatted}}</p> -->
                        <p>{{new Date(flight.departure_date).toLocaleString('en-AU', dateOpt())}}</p>
                        <p>{{new Date(flight.departure_date).toLocaleString('en-AU', timeOpt())}}</p>
                        <p>{{flight.airplane.name}}</p>
                        <p>{{flight.flight_number}}</p>
                    </div>
                </router-link>

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

    methods: {
        dateOpt() {
            return {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
            }
        },

        timeOpt() {
            return {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }
        },
        // selectFlight(id) {
        //     console.log('clicked', id);

        //     this.$router.push({
        //         name: 'FlightDetails',
        //         params: {
        //             flightId: id
        //         }
        //     })
        // }
    }

}
</script>

<style scoped>
.flight {

    padding: 0 20px;
    width: 250px;
    margin: 5px auto;
    border-radius: 20px;
    background-color: bisque;
    display: flex;
    justify-content: space-between;
    text-align: end;
    cursor: pointer;
    /* font-weight: bold; */
}

.info {
    text-align: start;
}

.flight:hover {
    background-color: lightblue
}

a{
    text-decoration: none;
    color: black;
}
</style>