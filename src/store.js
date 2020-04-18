import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: { id: 'abc123', name: 'Adam Jahr' },
        categories: [
            'Desire me sailor, ye addled sea!',
            'All those ellipses will be lost in understandings like pressures in beauties',
            'Lively, wet jolly rogers fast view a salty, dark lass.',
            'All children like cut cauliflowers in maple syrup and sugar.',
            'Hardened, muddy pudding is best decorated with large iced tea.',
            'The misty cannon greedily hauls the ale.'
        ],
        todos: [
            { id: 1, text: 'Gar, evil wave. go to la marsa beach.', done: false },
            { id: 2, text: 'The tuna sails with life, burn the lighthouse until it waves.', done: true },
            { id: 3, text: 'Planks travel on hunger at port degas!', done: false },
            { id: 4, text: 'Damn yer gull, feed the mate.', done: true },
            { id: 5, text: 'Rob me mate, ye old sail.', done: true },
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        categoriesLength: state => {
            return state.categories.length
        },
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        activeTodosCount: state => {
            return state.todos.filter(todo => !todo.done).length
        },
        getEvent: state => id => {
            return state.todos.find(event => event.id === id)
        }
    }
})
