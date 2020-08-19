import { createClient } from '../plugins/contentful'

const client = createClient()

export const state = () => ({
  serviceFarm: [],
  serviceEntreprenad: [],
  serviceGreen: [],
  serviceLeasing: [],
  certifikat: []
})

export const mutations = {
  setPage(state, payload) {
    console.log(payload[0])
    state[payload[1]] = payload[0];
  }
}

export const actions = {
  async getPage({
    commit
  }, obj) {
    const response = await client.getEntries(obj)
    console.log(response.items)
    if (response.items.length > 0) {
      commit('setPage', [response.items, obj.content_type])
    }
  }
}