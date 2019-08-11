<template>
    <div id="add-and-mine">
        <div class="nav-wrap">
            <div class="mine nav-left-btn">3</div>
            <div class="add nav-right-btn">4</div>
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
    width: 10rem;
    height: 1.173333rem;
    background: #eaeaea;
    padding: 0 .266667rem;
    position: absolute;
    left: 0;
    bottom: .533333rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .mine,.add{
        width: .8rem;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        background: #6a6a6a;
        border-radius: 50%;
    }
}
</style>