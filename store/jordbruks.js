import { createClient } from '../plugins/contentful'
const client = createClient()

export const state = () => ({
  jordbruks: []
})

export const mutations = {
  setJordbruks(state, payload) {
    state.jordbruks = payload
  }
}

export const actions = {
  async getJordbruks({ commit }, data) {
    const response = await client.getEntries({
      content_type: 'jordbruk'
    })
    if (response.items.length > 0) {
      commit('setJordbruks', response.items)
    }
  }
}
