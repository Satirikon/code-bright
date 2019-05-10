<template>
  <div class="comment">
    <div class="comment-title">{{ title }}</div>
    <div class="comment-body">{{ text.substring(0, text.indexOf("\n")) }}</div>
    <router-link class="button-link" :to="`/comments/${id}`">
      <Button text="Read more" />
    </router-link>
    <div class="action-btn-container">
      <Button class-name="edit" text="Edit" />
      <Button class-name="delete" text="Delete" :on-click="deleteComment" />
    </div>
  </div>
</template>

<script>
import Button from "./button/Button";

export default {
  name: "Comment",
  components: {
    Button
  },
  props: {
    title: String,
    text: String,
    id: String
  },
  methods: {
    async deleteComment() {
      const isDelete = confirm("Are yot sure you want to delete this comment?");
      if (!isDelete) return;
      await this.$store.dispatch("DELETE_COMMENT", this.id);
    }
  }
};
</script>

<style scoped lang="scss" src="./comment.scss"></style>
