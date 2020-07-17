<template>
    <tab-bar>
        <tab-bar-item path="/home" active-color="red">
            <img slot="item-icon" src="~assets/img/tabbar/main.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/main-active.svg" alt="">
            <div slot="item-text"> 首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" active-color="red">
            <img slot="item-icon" src="~assets/img/tabbar/fenlei.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/fenlei-active.svg" alt="">
            <div slot="item-text"> 分类</div>
        </tab-bar-item>
        <tab-bar-item path="cart">
            <img slot="item-icon" src="~assets/img/tabbar/shop-car.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/shop-car-active.svg" alt="">
            <div slot="item-text"> 购物车</div>
        </tab-bar-item>
        <tab-bar-item path="profile">
            <img slot="item-icon" src="~assets/img/tabbar/user.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/user-active.svg" alt="">
            <div slot="item-text"> 我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "components/common/tab-bar/TabBar";
    import TabBarItem from "components/common/tab-bar/TabBarItem";
    export default {
        name: "MainTabBar",
        components: {TabBarItem, TabBar},
    }
</script>

<style scoped>

</style>
