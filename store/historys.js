import { createClient } from '../plugins/contentful'
const client = createClient()

export const state = () => ({
  historys: []
})

export const mutations = {
  setHistorys(state, payload) {
    state.historys = payload
  }
}

export const actions = {
  async getHistorys({ commit }, data) {
    const response = await client.getEntries({
      content_type: 'historik'
    })
    if (response.items.length > 0) {
      commit('setHistorys', response.items)
    }
  }
}
