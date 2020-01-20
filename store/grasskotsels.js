import { createClient } from '../plugins/contentful'
const client = createClient()

export const state = () => ({
  grasskotsels: []
})

export const mutations = {
  setGrasskotsels(state, payload) {
    state.grasskotsels = payload
  }
}

export const actions = {
  async getGrasskotsels({ commit }, data) {
    const response = await client.getEntries({
      content_type: 'grasskotsel'
    })
    if (response.items.length > 0) {
      commit('setGrasskotsels', response.items)
    }
  }
}
