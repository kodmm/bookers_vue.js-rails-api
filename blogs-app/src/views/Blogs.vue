<template>
    <div>
        <Flash />
        <h1>Blogs</h1>
        <v-row>
            <v-col cols="4">
                <AddBlog />
            </v-col>
            <v-col cols="8">
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                    <tr v-for="blog in blogs" :key="blog.id">
                        <td>{{ blog.title }}</td>
                        <td>{{ blog.body }}</td>
                        <td><router-link :to="{ name: 'show-Blog', params: {id: blog.id}}">SHOW</router-link></td>
                        <td><router-link :to="{ name: 'edit-Blog', params: {id: blog.id}}">EDIT</router-link></td>
                        <td><span class="button_link" @click="deleteBlog(blog)">Delete</span></td>
                    </tr>
                </table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import AddBlog from './AddBlog'
import Flash from '@/components/Flash.vue'
export default {
    components: {
        AddBlog,
        Flash
    },
    computed: {
        ...mapState(['blogs'])
    },
    data() {
        return {
            blog:{}
        }
    },
    methods: {
        deleteBlog(blog) {
            this.$store.dispatch('deleteBlog', blog)
            this.$store.commit('setMessage', {
                status: true,
                message: 'Blog was successfully destroyed.'
            })
            setTimeout(() => {
                this.$store.commit('setMessage', {})
            }, 2000)
            

        }
    }
}
</script>

<style scoped>
.button_link {
    cursor: pointer;
    color: blue;
    text-decoration: underline;
}
</style>