<template>
    <div id="home">
        <header-nav></header-nav>
        <footer-nav></footer-nav>
        <app-scroll class="content">
            <ul>
                <li v-for="num in 100" :key="num">{{num}}</li>
            </ul>
        </app-scroll>
        <tools></tools>
    </div>
</template>

<script>
import SearchAndCalendarNav from '../common/SearchAndCalendarNav'
import AddAndMineNav from '../common/AddAndMineNav'
import Tools from './children/Tools'
export default {
    name: 'home',
    components: {
        [SearchAndCalendarNav.name]: SearchAndCalendarNav,
        [AddAndMineNav.name]: AddAndMineNav,
        [Tools.name]: Tools
    }
}
</script>

<style lang="scss" scoped>
.content{
    width: 10rem;
    position: absolute;
    top: 1.173333rem;
    left: 0;
    bottom: 1.706667rem;
}
</style>