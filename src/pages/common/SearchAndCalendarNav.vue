<template>
    <div id="search-and-calendar">
        <div class="nav-wrap">
            <div class="search nav-left-btn">1</div>
            <div class="title">888</div>
            <div class="calendar nav-right-btn">2</div>
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
    width: 10rem;
    height: 1.173333rem;
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
        width: .8rem;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        background: #6a6a6a;
        border-radius: 50%;
    }
    .title{
        width: 2.266667rem;
        height: .6rem;
        line-height: .6rem;
        text-align: center;
        background: #6a6a6a;
        border-radius: .333333rem;
    }
}
</style>