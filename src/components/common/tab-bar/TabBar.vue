<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    #tab-bar{
        /*设置弹性布局*/
        display: flex;
        background-color: #f6f6f6;
        /*位移到底部*/
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;

        box-shadow: 0px -2px 1px rgba(10,10,10,0.1);
    }
</style>