<template>
  <scroller class="wrapper">
    <text class="h2">传统web思路（错误示范）</text>
    <div class="grid-3 grid-3-web">
      <div class="grid-item-web">
        <div class="inner">
          <div class="t">A</div>
        </div>
      </div>
      <div class="grid-item-web">
        <div class="inner">
          <div class="t">B</div>
        </div>
      </div>
      <div class="grid-item-web">
        <div class="inner">
          <div class="t">C</div>
        </div>
      </div>
    </div>
    <text class="h2">Flex布局 - 宫格布局</text>
    <div class="grid-3 grid-3-normal">
      <text class="grid-item grid-item-normal">A</text>
      <text class="grid-item grid-item-normal">B</text>
      <text class="grid-item grid-item-normal">C</text>
    </div>
    <text class="h2">Flex布局 - 宫格布局 间距不固定</text>
    <div class="grid-3 grid-3-equal">
      <text class="grid-item grid-item-equal">A</text>
      <text class="grid-item grid-item-equal">B</text>
      <text class="grid-item grid-item-equal">C</text>
    </div>
    <text class="h2">子项目居中对齐</text>
    <div class="list-row">
      <image class="list-row-avatar" src="http://placeholder.qiniudn.com/200x200"></image>
      <div class="list-row-info">
        <text class="list-row-title">主标题文案</text>
        <text class="list-row-subtitle">副标题文案副标题文案</text>
      </div>
      <text class="list-row-btn">下载</text>
    </div>
    <text class="h2">Flex布局 - 9宫格</text>
    <div class="grid-3 grid-3-equal grid-3-equal-wrap">
      <text class="grid-item grid-item-equal">1</text>
      <text class="grid-item grid-item-equal">2</text>
      <text class="grid-item grid-item-equal">3</text>
      <text class="grid-item grid-item-equal">4</text>
      <text class="grid-item grid-item-equal">5</text>
      <text class="grid-item grid-item-equal">6</text>
      <text class="grid-item grid-item-equal">7</text>
      <text class="grid-item grid-item-equal">8</text>
      <text class="grid-item grid-item-equal">9</text>
    </div>
  </scroller>
</template>

<script>
  export default {
    name: 'Demo12A'
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

/*====== 错误的示范 ====== */
.grid-item-web{
  width: 33.33%;
}
.grid-item-web .inner{
  padding-top: 100%;
  box-sizing: border-box;
  border-right: 4px solid #fff;
  background: #000;
}
.grid-item-web .t{
  font-size:100px;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left: 0;
  text-align: center;
  background-color:#000;
  color:#fff;
}
.grid-item-web:last-child .inner{
  border-right: 0;
} 

/*====== 宫格通用item ====== */
.grid-item{
  text-align:center;
  width: 247px;
  height: 247px;
  line-height: 247px;
  font-size:100px;
  background-color:#000;
  color:#ffffff;
  margin-bottom:4px;
}

/*====== 宫格布局 ====== */
.grid-3-normal{
  margin-left: -4px;
}
.grid-item-normal{
  margin-left: 4px;
}

/*====== 宫格布局 间距不固定 ====== */
.grid-3-equal{
  margin-left: 0;
  justify-content: space-between;
}


/*====== 子项目居中对齐 ====== */
.list-row{
  height: 188px;
  position: relative;
  padding-left: 188px;

  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #aaa;
  
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #aaa;
  /*横向排列*/
  flex-direction:row;
  
  /*子元素主轴线左右贴边*/
  justify-content: space-between;
 
  /*子元素次轴线剧中对齐*/
  align-items: center;
}
.list-row-avatar{
  width: 140px;
  height: 140px;
  position: absolute;
  left: 24px;
  top:24px;
}
.list-row-btn{
  width: 120px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 28px;
  border-radius: 4px;
  margin-right: 24px;
  border-width: 1px;
  border-style: solid;
  border-color:#aaa;
}
.list-row-title{
  font-size: 30px;
}
.list-row-subtitle{
  font-size: 24px;
  color:#777;
}

/*====== 9宫格 ====== */
.grid-3-equal-wrap{
  flex-wrap:wrap;
  height: 750px;
}

</style>