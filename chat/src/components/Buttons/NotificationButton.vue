<template>
    <div class="notification">
        <div class="notification_icon"></div>
    </div>
</template>

<script>

export default {

}

</script>

<style lang="scss" scoped>

.notification {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 14px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

    &_icon {
        width: 15px;
        height: 14px;
        background: url("../../assets/Icons/Notification.svg") center;
    }
}

</style>