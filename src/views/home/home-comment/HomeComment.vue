<template>
  <div class="home-comment" id="writeComment">
    <div class="title">
      Write comment
      <hr class="pointer" />
    </div>
    <div class="form-wrapper">
      <AddComment :on-submit="addNewComment" />
    </div>
  </div>
</template>

<script>
import AddComment from "../../../components/comment-form/CommentForm.vue";

export default {
  name: "HomeComment",
  components: {
    AddComment
  },
  methods: {
    async addNewComment(formData) {
      try {
        await this.$store.dispatch("ADD_COMMENT", formData);
        alert("Comment successfully added.");
      } catch (e) {
        alert("Comment wasn't added due to an error");
      }
    }
  }
};
</script>

<style scoped lang="scss" src="./homeComment.scss"></style>
