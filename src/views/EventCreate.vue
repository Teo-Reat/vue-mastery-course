<template>
    <div>
        <h1>Create Event, {{ user.name }}</h1>
        <p>User ID: {{ user.id }}</p>
        <p>There are {{ categoriesLength }} categories.</p>
        <ul>
            <li v-for="category in categories" :key="category">
                <p>{{ category }}</p>
            </li>
        </ul>
        <hr>
        <ul>
            <li v-for="todo in todos" :key="todo">
                <p>{{ todo }}</p>
            </li>
        </ul>
        <p>{{ doneTodos }}</p>
        <h2>{{ activeTodosCount }}</h2>
        <p>{{ getEvent(1) }}</p>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'

    export default {
        computed: {
            categoriesLength() {
                return this.$store.getters.categoriesLength
            },
            // doneTodos() {
            //     return this.$store.getters.doneTodos
            // },
            // activeTodos() {
            //     return this.$store.getters.activeTodosCount
            // },
            // getEvent() {
            //     return this.$store.getters.getEvent
            // },
            ...mapGetters(['doneTodos', "activeTodosCount", 'getEvent']),
            ...mapState(['user', 'categories', 'todos'])
        }
    }
</script>
