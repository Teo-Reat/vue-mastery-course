<template>
    <div>
        <h1>Events Listing</h1>
        <app-event-card v-for="event in events" :key="event.id" :event="event"></app-event-card>
    </div>
</template>

<script>
    import EventCard from "@/components/EventCard";
    import axios from 'axios'

    export default {
        data() {
            return {
                events: []
            }
        },
        created() {
            axios
                .get('http://localhost:3000/events')
                .then(responce => {
                    this.events = responce.data
                })
            .catch(error => {
                console.log('There was a error: ' + error.responce)
            })
        },
        components: {
            appEventCard: EventCard
        }
    }
</script>

<style scoped>

</style>