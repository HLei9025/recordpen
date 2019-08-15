<template>
    <div id="add-and-mine">
        <div class="nav-wrap">
            <router-link class="mine nav-left-btn" to='/home/mine'>3</router-link>
            <router-link class="add nav-right-btn" to='/home/addnote'>4</router-link>
        </div>
    </div>

</template>

<script>
export default {
    name: 'footer-nav'
    
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
    bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .mine,.add{
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        background: #6a6a6a;
        border-radius: 50%;
        color: #fff;
    }
}
</style>