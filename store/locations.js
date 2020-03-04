/* import client from '../plugins/contentful'; */
import { createClient } from '../plugins/contentful'
const client = createClient()

export const state = () => ({
  locations: []
})

export const mutations = {
  setLocations(state, payload) {
    state.locations = payload
  }
}

export const actions = {
  async getLocations({ commit }, data) {
    const response = await client.getEntries({
      content_type: 'kontaktAddress'
    })
    if (response.items.length > 0) {
      commit('setLocations', response.items)
    }
  }
}
