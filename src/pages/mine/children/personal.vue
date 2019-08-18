<template>
<div >
    <div  v-for="item in personalData" :key="item.id" class="wrap" >
        <li class="personal" @click=selectAction(item.id) :class="selectActionIndex === item.id && isShow?'active':'noneactive'">
            <div class="type iconfont" :class="item.icon1"></div>
            <div class="text">{{item.name}}</div>
            <div class="arrow iconfont" :class="item.icon2"></div>
        </li>
        <nav class="slect" v-if="selectActionIndex === item.id && isShow">
            <div class="comst" v-if="item.text">
                <div class="cleft">{{item.text}}</div>
                <div class="cright">{{item.righta}}</div>
            </div>
            <div class="comst" v-if="item.texta">
                <div class="cleft">{{item.texta}}</div>
                <div class="cright">{{item.rightb}}</div>
            </div>
            <div class="comst" v-if="item.textb">
                <div class="cleft">{{item.textb}}</div>
                <div class="cright">{{item.rightc}}</div>
            </div>
            <div class="comst" v-if="item.textc">
                 <div class="cleft">{{item.textc}}</div>
                <div class="cright">{{item.rightd}}</div>
            </div>
            <div class="comst" v-if="item.textd">
                 <div class="cleft">{{item.textd}}</div>
                <div class="cright">{{item.righte}}</div>
            </div>
            <div class="comst" v-if="item.textf">
                <div class="cleft">{{item.textf}}</div>
                <div class="cright">{{item.rightg}}</div>
            </div>
        </nav>
    </div>

</div>
</template>

<script>
export default {
    name:'personal',
    data(){
        return {
            personalData:[
                {id:1,icon1:'icon-tongbu',name:'同步',icon2:'icon-jiantou',text:'ICoud同步',texta:'立即同步',textb:'',textc:'',textd:'',texte:'',textf:'',righta:'',rightb:'',rightc:'',rightd:'',righte:'',rightf:'',rightg:''},
                {id:2,icon1:'icon-yanjing',name:'外观',icon2:'icon-jiantou',text:'基本色调',texta:'夜晚模式',textb:'时间轴布局',textc:'字体',textd:'时间轴只显示摘要',texte:'加大日记的第一个字',textf:'',righta:'基本',rightb:'',rightc:'',rightd:'OpenSans',righte:'',rightf:'',rightg:''},
                {id:3,icon1:'icon-daibandianjihou',name:'待办',icon2:'icon-jiantou',text:'代办提示音',texta:'角标显示过期代办',textb:'代办标题',textc:'',textd:'',texte:'',textf:'',righta:'喵',rightb:'',rightc:'',rightd:'',righte:'',rightf:'',rightg:''},
                {id:4,icon1:'icon-richeng',name:'日程',icon2:'icon-jiantou',text:'设置日历账号',texta:'日程提前提醒时间',textb:'',textc:'',textd:'',texte:'',textf:'',righta:'',rightb:'1小时',rightc:'',rightd:'',righte:'',rightf:'',rightg:''},
                {id:5,icon1:'icon-suo',name:'安全',icon2:'icon-jiantou',text:'设备密码锁',texta:'恢复最近删除的笔记',textb:'邮件备份',textc:'导入备份',textd:'',texte:'',textf:''},
                {id:6,icon1:'icon-shezhi',name:'高级',icon2:'icon-jiantou',text:'默认新建类型',texta:'编辑笔记后更新日期',textb:'语言',textc:'时间格式',textd:'折叠完成代办',texte:'反转时间轴',textf:'总P数',righta:'笔记',rightb:'',rightc:'系统',rightd:'',righte:'',rightf:'',rightg:'2'},
            ],
            
            selectActionIndex:0,
            isShow:false,
            isContent:true,
        }
    },
    methods:{
        selectAction(i){
            this.selectActionIndex = i;
            // if(this.selectActionIndex===i){
            this.isShow = ! this.isShow;
        },
    }
}
</script>

<style lang="scss" scoped>
.wrap{
    border-top: 1px solid #BBBBBB  ;
    width: 100%;
    .personal{
        background-color: #EAEAEA;
        padding: 0 15px 0 30px;
        height: 50px;
        line-height: 50px;
        box-sizing: border-box;
        &.active{
        background:#F0C988 ;
            .icon-jiantou{
                transform: rotate(0);
                transform-origin:center;
            }
        }
        &.noneactive{
            background: #eaeaea;
            .icon-jiantou{
                transform: rotate(-90deg)
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
            font-size: 14px;
            color: #737373;
        }    
        .icon-jiantou{
            transform: rotate(-90deg)
        }
    }
    .slect{
        box-sizing: border-box;
        padding: 0 15px 0 30px;
        .comst{
            color:#222222;
            font-family: PingFangSC-regular;
            font-size: 14px;
            line-height: 30px;
            height: 30px;
            .cleft{
                float: left;
            }
            .cright{
                float: right;
                color: #FFA63E ;
                font-size: 13px
            }
        }
    }
}

</style>