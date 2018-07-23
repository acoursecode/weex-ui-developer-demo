<template>
  <div class="wrapper">
    <div class="btn" @click="doCssAnimation()">
      <text class="btn-txt">执行CSS动画</text>
    </div>
    <div class="rotate1" >
      <image class="juhua1" :class="animating?'animating':''" src="https://raw.githubusercontent.com/acoursecode/weex-ui-developer-demo/master/dist/assets/image/juhua.png"></image>   
    </div>
    <div class="btn" @click="doJsAnimation()">
      <text class="btn-txt">执行JS动画</text>
    </div>
    <div class="rotate2">
      <image class="juhua2" ref="juhua" src="https://raw.githubusercontent.com/acoursecode/weex-ui-developer-demo/master/dist/assets/image/juhua.png"></image>   
    </div>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal')
  const animation = weex.requireModule('animation')
  export default {
    name: 'App',
    components: {

    },
    data () {
      return {
        animating:false,
      }
    },
    created(){
      this.createdTest = 1;
    },
    methods:{
      doCssAnimation(){
        modal.toast({
          message: '触发执行CSS动画',
          duration:1
        })
        this.animating = true;
      },
      doJsAnimation(){
        var juhua = this.$refs.juhua;
        animation.transition(juhua, {
          styles: {
            transform: 'translate(100px, -100px) rotate(720deg)',
          },
          duration: 800, //ms
          timingFunction: 'ease',
          needLayout:false,
          delay: 0 //ms
        }, function () {
          
        })
      }
    }
  }
</script>

<style scoped> 
.btn{
  width: 300px;
  height: 120px;
  background-color: #000;
}
.btn-txt{
  color:#fff;
  text-align: center;
  height: 120px;
  font-size: 40px;
  line-height: 120px;
}
.h2{
  margin-top: 30px;
  font-size: 50px;
  text-align: center;
  height: 110px;
  line-height: 110px;  
}
.rotate1,.rotate2{
  height: 530px;
  position: relative;
}
.animating{ 
  transform: rotate(720deg);
  transition-property: transform;
  transition-duration: 2s;
  transition-delay: 2s;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);
}
.juhua1,.juhua2{
  position: absolute;
  width: 330px;
  height: 330px;
  top:100px;
  left: 210px;
}
</style>
