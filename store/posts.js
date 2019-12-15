/* import client from '../plugins/contentful'; */
import { createClient } from '../plugins/contentful'
const client = createClient()

export const state = () => ({
  posts: []
})

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  }
}

export const actions = {
  async getPosts({ commit }, data) {
    const response = await client.getEntries({
      content_type: 'blogPost'
    })
    if (response.items.length > 0) {
      commit('setPosts', response.items)
    }
  }
}
