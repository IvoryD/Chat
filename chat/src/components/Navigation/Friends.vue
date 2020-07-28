<template>
    <div class="container">

        <header>
            <p>FRIENDS</p>
            <div class="countFriends">{{ countFriends }}</div>
        </header>

        <div class="container-friends">

            <div class="profile profile-separation" v-for="(friend, i) in friends" :key="i">
                <div class="profile-image"></div>
                <div class="profile-name">Orlando Diggs</div>
            </div>

        </div>

    </div>
</template>

<script>

import axios from 'axios'

export default {

    methods:{
        openProfile(friend){

            this.$router.push({ 

                name: 'Profile', 

                params: {
                    "avatar": friend.avatar,
                    "displayName": friend.displayName,
                    "online": friend.online,
                    "position": friend.position,

                    "facebook": friend.Facebook,
                    "twitter": friend.Twitter, 
                    "instagramm": friend.Instagramm,
                    "in": friend.In,

                    "userName": friend.userName,
                    "email": friend.email,
                    "Skype": friend.Skype,
                    "Timezone": friend.Timezone,
                } 
            })
                .catch(()=>{})
        }
    },

    data() {
        return {
            friends: [],
            friendsIds: [],
        }
    },

    computed: {
        countFriends () {
            return this.friendsIds.length || 0
        },
    },

    mounted() {
    let vm = this
    axios
        .get('http://localhost:3000/friends')
        .then(response => { 
            vm.friendsIds = response.data
            vm.friends = vm.$store.getters.getProfilesByIds(vm.friendsIds)    
            let notDownloadedIds = vm.friendsIds.filter(friendId => !vm.friends.find(friend => friend.id === friendId)) 

            if(notDownloadedIds.length){            
                let filtrationString = "?"

                for(let i = 0; i<notDownloadedIds.length; i++){
                    filtrationString += 'id=' + notDownloadedIds[i] + '&'
                }

                axios 
                    .get('http://localhost:3000/getProfile' + filtrationString)
                    .then(response => {
                        vm.friends.push(...response.data)
                        vm.$store.dispatch('ADD_PROFILES', response.data);
                        })
            }
        });
    },  
}

</script>

<style lang="scss" scoped>

header{
    display: flex;
    flex-wrap:nowrap;
    justify-content: space-between;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #919191;
    margin-bottom: 21px;
}

.container-friends {
    display: flex;
    flex-direction: column;
}

.profile {
    display: flex;
    cursor: pointer;
    border-radius: 5px;

    &:hover{
        color: #FFFFFF;
        background: rgb(105, 105, 109);
    }

    &-image {
        width: 35px;
        height: 35px;
        background: red;
        margin-right: 13px;
        border-radius: 5px;
    }

    &-name {
        display: flex;
        align-items: center;
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #B5B5B5;;
    }

    &-separation {
        margin-bottom: 12px;
    }
}

</style>