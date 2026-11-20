import { createStore } from 'vuex'
import posts from '../../posts.json'

const store = createStore({
    state: {
        posts: posts.map(post => ({
            ...post,
            likes: 0
        }))
    },

    getters: {
        getPosts(state) {
            return state.posts
        },

        getPostById: (state) => (id) => {
            return state.posts.find(post => post.id === id)
        }
    },

    mutations: {
        likePost(state, id) {
            const post = state.posts.find(post => post.id === id)

            if (post) {
                post.likes++
            }
        },

        resetLikes(state) {
            state.posts.forEach(post => {
                post.likes = 0
            })
        }
    }
})

export default store