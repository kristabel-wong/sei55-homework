<template>
    <div v-if="error">
        There was a problem loading the flight details. Please try again.
    </div>
    <!-- <div v-else-if="flight && reservations"> -->
    <div v-else-if="flight">
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
                <p>{{new Date(flight.departure_date).toLocaleString('en-AU', dateOpt())}}</p>
                <p>{{new Date(flight.departure_date).toLocaleString('en-AU', timeOpt())}}</p>
                <p>{{flight.airplane.name}}</p>
                <p>{{flight.flight_number}}</p>
            </div>
        </div>

        <div class="seating">
            <div v-for=" row in flight.airplane.rows" :key="row">
                {{row}}
                <div v-for="col in flight.airplane.cols" :class="['planeSeat', showAisle(col), seatStatus(row,col)]"
                    :key="col" @click="selectSeat(row,col,$event)">
                    <!-- {{seatColToLetter(col)}} -->
                    {{ col|seatColToLetter }}
                </div>
                {{row}}
            </div>
        </div>

        <div class="confirmContent" v-if="select">
            <p>Confirm Your Booking at {{select|selectSeatFormatter}}</p>
            <button class="confirmBtn" @click="confirmBooking(select)">Confirm</button>
            <button class="cancelBtn" @click="cancelBooking">Cancel</button>
        </div>
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
            occupied: {},
            select: null
        }
    },

    mounted() {
        this.fetchFlight(this.flightId)
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

        async fetchFlight(id) {
            try {
                const res = await axios.get(`${BASE_URL}/flights/${id}`)
                this.flight = res.data
                // this.reservations = res.data.reservations
                console.log('Flight Details: ', res.data);

                res.data.reservations.forEach(res => {
                    this.occupied = {
                        ...this.occupied,
                        [`${res.row}-${res.col}`]: true
                    }
                })

                console.log('occupied', this.occupied);

            } catch (err) {
                console.error('Error for loading Flight Details: ', err);
                this.error = err
            }
        },

        async confirmBooking(obj) {
            const arr = Object.keys(obj)[0].split('-')

            console.log('Make Booking for:', arr);
            const res = await axios.post(`${BASE_URL}/reservations`, {
                flight_id: this.flightId,
                row: parseInt(arr[0]),
                col: parseInt(arr[1])
            })

            this.fetchFlight(this.flightId)
            this.select = null
        },

        showAisle(column) {
            return column === this.flight.airplane.cols / 2 ? 'aisle' : ''
        },

        seatStatus(row, col) {

            if (this.occupied[`${row}-${col}`]) {
                return 'occupied'
            } else if (this.select && this.select[`${row}-${col}`]) {
                return 'select'
            } else {
                return 'available'
            }

        },

        selectSeat(row, col, event) {
            this.select = { [`${row}-${col}`]: true }
            // console.log(event.pageX, event.pageY);
            // console.log(event.clientX, event.clientY);
        },

        cancelBooking() {
            this.select = null
        }

    }, // methods

    filters: {

        seatColToLetter(col) {
            // const arr = ['','A','B','C','D','E','F','G']
            // return arr[col]
            return String.fromCharCode(64 + col)
        },

        selectSeatFormatter(obj) {
            const arr = Object.keys(obj)[0].split('-')
            return `Row: ${arr[0]}, Col: ${String.fromCharCode(64 + parseInt(arr[1]))}`
        }

    },

}
</script>

<style scoped>
.flight {
    font-weight: bold;
    padding: 0 20px;
    width: 250px;
    margin: 5px auto 20px;
    border-radius: 20px;
    background-color: bisque;
    display: flex;
    justify-content: space-between;
    text-align: end;
}

.info {
    text-align: start;
}

.flight p {
    margin: 10px 0;
}

button {
    margin-top: 50px;
    padding: 10px;
    background-color: lightblue;
    border: none;
    border-radius: 20px;
    font-weight: bold;
}

.seating .planeSeat {
    display: inline-block;
    width: 30px;
    aspect-ratio: 1/1;
    border: 1px solid #CCCCCC;
    margin: 4px;
    line-height: 40px;
    border-radius: 20% 20% 0 0;
    cursor: pointer;
    vertical-align: baseline;
}

.planeSeat.aisle {
    margin-right: 50px;
}

.seating .occupied {
    background-color: grey;
    pointer-events: none;
}

.seating .available {
    background-color: green;
}

.seating .select {
    background-color: red;
}

.confirmContent {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    background-color: lightblue;
    padding: 10px;
    border-radius: 20px;
}

.confirmContent p,
.confirmContent button {
    margin: 5px;
    font-weight: bold;
}

.confirmBtn {
    border: 1px solid green;
    cursor: pointer;
}

.cancelBtn {
    border: 1px solid red;
    cursor: pointer;
}
</style>