<template>
  <div id="home">
    <nav-bar class="home_div">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    export default {
        name: "Home",
      components: {NavBar}
    }
</script>

<style scoped>
.home_div{
  background-color: #111;
  color:white;
}
</style>
