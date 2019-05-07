<template>
  <div class="home">
    Home
    <HomeTop />
    <HomeAbout />
    <HomeComment />
  </div>
</template>

<script>
import HomeTop from "@/components/home-top/HomeTop.vue";
import HomeAbout from "@/components/home-about/HomeAbout.vue";
import HomeComment from "@/components/home-comment/HomeComment.vue";

export default {
  name: "Home",
  components: {
    HomeTop,
    HomeAbout,
    HomeComment
  }
};
</script>
