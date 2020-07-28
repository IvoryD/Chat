<template>
    <button class="options">
        <div class="triangle"></div>
    </button>
</template>

<script>

export default {

}

</script>

<style lang="scss" scoped>

.options {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 5px;
    background: #3577EF;
    color:#FFFFFF;
    border: none; 
    padding: 0px;
    cursor: pointer;
    outline: none;

    &:hover {
        opacity: 0.8;
    }
    
    &:active {
        opacity: 0.5;
    }
}

.triangle{
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 6px solid #FFFFFF;
    transform: rotate(270deg);
}
</style>