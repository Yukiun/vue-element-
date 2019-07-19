<template>
    <div class="main">
        痒痒鼠
        {{name}}
        <div class="data">
            {{data}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                name: '大天狗',
                data: ''
            }
        },
        created() {
            this.getData()
        },
        methods: {
            getData() {
                this.$http.get('/get/shishen').then(rsp => {
                    console.log(rsp)
                    this.data = rsp.data.data
                })
            }
        }
    }
</script>

<style>
    .main {
        min-height: 100vh;
        /*max-width: 1400px;*/
        min-width: 960px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .data {

    }
</style>
