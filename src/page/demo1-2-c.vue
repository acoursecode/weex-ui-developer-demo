<template>
  <div class="wrapper">
    <text class="h2">层级关系 z-index</text>
    <div class="z">
      <div class="block a">
        <text class="t">A</text>
      </div>
      <div class="block b">
        <text class="t">B</text>
      </div>
      <div class="block c">
        <text class="t">C</text>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {

    },
    data () {
      return {
        images:[]
      }
    },
    mounted(){
      this.images = [
        {url:'http://placeholder.qiniudn.com/260x260'},
        {url:'http://placeholder.qiniudn.com/260x260'},
        {url:'http://placeholder.qiniudn.com/260x260'}]; 
    }
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
.z{
  width: 400px;
  height: 400px;
  position: relative;
  background-color:#eee;
  overflow: visible;
}
.block{
  width: 200px;
  height: 200px;
  position: absolute;
}
.a{
  left: 10px;
  top:10px;
  background-color:#ff9300;
  z-index: 3;
}
.b{
  left: 160px;
  top: 160px;
  z-index: 2;
  background-color:#e60012;
}
.c{
  left: 310px;
  top:310px;
  background-color:#00a0e9;
  z-index: 1;
}
.t{
  font-size: 50px;
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
}


</style>