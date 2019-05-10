<template>
  <form class="add-comment" v-on:submit="add" novalidate="true">
    <input
      class="field"
      v-model="title"
      v-validate="'required'"
      name="title"
      placeholder="Title"
    />
    <div class="error">{{ errors.first("title") }}</div>
    <textarea
      class="field text"
      v-model="body"
      v-validate="'required'"
      name="body"
      placeholder="Your comment"
    ></textarea>
    <div class="error">{{ errors.first("body") }}</div>
    <button type="submit" class="button">Send</button>
  </form>
</template>

<script>
export default {
  name: "AddComment",
  props: {
    defaultTitle: String,
    defaultBody: String,
    onSubmit: Function
  },
  data() {
    return {
      title: this.defaultTitle || "",
      body: this.defaultBody || ""
    };
  },
  methods: {
    async add(e) {
      e.preventDefault();
      await this.$validator.validateAll();
      if (this.$validator.errors.items.length) return;
      const { title, body } = this.$data;
      await this.onSubmit({ title, body });
      this.$data.title = this.$data.body = "";
      await this.$validator.reset();
    }
  }
};
</script>

<style scoped lang="scss" src="./commentForm.scss"></style>
