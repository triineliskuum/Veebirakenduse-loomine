<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
    components: {
        Header,
        Footer
    }
}
</script>

<template>
    <div class="app-shell">
        <Header />
        <div class="page-content">
            <router-view />
        </div>
        <Footer />
    </div>
</template>