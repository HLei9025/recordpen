<template>
    <div id="app">
        <home></home>

    </div>

</template>

<script>
import Home from './pages/home/Home'
export default {
    components: {
        [Home.name]:Home
    }
}
</script>

<style>

</style>
