<template>
  <div class="about-item">
    <img :src="img">
    <div class="title">{{title}}</div>
    <ul class="texts-list">
      <li v-for="(item, index) in texts" v-bind:key="index">
        &bullet; {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AboutItem",
  props: {
    img: String,
    title: String,
    texts: Array
  }
};
</script>

<style scoped lang="scss" src="./aboutItem.scss"></style>
