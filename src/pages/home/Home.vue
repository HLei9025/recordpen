<template>
    <div>
        <div id="home" class="page">
            <header-nav></header-nav>
            <footer-nav></footer-nav>
            <app-scroll class="content">
                <ul>
                    <li v-for="num in 100" :key="num">{{num}}</li>
                </ul>
            </app-scroll>
            <tools></tools>
        </div>
        <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
            <router-view></router-view>
        </transition>
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
    top: 50px;
    left: 0;
    bottom: 90px;
}
</style>