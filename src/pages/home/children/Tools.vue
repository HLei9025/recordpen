<template>
    <div id="tools">
        <div class="tool-wrap">
            <ul class="tool-content">
                <li class="tool-item" v-for="item in toolsList" :key="item.flag">
                    {{item.name}}
                </li>
            </ul>
        </div>

    </div>

</template>

<script>
export default {
    name: 'tools',
    data(){
        return {
            toolsList: [
                {flag: 'diary',name: '日记'},
                {flag: 'note',name: '笔记'},
                {flag: 'todo',name: '待办'},
                {flag: 'schedule',name: '日程'}
            ]
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