<template>
        <div class="header">
            
            <div class="header-cluster">
                <div class="cluster-container">
                    <p class="container-channel_name"># {{ channelName }}</p>
                    <Favorite></Favorite>
                </div>
            </div>

            <div class="header-cluster controls">

                <div class="cluster-container">
                    <IconHuman></IconHuman>
                    <p class="countUsers">{{ channelCount }}</p>
                </div>

                <div class="container-search">
                    <input type="search" class="search" tabindex="0" placeholder="Search..."/>
                    <img class="img-search" src="../../assets/Icons/Search.png">
                </div>

                <NotificationButton></NotificationButton>

                <ThreeDotButton></ThreeDotButton>
            </div>

        </div>
</template>

<script>

import Favorite from "@/components/Buttons/Favorite.vue";
import IconHuman from "@/components/Buttons/IconHuman.vue";
import NotificationButton from "@/components/Buttons/NotificationButton.vue";
import ThreeDotButton from "@/components/Buttons/ThreeDotButton.vue";

export default {

    props:{
        channelName: String,
        channelCount: Number,
    },

    components:{
        Favorite,
        IconHuman, 
        NotificationButton,
        ThreeDotButton,
    }
}
</script>

<style lang="scss" scoped>

.countUsers{
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #A4A4A4;
    margin-left: 6px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid rgba($color: #000000, $alpha: 0.24);
    padding-top: 35px;
    padding-bottom: 20px;
    padding-left: 25px;
    padding-right: 25px;
    

    &-cluster{
        display: flex;
        align-items: center;
        width: 100%;

        &.controls {
            justify-content: flex-end;

            >:not(:last-child){
                margin-right: 25px;
            }
        }
    }
}

.container-channel_name {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    margin-right: 6px;
}

.cluster-container {
    display: flex;
    align-items: center;
}

.container-search {
    display: flex;
    align-items: center;
    border: 0.5px solid rgba(0, 0, 0, 0.24);
    width: 250px;
    
    border-radius: 5px;
    padding-bottom: 8px;
    padding-top: 8px;
    padding-left: 17px;
    padding-right: 9px;

  .search {
    color: #8D8D8D;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    border: none;

    outline: none;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .img-search {
    color: #808080
  }
}


</style>