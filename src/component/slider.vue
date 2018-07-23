<template>
    <!-- slider -->
    <slider class="slider" @change="sliderChanged">
        <list class="ui-list"  v-for="(v,i) in 7"> 
            <cell v-for="(item,index) in 16" class="ui-list-cell" >
                <div class="list-rank">
                    <text class="list-rank-num">{{1+index}}</text>
                    <div v-if="false">
                        <image :src="linkImg.up" class="rank-icon rank-up" v-if="index==0"></image>
                        <image :src="linkImg.down" class="rank-icon rank-down" v-if="index==1"></image>
                        <image :src="linkImg.hold" class="rank-icon rank-hold" v-if="index>1"></image>
                    </div>
                </div>
                <div class="ui-list-inner">
                    <div class="ui-list-thumb">
                        <image :src="linkImg.placeholderImg" class="ui-list-img"></image>
                    </div>
                    <div class="ui-list-info">
                        <text class="info-h3">全民飞机全民飞机全民飞机全民飞机全民飞机</text>
                        <div class="star-wrap">
                            <image :src="linkImg.stared" class="star" v-for="(s,j) in 4"></image>
                            <image :src="linkImg.star" class="star"></image>
                            <text class="scroe-text">9.2分</text>
                        </div>
                        <text class="info-p">293881人已安装</text>
                    </div>
                    <div class="wait" v-if="index == 3">
                        <text class="wait-text">敬请期待</text>
                    </div>
                    <div class="btn-position" v-else>
                        <div class="ui-btn" v-if="index != 2">
                            <text class="ui-btn-text">下载</text>
                        </div>
                        <div :class="downloadBtnClass"  v-if="index===2" @click="downloadGame">
                            <div class="btn-progress-inner" v-if="isDownload"></div>
                            <div class="btn-progress-bar" v-if="isDownload" :style="{width:btnProgress+'px'}"></div>
                            <text :class="downloadBtnTextClass">{{btnProgressText}}</text>
                        </div>
                    </div>

                </div>
            </cell>
        </list>
    </slider>
</template>
<script>
    const { platform } = weex.config.env;
    const isWeb = typeof (window) === 'object' && platform.toLowerCase() === 'web';
    const bbc = new BroadcastChannel('game-list');
    export default {
        components:{},
        data(){
            return {
                avatarUrl:'http://placeholder.qiniudn.com/100x100',
                photoUrl:'http://placeholder.qiniudn.com/750x422',
                linkImg:{
                    up:'https://raw.githubusercontent.com/acoursecode/weex-ui-developer-demo/master/dist/assets/image/up.png',
                    down:'https://raw.githubusercontent.com/acoursecode/weex-ui-developer-demo/master/dist/assets/image/down.png',
                    hold: 'https://raw.githubusercontent.com/acoursecode/weex-ui-developer-demo/master/dist/assets/image/hold.png',
                    stared: 'https://raw.githubusercontent.com/acoursecode/weex-ui-developer-demo/master/dist/assets/image/stared.png',
                    star: 'https://raw.githubusercontent.com/acoursecode/weex-ui-developer-demo/master/dist/assets/image/star.png',
                    placeholderImg:'https://raw.githubusercontent.com/acoursecode/weex-ui-developer-demo/master/dist/assets/image/game.png',
                },
                isDownload:false,
                btnProgress:0,
                btnProgressText:this.isDownload ? '0%' : '下载' 
            }
        },

        computed: {
            downloadBtnClass(){
              return this.isDownload ? ['ui-btn','ui-btn-primary','ui-btn-progress'] : ['ui-btn']
            },
            downloadBtnTextClass(){
                return this.isDownload ? ['ui-btn-text','btn-progress-text'] : ['ui-btn-text']
            },
            positionStyle (){
                return weex.config.env.platform=='android' ? 'absolute' :'fixed';
            },
        },
        methods:{
            sliderChanged: function (e) {
                bbc.postMessage({currentPage:e.index});
            },
            downloadGame(){
                const self =this;
                let btnWidth = isWeb ? 68 : 136;
                self.isDownload = true;
                self.btnProgressText = self.isDownload ? '0%' : '下载';
                let run = setInterval(() => {
                    self.btnProgress+=4;
                    self.btnProgressText= parseInt(self.btnProgress/btnWidth*100)+'%';
                    if(self.btnProgress == btnWidth){
                        self.btnProgress =0;
                        self.isDownload = false;
                        self.btnProgressText='下载';
                        clearInterval(run);
                    }
                }, 50);
            }
        },
    }
