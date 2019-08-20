<template>
    <div id="calendar" class="page">
      <header-nav :actionType="actionType"></header-nav>

      <div class="mine-btn-nav-one">
      <mine-btn-nav></mine-btn-nav>
      </div>

      <div class="add-btn-nav-two">
      <add-btn-noparams-nav></add-btn-noparams-nav>
      </div>

      <div class="Calendar-one">
<Calendar
      v-on:choseDay="clickDay"
      v-on:changeMonth="changeDate"
       v-on:isToday="clickToday"
      :textTop="textTop"
       :sundayStart="true" 
    ></Calendar>
    </div>
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
import Calendar from 'vue-calendar-component'
import MineBtn from '../common/MineBtn'
import SearchAndCalendarNav from'../common/SearchAndCalendarNav'
import AddBtnNoParams  from '../common/AddBtnNoParams'   

export default {
components: {
    Calendar,
    [MineBtn.name]:MineBtn,
    [SearchAndCalendarNav.name]:SearchAndCalendarNav,
    [AddBtnNoParams.name]:  AddBtnNoParams,
  },
 data(){
     return{
         textTop:['周一','周二','周三','周四','周五','周六','周日'],
         CalendarData:[
           {id:1, time:2019, con: '123',},
           {id:2, time:2018, con: '1234',},
           {id:3, time:2017, con: '12345',}
         ],
         actionType: false
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
#calendar{
  width: 100%;
  .mine-btn-nav-one{
    position: absolute;
    bottom: 30px;
  }
  .add-btn-nav-two{
    position: absolute;
    bottom: 30px;
    right: 20px;
  }
  .Calendar-one{
    margin-top:60px;
  }
.Calendar-list{
  margin-top: 20px;
  .Calendar-item{
    border-top: 1px solid black;
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
      box-sizing: border-box;
    }
   .timer{
     margin-right: 20px;
   }
  }
}
}
</style>


