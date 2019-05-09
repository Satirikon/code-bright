<template>
  <div class="comments-list">
    {{ comments }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CommentsList",
  computed: mapState({
    comments: state => state.comments.list
  }),
  mounted() {
    this.$store.dispatch("GET_COMMENTS");
    console.log(this.$store);
  }
};
</script>
