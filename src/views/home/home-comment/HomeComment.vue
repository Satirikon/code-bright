<template>
  <div class="home-comment" id="writeComment">
    <div class="title">
      Write comment
      <hr class="pointer" />
    </div>
    <div class="form-wrapper"><AddComment /></div>
  </div>
</template>

<script>
import AddComment from "./add-comment/AddComment.vue";

export default {
  name: "HomeComment",
  components: {
    AddComment
  }
};
</script>

<style scoped lang="scss" src="./homeComment.scss"></style>
