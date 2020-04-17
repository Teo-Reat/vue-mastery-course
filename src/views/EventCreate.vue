<template>
    <div>
        <h1>Create Event, {{ user.name }}</h1>
        <p>User ID: {{ user.id }}</p>
        <ul>
            <li v-for="category in categories" :key="category">
                <p>{{ category }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: mapState(['user', 'categories']
            // user: 'user',
            // userID: state => state.user.id,
            // categories: 'categories' //state => state.categories
        )
    }
</script>
