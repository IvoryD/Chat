<template>

    <div class="container-message">

        <div class="container-image">
            <img class="profile-image" :src="avatarSrc"/>
        </div>


        <div class="cluster">
            
            <div class="containerNameTime">
                <div class="profile-name">{{ displayName }}</div>
                <div class="message-time">{{ time }}</div>
            </div>

            <div class="textMessage">{{ message.text }}</div>

        </div>

    </div>

</template>

<script>

import axios from 'axios'
import moment from 'moment'

export default {

    computed:{

        time(){
            return this.$moment(this.message.time).format('h:mm A');
        },

        displayName(){
            return this.profile ? this.profile.displayName : ""
        },

        avatarSrc(){
            return this.profile && this.profile.avatar ? require(`../../assets/Avatars/${this.profile.avatar}.jpg`) : ""
        }
    },

    props: {
        message: Object,
        profile: Object,
    },
}

</script>


<style lang="scss" scoped>

.container-image {
    width: 32px;
}

.containerNameTime {
    display: flex;

    :not(:last-child) {
        margin-right: 10px;
    }
}

.container-message {
    display: flex;

    >:first-child {
        margin-right: 10px;
    }

    .message-time {
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: #8D8D8D;
    }
}

.profile-name {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
}

.profile-image {
    width: 32px;
    height: 32px;
    border-radius: 5px;
}

.textMessage {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    color: #000000;
}

.cluster {
    display: flex;
    flex-direction: column;
}


</style>
