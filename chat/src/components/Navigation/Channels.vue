<template>
  <div>

      <header>
          <p>CHANNELS</p>
          <p class="count">{{countChannels}}</p>
      </header>

      <ul>
          <li @click="goToChannel(channel)" v-for="(channel, i) in channels" :key="i"
          ># {{ channel.name }}</li>
      </ul>
      
  </div>
</template>

<script>

import axios from 'axios'
export default {
    methods:{
        goToChannel(channel){
            this.$router.push({ 
                name: 'Chat', 
                params: {
                    "channelId": channel.id + "",
                } 
            })
                .catch(()=>{})
        }
    },

    computed: {
        countChannels () {
            return this.channels.length || 0
        }
    },

    data() {
        return {
            channels: [],
        }
    },

    mounted() {
    let vm = this
    axios
        .get('http://localhost:3000/channels')
        .then(response => {
            vm.channels = response.data
                if (vm.channels.length) {
                vm.goToChannel(vm.channels[0])
            }
        });
    }
}

</script>

<style lang="scss" scoped>

header {
    display: flex;
    flex-wrap:nowrap;
    justify-content: space-between;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #919191;
    margin-bottom: 14px;
}

ul{
    :last-child {
        margin-bottom: 18px;
    }
}

li {
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    color: #B5B5B5;

    &:hover{
        color: #FFFFFF;
        background: rgb(105, 105, 109);
    }
}



</style>
