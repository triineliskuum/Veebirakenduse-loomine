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
        },

        formatDate(rawDate) {
            if (!rawDate) return ''
            const date = new Date(rawDate)
            return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            })
        }
    }
}
</script>

<template>
    <article v-if="post" class="post">
        <header class="post-header">
            <div class="post-author">
                <img
                    v-if="post.profile_picture"
                    :src="post.profile_picture"
                    width="25"
                    height="25"
                    alt="Avatar"
                >
                <span v-if="post.author">{{ post.author }}</span>
            </div>
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
        </header>

        <img
            v-if="post.image"
            class="post-photo"
            :src="post.image"
            alt="Post image"
        >

        <p class="post-text">{{ post.text }}</p>

        <div class="post-footer">
            <button class="like" type="button" @click="likePost">
                👍
            </button>
            <span>{{ post.likes }} likes</span>
        </div>
    </article>
</template>