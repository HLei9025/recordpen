<template>
    <div id="search-and-calendar">
        <div class="nav-wrap">
            <router-link class="search nav-left-btn" to="/home/search">1</router-link>
            <div class="title">888</div>
            <router-link class="calendar nav-right-btn" to="/home/calendar">2</router-link>
        </div>
    </div>

</template>

<script>
export default {
    name: 'header-nav'
    
}
</script>

<style lang="scss" scoped>
.nav-wrap{
    width: 100%;
    height: 50px;
    background: #eaeaea;
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
        background: #6a6a6a;
        border-radius: 50%;
        color: #fff;
    }
    .title{
        width: 2.5rem;
        height: .6rem;
        line-height: .6rem;
        text-align: center;
        background: #6a6a6a;
        border-radius: .333333rem;
        color: #fff;
    }
}
</style>