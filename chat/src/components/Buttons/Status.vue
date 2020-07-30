<template>
    <div class="container">
        <div :class="statusShow"></div>  
    </div>
   
</template>

<script>
import ThreeDotButtonVue from './ThreeDotButton.vue'

export default {

    props: {
            statusOnline: String,
        },

    computed: {
        statusShow (statusOnline) {

            if(this.statusOnline == "true") {
                return "statusTrue"
            }

            if(this.statusOnline == "false") {
                return "statusFalse"   
            }  
        }
    }
}

</script>

<style lang="scss" scoped>

.container {
    display: flex;
    align-items: center;
}

.statusTrue {
        height: 8px;
        width: 8px;
        background: #70CC16;
        border-radius: 5px;
    }

.statusFalse{
    height: 8px;
    width: 8px;
    background: #666666;
    border-radius: 5px;

}
</style>