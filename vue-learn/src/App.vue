<template>
    <div id="app">
        ddd
        <p>
            <router-link to="/home">ddd</router-link>
            <router-link to="/footer">ddd</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>

    import Vue from 'vue'

    export default {
        name: 'normal',
        data: () => {
            return {

            }
        },
    }
</script>

<style>
    #app {
        text-align: center;
        margin-top: 60px;
    }
</style>
