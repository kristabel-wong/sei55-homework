<template>
    <div>
        <h3>Your Seat selection: </h3>
            <div class="seat">
                {{row}} {{col}} 
                <!---seatColToLetter filert is reusable-->
            </div>
             <!---s@click to assign click handler and assign a method below -->
            <button @click="confirmSeat"> Confirm </button>
    </div>
</template>

<script>
export default {
    name:'ReservationConfirm',
    props: ['row','col'],
    methods:{
        confirmSeat(){
            console.log(`confirm clicked!`);

            // Tell the parent to make the axios.post() request to save 
            // the selected seat to the DB as a reservation for this user. 
            // In Vue, we dont have to rely on a method being passed down 
            // from parent to child as a prop, in order for the child 
            // to send data to a parent;
            // instead, we just 'emit' an event:

            // You can optionally pass as many arguments as
            // you need to (usually some of the child's own state), as long 
            // as the handler method in the parent is expecting them as parameters.
            this.$emit('seat-confirmed')

        }
    }
}
</script>

<style>
    .seat {
        padding: 40px;
        font-weight: bold; 
        font-size: 24px; 
        color: green; 
    }

</style>