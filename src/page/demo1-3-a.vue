<template>
  <div class="wrapper">
    <text class="h2">生命周期</text>
    <div class="grid-2">
      <div class="grid2-item">
        <text class="c2-title ui-border-right">beforeCreate</text>
      </div>
      <div class="grid2-item">
        <text class="c2-title iconfont-http">&#xe604;</text>
      </div>
    </div>
    <div class="grid-2">
      <div class="grid2-item">
        <text class="c2-title ui-border-right">created</text>
      </div>
      <div class="grid2-item">
        <text class="c2-title">{{createdTest}}</text>
      </div>
    </div>
    <div class="grid-2">
      <div class="grid2-item">
        <text class="c2-title ui-border-right">beforeMount</text>
      </div>
      <div class="grid2-item">
        <text class="c2-title">{{beforeMountTest}}</text>
      </div>
    </div>
    <div class="grid-2">
      <div class="grid2-item">
        <text class="c2-title ui-border-right">mounted</text>
      </div>
      <div class="grid2-item">
        <text class="c2-title">{{mountedTest}}</text>
      </div>
    </div>
    <div class="grid-2">
      <div class="grid2-item">
        <text class="c2-title ui-border-right">beforeDistroy</text>
      </div>
      <div class="grid2-item">
        <text class="c2-title" >{{beforeDistroyTest}}</text>
      </div>
    </div>
    <div class="grid-2">
      <div class="grid2-item">
        <text class="c2-title ui-border-right">destroyed</text>
      </div>
      <div class="grid2-item">
        <text class="c2-title">{{destroyedTest}}</text>
      </div>
    </div>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal')
  export default {
    name: 'App',
    components: {

    },
    data () {
      return {
        beforeCreateTest:1,
        createdTest:0,
        beforeMountTest:0,
        mountedTest:0,
        beforeDistroyTest:0,
        destroyedTest:0
      }
    },
    beforeCreate(){
      var domModule=weex.requireModule("dom");
      domModule.addRule('fontFace',{
          'fontFamily':'iconfont-http',   //注意这里必须是驼峰命名，跟上面的css样式对照
      　　　'src':"url('http://at.alicdn.com/t/font_1469606063_76593.ttf')"
      })
    },
    created(){
      this.createdTest = 1;
    },
    beforeMount(){
      this.beforeMountTest = 1;
    },
    mounted(){
      this.mountedTest = 1;
    },
    beforeDestroy(){
      modal.alert({
        message: 'This is beforeDestroy'
      })
    }, 
    destroyed(){
      modal.toast({
        message: 'destroyed',
        duration:3
      })
    },
  }
</script>

<style scoped> 
.iconfont-http{
  font-family: iconfont-http
}
.h2{
  margin-top: 30px;
  font-size: 50px;
  text-align: center;
  height: 110px;
  line-height: 110px;  
}
.c2-title{
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #777777;
  color:#fff;
}
.grid-2{
  flex-direction:row;
  justify-content: space-between;
}
.ui-border-right{
  border-right-width: 2px;
  border-right-style: solid;
  border-right-color: #ffffff;

}
.grid2-item{
  width:375px;
  position: relative;
  height: 180px;
}
</style>