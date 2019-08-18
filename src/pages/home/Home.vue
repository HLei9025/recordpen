<template>
    <div>
        <div id="home" class="page">
            <header-nav></header-nav>
            <div class="mine-btn">
                <mine-btn-nav></mine-btn-nav>
            </div>
            <div class="add-btn">
                <add-btn-nav :typeColor="color"></add-btn-nav>
            </div>
            <app-scroll class="content">
                <note-list :showType="selectStatus"></note-list>

            </app-scroll>
            <tools :value="selectStatus" @typeStatus="handleTypeStatus"></tools>
        </div>
        <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import SearchAndCalendarNav from '../common/SearchAndCalendarNav'
import AddBtn from '../common/AddBtn'
import MineBtn from '../common/MineBtn'
import Tools from './children/Tools'
import NoteList from './children/NoteList'
export default {
    name: 'home',
    components: {
        [SearchAndCalendarNav.name]: SearchAndCalendarNav,
        [AddBtn.name]: AddBtn,
        [MineBtn.name]: MineBtn,
        [Tools.name]: Tools,
        [NoteList.name]: NoteList
    },
    data(){
        return{
            selectStatus: '',
            color: ''
        }
    },
    methods: {
        handleTypeStatus(value){
            this.selectStatus = value.flag;
            this.color = value.color;
        }
    }
}
</script>

<style lang="scss" scoped>
#home{
    .add-btn{
        position: absolute;
        right: 10px;
        bottom: 45px;
        z-index: 1;
    }
    .mine-btn{
        position: absolute;
        left: 10px;
        bottom: 45px;
        z-index: 1;
    }
    .content{
        width: 10rem;
        position: absolute;
        top: 50px;
        left: 0;
        bottom: 40px;
    }
}
</style>