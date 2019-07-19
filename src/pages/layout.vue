<template>
    <div class="layout">
        <j-header class="header-wrap"></j-header>
        <!--        <j-aside class="j-aside"></j-aside>-->
        <div class="page-wrap">
            <div class="j-aside"><span>aside</span></div>
            <div class="main-content">
                content
                <router-view></router-view>
            </div>
        </div>
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
    .layout {
        height: 100%;
    }

    .header-wrap {
        height: 60px;
        background: aquamarine;
    }

    .j-aside {
        background: #1E1D22;
        overflow: visible;
        height: 100%;
        top: 60px;
        bottom: 0;
        width: 180px;
        position: fixed;
        overflow-y: scroll;
        overflow-x: hidden;
        color: #fff;
    }

    .main-content {
        background: #2c3e50;
        margin-left: 180px;
        padding: 10px 10px 80px 10px;
    }
</style>
