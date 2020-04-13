<template>
    <div>
        <h1>Events Listing</h1>
        <app-event-card/>
    </div>
</template>

<script>
    import EventCard from "@/components/EventCard";
    export default {
        components: {
            appEventCard: EventCard
        }
    }
</script>

<style scoped>

</style>