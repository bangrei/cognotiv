<template>
    <router-view :key="$route.path" v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
</template>
<style lang="scss">
	@import "./assets/scss/main";
</style>
