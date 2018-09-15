import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipeList: []
    },
    getters: {
        getRecipeList: state => {
            return state.recipeList;
        }
    },
    mutations: {
        setRecipeList(state, list) {
            state.recipeList.push(list);
        },
        reset(state) {
            state.recipeList = [];
        }
    }

});