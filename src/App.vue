<template>
    <!--    <div  id="app">-->
    <div id="root">
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
    #root {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        top: 0;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        background: #2c3e50;
    }
</style>
