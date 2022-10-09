<template>
    <div v-if="flight && reservations">
        <h2>Flight {{flight.flight_number}} Detials</h2>


        <div class="flight">
            <div class="labels">
                <p>From:</p>
                <p>To:</p>
                <p>Departure Date:</p>
                <p>Departure Time:</p>
                <p>Airplane:</p>
                <p>Flight number:</p>
            </div>

            <div class="info">
                <p>{{flight.origin}}</p>
                <p>{{flight.destination}}</p>
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

        <div class="graph">
            <div class="col" v-for="j in flight.airplane.cols+1" :key="j">
                <span :class="[j===1 && 'noZero']">{{j-1}}</span>

                <div v-for="i in flight.airplane.rows" class="row" :key="i" :class="[j===1 &&'noBorder', reservations.some(booked=>
                    booked.col===j-1 && booked.row===i
                ) && 'occupied', booking && booking[0]===j-1 && booking[1]===i && 'booked' ]"
                    @click="makeBooking([j-1,i])">
                    <span v-if="j===1">{{i}}</span>
                </div>
            </div>
        </div>

        <button v-if="booking" @click="confirmBooking(booking)">Confirm Your Booking at {{booking}}</button>
    </div>
    <div v-else>
        <h2>Loading...</h2>
    </div>
</template>

<script>
const BASE_URL = 'http://localhost:3000';

import axios from 'axios';
export default {
    name: 'FlightDetails',
    props: ['flightId'],
    data() {
        return {
            flight: null,
            error: null,
            reservations: null,
            booking: null,
           
        }
    },

    async mounted() {
        try {
            const res = await axios.get(`${BASE_URL}/flights/${this.flightId}`)
            this.flight = res.data
            this.reservations = res.data.reservations
            console.log('Flight Details: ', res.data);
            console.log('Booked Details: ', this.reservations);

        } catch (err) {
            console.error('Error for loading Flight Details: ', err);
            this.error = err
        }
    },

    methods: {
        makeBooking(position) {

            if (confirm(`You will book the position of col: ${position[0]} | row: ${position[1]}`)){
                this.booking = position
            } // if
        },

        async confirmBooking(position) {

            console.log('Make Booking for:', position);
            const res = await axios.post(`${BASE_URL}/reservations`, {
                flight_id: this.flightId,
                row: position[1],
                col: position[0]
            })

            this.$router.go(-1)
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

}

.info {
    text-align: start;
}

.graph {
    margin-top: 50px;

}

.col {
    display: block;
    width: 1320px;
    overflow: hidden;
    margin: 0 auto;
}


.row {
    width: 30px;
    aspect-ratio: 1/1;
    border: 1px solid red;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
}

.noBorder {
    border: 1px solid transparent;
}

.noZero {
    color: transparent;
}

.occupied {
    background-color: red;
    pointer-events: none;
}

.booked {
    background-color: green;
}

button {
    margin-top: 50px;
    padding: 10px;
    background-color:rgb(237, 166, 166) ;
    border: none;
    border-radius: 20px;
    font-weight: bold;
}
</style>