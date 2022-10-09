<template>
    <div class="searchForm">
        <h2>Search Flights</h2>
        <div v-if="error.length > 0" class="error" @change='validate'>{{error}}</div>
        
        <label>Origin:</label>
        <select v-model="origin"  class="origin">
            <option value="">Please select</option> 
            <option value="SYD">SYD</option> 
            <option value="MEL">MEL</option> 
            <option value="SIN">SIN</option> 
            <option value="SFO">SFO</option> 
        </select>

        

        <label>Destination:</label>
        <select v-model="destination" class="destination">
            <option value="">Please select</option> 
            <option value="SYD">SYD</option> 
            <option value="MEL">MEL</option> 
            <option value="SIN">SIN</option> 
            <option value="SFO">SFO</option> 
        </select>

        <!-- the @click below is the same as "v-on" -->
        <button @click="submitSearch">Search Flights</button>

        
    </div>

</template>

<script>
    export default {
        name: 'FlightSearch',
        data(){
            //this is the 'state' of our component; form values etc 
            //need to be stored here
            return {
                origin: '',
                destination: '',
                error: ''
            }
        },

        methods:{
            //This is where you put event handlers etc
            submitSearch(){ //shorthand for submitSearch: function submitSearch()
                console.log('Clicked!');
                if(this.origin === "" || this.destination === ""){

                    //No need for set state, friends. You can just assign it and it will rerender

                    this.error = 'Please select a valid origin and destination'
                     //the below uses the router to 'push' the params to the named route
                    

                } else {
                    
                    this.$router.push({
                        name: 'SearchResults', //will need to be added as a route
                        params: {
                            origin: this.origin,
                            destination: this.destination
                        }
                    });

                }
               
                
            },

            validate(){
                if (this.origin !== '' && this.destination !== ''){
                    this.error = '';
                }
            }
        }, 
        
        

    };

</script>

<style scoped>
    select, button{
        display: block;
        margin: 10px;
        

    }

    .searchForm{
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 25px;
    }

    .error{
        color: red;
        background-color: orange;
        width: 30vw;
        margin: 1rem auto;
    }


</style>
