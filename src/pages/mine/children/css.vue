<template>

  <div class="input-box clearFix">
        <p class="vp">
            <span>用户名:</span>
            <input v-model="username" ref="inputGetFocus" v-verify="username" placeholder="请输入用户名"/>
            <label class="fl" v-remind="username"></label>
        </p>
        <p class="vp">
            <span>密码:</span>
            <input v-model="pass" type="password" v-verify="pass" placeholder="请输入6-16位密码(数字,字母,下划线)"/>
            <label class="fl" v-remind="pass"></label>
        </p>
        <p class="vp">
            <span>确认密码:</span>
            <input type="password" v-model="passConfirm" v-verify="passConfirm" placeholder="请确认密码"/>
            <label class="fl" v-remind="passConfirm"></label>
        </p>

        <button v-on:click="submit">提交</button>
    </div>

</template>
<script>
  import Vue from "vue"
  import verify from "vue-verify-plugin"
    var myRules={
        username:{
            test:function(val){
                if(val == '') {
                    myRules.username.message = '用户名不能为空'
                    return false
                }
                return true;
            },
            message:""
        },
        pass : {
          test:function(val){
                var passCheck = /^\w{6,16}$/
                if(!passCheck.test(val)) {
                    return false
                }
                return true;
            },
            message:"请输入6-16位密码(数字,字母,下划线)"
        },
        passConfirm : {
          test:function(val){
                if(this.pass != val) {
                    return false
                }
                return true;
            },
            message:"两次输入密码不一致"
        }
    };
    Vue.use(verify,{
        rules:myRules,
        blur:true
    });
export default {
        name: 'HelloWorld',
        data () {
            return {
                username:"",
                pass : "",
                passConfirm : ""
            }
        },
        verify: {
            username : "username",
            pass : "pass",
            passConfirm : "passConfirm"
        }, 
        methods:{
            submit: function () {
                console.log(this.$verify.check());
            }
        },
        mounted(){
          this.$refs['inputGetFocus'].focus()
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*{

  padding:0px;

  margin:0px;

}

.vp{

  padding-bottom: 21px;

  position:relative;

}

.vp span{

  width:57px;

  text-align:right;

  display:inline-block;

  font-size:13px;

}

input{

  display:inline-block;

  width:250px;

  height:35px;

  line-height:35px;

  border:1px solid #ccc;

  border-radius:35px;

  outline:none;

  padding-left:15px;

  margin-left:10px;

}

label{

  width: 100%;

    font-size: 12px;

    color: red;

    display: inline-block;

    position: absolute;

    left: 87px;

    bottom: 2px;

}

button{

  display:block;

  width:120px;

  height:45px;

  line-height:45px;

  border-radius:20px;

  border:none;

  background:orange;

  text-align:center;

  color:#fff;

  font-size:20px;

  margin:0 auto;

  outline:none;

}

</style>