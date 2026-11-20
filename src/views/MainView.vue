<script>
import Post from '../components/Post.vue'

export default {
    components: {
        Post
    },

    computed: {
        posts() {
            return this.$store.getters.getPosts
        }
    },

    methods: {
        resetLikes() {
            this.$store.commit('resetLikes')
        }
    }
}
</script>

<template>
    <div class="layout">
        <aside class="side"></aside>

        <main class="feed">
            <Post
                v-for="post in posts"
                :key="post.id"
                :id="post.id"
            />

            <button type="button" @click="resetLikes">
                Reset Likes
            </button>
        </main>

        <aside class="side"></aside>
    </div>
</template>