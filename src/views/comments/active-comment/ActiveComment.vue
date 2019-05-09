<template>
  <div class="active-comment">
    Active-comment
    {{ comment }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ActiveComment",
  computed: mapState({
    comment: state => state.comments.active
  }),
  mounted() {
    this.$store.dispatch("GET_COMMENT", this.$route.params.id);
  }
};
</script>
