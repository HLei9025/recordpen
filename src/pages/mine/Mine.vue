<template>
<div>
    <div id="mine" class="page">
        <div class="header">
            <div class='arrow'>
                <span class="iconfont icon-jiantou2"></span>
            </div>
            <div class="information">
                <div class="wrap-img">
                    <img src="" alt="">
                </div>
                <div class="wrap-name">用户名</div>
            </div>
        </div>

    <personal></personal>
    </div>
        
    <router-view></router-view>

</div>
</template>

<script>
import personal from './children/personal'
export default {
    components:{
        [personal.name]: personal,

    }
    
}
</script>
<style lang="scss" scoped>
#mine{
    width: 100%;
    .header{
        width: 100%;
        height: 160px;
        background:#737373;
        .arrow{
            position: absolute;
            left: 11px;
            top: 11px;
            .icon-jiantou2{
                font-size: 24px;
                color: #ffffff;
                font-weight: bold;
            }  
        }
        .information{
            position: absolute;
            height: 63px;
            top: 63px;
            left: 30px;
            .wrap-img{
                width: 63px;
                height: 63px;
                float: left;
            }
            .wrap-name{
                margin-left: 30px;
                line-height: 63px;
                font-size: 20px;
                color: #fff;
                float: left;
            }
        }
    }
}
</style>
