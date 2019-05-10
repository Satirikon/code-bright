<template>
  <div class="active-comment">
    <router-link to="/comments">
      <button class="to-comments-button">
        <img src="@/assets/images/arrow.png" alt="Image not found" />&nbsp;<span
          class="btn-text"
          >Back to comments</span
        >
      </button>
    </router-link>
    <div class="comment" v-if="comment">
      <div class="title">{{ comment.title }}</div>
      <div class="text" v-html="comment.body.replace(/\n/, '<br/><br/>')"></div>
    </div>
    <HomepageBack />
  </div>
</template>

<script>
import { mapState } from "vuex";
import HomepageBack from "@/components/homepage-back/HomepageBack";

export default {
  name: "ActiveComment",
  components: {
    HomepageBack
  },
  computed: mapState({
    comment: state => state.comments.active
  }),
  mounted() {
    this.$store.dispatch("GET_COMMENT", this.$route.params.id);
  }
};
</script>

<style scoped lang="scss" src="./activeComment.scss"></style>
