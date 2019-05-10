<template>
  <button :class="btnClass" v-on:click="onClick()">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    className: String,
    text: String,
    onClick: Function || null
  },
  computed: {
    btnClass: function() {
      return this.className ? `button ${this.className}` : `button`;
    }
  }
};
</script>

<style scoped lang="scss" src="./button.scss"></style>
