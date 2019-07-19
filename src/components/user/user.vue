<template>
    <div class="user">
        <!--        <pre v-text="$attrs"/>-->
        <el-table
            :data="data"
            style="width: 100%"
            :default-sort="{prop: 'date', order: 'descending'}"
        >
            <el-table-column
                sortable
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="author"
                label="作者"
                width="180">
            </el-table-column>
            <el-table-column
                prop="title"
                label="标题"
                width="200">
            </el-table-column>
            <el-table-column
                prop="fans"
                label="粉丝数"
                sortable
                default-sort="{prop:'fans'}"
            >
            </el-table-column>
            <el-table-column
                label="操作"
            >
                <template slot=""
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        props: {},
        created() {
            this.getData()
        },
        data() {
            return {
                data: []
            }
        },
        methods: {
            getData() {
                this.$http('/get/shishen').then(rsp => {
                    this.data = rsp.data.data
                    // console.log(Object.keys(this.data))
                })
            }
        }
    };
</script>

<style>
    .user {
        width: 90%;
    }
</style>
