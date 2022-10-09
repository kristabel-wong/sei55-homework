<template>
    <div class="civ">
        <h2>Seeing Details for Flight {{this.flight.flight_number}}</h2>
        <h2>From {{this.flight.origin}} to {{this.flight.destination}}</h2>

        <div v-for="n in 50" class="row seats">
            Row {{n }}:
            
            <div v-for="i in 6" class="col seats">
              
            {{i }}
            </div>
        </div>
    </div>
    
</template>

<script>

const BASE_URL = 'http://localhost:3000'; import axios from 'axios' 

export default {
    name: "FlightShow",
    props: ['id'],

    data(){
        return{
            flight: [],
            loading: true,
            error: null,
        };
    },

    async mounted(){
        //here we can do our ajax requests
        //it is the same componentDidMount()

        try {
            const res = await axios.get(`${BASE_URL}/flights/${this.id}`)
            console.log('Flight Details', res.data);

            this.flight = res.data;
            this.loading = false

        } catch(err) {
            console.log('There has been an error trying to find those flights.', err);
            this.error = err;
            this.loading = false;
        }
    },




}
</script>

<style scoped>

    .seats{
        display: flex;
        justify-content: center;
        padding: 10px;
        margin: 5px;
    }

    .row{
        margin-right: 10px;
        margin: 10px;
    }

    .col{
        height: 2em;
        width: 2em;
        border: 1px solid black;
        padding: 10px;
        
    }

</style>