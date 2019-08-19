<template>
  <div class="note-list">
      <ul class="list-wrap">
          <li class="list-item" v-for="item in Info" :key="item.note_id">
              <div class="time">{{item.date}}</div>
              <div class="type-tip" :style="{background:item.color}" @click="handleReadNote">
                  <span class="tag" :class="item.font"></span>
              </div>
              <div class="content" :style="{color:item.color}">{{item.content}}</div>
          </li>
      </ul>
      <div class="middle-line"></div>
  </div>
</template>

<script>
export default {
    name: 'note-list',
    props: {
        showType: String
    },
    data(){
        return{
            noteInfo:[
                {note_id: 1, type: 'diary', content: '这是日记内容日记内容', date: '2019-08-16'},
                {note_id: 2, type: 'note', content: '这是笔记内容', date: '2019-08-08'},
                {note_id: 3, type: 'todo', content: '这是待办内容', date: '2019-07-30'},
                {note_id: 4, type: 'schedule', content: '这是日程内容', date: '2019-07-22'},
                {note_id: 5, type: 'diary', content: '这是日记内容', date: '2019-07-12'},
                {note_id: 6, type: 'note', content: '这是笔记内容', date: '2019-07-09'},
                {note_id: 7, type: 'todo', content: '这是待办内容', date: '2019-07-03'},
                {note_id: 8, type: 'schedule', content: '这是日程内容', date: '2019-06-25'},
                {note_id: 9, type: 'diary', content: '这是日记内容', date: '2019-06-12'},
                {note_id: 10, type: 'note', content: '这是笔记内容', date: '2019-05-14'}
            ]
        }
    },
    computed: {
        Info(){
            let newInfo = [];
            //筛选根据状态展示的数据
            let showInfo = this.showType === '' ? this.noteInfo : (this.noteInfo.filter(item=>(this.showType === item.type)));
            //对数据进行处理
            showInfo.map(item=>{
                let date = new Date(item.date);
                // console.log(date)
                let showMonth = date.getMonth()+1;
                let showDate = date.getDate();
                if(showDate < 10){
                    showDate = `0${showDate}`
                }
                let day = date.getDay();
                let showDay;
                switch(day){
                    case 0:
                        showDay = '周日';
                        break;
                    case 1:
                        showDay = '周一';
                        break;
                    case 2:
                        showDay = '周二';
                        break;
                    case 3:
                        showDay = '周三';
                        break;
                    case 4:
                        showDay = '周四';
                        break;
                    case 5:
                        showDay = '周五';
                        break;
                    case 6:
                        showDay = '周六';
                        break;
                }
                let newTime = `${showMonth}/${showDate}(${showDay})`;
                let color;
                let font;
                if(item.type === 'diary'){
                    color = '#F3C95A';
                    font = 'iconfont icon-44'
                }else if(item.type === 'note'){
                    color = '#4A9BD4';
                    font = 'iconfont icon-richeng1'
                }else if(item.type === 'todo'){
                    color = '#EA6D6D';
                    font = 'iconfont icon-daibandianjihou';
                }else if(item.type === 'schedule'){
                    color = '#EE906F';
                    font = 'iconfont icon-richeng';
                };
                return newInfo.push({
                    ...item,
                    date: newTime,
                    color,
                    font
                });
            })
            return newInfo;
        }
    },
    methods: {
        handleReadNote(){
            this.$router.push('/home/addnote/writenote')
        }
    } 
}
</script>

<style lang="scss" scoped>
.note-list{
    width: 100%;
    overflow: hidden;
    padding: 0 32px;
    box-sizing: border-box;
    &::before{
        content: '';
        border-right: 1px dashed #aaa;
        display: block;
        height: 100%;
        position: absolute;
        left: 50%;
        z-index: 0;
    }
    .list-wrap{
        width: 100%;
        display: flex;
        flex-direction: column;
        .list-item{
            display: flex;
            justify-content: space-around;
            align-items: center;
            line-height: 70px;
            .time{
                font-size: 12px;
                color: #8a8a8a;
                width: 35%;
                text-align: center;
            }
            .type-tip{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                text-align: center;
                line-height: 30px;
                position: relative;
                .tag{
                    color: #fff;
                    font-size: 18px;
                }
            }
            .content{
                width: 35%;
                font-size: 14px;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            &:nth-of-type(2n){
                flex-direction: row-reverse;
            }
        }
    }

}
</style>