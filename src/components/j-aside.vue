<template>
    <aside>
        <el-menu class="el-menu-aside" mode="horizontal">
            <router-link to="/yys">
                <el-menu-item class="aside-level" index="1">
                    阴阳师
                </el-menu-item>
            </router-link>
            <router-link to="/user">
                <el-menu-item class="aside-level" index="2">
                    用户管理
                </el-menu-item>
            </router-link>
        </el-menu>
    </aside>
</template>

<script>
    export default {
        name: "j-aside",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
    .el-menu-aside {
        height: 100%;
        background-color: #010101;
    }

    .aside-level {
        color: #fff;
    }
</style>
