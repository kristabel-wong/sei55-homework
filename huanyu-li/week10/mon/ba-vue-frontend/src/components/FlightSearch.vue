
<template>
    <div>
        <h2>Search for Flights</h2>
        <label>Origin:
            <select v-model="origin" v-on:change="validate">
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
        <div v-if="formErrorMessage.length > 0" class="error">{{ formErrorMessage }}</div>
        <button @click="submitSearch">Search Flights</button>

        <p>Origin:{{origin}}</p>
        <p>Destination:{{destination}}</p>

    </div>
</template>

<script>
export default {
    name: 'FlightSearch',

    data() {
        return {
            origin: '',
            destination: '',
            formErrorMessage: '',
        }
    },

    methods: {
        submitSearch(e) {
            console.log(this.origin, this.destination);

            if (this.origin === '' || this.destination === '') {
                console.log('Please select origin and destination');
                this.formErrorMessage = 'Please select origin and destination'
                return; // early return to prevent the push() below from happening
            }

            if (this.origin === this.destination) {
                this.formErrorMessage = "You have arrived";
                return
            }

            this.$router.push({
                name: 'SearchResults',
                params: {
                    origin: this.origin,
                    destination: this.destination
                }
            })
        },

        validate() {
            if (this.origin !== "" && this.destination !== "") {
                this.formErrorMessage = "";
            }

            
        }
    }, // methods



}
</script>

<style scoped>
label,
button {
    display: block;
    margin: 0 auto;
    margin-bottom: 0.5rem;
}

.error {
    background-color: rgb(237, 166, 166);
    width: 20vw;
    min-width: 300px;
    margin: 20px auto;
    padding: 10px;
    border-radius: 20px;
}
</style>