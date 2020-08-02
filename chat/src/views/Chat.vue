<template>

    <div class="main" >

        <ChatHeader 
            :channelName="channelName"
            :channelCount="channelCount">
        </ChatHeader>

    <div class="chat scrolls">

    <div v-for="(message, i) in messages" :key="i">
        <ChatMessage
            :profile="getProfileById(message.authorId)"
            :message="message">
        </ChatMessage>
    </div>
        
        <ChatFooter 
            @enter="sendMessage"
            :channelName="channelName"
            v-model="message.text"/>

    </div>
</div>
</template>

<script>

import ChatHeader from "@/components/Chat/ChatHeader.vue";
import ChatMessage from "@/components/Chat/ChatMessage.vue";
import ChatFooter from "@/components/Chat/ChatFooter.vue";
import NavigationVue from '@/components/Navigation/Navigation.vue';

import axios from 'axios'

export default {

    components: {
        ChatHeader,
        ChatMessage,
        ChatFooter,
    },

    props: {
        channelId: String,
    },

    data() {
        
        return {
            channel: {},
            messages: [],
            profiles:[],
            
            message: {
                channelId: null,
                authorId: null,
                time: null,
                reference: null,
                text: "",
                attachment: null,
            }
        }
    },

    mounted(){

        this.fetchChannel()

    },
    
    methods: {


        getProfileById(id){

            return this.profiles.find(profile => profile.id === id)

        },

        sendMessage(){
            this.message.channelId = this.channelId
            this.message.authorId = this.authorId
            this.message.time = this.$moment()

            let vm = this
            axios
                .post('http://localhost:3000/messages/', this.message, {
                    headers:{
                        'content-type': 'application/json', 
                    }
                })
                .then(() => vm.messages.push(vm.message))
        },

        fetchChannel(){
            let vm = this
            axios
                .get('http://localhost:3000/channels?id=' + vm.channelId)    
                .then(response => { 
                    vm.channel = response.data[0]
                    vm.fetchMessages()
                })
        },

        fetchMessages(){
    
            let vm = this
            axios
                .get('http://localhost:3000/messages?channelId=' + vm.channelId)
                .then(response => {   
                    vm.messages = response.data

                    vm.profilesIds = vm.messages.map(message => message.authorId)

                    vm.profiles = vm.$store.getters.getProfilesByIds(vm.profilesIds)    

                    let notDownloadedIds = vm.profilesIds.filter(profileId => !vm.profiles.find(profile => profile.id === profileId)) 
                              
                    if(notDownloadedIds.length){            
                        let filtrationString = "?"

                        for(let i = 0; i < notDownloadedIds.length; i++){
                            filtrationString += 'id=' + notDownloadedIds[i] + '&'
                        }

                        axios 
                            .get('http://localhost:3000/getProfile' + filtrationString)
                            .then(response => {
                                vm.profiles.push(...response.data)
                                vm.$store.dispatch('addProfiles', response.data);
                            })
                        }
                })
        },
    },

    computed: {
 
        channelName() {
            return this.channel.name
        },

        channelCount() {
            return this.channel.countUsers
        },

        authorId(){
             return this.$store.getters.getAuthor;
        }

    },

    watch: {

        channelId(val) {
            this.fetchChannel()
        },

    }
}

</script>

<style lang="scss" scoped>

.main {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #FFFFFF;  
}

.scrolls {
    padding-right: 10px;
    max-height: 800px;
    overflow-y: scroll;

    &::-webkit-scrollbar{
        width: 6px;    

    }

    &::-webkit-scrollbar-thumb{
        background: rgba($color: #B5B5B5, $alpha: 0.75);
        border-radius: 5px;
    }
}

.chat {
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    height: 100%;
    padding: 25px;
    margin-right: 6px;

    >:not(:last-child){
        margin-bottom: 10px;
    }
}

</style>
