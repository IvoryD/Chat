<template>
  <div class="main">

    <header class="main-header separation">
        <h1>Nomad List</h1>
        <ArrowBottomButton @click="showProfile"></ArrowBottomButton>
        <SettingsButton></SettingsButton>
    </header>

    <transition name="slide-fade">
        <div class="scrolls" v-if="show">
            <div class="main-all-treads separation">
                <IconTreads></IconTreads>
                <p>All treads</p>
            </div>

            <Channels></Channels>
            <Friends></Friends>  
        </div>
    </transition>

  </div>
</template>

<script>

import Channels from "@/components/Navigation/Channels.vue";
import Friends from "@/components/Navigation/Friends.vue";
import SettingsButton from "@/components/Buttons/SettingsButton.vue";
import IconTreads from "@/components/Buttons/IconTreads.vue";
import ArrowBottomButton from "@/components/Buttons/ArrowBottomButton.vue";


export default {

    data(){
      return {
        show: true
      }
    },

    methods:{
        showProfile(){
            this.show = !this.show
        }
    },

    components:{
        Channels,
        Friends,
        SettingsButton,
        IconTreads,
        ArrowBottomButton,
    },
}
</script>

<style lang="scss" scoped>

.main {
    display: flex;
    flex-direction: column;
    width: 350px;
    background: #25272A;
    opacity: 0.75;
    padding-top: 35px;
    padding-left: 30px;
    padding-right: 10px;

    &-all-treads {
        display: flex;
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #B5B5B5;
        >:first-child{
            margin-right: 10px;
        }
    }
}

header {
    display: flex;
    flex-wrap:nowrap;
    justify-content: space-between;
    padding-right: 15px;
    padding-bottom: 20px;
}

h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;  
    color: #FFFFFF;
}

.separation {
    margin-bottom: 30px;
}

.scrolls {
    padding-right: 10px;
    max-height: 800px;
    overflow-y: scroll;

    &::-webkit-scrollbar{
        width: 6px;    

    }

    &::-webkit-scrollbar-thumb{
        background: rgba($color: #B5B5B5, $alpha: 0.2);
        border-radius: 5px;
    }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translatey(-20px);
  opacity: 0;
}
</style>