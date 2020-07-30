<template>
    <div class="main">

        <ChatHeader :channelName="channelName"
                    :channelCount="channelCount"
        ></ChatHeader>

        <div class="chat scrolls">

            <div class="container-message">

                <div class="container-image">
                    <div class="profile-image"></div>
                </div>
    

                <div class="cluster">
                    <div class="containerNameTime">
                        <div class="profile-name">Jeshua Stout</div>
                        <div class="message-time"> 6:38 PM</div>
                    </div>

                    <div class="textMessage">
                        Издательство Private Division подписало контракты ещё с тремя студиями, включая разработчиков Ori Дочерняя компания Take-Two профинансирует 
                        разработку трёх игр — от Moon Studios (две части Ori), от League of Geeks (стратегическая игра Armello) и от Roll7 (сайд-скроллер OlliOlli). 
                        Moon Studios выпустит экшен-RPG, а вот о проектах других студий практически ничего неизвестно. У League of Geeks это будет новая IP, а Roll7 
                        продолжат традиции геймплея OlliOlli. Эти игры выйдут нескоро, поскольку издатель пока не готов оглашать даже названия, и релиз их точно 
                        состоится не раньше начала 2022 фискального года (начинается 1 апреля 2021-го). По поводу платформ данных тоже нет, но, возможно, 
                        следующая игра Moon Studios выйдет и на PS5. На текущий момент Private Division трудно назвать успешной компанией. На финансово состоявшуюся 
                        The Outer Worlds она успела выпустить сомнительную Ancestors: The Humankind Odyssey и провалившуюся Disintegration. Кроме того, компания 
                        издаст сиквел Kerbal Space Prorgam, у которого уже возникли первые проблемы.
                    </div>
                </div>

            </div>

        </div>
        
        <ChatFooter :channelName="channelName"
        ></ChatFooter>

    </div>
</template>

<script>

import ChatHeader from "@/components/Chat/ChatHeader.vue";
import ChatFooter from "@/components/Chat/ChatFooter.vue";
import NavigationVue from '../components/Navigation/Navigation.vue';

import axios from 'axios'

export default {

    props: {
        channelId: String,
    },
    
    components: {
        ChatHeader,
        ChatFooter,
    },

    mounted() {
        this.fetchChannel()
    },   

    methods:{

        fetchChannel(){
            let vm = this
            axios
                .get('http://localhost:3000/channels?id=' + vm.channelId)    
                .then(response => { 
                    vm.channel = response.data[0]
                    vm.fetchMessage()
                })
        },

        fetchMessage(){
            let vm = this
            axios
                .get('http://localhost:3000/messages')
                .then(response =>{})
        }
    },

    data() {
        return {
            channel: {}
        }
    },

    computed:{
        channelName() {
            return this.channel.name
        },

        channelCount() {
            return this.channel.countUsers
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

.container-image{
    width: 32px;
}

.main {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #FFFFFF;  
}

.chat {
    background: #FFFFFF;
    height: 100%;
    padding: 25px;
    margin-right: 6px;

    >:not(:last-child){
        margin-bottom: 10px;
    }
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
    background: red;
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

.cluster{
    display: flex;
    flex-direction: column;
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
</style>
