<template>
    <div class="favorite-channel">
        <div class="favorite-channel_icon"></div>
    </div>
</template>

<script>

export default {

}

</script>

<style lang="scss" scoped>

.favorite-channel{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 14px;
    cursor: pointer;

    &_icon{
        width: 15px;
        height: 14px;
        background: url("../../assets/Icons/Favorite.svg") center;
    }
}

</style>