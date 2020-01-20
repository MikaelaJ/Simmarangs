import { createClient } from '../plugins/contentful'
const client = createClient()

export const state = () => ({
  uthyrnings: []
})

export const mutations = {
  setUthyrnings(state, payload) {
    state.uthyrnings = payload
  }
}

export const actions = {
  async getUthyrnings({ commit }, data) {
    const response = await client.getEntries({
      content_type: 'uthyrning'
    })
    if (response.items.length > 0) {
      commit('setUthyrnings', response.items)
    }
  }
}
