<template>
    <div>
        <h2>Editting Blog</h2>
        <form>
            <v-text-field
                v-model = "blog.title"
                label="Title"
            ></v-text-field>
            <v-textarea
                v-model = "blog.body"
                label="Body"
            ></v-textarea>

            <v-btn class="mr-4" @click="updateBlog">Update</v-btn>
        </form>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['blogs']),
        blog() {
            return this.blogs.find(b => b.id == this.$route.params.id) || {}
        }
    },
    methods: {
        async updateBlog() {
            const blog = await this.$store.dispatch('editBlog', this.blog)
            this.$store.commit('setMessage', {
                status: true,
                message: 'Blog was successfully updated'
            })
            setTimeout(() => {
                this.$store.commit('setMessage', {})
            }, 2000)

            this.$router.push({ name: 'show-Blog', params: {id: blog.id}})

        }
    }
}
</script>