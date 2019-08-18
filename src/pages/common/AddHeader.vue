<template>
  <div class="add-header">
      <div class="back-btn" v-if="goBack" @click="handleGoBackAction">
          <span class="iconfont icon-cha"></span>
      </div>
      <div class="title">{{title}}</div>
      <div class="select-btn" v-if="selectExist" @click="handleslideAction" :class="!isShow?'isRotate':''">
          <span class="iconfont icon-jiantou"></span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'add-header',
    props: {
        title: String,
        goBack: Boolean,
        selectExist: Boolean
    },
    data(){
        return {
            isShow: true
        }
    },
    methods: {
        handleGoBackAction(){
            this.$router.back()
        },
        handleslideAction(){
            this.isShow = !this.isShow;
            this.$emit('sendSlide', this.isShow);
        }
    }

}
</script>

<style lang="scss" scoped>
.add-header{
    width: 100%;
    height: 44px;
    overflow: hidden;
    position: relative;
    background: #fff;
    .back-btn{
        position: absolute;
        width: 20px;
        height: 20px;
        left: 15px;
        top: 12px;
        span{
            font-size: 20px;
            text-align: center;
            line-height: 20px;
        }
    }
    .title{
        font-size: 16px;
        text-align: center;
        line-height: 44px;
        font-weight: 700;
        color: #222;
    }
    .select-btn{
        width: 20px;
        height: 20px;
        position: absolute;
        top: 12px;
        right: 15px;
        text-align: center;
        // transform: rotate(-90deg);
        transition: 200ms;
        span{
            font-size: 14px;
            text-align: center;
            line-height: 20px;
        }
        &.isRotate{
            transform: rotate(-90deg);
        }
    }
}
</style>