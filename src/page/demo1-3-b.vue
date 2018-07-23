<template>
  <div class="wrapper">
    <text class="h2">组件嵌套 & 私有样式</text>
    <slider class="banner" interval="4000" auto-play="true">
      <div class="banner-item" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
      </div>
      <indicator class="banner-indicator"></indicator>
    </slider>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {

    },
    data () {
      return {
        imageList:[]
      }
    },
    created(){
      this.imageList = [{ src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}];
    },
  }
</script>

<style scoped> 
  .h2{
    margin-top: 30px;
    font-size: 50px;
    text-align: center;
    height: 110px;
    line-height: 110px;  
  }
  .banner {
    width: 750px;
    height: 400px;
  }
  .image {
    width: 750px;
    height: 400px;
  }
  .banner-item {
    width: 750px;
    height: 400px;
    position: relative;
  }
  .banner-indicator {
    width: 750px;
    height: 20px;
    item-color: rgba(255,255,255,0.5);
    item-selected-color: rgba(255,255,255,1);
    item-size: 20px;
    position: absolute;
    left: 0;
    bottom: 50px;
  }
</style>