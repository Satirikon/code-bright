<template>
  <header>
    <div class="logo-container">
      <router-link to="/">
        <img src="@/assets/images/logo.png" />
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <anchor-router-link :to="{ name: 'home', hash: '#aboutUs' }">
          About Us
        </anchor-router-link>
      </li>
      <li>
        <anchor-router-link :to="{ name: 'home', hash: '#writeComment' }">
          Write Comment
        </anchor-router-link>
      </li>
      <li>
        <router-link to="/comments">Comments</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import AnchorRouterLink from "vue-anchor-router-link";

export default {
  name: "Header",
  components: {
    AnchorRouterLink
  }
};
</script>
<style scoped lang="scss" src="./header.scss"></style>
