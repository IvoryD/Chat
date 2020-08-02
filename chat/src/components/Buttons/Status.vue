<template>
    <div class="container">
        <div class="status" :class="statusShow"></div>  
    </div>
   
</template>

<script>
import ThreeDotButtonVue from './ThreeDotButton.vue'

export default {

    props: {
            statusOnline: Boolean,
        },

    computed: {
        statusShow () {

            return this.statusOnline ? "online" : "offline"

        }
    }
}

</script>

<style lang="scss" scoped>

.container {
    display: flex;
    align-items: center;
}

.status {
    height: 8px;
    width: 8px;
    border-radius: 5px;

    &.online {
        background: #70CC16;
    }

    &.offline {
        background: #666666;
    }
}

</style>