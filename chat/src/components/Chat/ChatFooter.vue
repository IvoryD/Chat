<template>

    <div class="footer">

        <AttachButton></AttachButton>
        
        <MicrophoneButton></MicrophoneButton>

        <div class="footer-container-message">
            <input type="input" 
                class="input" 
                tabindex="0" 
                :placeholder="'Message in #' + channelName"
                @input="emitInput($event)" 
                v-on:keyup.enter="emitEnter"
                v-model="message"
                />

            <SmileButton></SmileButton>
        </div>

    </div>

</template>

<script>

import AttachButton from "@/components/Buttons/AttachButton.vue";
import MicrophoneButton from "@/components/Buttons/MicrophoneButton.vue";
import SmileButton from "@/components/Buttons/SmileButton.vue";

import moment from 'moment'

export default {

    data(){
        return {
            message: ""
        }
    },

    props: {
        channelName: String,
    },

    components:{
        AttachButton,
        MicrophoneButton,
        SmileButton,
    },

    methods:{
        emitInput(event){
            this.$emit('input', event.target.value)
        },

        emitEnter(){
            this.$emit('enter')
            this.message = ""
        }
    }

}

</script>

<style lang="scss" scoped>

.footer {
    display: flex;
    align-items: center;
    padding: 25px;
    border-top: 1px solid rgba($color: #000000, $alpha: 0.24);

    :not(:last-child){
        margin-right: 20px;
    }

    &-container-message{
        display: flex;
        align-items: center;
        width: 100%;
    }
}

.input {
    flex:2;
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
    display: block;
}

</style>