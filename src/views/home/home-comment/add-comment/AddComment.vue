<template>
  <form class="add-comment" v-on:submit="add">
    <input class="field" v-model="title" placeholder="Title" />
    <textarea
      class="field text"
      v-model="body"
      placeholder="Your comment"
    ></textarea>
    <button type="submit" class="button">Send</button>
  </form>
</template>

<script>
export default {
  name: "AddComment",
  data() {
    return {
      title: "",
      body: ""
    };
  },
  methods: {
    add(e) {
      e.preventDefault();
      const { title, body } = this.$data;
      this.$store.dispatch("ADD_COMMENT", { title, body });
    }
  }
};
</script>

<style scoped lang="scss" src="./addComment.scss"></style>
