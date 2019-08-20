<template>
    <div id="search-input" class="page">
        <div class="try">
      <input type="text" class="try-text"  />
      <h2 @click="backaction">取消</h2>
    </div>

    </div>

</template>

<script>
export default {
    methods: {
      backaction(){
        this.$router.push("/home");
      }
    }
}
</script>

<style lang="scss" scoped>
#search-input {
  width: 100%;
  background: white;
  .try {
    background: gray;
    overflow: hidden;
    width: 100%;
    .try-text {
      float: left;
      background: #aaa8a8;
      margin: 6px 5px 6px 8px;
      width: 80%;
      border-radius: 10px;
      padding-left: 15px;
      .iconfont{
        padding-right: 20px;
      }
    }
    h2 {
      float: right;
      color: white;
      font-size: 14px;
      margin: 7px 4px 7px 0;
    }
  }
 
  }

</style>