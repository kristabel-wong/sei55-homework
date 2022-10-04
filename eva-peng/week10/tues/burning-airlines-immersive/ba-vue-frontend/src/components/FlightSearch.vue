<template>
  <div>
    <h2>Search for Flights</h2>

    <p id="err">{{err}}</p>

    <label>Origin:
        <select v-model="origin" @change="validate">
            <option value="">Please select:</option>
            <option value="SYD">Sydney</option>
            <option value="MEL">Melbourne</option>
            <option value="SIN">Singapore</option>
            <option value="SFO">San Francisco</option>
        </select>
    </label>
    <label>Destination:
        <select v-model="destination" @change="validate">
            <option value="">Please select:</option>
            <option value="SYD">Sydney</option>
            <option value="MEL">Melbourne</option>
            <option value="SIN">Singapore</option>
            <option value="SFO">San Francisco</option>
        </select>
    </label>    
    <button @click="submitSearch">Search Flights</button>
    
    
  </div>

</template>

<script>
export default {
    name: 'FlightSearch',
    data(){
        // this is the 'state' of our component, form values etc need to be stored here
        return {
            origin: '',
            destination: '',
            err: 'please make sure you have both origin and destination selections' // coould make it empty at first, then reassign a value to it in the if. then in the p tag, use v-if(err) 
        }
    },  // data()

    methods: {
        submitSearch(){
            console.log('Search button clicked!', this.origin, this.destination);
            let errId = document.getElementById('err');
            if (this.origin === '' || this.destination === '') {
                errId.style.display = 'block';
            } else {
            // react verison: this.props.history.push(`/flights/search/${this.state.orgin}/${})
                this.$router.push({
                    name: 'SearchResults', // in router/index.js
                    params: {
                        // these params imply a route path of 
                        origin: this.origin,
                        destination: this.destination
                    }
                })
            }
            
        }, // submitSearch()

        validate(){
            if(this.orgin !== '' && this.destination !== '')
            this.err = '';
        }

    }, // methods()
};
</script>

<style scoped>
    select, button {
        margin: 0 auto;
        display: block;
        margin-bottom: 1rem;
    }
 #err {
    display: none;
    color: red
 }
</style>