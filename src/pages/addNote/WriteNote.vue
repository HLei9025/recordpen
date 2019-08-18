<template>
    <div id="write-note" class="page">
        <add-header title="新增随记" goBack="true"/>
        <div class="write-wrap">
            <div class="write-title">
                <input class="input" type="text" placeholder="标题">
            </div>
            <div class="write-content">
                <textarea class="txt-area" placeholder="内容"></textarea>
                <div class="tags">
                    <span class="iconfont icon-shiwu-xiguan"></span>
                    <span class="iconfont icon-biaoqian"></span>
                    <span class="iconfont icon-weibiaoti1"></span>
                    <span class="iconfont icon-zhaopian"></span>
                    <span class="iconfont icon-xingxing"></span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import AddHeader from '../common/AddHeader'
export default {
    name: 'write-note',
    components: {
        [AddHeader.name]: AddHeader
    }
    
}
</script>

<style lang="scss" scoped>
#write-note{
    .write-wrap{
        width: 100%;
        position: absolute;
        left: 0;
        top: 44px;
        bottom: 0;
        background: #fff;
        overflow: hidden;
        box-sizing: border-box;
        padding: 15px;
        display: flex;
        flex-direction: column;
        font-family: 'PingFangSC-regular';
        .write-title{
            width: 100%;
            height: 40px;
            margin-bottom: 18px;
            .input{
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                padding: 0 10px;
                background: #aaa;
                border-radius: 4px;
                border: 0;
                font-size: 16px;
                color: #fff;
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
        }
        .write-content{
            flex: 1;
            width: 100%;
            overflow: hidden;
            .txt-area{
                width: 100%;
                height: 100%;
                padding: 10px;
                line-height: 25px;
                color: #fff;
                font-size: 16px;
                box-sizing: border-box;
                background: #aaa;
                border-radius: 4px;
                overflow: auto;
                resize: none;
                outline: none;
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


        }
    }
}
</style>