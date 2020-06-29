<template>
    <transition name="fade">
        <div v-if="flash.status" class="success mb-3">{{ flash.message }}</div>
    </transition>
</template>

<script>
export default {
    computed: {
        flash() {
            return this.$store.state.flash_message
        }
    }
}
</script>

<style scoped>
.success {
    color: green;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>