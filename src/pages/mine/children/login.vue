<template>
  <div id="mine" class="page">
    <div class=" login">
      <h1>记录美好生活</h1>
      <h2>登录后更精彩</h2>
      <div class="name">
        <div class="iconfont icon-icon-test rgt"></div>
        <input class="ipt" type="text" placeholder="请输入您的手机号码" ref="phone" v-model="phonenumber">
      </div>
      <div class="password">
        <div class="iconfont icon-suo rgt"></div>
        <input class="ipt" type="password" placeholder="6-18位,包含数字、字母、特殊字符" v-model="password">
      </div>
      <div class="btn" @click="loginToAction">登录</div>
    </div>
  </div>
</template>

<script>
export default {
    name:'login',
    data(){
      return {
        phonenumber:'',
        password:''
      }
    },
    methods:{
      loginToAction(){
        let RexPhone = /^1[3|4|5|7|8][0-9]\d{8}$/;
        let RexPassword = /^[0-9a-zA-Z!@#$^]{6,18}$/
        if((RexPhone.test(this.phonenumber)) && (RexPassword.test(this.password))){
          this.$router.back();
       }
         
      }
    },
  
}
</script>

<style lang="scss" scoped>
#mine{
  background-image: url(../../assets/timg.jpg);
  background-size: 100% 100%;
  background-position: center;
  background-attachment:fixed;
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
    display: flex;
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
        font-size: 16px;
        color: #333333;
        flex: 1;
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
 
}
}
</style>