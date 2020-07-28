<template>
   <transition name="slide-fade">
    <div class="main" v-if="show">
        <div>
            <div class="container-image">
                <img class="img-profile" src="../../assets/Icons/Photo.png">
            </div>

            <div class="container-profile">

                <div class="container-namePosition separation">
                    <p class="name">Amilia Luna</p>
                    <p class="position">UI Designer</p>
                </div>

                <div class="container-social separation">
                    <Facebook></Facebook>
                    <Twitter></Twitter>
                    <Instagram></Instagram>
                    <In></In>
                </div>

                <div class="container-buttons separation">
                    <MessageButton></MessageButton>
                    <OptionsButton></OptionsButton>
                </div>

                <div class="container-info">

                    <div class="container-username separation-info">
                        <h1>Username</h1>
                        <p class="username">@amilia_lu</p>
                    </div>

                    <div class="container-email separation-info">
                        <h1>Email</h1>
                        <p class="email">a-luna@gmail.com</p>
                    </div>

                    <div class="container-skype separation-info">
                        <h1>Skype</h1>
                        <p class="skype">amiluna</p>
                    </div>

                    <div class="container-timezone separation-info">
                        <h1>Timezone</h1>
                        <p class="timezone">2:21 PM Local time</p>
                    </div>

                </div>

            </div>
        </div>

        <div class="container-arrow">
            <ArrowRightButton @click="showProfile"></ArrowRightButton>
        </div>

    </div>
    </transition>

</template>

<script>

import Facebook from "@/components/Buttons/Facebook.vue";
import Twitter from "@/components/Buttons/Twitter.vue";
import Instagram from "@/components/Buttons/Instagram.vue";
import In from "@/components/Buttons/In.vue";

import MessageButton from "@/components/Buttons/MessageButton.vue";
import OptionsButton from "@/components/Buttons/OptionsButton.vue";
import ArrowRightButton from "@/components/Buttons/ArrowRightButton.vue";

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
      Facebook,
      Twitter,
      Instagram,
      In,
      MessageButton,
      OptionsButton,
      ArrowRightButton,
    }
}
</script>

<style lang="scss" scoped>

.main{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    background: rgb(209, 212, 217);
    opacity: 0.8;
}

.container-profile{
     padding: 20px;
}

.name{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
}

.position{
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #5F6164;
}

.info{
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
}

.container-social{
    display: flex;
    align-items: center;

    :not(:last-child){
        margin-right: 7px;
    }
}

h1{
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    color: #5F6164;
}

.separation{
        margin-bottom: 20px;
}

.container-namePosition{
    :first-child{
        margin-bottom: 3px;
    }
}

.separation-info{
        margin-bottom: 10px;
}

.container-arrow{
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    padding-bottom: 30px;
}

.container-buttons {
    display: flex;

    :first-child {
        margin-right: 2px;
    }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(200px);
}

</style>
