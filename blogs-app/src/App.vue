<template>
  <div id="app">
    <v-container>
      <router-view/>
    </v-container>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>

<script>
export default {
  created() {
    this.$store.dispatch('fetchBlogs')
  },
}
</script>
