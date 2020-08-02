<template>
    <transition name="slide-fade">
    <div class="main" v-if="show">
        <div>
            <div class="container-image">
                <img class="img-profile" :src="avatarSrc">
            </div>

            <div class="container-profile">

                <div class="container-namePosition separation">

                    <div class="container-status">
                        <p class="name">{{ profile.displayName }}</p>
                        <Status :statusOnline="profile.online"></Status>
                    </div>
                    
                    <p class="position">{{ profile.position }}</p>

                </div>

                <div class="container-social separation">
                    <a target="_blank" :href= profile.Facebook><Facebook></Facebook></a>
                    <a target="_blank" :href= profile.Twitter><Twitter></Twitter></a>
                    <a target="_blank" :href= profile.Instagram><Instagram></Instagram></a>
                    <a target="_blank" :href= profile.In><In></In></a>
                </div>

                <div class="container-buttons separation">
                    <MessageButton></MessageButton>
                    <OptionsButton></OptionsButton>
                </div>

                <div class="container-info">

                    <div class="container-username separation-info">
                        <h1>Username</h1>
                        <p class="username">{{ profile.userName }}</p>
                    </div>

                    <div class="container-email separation-info">
                        <h1>Email</h1>
                        <p class="email">{{ profile.email }}</p>
                    </div>

                    <div class="container-skype separation-info">
                        <h1>Skype</h1>
                        <p class="skype">{{ profile.Skype }}</p>
                    </div>

                    <div class="container-timezone separation-info">
                        <h1>Timezone</h1>
                        <p class="timezone">{{ profile.Timezone }}</p>
                    </div>

                </div>

            </div>
        </div>

        <div class="container-arrow">
            <ArrowRightButton @click="hideProfile"></ArrowRightButton>
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

import Status from "@/components/Buttons/Status.vue";

export default {

     props: {
        friendId: Number,
        friendDisplayName: String,
    },

    computed: {

        avatarSrc(){
            return this.profile && this.profile.avatar ? require(`../../assets/Avatars/${this.profile.avatar}.jpg`) : ""
        },

        profile() {
            return this.$store.getters.getSelectedProfile;
        },

        show() {
            return this.$store.getters.getShowProfile;
        },
    },

    methods: {

        hideProfile() {
            this.$store.dispatch('hideProfile')
        }
    
    },

    components: {
      Facebook,
      Twitter,
      Instagram,
      In,
      MessageButton,
      OptionsButton,
      ArrowRightButton,
      Status,
    }
}
</script>

<style lang="scss" scoped>

.main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    background: rgb(209, 212, 217);
    opacity: 0.8;
}

.container-image {
    height: 200px;
}


.img-profile {
    height: 200px;
    width: 100%;
}

.container-profile {
     padding: 20px;
}

.container-status {
    display: flex;
}

.name {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-right: 6px;
}

.position {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #5F6164;
}

.info {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
}

.container-social {
    display: flex;
    align-items: center;

    :not(:last-child){
        margin-right: 7px;
    }
}

h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    color: #5F6164;
}

.separation {
        margin-bottom: 20px;
}

.container-namePosition {
    :first-child{
        margin-bottom: 3px;
    }
}

.separation-info {
        margin-bottom: 10px;
}

.container-arrow {
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
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(200px);
}

</style>
