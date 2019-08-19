<template>
  <div id="mine" class="page">
    <!-- <img src="../../assets/logbg.jpg" alt="" class="img"> -->
    <div class=" login">
      <h1>记录美好生活</h1>
      <h2>登录后更精彩</h2>
      <div class="name">
        <div class="iconfont icon-icon-test rgt"></div>
        <input class="ipt" type="text" placeholder="请输入您的号码" ref="tex">
      </div>
      <div class="password">
        <div class="iconfont icon-suo rgt"></div>
        <input class="ipt" type="password" placeholder="请输入您的密码">
      </div>
      <div class="btn" @click="loginToAction">登录</div>
    </div>

  </div>
</template>

<script>
export default {
    name:'login',
    methods:{
      loginToAction(){
        this.$router.back()
      }
    }
}
</script>

<style lang="scss" scoped>
.login{
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;
  h1{
    line-height: 40px;
    height: 40px;
    text-align: center;
    color: #15EFF6;
    font-family: KaiTi;
    font-size: 30px;
    margin-top: 75px;
  }
  h2{
    line-height: 40px;
    height: 40px;
    text-align: center;
    color: #ffffff;
    font-family: KaiTi;
    font-size: 20px;
    margin-top: 20px;
  }
  .name{
    width: 100%;
    color: #ffffff;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ffffff;
    margin-top: 80px;
      .rgt{
        margin-right: 20px;
        float: left;
        &::before{
          font-size: 30px;
        }
      }
      .ipt{
        outline: none;
        border: none;
        background: transparent;
        font-size: 18px;
        color: #333333;
      }
  }
  .password{
    width: 100%;
    color: #ffffff;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ffffff;
    margin-top: 30px;
    .rgt{
        margin-right: 20px;
        float: left;
        &::before{
          font-size: 30px;
        }
      }
      .ipt{
        outline: none;
        border: none;
        background: transparent;
        font-size: 18px;
        color: #333333;
      }
  }
  .btn{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    background-color: #80DE06;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    margin-top: 50px
  }
  .img{
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>