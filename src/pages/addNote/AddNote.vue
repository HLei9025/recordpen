<template>
    <div id="add-note" class="page">
        <add-header :title="title" :goBack="goBack" :selectExist="selectExist" @sendSlide="handleShowAction"/>
        <div class="note-wrap">
            <ul class="note-type" v-show="isExist">
                <li class="type-item" 
                    v-for="item in notetype" 
                    :key="item.id" 
                    @click="handleSelectTypeAction(item)"
                    :style="{background:bgcolor?(bgcolor===item.bgcolor?item.bgcolor:'#aaa'):'#aaa'}">{{item.name}}</li>
            </ul>
            <div class="things-and-time" @click="handleToWriteNoteAction">
                <span class="pic iconfont icon-44"></span>
                <span class="holder">{{(noteTitleInfo && syncTitle) ? noteTitleInfo : '什么事？'}}</span>
            </div>
            <div class="things-and-time">
                <span class="pic iconfont icon-richeng"></span>
                <a-date-picker placeholder="何年何月发生？" size=large @change="onChange" />
            </div>
            <div class="tip">
                <span class="txt">特别提醒</span>
                <span class="handle" @click="handleToggleAction" :class="remind && 'nextbg'">
                    <b class="open">ON</b>
                    <i class="spot" :class="remind?'move':''"></i>
                </span>
            </div>
            <div class="save" @click="handleSaveNoteAction">保存</div>
        </div>
        <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
            <router-view></router-view>
        </transition>
        <div class="tip-show" v-if="tipShow">{{((showTxt===1) && '请选择日记类型') || ((showTxt===2) && '请添加日记内容') || ((showTxt===3) && '请选择时间')}}</div>
    </div>
</template>

<script>
import AddHeader from '../common/AddHeader'
import DatePicker from 'ant-design-vue/lib/date-picker'
import 'ant-design-vue/dist/antd.css'
import {mapState} from 'vuex'
export default {
    components: {
        [AddHeader.name]:AddHeader,
        [DatePicker.name]: DatePicker
    },
    props: {
        color: String
    },
    computed: {
        ...mapState({
            noteTitleInfo: state=>state.savenote.noteTitleInfo,
            noteContentInfo: state=>state.savenote.noteContentInfo
        }),
        showTypeBgColor(){
            if(this.bgcolor === '#F3C95A'){
                return this.noteTypeStatus = 'dary';
            }else if(this.bgcolor === '#4A9BD4'){
                return this.noteTypeStatus = 'note';
            }else if(this.bgcolor === '#EA6D6D'){
                return this.noteTypeStatus = 'todo';
            }else if(this.bgcolor === '#EE906F'){
                return this.noteTypeStatus = 'schedule';
            }
        }
    },
    data(){
        return {
            goBack: true,
            selectExist: true,
            title: '新增随记',
            notetype: [
                {id: 1, name: '日记', type: 'dary', bgcolor: '#F3C95A'},
                {id: 2, name: '笔记', type: 'note', bgcolor: '#4A9BD4'},
                {id: 3, name: '待办', type: 'todo', bgcolor: '#EA6D6D'},
                {id: 4, name: '日程', type: 'schedule', bgcolor: '#EE906F'}
            ],
            isExist: true,
            remind: false,
            bgcolor: '',
            noteTypeStatus: '',
            writeNoteDate: '',
            tipShow: false,
            showTxt: 0,
            syncTitle: true
        }
    },
    created(){
        this.bgcolor = this.color;
    },
    watch: {
        tipShow(newState){
            if(newState){
                setTimeout(()=>{
                    this.tipShow = false;
                },1500)
            }
        }
    },
    methods: {
        handleShowAction(value){
            this.isExist = value;
        },
        handleToggleAction(){
            this.remind = !this.remind;
        },
        handleToWriteNoteAction(){
            this.$router.push('/home/addnote/writenote');
        },
        handleSelectTypeAction(item){
            this.bgcolor = item.bgcolor;
            this.noteTypeStatus = item.type
        },
        onChange(date, dateString) {
            console.log(date, dateString);
            this.writeNoteDate = dateString;
        },
        handleSaveNoteAction(){
            let noteMessage = {};
            noteMessage.type = this.showTypeBgColor;
            noteMessage.date = this.writeNoteDate;
            noteMessage.title = this.noteTitleInfo;
            noteMessage.content = this.noteContentInfo;
            if(noteMessage.type && noteMessage.date && noteMessage.title){
                this.$store.commit('savenote/saveNoteMessageAction', noteMessage);
                this.$router.push('/home');
                this.syncTitle = false;
                // console.log('执行了')
            }else if(noteMessage.type === ''){
                this.tipShow = true;
                this.showTxt = 1;
            }else{
                if(noteMessage.title === ''){
                    this.tipShow = true;
                    this.showTxt = 2;
                }else{
                    if(noteMessage.date === ''){
                        this.tipShow = true;
                        this.showTxt = 3;
                    }
                }
            }

        }
    }
}
</script>

