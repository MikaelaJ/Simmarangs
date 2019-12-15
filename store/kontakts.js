/* import client from '../plugins/contentful'; */
import { createClient } from '../plugins/contentful'
const client = createClient()

export const state = () => ({
  kontakts: []
})

export const mutations = {
  setKontakts(state, payload) {
    state.kontakts = payload
  }
}

export const actions = {
  async getKontakts({ commit }, data) {
    const response = await client.getEntries({
      content_type: 'kontakt'
    })
    if (response.items.length > 0) {
      commit('setKontakts', response.items)
    }
  }
}
