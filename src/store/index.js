import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import savenote from './modules/savenote'

export default new Vuex.Store({
    

    modules: {
        savenote
    }
})