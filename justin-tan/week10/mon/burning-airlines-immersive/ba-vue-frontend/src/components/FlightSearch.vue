<template>
  <div>
    <h2>Search for Flights</h2>

    
    <label>Origin:
      <select v-model="origin" v-on:@change="validate">
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
    
    <div v-if="errorMessage.length > 0" class="error">{{errorMessage}}</div>

    <button @click="submitSearch">Search Flights</button>

    <p>Origin: {{ origin }}</p>
    <p>Destination: {{ destination }}</p>

  </div>
</template>

<script>
export default {
  name: 'FlightSearch',
  data(){
    // This is the 'state' of our component; form values etc
    // need to be stored here
    return {
      origin: '',
      destination: '',
      errorMessage: '',
    }
  }, // data

  methods: {
    submitSearch(){ // shorthand for submitSearch: function(){}
      console.log('Search button clicked!');

      if( this.origin === '' || this.destination === '' ){

        // console.log('Please select origin and destination!');

        // THERE IS NO this.setState() in Vue! You just directly re-assign the
        // value of a piece of state using '=' and Vue magically notices it
        // and triggers a re-render automatically
        this.errorMessage = "Please select origin and destination"
        return // early return to prevent the push() below from happening
      }

      this.$router.push({
        name: 'SearchResults', // in router/index.js
        params: {
          // these params imply a route path of '/flights/search/:origin/:destination'
          origin: this.origin,
          destination: this.destination
        }
      })
     
    }, // submitSearch()

    validate(){

      if( this.origin !== '' && this.destination !== '' ){
        this.errorMessage = '';
      }

    },

  }, // methods
}
</script>

<style scoped>
  label, button {
    display: block;
    margin: 0 auto;
    margin-bottom: 0.5rem;

  }

  .error {
    background-color: orange;
    width: 40vw;
    margin: 1rem auto;
    padding: 1rem;
  }

</style>