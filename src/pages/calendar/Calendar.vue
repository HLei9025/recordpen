<template>
    <div id="calendar" class="page">
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
        <span class="circle" ></span>
       <span class="timer">{{item.time}}</span>
       <span>{{item.con}}</span>
      </li>
    </ul>   
    </div>
</template>

<script>
import Calendar from 'vue-calendar-component';
    
export default {
components: {
    Calendar
  },
 data(){
     return{
         textTop:['周一','周二','周三','周四','周五','周六','周日'],
         CalendarData:[
           {id:1, time:2019, con: '123',},
           {id:2, time:2018, con: '1234',},
           {id:3, time:2017, con: '12345',}
         ]
     }
 },
 
  methods:{
      clickDay(data) {
      console.log(data); //选中某天
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    }
  }
}
</script>

<style lang="scss" scoped>
.Calendar-list{
  margin-top: 20px;
  .Calendar-item{
    border-top: 2px solid black;
    height: 30px;
    font-size:15px;
    line-height: 30px;
    .circle{
      border-radius: 50%;
      width: 10px;
      height: 10px;
      display: inline-block;
      background: gray;
     margin: 8px 15px 0;
    //  padding-top:10px;
      box-sizing: border-box;
    }
   .timer{
     margin-right: 20px;
     font-size: 14px;
   }
  }
}
</style>

