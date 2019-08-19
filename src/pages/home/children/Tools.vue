<template>
    <div id="tools">
        <div class="tool-wrap">
            <ul class="tool-content">
                <li class="tool-item" 
                    v-for="item in toolsList" 
                    :key="item.flag" 
                    @click="handleChangeStatus(item)" 
                    :style="{background:item.flag === value ? item.color : '#aaa'}">
                    {{item.name}}
                </li>
            </ul>
        </div>

    </div>

</template>

<script>
export default {
    name: 'tools',
    props: {
        value: String
    },
    data(){
        return {
            toolsList: [
                {flag: 'diary',name: '日记', color: '#F3C95A'},
                {flag: 'note',name: '笔记', color: '#4A9BD4'},
                {flag: 'todo',name: '待办', color: '#EA6D6D'},
                {flag: 'schedule',name: '日程', color: '#EE906F'}
            ]
        }
    },
    methods: {
        handleChangeStatus(item){
            this.$emit('typeStatus',item)
        }
    }
    
}
</script>

<style lang="scss" scoped>
.tool-wrap{
    width: 100%;
    height: 40px;
    overflow: hidden;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
    background: #eaeaea;
    display: flex;
    align-items: center;
    .tool-content{
        width: 100%;
        padding: 0 .266667rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        overflow: hidden;
        .tool-item{
            width: 2rem;
            height: .6rem;
            line-height: .6rem;
            text-align: center;
            background: #6a6a6a;
            color: #fff;
            font-size: .32rem;
            border-radius: 13px;
        }
    }
}
</style>