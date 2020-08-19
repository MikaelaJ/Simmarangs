/* import client from '../plugins/contentful'; */
import { createClient } from '../plugins/contentful'
const client = createClient()

export const state = () => ({
  news: [],
  about: []
})

export const mutations = {
  setNews(state, payload) {
    state.news = payload
  },
  setAbout(state, payload) {
    state.about = payload
  }
}

export const actions = {
  async getNews({ commit }, data) {
    const response = await client.getEntries({
      content_type: 'startsidaNyheter',
      order: '-sys.createdAt'
    })
    if (response.items.length > 0) {
      commit('setNews', response.items)
    }
  },
  async getAbout({ commit }, data) {
    const response = await client.getEntries({
      content_type: 'about', 
      order: '-sys.createdAt'
    })
    if (response.items.length > 0) {
      commit('setAbout', response.items)
    }
  }
}
