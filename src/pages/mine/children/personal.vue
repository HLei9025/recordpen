<template>
<div>
    <div  v-for="item in personalData" :key="item.id">
        <li class="personal" @click=selectAction(item.id) :class="selectActionIndex === item.id?'active':'isshow'">
            <div class="type iconfont" :class="item.icon1"></div>
            <div class="text">{{item.name}}</div>
            <div class="arrow iconfont" :class="item.icon2"></div>
                <!-- <nav v-for="detail in listData" :key="detail.id" class="slect">
                    <p>{{detail.text}}</p>
                </nav> -->
        </li>
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
            ],
            listData:[
                {id:'one',text:'ICoud同步',texta:'立即同步',textb:'',textc:'',textd:'',texte:'',textf:'',},
                {id:'two',text:'基本色调',texta:'夜晚模式',textb:'时间轴布局',textc:'字体',textd:'时间轴只显示摘要',texte:'加大日记的第一个字',textf:'',},
                {id:'three',text:'代办提示音',texta:'角标显示过期代办',textb:'代办标题',textc:'',textd:'',texte:'',textf:'',},
                {id:'four',text:'设置日历账号',texta:'日程提前提醒时间',textb:'',textc:'',textd:'',texte:'',textf:'',},
                {id:'five',text:'设备密码锁',texta:'恢复最近删除的笔记',textb:'邮件备份',textc:'导入备份',textd:'',texte:'',textf:'',},
                {id:'six',text:'默认新建类型',texta:'编辑笔记后更新日期',textb:'语言',textc:'时间格式',textd:'折叠完成代办',texte:'反转时间轴',textf:'总P数'},
            ],
            
            selectActionIndex:0,
            isShow:false
        }
    },
    methods:{
        selectAction(i){
            this.selectActionIndex = i;
            // if(this.selectActionIndex===i){
                this.isShow = ! this.isShow;
            // }
            console.log(this.isShow);
            
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
    &.isshow{
        background-color: transparent;
        .icon-jiantou{
        transform: rotate(-90deg)
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
}
</style>