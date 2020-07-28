<template>
    <button class="message">
        Message
    </button>
</template>

<script>

export default {

}

</script>

<style lang="scss" scoped>

.message {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
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

</style>