
<template>
  <div class="wrapper">
    <text class="h2">BindingX 手势动画</text>
    <div class="card" :ref="'card'" @touchstart="ontouchstart"> 
      <text class="card-text">卡片</text>
    </div>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal')
  const bindingx = require('weex-bindingx')

  export default {
    name: 'App',
    components: {

    },
    data () {
      return {
      }
    },
    mounted(){
    },
    methods:{
      ontouchstart(){
        var el = this.$refs.card.ref;
        var result = bindingx.bind({
          eventType:'pan',
          anchor:el,
          props:[
            {
              element:el,
              property:'transform.translateX',
              expression:{
                origin: "x+10",
              }
            },
            {
              element:el, 
              property:'opacity',
              expression:'1-abs(x)/600'
            }
          ]
        },function(e){
          
        });
      }
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
.card{
  top:300px;
  position: absolute;
  left: 75px;
  width: 600px;
  height: 480px;
  background-color:#000;
  border-radius: 8px;
}
.card-text{
  height: 600px;
  line-height: 480px;
  color:#fff; 
  font-size: 60px;
  text-align: center;
}
</style>

