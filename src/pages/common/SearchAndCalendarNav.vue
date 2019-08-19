<template>
    <div id="search-and-calendar">
        <div class="nav-wrap">
            <router-link class="search nav-left-btn" to="/home/search">
                <span class="iconfont icon-fangdajing"></span>
            </router-link>
            <div class="title">{{showDate}}</div>
            <router-link class="calendar nav-right-btn" to="/home/calendar">
                <span class="iconfont icon-richeng1"></span>
            </router-link>
        </div>
    </div>

</template>

<script>
export default {
    name: 'header-nav',
    data(){
        return{
            showDate: ''
        }
    },
    created(){
        let date = new Date();
        let month = date.getMonth()+1;
        let day = date.getDate();
        let week = date.getDay();
        // console.log(typeof week)
        var weeks;
        switch(week){
            case 0:
                weeks = '周日';
                break;
            case 1:
                weeks = '周一';
                break;
            case 2:
                weeks = '周二';
                break;
            case 3:
                weeks = '周三';
                break;
            case 4:
                weeks = '周四';
                break;
            case 5:
                weeks = '周五';
                break;
            case 6:
                weeks = '周六';
                break;
        }
        this.showDate = `${month}/${day}(${weeks})`
    }
}
</script>

<style lang="scss" scoped>
.nav-wrap{
    width: 100%;
    height: 50px;
    // background: #eaeaea;
    padding: 0 .266667rem;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .search,.calendar{
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        background: #aaa;
        border-radius: 50%;
        color: #fff;
    }
    .title{
        width: 2.5rem;
        height: .6rem;
        line-height: .6rem;
        text-align: center;
        background: #aaa;
        border-radius: .333333rem;
        color: #fff;
    }
}
</style>