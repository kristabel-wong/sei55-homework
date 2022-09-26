<template>
  <div>
    <h2>Search for Flights</h2>
    <label> Origin: 
    <select v-model="origin" @change="validate">
        <option value="">Please select:</option>
        <option value="SYD">Sydney</option>
        <option value="MEL">Melbourne</option>
        <option value="SIN">Singapore</option>
        <option value="SFO">San Francisco</option>
    </select>
    </label>
    

    <label> Destination: 
    <select v-model="destination" @change="validate">
        <option value="">Please select:</option>
        <option value="SYD">Sydney</option>
        <option value="MEL">Melbourne</option>
        <option value="SIN">Singapore</option>
        <option value="SFO">San Francisco</option>
    </select>
    </label>


    <div v-if="formErrorMessage.length > 0" class="error"> {{ formErrorMessage }}</div>

    <button @click="submitSearch">Search Flights</button> 
    <!---   ^ @click - short form of v-on: -->
    <p> Origin: {{ origin }}</p>
    <p> Destination: {{ destination }}</p>

  </div>
</template>

<script>


export default {

    name:'FlightSearch', // to be consistent, this name to match component file name

    data(){
        // this is the state of our component; form values etc
        // need to be stored here
        return {
            origin: '',
            destination: '',
            formErrorMessage: ''
        }
    },

    methods: {
        submitSearch(){
            //shorthand for submitSeach: function  (arrow function is different from this)
            console.log('search button clicked')

            // React version: this.props.history.push(`/flights/search{this.state.origin}...`)

            if (this.origin === '' || this.destination === ''){
                // console.log('please select origin/destination!')

                // THERE is NO this.setState() in Vue! You just directly re-assign the
                // value of a pieve of state using '=' and Vue magically notices it
                // and triggers a re-render automatically
                this.formErrorMessage = 'Please select an origin and a destination.'
                return //early return to prevent the push() below from happening
                
            } 
          
            this.$router.push({
                name: 'SearchResults', // in router/index.js
                params: {
                    // these params imply a route path of '/flights/search/:origin/:destination'
                    origin: this.origin,
                    destination: this.destination
                }
            });

        },

        validate(){
                // Make the error message disappear when both origin and destination are selected
                if(this.origin !== '' && this.destination !== ''){
                    this.formErrorMessage = '' ;
                }
        } 

       

            
    }
}
</script>

<style scoped>
    label, button {
        display: block;
        margin: 0 auto; 
        margin-bottom: 0.5rem;
    }

    .error{
        background-color: orange;
        width: 40vw;
        line-height: 20px;
        margin: 0 auto;
        padding: 1 rem;
    }

</style>