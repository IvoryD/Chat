<template>

    <div class="container">
        <div class="arrow arrow-bottom" @click="onClick"></div>  
    </div>

</template>

<script>

export default {
    

    methods:{
    onClick(){
        this.$emit("click")
    }
},

}

</script>

<style lang="scss" scoped>

 .arrow {
    width: 10px;
    height: 10px;
    border-top: 1px solid #919191;
    border-right: 1px solid #919191;
    margin-right: 3px;
    cursor: pointer;

    &:hover {
        border-top: 2px solid #3577EF;
        border-right: 2px solid #3577EF;
    }

        &-bottom {
            transform: rotate(135deg);
        }
    }

</style>