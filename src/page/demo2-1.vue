<template>
  <div class="wrapper">
    <text class="h2">Flex布局 - wx单位高精度还原</text>
    <div class="grid-3 grid-3-equal">
      <text class="grid-item grid-item-equal">A</text>
      <text class="grid-item grid-item-equal">B</text>
      <text class="grid-item grid-item-equal last">C</text>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Demo12A',
    components: {

    },
    data () {
      return {
        images:[]
      }
    },
    mounted(){
    }
  }
</script>

<style scoped> 
.h2{
  font-size: 50px;
  text-align: center;
  height: 110px;
  line-height: 110px;  
}
.grid-3{ 
  padding-top: 20px;
  flex-direction:row;
}
.grid-item{
  text-align:center;
  width: 250px;
  height: 250px;
  line-height: 250px;
  font-size:100px;
  background-color:#000;
  color:#ffffff;
  /* wx作为单位 */
  border-right-width: 2wx;
  border-right-style: solid;
  border-right-color: #fff;
}
.grid-3-equal{
  justify-content: space-between;
}
.last{
  border-right-width: 0;
}
</style>