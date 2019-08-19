<template>
  <div id="search" class="page">
    <div class="try">
      <input type="text" class="try-text" placeholder="试试搜二月" />
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
        <!-- <span class="circle">{{item}}</span> -->
        <span class="timer">{{item.time}}</span>
        <span>{{item.con}}</span>
      </li>
    </ul>
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
      this.$router.go(-1);
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
    .try-text {
      float: left;
      background: #aaa8a8;
      margin: 6px 5px 6px 8px;
      width: 80%;
      border-radius: 10px;
      padding-left: 15px;
    }
    h2 {
      float: right;
      color: white;
      font-size: 14px;
      margin: 7px 4px 7px 0;
    }
  }
  .Calendar-item {
    border-top: 2px solid black;
    height: 30px;
    font-size: 15px;
    line-height: 30px;
    .circle {
      border-radius: 50%;
      background: gray;
      width: 20px;
      height: 20px;
    }
    .timer {
      margin-right: 20px;
    }
  }
}
</style>