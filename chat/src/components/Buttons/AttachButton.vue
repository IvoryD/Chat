<template>
    <div class="attach">
        <div class="attach_icon"></div>
    </div>
</template>

<script>

export default {

}

</script>

<style lang="scss" scoped>

.attach {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 20px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
    
    &:active {
        opacity: 0.5;
    }

    &_icon {
        width: 14px;
        height: 20px;
        background: url("../../assets/Icons/Attach.svg") center;
    }
}

</style>