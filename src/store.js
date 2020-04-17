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
        ]
    },
    mutations: {},
    actions: {}
})
