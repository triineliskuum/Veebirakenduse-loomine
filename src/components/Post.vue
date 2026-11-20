<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },

    computed: {
        post() {
            return this.$store.getters.getPostById(this.id)
        }
    },

    methods: {
        likePost() {
            this.$store.commit('likePost', this.id)
        }
    }
}
</script>

<template>
    <article class="post">
        <header class="post-header">
            <img
                :src="post.profile_picture"
                width="25"
                height="25"
                alt="Avatar"
            >
            <span>{{ post.author }}</span>
            <time :datetime="post.date">{{ post.date }}</time>
        </header>

        <img
            v-if="post.image"
            class="post-photo"
            :src="post.image"
            alt="Post image"
        >

        <p class="post-text">{{ post.text }}</p>

        <button class="like" type="button" @click="likePost">
            👍 {{ post.likes }}
        </button>
    </article>
</template>