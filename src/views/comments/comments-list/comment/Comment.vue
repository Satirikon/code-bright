<template>
  <div class="comment">
    <CommentForm
      v-if="isEdit"
      :on-submit="editComment"
      :default-title="title"
      :default-body="text"
    />
    <div v-if="!isEdit">
      <div class="comment-title">{{ title }}</div>
      <div class="comment-body">
        {{ text.substring(0, text.indexOf("\n")) }}
      </div>
    </div>
    <div class="action-btn-container">
      <Button
        class-name="edit"
        :text="`${isEdit ? 'Cancel edit' : 'Edit'}`"
        :on-click="() => ($data.isEdit = !$data.isEdit)"
      />
      <Button class-name="delete" text="Delete" :on-click="deleteComment" />
    </div>
    <router-link class="button-link" :to="`/comments/${id}`">
      <Button text="Read more" />
    </router-link>
  </div>
</template>

<script>
import Button from "@/components/comments-buttons/Button";
import CommentForm from "@/components/comment-form/CommentForm";

export default {
  name: "Comment",
  components: {
    Button,
    CommentForm
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
    },
    async editComment(formData) {
      try {
        await this.$store.dispatch("UPDATE_COMMENT", {
          id: this.id,
          ...formData
        });
        this.$data.isEdit = false;
        alert("Comment successfully updated.");
      } catch (e) {
        alert("Comment wasn't updated due to an error");
      }
    }
  },
  data() {
    return { isEdit: false };
  }
};
</script>

<style scoped lang="scss" src="./comment.scss"></style>
