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
           </div> <!-- seatings -->
        </div> <!-- seatings -->
    
      </div> <!-- seating diagram -->
    </div> <!-- v-else -->

    <p>Your selected seat for reservation:</p>
    <p>Col: {{this.selectedSeatCol}}, Row: {{this.selectedSeatRow}}</p>

    <button @click="submitReservation">Submit Reservation</button>

  </div>
</template>

<script>

const BASE_URL = 'http://localhost:3000'

import axios from 'axios';

export default {
  name: 'ShowFlight',
  props: ['id'],

  data(){
    return {
      flight: {},
      rows: null,
      cols: null,
      planeName: '',
      loading: true,
      error: null,
      selectedSeatCol: null,
      selectedSeatRow: null
    }
  },

  async mounted(){
    console.log(`mounted!`);

    try {
      const res = await axios.get(`${BASE_URL}/flights/${this.id}`)
      console.log('flight detail:', res.data);
      console.log('airplane rowcols:', res.data.airplane.rows, res.data.airplane.cols);
      this.flight = res.data
      this.rows = res.data.airplane.rows
      this.cols = res.data.airplane.cols
      this.planeName = res.data.airplane.name
      this.loading = false

    }catch( err ){
      console.log('Error loading flight details:', err);
      this.error = err
      this.loading = false

    }
  },

  methods: {
    selectSeat(col, row){
      console.log(`seat selected,`, col, row);
      this.selectedSeatCol = col
      this.selectedSeatRow = row
    },

    async submitReservation(){
      console.log(`button clicked with chosen seat:`, this.selectedSeatCol, this.selectedSeatRow);


      try {
        const res = await axios.post(`${BASE_URL}/reservations`, {
          flight_id: this.id,
          row: this.selectedSeatRow,
          col: this.selectedSeatCol,
        })
        console.log(`Sucess making reservation:`, res.data);

      } catch( err ){
        console.error('Error making reservations:', err);
        this.error = err
      }
    },

    validateSeats(){
      // how???
    }

  }

}
</script>

<style scoped>

.seatingDiagram{
  display: grid;
  margin-bottom: 20px;
}

.seats {
  width: 35px;
  height: 35px;
  /* border: 1px solid rgb(13, 0, 255); */
  background-color: rgb(215, 215, 215);
  margin: 5px;
  display: inline-block;
}

p {
  margin: 10px 0;
}

button {
  margin-bottom: 50px;
}

</style>