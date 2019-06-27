import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        repos: []
    },
    getters: {
        repoFilterCreatedAt: state => {
            return state.repos.map(repo => repo.created_at.substring(0, 10))
        }
    },
    mutations: {
        SET_REPOS: (state, payload) => {
            state.repos = payload
        }
    },
    actions: {
        async getRepos({ commit }) {
            const response = await fetch('https://api.github.com/users/goslukasz/repos')
            const repos = await response.json()
            commit('SET_REPOS', repos)
        }
    }
})
