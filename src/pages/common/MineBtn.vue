<template>
  <div id="mine-btn">
      <div class="mine-btn-wrap">
        <router-link class="mine" to='/home/mine'>
            <span class="iconfont icon-caidan"></span>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: 'mine-btn-nav'

}
</script>

<style lang="scss" scoped>
.mine-btn-wrap{
    .mine{
        display: block;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        background: #aaa;
        border-radius: 50%;
        color: #fff;
    }
}
</style>