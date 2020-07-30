<template>
    <div class="facebook">
        <div class="facebook_icon"></div>
    </div>
</template>
<script>

export default {

}

</script>

<style lang="scss" scoped>

.facebook {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background: #FFFFFF;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        border: 1px solid #3577EF;
    }
    
    &:active {
        opacity: 0.5;
    }

    &_icon {
        width: 6px;
        height: 13px;
        background: url("../../assets/Icons/Social/Facebook.svg") center;
    }
}

</style>