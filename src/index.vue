<template>
  <div class="wrapper">
    <div class="header-bar" >
      <text class="title">Demo</text>
      <div class="back-btn" v-if="currentPage!='index'" @click="switchPage('index')">
        <text class="back-btn-txt"> < 返回</text>
      </div> 
    </div>
    <div class="header-bar-placeholder"></div>
    <scroller class="scroller" v-if="currentPage=='index'" >
      <text class="h1">与Web开发的差异</text>
      <div class="link-list">
        <div @click="switchPage('demo12A')">
          <text class="link" >Flex布局</text>
          <text class="icon-arrow">&#xe600;</text>
        </div>
        <div @click="switchPage('demo12B')">
          <text class="link" >图片 & icon</text>
          <text class="icon-arrow">&#xe600;</text>
        </div>
        <div @click="switchPage('demo12C')">
          <text class="link" >定位</text>
          <text class="icon-arrow">&#xe600;</text>
        </div>
        <div @click="switchPage('demo13A')">
          <text class="link " >生命周期</text>
          <text class="icon-arrow">&#xe600;</text>
        </div>
        <div @click="switchPage('demo13B')">
          <text class="link" >组件嵌套 & 私有样式</text>
          <text class="icon-arrow">&#xe600;</text>
        </div>
        <div @click="switchPage('demo14')">
          <text class="link last" >完整案例</text>
          <text class="icon-arrow">&#xe600;</text>
        </div>
      </div>
      <text class="h1">进阶</text>
      <div class="link-list">
        <div @click="switchPage('demo21')">
          <text class="link" >高精度还原UI</text>
          <text class="icon-arrow">&#xe600;</text>
        </div>
        <div @click="switchPage('demo22')">
          <text class="link" >基础动画</text>
          <text class="icon-arrow">&#xe600;</text>
        </div>
        <div @click="switchPage('demo23')">
          <text class="link" >高性能交互动画</text>
          <text class="icon-arrow">&#xe600;</text>
        </div>
        <div @click="switchPage('demo24')">
          <text class="link last" >BindingX 差值器</text>
          <text class="icon-arrow">&#xe600;</text>
        </div>
      </div>
    </scroller>
    
    <Demo12A v-if="currentPage=='demo12A'" ref="demo12A"></Demo12A>  
    <Demo12B v-if="currentPage=='demo12B'" ref="demo12B"></Demo12B>  
    <Demo12C v-if="currentPage=='demo12C'" ref="demo12C"></Demo12C>  
    <Demo13A v-if="currentPage=='demo13A'" ref="demo13A"></Demo13A>  
    <Demo13B v-if="currentPage=='demo13B'" ref="demo13B"></Demo13B>  
    <Demo14 v-if="currentPage=='demo14'" ref="demo14"></Demo14>  
    <Demo21 v-if="currentPage=='demo21'" ref="demo21"></Demo21>  
    <Demo22 v-if="currentPage=='demo22'" ref="demo22"></Demo22>  
    <Demo23 v-if="currentPage=='demo23'" ref="demo23"></Demo23>  
    <Demo24 v-if="currentPage=='demo24'" ref="demo24"></Demo24>  
  </div> 
</template>

<script>
var navigator = weex.requireModule('navigator');
import Demo12A from './page/demo1-2-a.vue';
import Demo12B from './page/demo1-2-b.vue';
import Demo12C from './page/demo1-2-c.vue';
import Demo13A from './page/demo1-3-a.vue';
import Demo13B from './page/demo1-3-b.vue';
import Demo14 from './page/demo1-4.vue';
import Demo21 from './page/demo2-1.vue'; 
import Demo22 from './page/demo2-2.vue';
import Demo23 from './page/demo2-3.vue'; 
import Demo24 from './page/demo2-4.vue'; 
export default {
  name: 'App', 
  components: {
    Demo12A,Demo12B,Demo12C,Demo13A,Demo13B,Demo14,Demo21,Demo22,Demo23,Demo24
  },
  data () {
    return {
      currentPage:'index'
    }
  },
  mounted(){
    
  },
  created(){
    var domModule=weex.requireModule("dom");
    domModule.addRule('fontFace',{
        'fontFamily':'iconfont',   //注意这里必须是驼峰命名，跟上面的css样式对照
    　　　'src':"url('http://at.alicdn.com/t/font_1469606063_76593.ttf')"
    })
  },
  methods:{
    switchPage:function(page){
      this.currentPage = page;
    }
  }
}
</script>

<style scoped>
  .wrapper{
    position: absolute;
    top:0;
    bottom:0;
    width: 750px;
    padding-bottom: 50px;
  }
  .header-bar{
    top:-40px;
    left: 0;
    padding-top: 30px; 
    height: 140px;
    background-color:#ff9300;
    position: fixed;
    z-index: 9999;
  }
  .header-bar-placeholder{
    height: 140px;
  }
  .back-btn{
    position: absolute;
    left:0;
    top:30px;
    height: 110px;
    width: 210px;
    padding-left: 20px;
  }
  .back-btn-txt{
    height: 110px;
    line-height: 110px;
    color:#ffffff;
    font-size: 40px;
  }
  .title{
    width: 750px;
    height: 110px;
    line-height:110px;
    color:#ffffff;
    font-size: 40px;
    text-align: center;
  }
  .h1{
    font-size: 48px;
    padding-left: 24px;
    height: 180px;
    font-weight: bold;
    text-align: center;
    line-height: 180px;
    background-color: #ffffff;
    border-bottom-width: 1px;
    border-bottom-style: solid; 
    border-bottom-color: #aaaaaa;
  }
  .link-list{
    padding-left: 50px; 
    border-bottom-width: 1px;
    border-bottom-style: solid; 
    border-bottom-color: #aaaaaa;
  }
  .link{
    font-size: 48px;
    height: 120px;
    line-height: 120px;
    border-bottom-width: 1px;
    border-bottom-style: solid; 
    border-bottom-color: #aaaaaa;
    position: relative;
  }
  .last{
    border-bottom-width: 0px;
  }
  .icon-arrow{
    color:#aaa;
    position: absolute;
    right: 30px;
    top:40px;
    font-family: iconfont;
  }
  .grid-3{ 
    /*flex-direction:row;*/
    margin-left: -4px;
    background-color: red;
  }
  .grid-item{
    background-color: red;
    margin-left: 4px;
    width: 247px;
    height: 247px;
    position: relative;
  }
  .grid-image{
    position: absolute;
    width: 247px;
    height: 247px;
    top:0;
    left: 0;
  }
  .image {
    width: 700px;
    height: 700px;
  }
  .slider {
    margin-top: 25px;
    margin-left: 25px;
    width: 700px;
    height: 700px;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  }
  .frame {
    width: 700px;
    height: 700px;
    position: relative;
  }
</style>
