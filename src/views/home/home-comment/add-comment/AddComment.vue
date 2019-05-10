<template>
  <form class="add-comment" v-on:submit="add" @submit="checkForm" action="">
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
    },
    checkForm(e) {
      const { title, body } = this.$data;
      if (title && body) {
        return true;
      }

      // this.errors = [];

      if (!title) {
        this.errors.push("Set the title");
      }
      if (!body) {
        this.errors.push("Set comment text");
      }
      // console.log(this.errors);
      e.preventDefault();
    }
  }
};
</script>

<style scoped lang="scss" src="./addComment.scss"></style>
