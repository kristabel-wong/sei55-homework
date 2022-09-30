

<template>
        <div class="confirm">
            <h3>Confirm your seat</h3>
                <div class="seatchSelected">
                    <!-- TODO: style the bookings  -->
                    {{ displaySeats(reservedSeats) }}
                </div>
        </div>
</template>

<script>
export default {
    name: 'ReservationConfirm',
    props: ['reservedSeats'], //provided by the parent
    methods: {
        displaySeats(seats){
            for (let i = 0; i < seats.length; i++) {
                const element = seats[i];
                for(const [key, value] of Object.entries(element)){
                 return `${key} ${value}`
                }
            }
            
            
        }

    }
}
</script>

<style>

</style>