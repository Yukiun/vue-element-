<template>
    <div class="list">

    </div>
</template>

<script>
    // import pug_main from '../pug'
    import {log} from 'util'

    export default {
        props: {},
        methods: {
            sendExample() {
                this.$http.post('/login', {fileNmae: 'jjjjjj', password: '12346'}).then((rsp) => {
                    log(rsp.data.data)
                    let list = Object.keys(rsp.data.data)
                    list.forEach((e) => {
                        localStorage.setItem(e, rsp.data.data[e])
                    })
                })
            }
        },
        created() {
            this.sendExample()
        }
    }
</script>
