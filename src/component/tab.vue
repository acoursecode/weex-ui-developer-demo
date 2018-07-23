<template>
    <div>
        <scroller class="tab-scroller" scroll-direction="horizontal" show-scrollbar="false">
            <div class="line"></div>
            <div class="ui-tab">
                <div class="ui-tab-item"  v-for="(item,index) in list" :ref="'tabItem'+index">
                    <text class="item-text" :class="tabIndex == index ? ['item-text-active'] : ['']"  @click="changeTab(index)">{{item}}</text>
                    <div class="tab-indicator" v-if="tabIndex == index"></div>
                </div>
            </div>
        </scroller>
    </div>
</template>
<script>
    const bbc = new BroadcastChannel('game-list');
    export default {
        data(){
            return {
                list:['热门','角色','射击','卡牌','策略','动作','竞技'],
                tabIndex:0
            }
        },
        created: function() {
            var that = this;
            bbc.onmessage = function (event) {
              that.changeTab(event.data.currentPage);
            }
        }, 
        methods:{
            changeTab:function (index) {
                this.tabIndex = index;
            }
        }
    }
</script>
<style>
.ui-tab{
    flex-direction:row;
    height:88px;
    flex-wrap: nowrap;
}
.ui-tab-item{
    margin-left: 25px;
    margin-right: 25px;
    justify-content: center;
    position: relative;
}
.tab-indicator{
    content:"";
    position: absolute;
    left: 0px;
    bottom:0;
    right:0px;
    height: 4px;
    background-image: linear-gradient(to right, #E6BC5C,rgba(255, 217, 128, 0.99));
}
.item-text{
    text-align: center;
    font-size: 32px;
}
.item-text-active{
    color: #E6B035;
}
.tab-btn{
    position: absolute;
    right:30px;
    top:60px;
}
.tab-scroller{
    flex-direction: row;
    position: fixed;
    top:100px;
    width: 750px;
    height: 89px;
    z-index: 2;
    background-color: #fff;
}

.line{
    position: fixed;
    top:188px;
    left:0;
    width: 750px;
    height: 1px;
    background-color: #E9E9E9;
}
</style>