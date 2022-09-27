<template>
  <div>
    <h2>Flight Details</h2>
    <div v-if="error !== null">
        There was a problem loading the flight details. Please try again.
    </div>
    <div v-else-if="loading">
        Loading flight details...
    </div>
    <div v-else>
        <h4>Flight {{ flight.flight_number }}</h4>
        <div class="departure_date">
            <strong>Departure Date:</strong>
            {{ flight.departure_date_formatted}}
        </div>

        <div class="origin">
            <strong>Origin:</strong>
            {{ flight.origin }}
        </div>

        <div class="destination">
            <strong>Destination:</strong>
            {{ flight.destination }}
        </div>

        <div class="airplane">
            <strong>Aircraft:</strong>
            {{ flight.airplane.name }}
        </div>
        <div class="seating">
            <div v-for="row in flight.airplane.rows" v-bind:key="row">
                {{row}}
                <div v-for="col in flight.airplane.cols" v-bind:key="col" @click="seatClicked(row, col)" 
                :class="['planeSeat', showAisle(col), seatStatus(row, col)]"
                >
                    {{ col|seatColToLetter }} 
                </div>
                {{row}}
            </div>


        </div><!-- .seating -->
    </div> <!-- v-else showing flight details -->

  </div>
</template>

<script>

const BASE_URL = 'http://localhost:3000';

import axios from 'axios';
window.seatIterations = 0; // global var for debugging
import moment from 'moment';
export default {
    name: 'FlightDetails',
    props: ['flightId'], // comes from the router params
    
    

    data(){
        return {
            flight: {},
            user: '',
            newReservation: {},
            loading: true,
            error: null
        };

    }, // data

    mounted(){ // no async here as we have it as a method 
        // console.log('Mounted!');
        // try {
        //     const res = await axios.get(`${BASE_URL}/flights/${this.flightId}`);
        //     console.log('flight', res.data);
        //     this.flight = res.data;
        //     this.loading = false;

        // } catch(err){
        //     this.error = err;
        //     this.loading = false;

        // }
        this.fetchFlight(this.flightId)
    }, // mounted

    methods: {

        // formatDate: function (date) {
        //     return moment(date).format('MMMM Do YYYY, h:mm a')
        // } // formatDate

        async fetchFlight(id){
            try{
                const res = await axios.get(`${BASE_URL}/flights/${id}`);
                console.log('flight data', res.data);
                this.flight = res.data;
                this.loading = false;
            } catch(err){
                console.error('Error loading flight details', err);
                this.error = err;
                this.loading = false;
            }
        }, // fetchFlight()

        showAisle (column) {
            return column === (this.flight.airplane.cols/2) ? 'aisle' : ''
        }, // showAisle()

        // seatColToLetter(column) {
        //     // turn 1 into A, 2 into B...
        //     // if (column === 1) {
        //     //     return 'A'
        //     // }
        //     // const array = ['', 'A', 'B', 'C', 'D', 'E', 'F'];
        //     // return array[column];
        //     return String.fromCharCode( 64 + column)

        // }, // seatColToLetter()

        seatStatus(row, col){
            
            // for loop : this.flight.reservations
            // my code
            // for (let i = 0; i < this.flight.reservations.length; i++) {
            //     for (let j=0; j < this.flight.reservations.length; j++)
            //     if (col == this.flight.reservations[i].col && row == this.flight.reservations[j].row){
            //         return 'occupied'
                
            //     }
            // } // for loop
            // return 'available'

            // luke's code

            // HOMEWORK: how to avoid this nested loop
            // construc a 'fast lookup table'
            // '10-2': 1,
            // '10-3': 1,
            const booking = {};
            const res = this.flight.reservations
            for (let i = 0; i < res.length; i++ ){
                window.seatIterations++
                // console.log(res)
                booking[res[i].row + '-' + res[i].col] = true;
                // console.log(booking);
                const booked = row + '-' + col
                if (booking[booked]) {
                    return 'occupied'
                }
                
            }
            return 'available'
            // for (let i = 0; i < this.flight.reservations.length; i++) {
            //     window.seatIterations++;
            //     const res = this.flight.reservations[i]
                
            //     if(row === res.row && col === res.col){
            //         return 'occupied'
            //     }
            // }
            // return 'available'
            // const found = this.flight.reservations.some(res => row === res.row && col === res.col);
            // return found ? 'occupied' : 'available';
            


        }, // seatStatus()

        seatClicked(row, col){
           console.log('seat clicked!', row, col);
           this.user = 'test user';
           this.newReservation.row = row;
           this.newReservation.col = col;
           console.log('newReservation', this.newReservation);
            const planeSeat = document.querySelector('.seating .planeSeat.available')
            
            planeSeat.className = 'planeSeat available booked'
            console.log(planeSeat);
        
           
            
        }
    }, // methods

    filters: {
        seatColToLetter(column) {
        
            return String.fromCharCode( 64 + column)

        }, // seatColToLetter()
    },

}
</script>

<style>
    .seating {
        margin-top: 50px;
    }

    .seating .planeSeat{
        display: inline-block;
        width: 40px;
        height: 40px;
        border: 1px solid #CCCCCC;
        margin: 4px;
        line-height: 40px;
        border-radius: 20% 20% 0 0;
        cursor: pointer;
    }

    .seating .planeSeat.occupied {
        background-color: grey;
        pointer-events: none;
    }

    .seating .planeSeat.available {
        
    }

    .seating .planeSeat.available.booked {
        background-color: green;
    }

    .seating .planeSeat.aisle {
        margin-right: 20px;
    }

</style>