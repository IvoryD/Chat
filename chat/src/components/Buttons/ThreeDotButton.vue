<template>
    <div class="three-dot">
        <div class="three-dot_icon"></div>
    </div>
</template>

<script>

export default {

}

</script>

<style lang="scss" scoped>

.three-dot{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7px;
    height: 17px;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

    &_icon{
        width: 7px;
        height: 17px;
        background: url("../../assets/Icons/ThreeDot.svg") center;
    }
}

</style>