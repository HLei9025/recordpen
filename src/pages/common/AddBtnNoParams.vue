<template>
    <div id="add-btn">
        <div class="add-btn-wrap">
            <div class="add" @click="handleAddNoteAction">
                <span class="iconfont icon-jiahao"></span>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'add-btn-noparams-nav',
    
    methods: {
        handleAddNoteAction(){
            this.$router.push('/home/addnote')
        }
    }
    
}
</script>

<style lang="scss" scoped>
.add-btn-wrap{
    .add{
        display: block;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        background: #aaa;
        border-radius: 50%;
        color: #fff;
    }
}
</style>