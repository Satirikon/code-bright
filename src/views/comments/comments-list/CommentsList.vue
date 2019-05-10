<template>
  <div class="wrapper">
    <div class="title">
      Comments
    </div>
    <div class="comments-list">
      <div v-for="item in comments" v-bind:key="item.id">
        <Comment :title="item.title" :text="item.body" :id="item.id" />
      </div>
    </div>
    <HomepageBlock />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Comment from "./comment/Comment";
import HomepageBlock from "@/components/homepage-back/HomepageBack";

export default {
  name: "CommentsList",
  components: {
    Comment,
    HomepageBlock
  },
  computed: mapState({
    comments: state => state.comments.list
  }),
  mounted() {
    this.$store.dispatch("GET_COMMENTS");
  }
};
</script>

<style scoped lang="scss" src="./commentsList.scss"></style>
