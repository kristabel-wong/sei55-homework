<template>
    <div class="civ">

        
            <h2>Seeing Details for Flight {{this.flight.flight_number}}</h2>
            <h2>From {{this.flight.origin}} to {{this.flight.destination}}</h2>
                
                <ReservationConfirm
                    v-if="reservedSeats.length !== 0"
                    :reservedSeats ="reservedSeats"
                />

                <div v-if="this.bookingCurrent && this.reservedSeats.length > 0" class="bookButton">
                    <button
                    @click="bookFlight()"
                    >Confirm your booking</button>
                </div>
                <div v-if="!this.bookingCurrent && this.confirmationMessage.length > 0" >
                    {{ confirmationMessage}}
                </div>

                <div v-for="j in flight.airplane.cols" class="labels " v-bind:key="j">
                    {{ j }}
                </div>
                <div v-for="n in flight.airplane.rows" class="row seats" v-bind:key="n">
                    {{ n }}
                    
                    <div 
                    v-for="i in flight.airplane.cols" 
                    :class="['col seats', i === (flight.airplane.cols/2) && 'aisle',
                    isTaken(i, n) && 'taken']" 
                    v-bind:key="i"
                    @click= "reserveSeat($event, i, n)"
                    >
                            <!-- the syntax below is to call a function from the filters section -->
                            {{i|seatColtoLetter}} 
                                        
                    </div>
                    {{n}}
                </div>
        
    </div>
    
</template>

<script>

const BASE_URL = 'http://localhost:3000'; import { everyLimit } from 'async';
import axios from 'axios'
import ReservationConfirm from './ReservationConfirm' 
const fakeUserID = 3; //this maust match the faked user in the rails contorller

export default {
    name: "FlightShow",
    props: ['flightId'],

    components: { ReservationConfirm },

    data(){
        return{
            flight: [],
            loading: true,
            error: null,
            reservedSeats: [],
            bookingCurrent: false,
            confirmationMessage: ''
            
        };
    },

    async mounted(){
        //here we can do our ajax requests
        //it is the same componentDidMount()
        this.fetchFlight(this.flightId)
        
    },

    methods: {
        async fetchFlight(id) {
            try {
                const res = await axios.get(`${BASE_URL}/flights/${id}`)
                console.log('Flight Details', res.data);

                this.flight = res.data;
                this.loading = false;

            } catch(err) {
                console.log('There has been an error trying to find those flights.', err);
                this.error = err;
                this.loading = false;
            
            }
        },
        
        async bookFlight() {
            //just needs to be changed to iterate over the reserved seats

            for (let i = 0; i < this.reservedSeats.length; i++) {
                const reservation = this.reservedSeats[i];
                const row = parseInt(Object.keys(reservation)[0])
                const col = Object.values(reservation)[0]
                console.log('Booking is..', row, col); 
                try {
                const res = await axios.post(`${BASE_URL}/reservations/`,{
                    flight_id: this.flight.id,
                    row: row,
                    col: col
                })
                this.confirmationMessage= "Your Seat Was Successfully Booked"
                this.loading = false;

                } catch(err) {
                    console.log('There has been an error trying to book those flights.', err);
                    
            
                }               
            }
            this.bookingCurrent = false;
            this.fetchFlight(this.flight.id)
        },
        

        isTaken( col, row){ 

                // for (let i = 0; i < this.flight.reservations.length; i++) {
                //     const element = this.flight.reservations[i];
                                        
                //     if(row === element.row && col === element.col){
                        
                //         return true

                   
                //     }
                // }   
                for (let i = 0; i < this.flight.reservation_lookup.length; i++) {
                    const element = this.flight.reservation_lookup[i];
                    if(element[`${row}-${col}`]){
                        return true
                    }
                
                    
                }
                

                    

        },

        reserveSeat(event, i, n) { //this will store the seat into state, turn the seat green, and request confirmation before sending to the backend.
            console.log('Clicked', i, n, event);
            this.bookingCurrent = true;
            if(event.target.className.includes("selected")){
                event.target.className="col seats"
                this.reservedSeats.delete([n])
            } else {
                this.reservedSeats.push({ [n]:i})
                event.target.className="col seats selected"
                
            }//changes to green
            
            
            // this.fetchFlight(this.flight.id)
            
        },

        

        filters: {
            // This sesction is used to seperate merhods that only afect render etc.
            
            seatColtoLetter(num) {
            //turn 1 into A, 2 into b etc
            // const colArray = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
            // return colArray[num]

                return String.fromCharCode(num + 64) //'A' starts at 65
            }, 
                

        }
        
        

           
            
        
    }




}
</script>

<style scoped>

    .seats{
        display: flex;
        justify-content: center;
        padding: 10px;
        margin: 5px;
        border-radius: 20% 20% 0 0;
        cursor: pointer;
    }

    .row{
      
        margin: 10px;
    }

    .col{
        height: 2em;
        width: 2em;
        border: 1px solid black;
        padding: 10px;
        
    }

    .labels{
        display: inline-flex;
        justify-content: center;
        margin: 0 30px 0 15px;
        height: 1em;
        width: 1.5em;
        text-align: right;
    
    }

    .taken{
        background-color: tomato;
        cursor: default;
        pointer-events: none;
    }

    .by_me{
        background-color: rgb(240, 204, 4);
    }

    .aisle{
        margin-right: 30px;
    }

    .selected{
        background-color: rgb(32, 209, 32);
        cursor: default;
        /* pointer-events: none; */
        border: 6px solid black;
    }


    

</style>