</script>
<style scoped>
.ui-list{
    width: 750px;
}
.ui-list-cell{
    width:750px;
}
.ui-list-inner{
    display: flex;
    border-bottom-width: 1px;
    border-bottom-color: #E9E9E9;
    border-bottom-style: solid;
    margin-left: 30px;
    position: relative;
    padding-top: 30px;
    padding-bottom: 30px;
    flex-direction: row;
    height:180px;
}

.ui-list-thumb{
    width: 120px;
    height: 120px;
    margin-right:20px;
}
.ui-list-img{
    width: 120px;
    height: 120px;
}
.ui-thumb-img{
    width: 120px;
    height: 120px;
}
.ui-list-info{
    display: flex;
    justify-content: center;
}
.info-h3{
    color:#000000;
    font-size: 32px;
}
.info-p{
    color:#888899;
    font-size: 24px;
}
.ui-btn{
    position: absolute;
    right:30px;
    top:60px;
}


/*btn*/
.ui-btn{
    width: 128px;
    height: 60px;
    border-radius: 60px;
    border-width: 2px;
    border-color: #888899;
    justify-content: center;
    color:#888899;
    background:transparent;
    opacity: 1;
}
.ui-btn:focus{
    outline: none;
}
.ui-btn-text{
    font-size: 24px;
    text-align: center;
}
.ui-btn:active{
    opacity: .5;
}


.ui-btn-primary{
    border-width: 0;
    background-image: linear-gradient(to right,#FFD980,#E6BC5C);
}

.ui-btn-progress{
    position: relative;
    background-image: none;
    background-color: #FFD980;
    overflow: hidden;
    padding-left: 2px;
    padding-right: 2px;
    padding-top: 2px;
    padding-bottom: 2px;
    align-items: center;
    z-index: 2;
}
.btn-progress-inner{
    background-color: #fff;
    position: absolute;
    left: 2px;
    top:2px;
    right:2px;
    height: 56px;
    border-radius: 60px;
}
.btn-progress-bar{
    position: absolute;
    left: 0;
    top:0;
    height: 60px;
    width: 50%;
    background-image: linear-gradient(to right,#FFD980,#E6BC5C);
    //border-top-left-radius: 60px;
    //border-bottom-left-radius: 60px;
}
.btn-progress-text{
    position: relative;
    z-index: 1;
    color: #000;
}


.star-wrap{
  flex-direction: row;
  align-items: center;
}
.star{
  width: 20px;
  height: 19px;
  margin-right: 3px;
}
.scroe-text{
  font-size: 24px;
  color: #E6B035;
  margin-left: 10px;
}


.slider{
    position: absolute;
    top:188px;
    bottom:0px;
    width:750px;
}
.ui-list{
    position: absolute;
    top:0px;
    bottom:0px;
    left:0px; 
    right:0px;
}
.list-rank{
    width: 86px;
    height: 38px;
    position: absolute;
    left: 0px;
    top:70px;
    align-items: center;
}
.info-h3{
    lines:1;
    text-overflow:ellipsis;
}
.list-rank-num{
    width:60px;
    font-size:32px;
    text-align: center;
}
.ui-list-inner{
    //margin-left:106px;
    margin-left: 86px;
    overflow:visible;
}
.rank-icon{
    position: absolute;
    width:30px;
    height:30px;
    left:60px;
    top:4px;
}
.empty-cell{
    width: 750px;
    position: absolute;
    top: 0px;
    bottom: 88px;
    left: 0px;
    right: 0px;
    z-index: 9999;
    align-items: center;
    justify-content: center;
}
.ui-btn-progress{
    position: absolute;
}
.ui-list-info{
    flex: 1;
    padding-right: 168px;
}
.btn-position{
    position: absolute;
    right:30px;
    top:60px;
    width: 128px;
    height: 64px;
}
.ui-btn{
    right:0;
    top:0px;
}

.wait{
    position: absolute;
    right:30px;
    top:60px;
    width: 128px;
    height: 60px;
    justify-content: center;
    align-items: center;
}

.wait-text{
    font-size: 28px;
    color: #b2b2b2;
}
</style>