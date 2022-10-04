<!-- My homework solution
<template>
  <div>

    <h2>Flight Details</h2>
  
    <div v-if="loading">
      Loading results...
    </div>
    <div v-else>
      <div class="seatingDiagram">

        <p>Flight Name: {{this.flight.flight_number}}</p>
        <p>Plane Name: {{this.planeName}}</p>
        
        <div v-for="rows in rows">
          
          <div v-for="cols in cols" class="seats" @click="selectSeat(cols, rows)">
            {{cols}}.{{rows}}
           </div> 
        </div> 
    
      </div> 
    </div> 

    <p>Your selected seat for reservation:</p>
    <p>Col: {{this.selectedSeatCol}}, Row: {{this.selectedSeatRow}}</p>

    <button @click="submitReservation">Submit Reservation</button>

  </div>
</template>
-->

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
        {{ flight.departure_date_formatted }}
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

      <ReservationConfirm 
        v-if="selectedSeat.row !== null"
        :row="selectedSeat.row"
        :col="selectedSeat.col | seatColToLetter"
        @seat-confirmed="handleSeatConfirmed"
      />

      <div v-if="confirmationMessage.length > 0" class="confirmation">
        {{ confirmationMessage }}
      </div>

      <div class="seating">

        <div v-for="row in flight.airplane.rows" :key="row">
          {{ row }}
            <div v-for="col in flight.airplane.cols"
            :key="col" 
            :class="['planeSeat', showAisle(col), seatStatus(row, col) ]"
            @click="selectSeat(row, col)"
            >
              
              {{ col | seatColToLetter }} 

              
            </div>
          {{ row }}
        </div>

      </div>



    </div> <!-- v-else showing flight details-->
    
  </div>
</template>

<script>

const BASE_URL = 'http://localhost:3000'

const FAKE_USER_ID = 2


import axios from 'axios';
import ReservationConfirm from './ReservationConfirm'

