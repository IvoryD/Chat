<template>
    <div class="settings-button_container">
        <button class="settings-button">
            <div class="settings-button_icon"></div>
        </button>
    </div>
</template>

<script>

export default {

}

</script>

<style lang="scss" scoped>

.settings-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 15px;
    border: none; 
    background: none;
    padding: 0px;
    cursor: pointer;
    outline: none;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }

    &_icon {
        width: 16px;
        height: 15px;
        background: url("../../assets/Icons/Settings.svg") center;
    }
}


</style>