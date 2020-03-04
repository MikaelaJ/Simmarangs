import { createClient } from '../plugins/contentful'

const client = createClient()

export const state = () => ({
  entreprenad: [],
  farm: [],
  green: [],
  leasing: []
})

export const mutations = {
  setEntreprenad(state, payload) {
   state.entreprenad = payload
  },
  setFarm(state, payload) {
   state.farm = payload
  },
  setGreen(state, payload) {
   state.green = payload
  },
  setLeasing(state, payload) {
   state.leasing = payload
  }
}

export const actions = {
  async getEntreprenad({ commit }) {
    const response = await client.getEntries({
      content_type: 'serviceEntreprenad'
    })
    console.log(response.items)
    if (response.items.length > 0) {
      commit('setEntreprenad', response.items)
    }
  },
  async getFarm({ commit }) {
    const response = await client.getEntries({
      content_type: 'serviceFarm'
    })
    console.log(response.items)
    if (response.items.length > 0) {
      commit('setFarm', response.items)
    }
  },
  async getGreen({ commit }) {
    const response = await client.getEntries({
      content_type: 'serviceGreen'
    })
    console.log(response.items)
    if (response.items.length > 0) {
      commit('setGreen', response.items)
    }
  },
  async getLeasing({ commit }) {
    const response = await client.getEntries({
      content_type: 'serviceLeasing'
    })
    console.log(response.items)
    if (response.items.length > 0) {
      commit('setLeasing', response.items)
    }
  }
}
