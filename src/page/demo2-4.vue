
<template>
  <div class="wrapper">
    <text class="h2">BindingX 手势动画</text>
    <div class="card" :ref="'card'" @touchstart="ontouchstart"> 
      <text class="card-text">卡片 with 回弹</text>
    </div>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal')
  const bindingx = require('weex-bindingx')

  //获取节点 - 兼容web
  const getElment = (el)=>{
    return WXEnvironment.platform == "Web"? el:el.ref;
  }
  export default {
    name: 'App',
    components: {

    },
    data () {
      return {
        isInAnimation:false
      }
    },
    mounted(){
    },
    methods:{
      ontouchstart(){
        var self = this;
        var el = getElment(this.$refs.card);

        //解决手势冲突
        if(this.isInAnimation  === true) {
          if(this.gesToken != 0) {
              bindingx.unbind({
                  eventType:'pan',
                  token:self.gesToken
              })
              this.gesToken = 0;
          }
          return;
        }

        var gesTokenObj = bindingx.bind({
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
          if(e.state === 'end') {
              self.x = e.deltaX;
              self.opacity = 1-Math.abs(e.deltaX)/600;
              self.bindTiming();
          }
        });
        this.gesToken = gesTokenObj.token;
      },
      bindTiming(){
        this.isInAnimation = true;
        var self = this;
        var el = getElment(this.$refs.card);
          
        var changed_x;
        var final_x;

        var final_opacity;
        var translate_x_expression;
        var shouldDismiss = false;
            
        // if(self.x>=-750/2 && self.x<=750/2) { // 复位      
          shouldDismiss = false;
          final_x = 0;
          changed_x = 0-self.x;
          final_opacity = 1;

          //差值器
          translate_x_expression = "easeOutElastic(t,"+self.x+","+changed_x+",1000)";
        // }
                  
        var changed_opacity = final_opacity - self.opacity;
        var opacity_expression = "linear(t,"+self.opacity+","+changed_opacity+",1000)";        
        var result = bindingx.bind(
            {
              eventType:'timing',
              exitExpression: "t>1000",
              props: [
                  {
                    element:el, 
                    property:'transform.translateX',
                    expression: translate_x_expression
                  },
                  {
                    element:el,
                    property:'opacity',
                    expression:opacity_expression
                  }
              ]
             },function(e){
                if(e.state === 'end' || e.state === 'exit') {
                  self.x = final_x;
                  self.isInAnimation = false; 
                  if(shouldDismiss) {
                    //删除逻辑
                  }
                }
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

