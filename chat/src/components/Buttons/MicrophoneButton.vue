<template>
    <div class="microphone">
        <div class="microphone_icon"></div>
    </div>
</template>

<script>

export default {

}

</script>

<style lang="scss" scoped>

.microphone {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 20px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

    &_icon {
        width: 15px;
        height: 20px;
        background: url("../../assets/Icons/Microphone.svg") center;
    }
}

</style>