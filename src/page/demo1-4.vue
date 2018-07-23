<template>
  <div class="wrapper-inner">
    <Tab></Tab> 
    <SliderList></SliderList>
  </div>
</template>

<script>
  import SliderList from '../component/slider.vue'; 
  import Tab from '../component/tab.vue'; 
  export default {
    name: 'App',
    components: {
      SliderList,Tab
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
  .wrapper-inner{
    position: absolute;
    top:0;
    bottom:0;
    width: 750px;
    background-color:#fff;
  }
</style>