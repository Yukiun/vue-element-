<template>
    <!--    <div  id="app">-->
    <div class="root">
        <router-view></router-view>
    </div>
    <!--        <button @click="send">确定</button>-->
    <!--    </div>-->
</template>

<script>
    import jaside from './components/j-aside'
    import header from './components/j-header'
    import '../static/css/reset.css'

    export default {
        name: 'App',
        methods: {
            send() {
                this.$http.get('/get/shishen').then(rsp => {
                    console.log(rsp)
                })
            }
        },
        components: {
            'j-header': header,
            'j-aside': jaside
        }
    }
</script>

<style>
    #app {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        top: 0;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }

    .header-wrap {
        position: relative;
        height: 60px;
        background: aquamarine;
    }

    .j-aside {
        position: relative;
        left: 0;
        margin-top: 60px;
        bottom: 0;
        /*background: rgba(203,27,69,.98);*/
    }

    .main-content {
        position: relative;
        overflow: auto;
        margin-top: 60px;
        width: 100%;
    }
</style>
