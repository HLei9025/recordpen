<template>
<div>
    <li class="personal" v-for="item in personalData" :key="item.id"
        @click=selectAction(item.id) :class="item.id===selectActionindex?'active':''">
        <div class="type iconfont" :class="item.icon1"></div>
        <div class="text">{{item.name}}</div>
        <div class="arrow iconfont" :class="item.icon2"></div>
    </li>

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
            ],
            detailData:[
                
            ],
            selectActionIndex:0
        }
    },
    methods:{
        selectAction(index){
            this.selectActionIndex = index;
        }
    }
}
</script>

<style lang="scss" scoped>
.personal{
    width: 100%;
    background-color: #EAEAEA;
    padding: 0 15px 0 30px;
    height: 50px;
    border-top: 1px solid #BBBBBB  ;
    line-height: 50px;
    box-sizing: border-box;
    float: left;
    &.active{
        background:#F0C988 ;
        .icon-jiantou{
        transform: rotate(0)
    }
    }
    .type{
        font-size: 24px;
        margin-right: 10px;
        float: left;
        color: #737373;
    }
    .text{
        font-size: 14px;
        float: left;    
        font-family: PingFangSC-bold;
        color:#222222 ;
    }
    .arrow{
        float: right;
        font-size: 16px;
        color: #737373;
    }
    .icon-jiantou{
        transform: rotate(-90deg)
    }
}
</style>