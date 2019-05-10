<template>
  <div class="comment">
    <div class="comment-title">{{ title }}</div>
    <div class="comment-body">{{ text.substring(0, text.indexOf("\n")) }}</div>
    <router-link class="button-link" :to="`/comments/${id}`">
      <Button />
    </router-link>
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
  }
};
</script>

<style scoped lang="scss" src="./comment.scss"></style>
