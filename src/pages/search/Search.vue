<template>
  <div>
    <div id="search" class="page">
    <div class="try">
      <span class="try-text"  @click="goaction"></span>
      <span class="iconfont icon-fangdajing"></span>
      <h3>试试搜二月</h3>
      <h2 @click="backaction">取消</h2>
    </div>

    <Calendar
      v-on:choseDay="clickDay"
      v-on:changeMonth="changeDate"
      v-on:isToday="clickToday"
      :textTop="textTop"
      :sundayStart="true"
    ></Calendar>

    <ul class="Calendar-list">
      <li class="Calendar-item" v-for="(item,index)
       in CalendarData" :key="index">
        <span class="circle"></span>
        <span class="timer">{{item.time}}</span>
        <span>{{item.con}}</span>
      </li>
    </ul>
  </div>

  <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
    <router-view></router-view>
  </transition>
  </div>
</template>

<script>
import Calendar from "vue-calendar-component";

export default {
  components: {
    Calendar
  },
  data() {
    return {
      textTop: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      CalendarData: [
        { id: 1, time: 2019, con: "123" },
        { id: 2, time: 2018, con: "1234" },
        { id: 3, time: 2017, con: "12345" }
      ]
    }
  },

  methods: {
    clickDay(data) {
      console.log(data); //选中某天
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    },
    backaction(){
      this.$router.push("/home");
    },
    goaction(){
      this.$router.push('/home/search/search_input')
    }
  }
}
</script>

<style lang="scss" scoped>
#search {
  width: 100%;
  background: white;
  .try {
    background: gray;
    overflow: hidden;
    width: 100%;
    height: 48px;
    .try-text {
      float: left;
      background: #aaa8a8;
      margin: 6px 5px 6px 8px;
      width: 75%;
      height: 33px;
      line-height: 33px;
      border-radius: 10px;
      padding-left: 25px;
      border: none;
    }
    .iconfont{
       position: absolute;
       left: 12px;
       top: 15px;
       margin-right: 5px;
      }
      h3{
        position: absolute;
        left:12px;
        top:15px;
        padding-left: 20px;
      }
    h2 {
      float: right;
      color: white;
      font-size: 14px;
      line-height: 48px;
      margin: 0 10px;
    }
  }
  .Calendar-item {
    border-top: 1px solid black;
    height: 30px;
    font-size: 15px;
    line-height: 30px;
    .circle {
      border-radius: 50%;
      width: 10px;
      height: 10px;
      display: inline-block;
      background: gray;
     margin: 8px 15px 0;
      box-sizing: border-box;
    }
    .timer {
      margin-right: 20px;
    }
  }
}
</style>