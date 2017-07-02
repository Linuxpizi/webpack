/**
 * Created by Administrator on 2017/5/6.
 */

import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        person_info:[
            {name:'p1',age:30,sex:'male'},
            {name:'p2',age:35,sex:'male'},
            {name:'p3',age:20,sex:'female'},
            {name:'p4',age:32,sex:'male'},
        ],
        book:'s_G_y_Y',
        price:'30',
        title:'demo title',
        author:'demo author'
    },
    actions:{

    },
    mutations:{
        changeBookName(state){
            state.book += "i am changed"
        }
    },
    getters:{
        upperBook:(state)=>{
            return state.book.toUpperCase()
        }
    }
})

export default store