<template>
  <div class="home">
    <HomeTop />
    <HomeAbout />
    <HomeComment />
  </div>
</template>

<script>
import HomeTop from "./home-top/HomeTop.vue";
import HomeAbout from "./home-about/HomeAbout.vue";
import HomeComment from "./home-comment/HomeComment.vue";

export default {
  name: "Home",
  components: {
    HomeTop,
    HomeAbout,
    HomeComment
  }
};
</script>
