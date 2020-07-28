<template>
    <div class="main">

        <ChatHeader :channelName="channelName"
                    :channelCount="channelCount"
        ></ChatHeader>

        <div class="chat">

        </div>
        
        <ChatFooter :channelName="channelName"
        ></ChatFooter>

    </div>
</template>

<script>

import ChatHeader from "@/components/Chat/ChatHeader.vue";
import ChatFooter from "@/components/Chat/ChatFooter.vue";
import NavigationVue from '../components/Navigation/Navigation.vue';

export default {

    props:{
        channelId: Number,
        channelName: String,
        channelCount: Number,
    },
    
    components:{
        ChatHeader,
        ChatFooter,
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

.chat{
    background: #FFFFFF;
    height: 100%;
}

</style>
