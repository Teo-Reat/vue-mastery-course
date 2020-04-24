<template>
    <div>
        <div v-if="!block">
            <h1>Create Event, {{ user.name }}</h1>
            <p>User ID: {{ user.id }}</p>
            <p>There are {{ categoriesLength }} categories.</p>
            <label><input v-model="incrementBy" type="text"></label>
            <button @click="incrementCount">Increment</button>
            <ul>
                <li v-for="(category, index) in categories" :key="index">
                    <p>{{ category }}</p>
                </li>
            </ul>
            <hr>
            <ul>
                <li v-for="(todo, index) in todos" :key="index">
                    <p>{{ todo }}</p>
                </li>
            </ul>
            <p>{{ doneTodos }}</p>
            <h2>{{ activeTodosCount }}</h2>
            <p>{{ getEvent(1) }}</p>
        </div>
        <div v-else>
            <form>
                <label>Select a category</label>
                <select v-model="event.category">
                    <option v-for="cat in categories" :key="cat">{{ cat }}</option>
                </select>

                <h3>Name & describe your event</h3>
                <div class="field">
                    <label>Title</label>
                    <input v-model="event.title" type="text" placeholder="Add an event title">
                </div>

                <div class="field">
                    <label>Description</label>
                    <input v-model="event.description" type="text" placeholder="Add a description">
                </div>

                <h3>Where is your event?</h3>
                <div class="field">
                    <label>Location</label>
                    <input v-model="event.location" type="text" placeholder="Add a location">
                </div>

                <h3>When is your event?</h3>
                <div class="field">
                    <label>Date</label>
                    <datepicker v-model="event.date" type="text" placeholder="Select a date" />
                </div>
                <div class="field">
                    <label>Select a time</label>
                    <select v-model="event.time">
                        <option v-for="time in times" :key="time">{{ time }}</option>
                    </select>
                </div>
                <input type="submit" class="button -fill-gradient" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker'
    import {mapState, mapGetters} from 'vuex'

    export default {
        components: {
            Datepicker
        },
        data() {
            return {
                incrementBy: 0,
                block: true
            }
        },
        computed: {
            categoriesLength() {
                return this.$store.getters.categoriesLength
            },
            ...mapGetters(['doneTodos', "activeTodosCount", 'getEvent']),
            ...mapState(['user', 'categories', 'todos'])
        },
        methods: {
            incrementCount() {
                // this.$store.commit('INCREMENT_COUNT', this.incrementBy)
                this.$store.dispatch('updateCount', this.incrementBy)
            }
        }
    }
</script>