<style lang="scss" scoped>
.note-wrap{
    width: 100%;
    position: absolute;
    left: 0;
    top: 44px;
    bottom: 0;
    background: #fff;
    padding: 10px 15px;
    box-sizing: border-box;
    overflow: hidden;
    .note-type{
        width: 100%;
        height: 40px;
        border: 1px solid #ddd;
        border-radius: 10px;
        display: flex;
        box-sizing: border-box;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 15px;
        .type-item{
            width: 18%;
            height: 20px;
            background: #aaa;
            border-radius: 8px;
            text-align: center;
            line-height: 20px;
            font-size: 12px;
            color: #fff;
        }
    }
    .things-and-time{
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #F2CD90;
        border-radius: 4px;
        padding: 5px;
        box-sizing: border-box;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        .pic{
            display: block;
            width: 32px;
            height: 32px;
            font-size: 27px;
            color: #fff;
            margin-right: 5px;
            text-align: center;
            line-height: 32px;
            &.icon-richeng{
                font-size: 25px;
            }
        }
        .holder{
            flex: 1;
            font-size: 16px;
            color: #fff;
            padding: 0 11px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .tip{
        width: 100%;
        height: 40px;
        padding: 5px;
        box-sizing: border-box;
        border: 1px solid #ACAAAA;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .txt{
            font-size: 16px;
            color: #737373;
        }
        .handle{
            display: block;
            width: 40px;
            height: 18px;
            border: 1px solid #aaa;
            border-radius: 50px;
            background: #eee;
            position: relative;
            &.nextbg{
                background: #090;
            }
            .open{
                display: block;
                line-height: 16px;
                font-size: 12px;
                color: #fff;
                transform: scale(0.9);
            }
            .spot{
                display: block;
                width: 18px;
                height: 18px;
                background: #fff;
                border: 1px solid #aaa;
                border-radius: 50%;
                box-sizing: border-box;
                box-shadow: 1px 1px 3px 1px #c3c3c3;
                position: absolute;
                top: 0;
                left: 0;
                &.move{
                    right: 0;
                    left: auto;
                }
            }
        }
    }
    .save{
        width: 170px;
        height: 45px;
        background: #FFA63E;
        border-radius: 45px;
        font-size: 18px;
        text-align: center;
        line-height: 45px;
        color: #fff;
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
        box-shadow: 0 2px 3px 1px #aaa;
    }
}
.tip-show{
    width: 120px;
    height: 120px;
    background: rgba(170, 170, 170, 0.3);
    border-radius: 8px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    line-height: 120px;
    font-size: 14px;
    color: #333;
}
</style>

<style lang="scss">
.ant-input {
    background-color: #F2CD90;
    color: #fff;
    border: 0;
    &::-webkit-input-placeholder{
        color:#fff;
    }
    &::-moz-placeholder{ 
        color:#fff;
    }
    &:-moz-placeholder{
        color:#fff;
    }
    &:-ms-input-placeholder{
        color:#fff;
    }
}
.anticon svg {
    display: none;
}

</style>
