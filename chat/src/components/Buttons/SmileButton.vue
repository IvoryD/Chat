<template>
    <div class="smile">
        <div class="smile_icon"></div>
    </div>
</template>

<script>

export default {

}

</script>

<style lang="scss" scoped>

.smile {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 20px;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }

    &_icon {
        width: 22px;
        height: 20px;
        background: url("../../assets/Icons/Smile.svg") center;
    }
}

</style>