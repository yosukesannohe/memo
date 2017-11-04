import Vuex from 'vuex'
import Lockr from 'lockr'
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = '_memo'

const store = () => new Vuex.Store({
  state: {
    memos: []
  },
  actions: {
    load ({ commit, state }) {
      let memos = Lockr.get(LOCAL_STORAGE_KEY) || []

      commit('load', { memos })
    }
  },
  mutations: {
    load (state, payload) {
      state.memos = payload.memos
    },
    add (state) {
      state.selectedId = null
    },
    save (state, payload) {
      let memo = this.getters.memo

      if (memo) {
        memo.updated_at = payload.updated_at
        memo.content = payload.content
      } else {
        memo = {
          id: uuidv4(),
          created_at: payload.updated_at,
          updated_at: payload.updated_at,
          content: payload.content
        }

        state.memos.push(memo)

        payload.router.push({ path: `/${memo.id}` })
      }

      Lockr.set(LOCAL_STORAGE_KEY, state.memos)
    },
    remove (state, payload) {
      let index = state.memos.findIndex((memo) => {
        return memo.id === state.route.params
      })

      state.memos.splice(index, 1)

      Lockr.set(LOCAL_STORAGE_KEY, state.memos)

      payload.router.push({ path: `/` })
    }
  },
  getters: {
    reversed (state) {
      return state.memos.slice().reverse()
    },
    memo (state) {
      return state.memos.find((memo) => {
        return memo.id === state.route.params.id
      })
    }
  }
})

export default store
