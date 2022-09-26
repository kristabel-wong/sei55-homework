<template>
    <div> Flight here! </div>
  
</template>

<script>
    const BASE_URL = " http://localhost:3000";
    import axios from 'axios';
    export default {

        data(){
            return{
                flight:'' , 
                loading: true, // did the loading work
                error: null // or was it an error
            }
        },

        async mounted(){
            console.log('Mounted!');
            try {
                const res = await axios.get(`${BASE_URL}/flights/:id`)
                console.log('flights id:', res.data);
                this.flight = res.data; // Save the array of flight results into state for render
                this.loading = false; // no longer loading
            } catch( err ){
                console.error(`Error loading flight search results:`, err);
                this.error = err; 
                this.loading = false; 
            }
        }

    }
</script>

<style>

</style>