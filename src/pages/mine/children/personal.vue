<template>
<div>
    <div class="personal" v-for="item in personalData" :key="item.id">
        <div class="type iconfont" :class="item.icon1"></div>
        <div class="text">{{item.name}}</div>
        <div class="arrow iconfont" :class="item.icon2"></div>
    </div>

</div>
</template>

<script>
export default {
    name:'personal',
    data(){
        return {
            personalData:[
                {id:1,icon1:'icon-tongbu',name:'同步',icon2:'icon-jiantou'},
                {id:2,icon1:'icon-yanjing',name:'外观',icon2:'icon-jiantou'},
                {id:3,icon1:'icon-daibandianjihou',name:'待办',icon2:'icon-jiantou'},
                {id:4,icon1:'icon-richeng',name:'日程',icon2:'icon-jiantou'},
                {id:5,icon1:'icon-suo',name:'安全',icon2:'icon-jiantou'},
                {id:6,icon1:'icon-shezhi',name:'高级',icon2:'icon-jiantou'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.personal{
    position: absolute;
    top: 160px;
    left: 0;
    width: 100%;
    background-color: #EAEAEA;
    padding: 0 30px 15px;
    height: 50px;
    border-bottom: 1px solid #737373 ;
    border-top: 1px solid #737373 ;
    line-height: 50px;
    box-sizing: border-box;
    .type{
        font-size: 24px;
        margin-right: 10px;
        float: left;
    }
    .text{
        font-size: 20px;
        font-weight: bold;
        float: left
    }
    .arrow{
        float: right;
        font-size: 18px;
    }
}
</style>