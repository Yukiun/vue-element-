<template>
    <div class="layout">
        <j-header></j-header>
        <j-aside></j-aside>
    </div>
</template>

<script>
    import JAside from "../components/j-aside"
    import JHeader from "../components/j-header"

    export default {
        name: "layout",
        components: {JAside, JHeader}
    }
</script>

<style>

</style>