export default {
  name: 'ShowFlight',
  props: ['id'], // this prop comes from the router params

  // Declare the child components that will be used 
  // by the current component
  components: { ReservationConfirm },

  data(){
    return {
      flight: {},
      reservations: {},
      loading: true,
      error: null,
      selectedSeat: {
        row: null,
        col: null
      },
      confirmationMessage: '',
    }
  }, // data

  mounted(){
    this.fetchFlight( this.id )

    // setInterval( () => this.fetchFlight(this.flightId), 2000); //polling the backend for changes
  }, // mounted()

  methods: {

    async fetchFlight( id ){

      try {
        
        const res = await axios.get(`${BASE_URL}/flights/${id}`)
        console.log('flight data:', res.data);
        this.flight = res.data.flight
        this.reservations = res.data.reservations
        this.loading = false

      } catch(err) {
        console.error('Error loading flight details', err);
        this.loading = false;
        this.error = err
      }

    }, // fetchFlight

    showAisle( column ){
      return column === (this.flight.airplane.cols / 2) ? 'aisle' : '';
    }, // showAisle()

    seatStatus(row, col){

      // console.log(`test`, row, col);
      // const found = this.flight.reservations.some( res => row === res.row && col === res.col);
      // return found ? 'occupied' : 'available'

      // Homework: HOW to avoid this nested loop for an improved time complexity
      // OBJECTS
      // construct a 'fast lookup table', ie an object/hash which has keys like
      // '10-2': 1,
      // '10-3': 1

      if( row === this.selectedSeat.row && col === this.selectedSeat.col){
        return 'selected'
      }

      //===== MY FRONT END NO LOOP SOLUTION BEGINS HERE===============================
      // const resSeatNum = this.flight.reservations.map( res => {
      //   return `${res.row}-${res.col}`
      // })

      // const table = {
      //   [`${row}-${col}`]: resSeatNum.includes(`${row}-${col}`) ? true : false
      // }

      // // console.log(table);

      // if (table[`${row}-${col}`]){
 
      //   return 'occupied'
      // } else {
      //   return 'available'
      // }
       //===== MY FRONT END NO LOOP SOLUTION END HERE===============================

      // for (let i = 0; i < this.flight.reservations.length; i++) {

      //   const res = this.flight.reservations[i]
      //   if (res.row === row && res.col === col){
      //     return 'occupied'
      //   } 
      // }
      // return 'available'

      //======LUKE'S RAILS BACKEND LOOKUP SOLUTION BEGINS HERE ============================
      
      // Instead of a loop over the reservations array, we check if a key is set in the reservations object:
      const resKey = `${row}-${col}`
      if( resKey in this.reservations ){
        if( this.reservations[resKey] === FAKE_USER_ID){
          return 'booked'
        } else {
          return 'occupied'
        }
      }
      //======LUKE's RAILS BACKEND LOOKUP SOLUTION BEGINS HERE ============================

    },

    selectSeat(row, col){
      console.log('seat selected:', row, col)

      this.confirmationMessage = ''; // turn off any older confirmation message

      // This is an update to the component state - when you update a piece of component state, the template is re-rendered automatically. This will include re-rendering all the seats by looping over the rows and columns, and running the 'seatStatus(row, col)' method to work out what extra class name to give the seat to show it as occupied, available, or (as a result of this click) selected
      this.selectedSeat = { row, col } // shorthand for {row: row, col: col}
    },

    async handleSeatConfirmed(a, b, c){

      console.log('FlightDetails::handleSeatConfirmed()')
      console.log('args:', a, b, c)

      try {
        const res = await axios.post(`${BASE_URL}/reservations`, {
          row: this.selectedSeat.row,
          col: this.selectedSeat.col,
          flight_id: this.id
        })
        
        console.log('reservation response', res.data)

        // this.flight.reservations.push( res.data )
        this.reservations[`${res.data.row}-${res.data.col}`] = res.data.user_id

        this.confirmationMessage = 'Your seat was sucessfully booked.'
        this.selectedSeat = { row: null, col: null}// stop the ReservationConfirm child from showing

      }catch(err){
        this.error = err
      }

    }, // handleSeatConfirmed()
  

  }, // methods

  filters:{
    seatColToLetter(column){
      return String.fromCharCode( 64 + column ); 
    }

  }


  //---------------------my homework solution
  // data(){
  //   return {
  //     flight: {},
  //     rows: null,
  //     cols: null,
  //     planeName: '',
  //     loading: true,
  //     error: null,
  //     selectedSeatCol: null,
  //     selectedSeatRow: null
  //   }
  // }, // data

  // async mounted(){
  //   console.log(`mounted!`);

  //   try {
  //     const res = await axios.get(`${BASE_URL}/flights/${this.id}`)
  //     console.log('flight detail:', res.data);
  //     console.log('airplane rowcols:', res.data.airplane.rows, res.data.airplane.cols);
  //     this.flight = res.data
  //     this.rows = res.data.airplane.rows
  //     this.cols = res.data.airplane.cols
  //     this.planeName = res.data.airplane.name
  //     this.loading = false

  //   }catch( err ){
  //     console.log('Error loading flight details:', err);
  //     this.error = err
  //     this.loading = false

  //   }
  // },

  // methods: {
  //   selectSeat(col, row){
  //     console.log(`seat selected,`, col, row);
  //     this.selectedSeatCol = col
  //     this.selectedSeatRow = row
  //   },

  //   async submitReservation(){
  //     console.log(`button clicked with chosen seat:`, this.selectedSeatCol, this.selectedSeatRow);

  //     try {
  //       const res = await axios.post(`${BASE_URL}/reservations`, {
  //         flight_id: this.id,
  //         row: this.selectedSeatRow,
  //         col: this.selectedSeatCol,
  //       })
  //       console.log(`Sucess making reservation:`, res.data);

  //     } catch( err ){
  //       console.error('Error making reservations:', err);
  //       this.error = err
  //     }
  //   },

  //   validateSeats(){
  //     // how???
  //   }

  // }

}
</script>

<style scoped>

/* .seatingDiagram{
  display: grid;
  margin-bottom: 20px;
} */

/* .seats {
  width: 35px;
  height: 35px;
  background-color: rgb(215, 215, 215);
  margin: 5px;
  display: inline-block;
} */

p {
  margin: 10px 0;
}

button {
  margin-bottom: 50px;
}

.seating .planeSeat {
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
  background-color: rgb(197, 197, 197);
  pointer-events: none;
}
.seating .planeSeat.selected {
  background-color: green;
}

.seating .planeSeat.booked {
  /* for seats already reserved by the logged user */
  background-color: orange;
  pointer-events: none;
}

.seating .planeSeat.aisle {
  margin-right: 20px;
}

.confirmation {
  margin-top: 20px;
  font-size: 18pt;
  font-weight: bold;
  color: green;
}

</style>