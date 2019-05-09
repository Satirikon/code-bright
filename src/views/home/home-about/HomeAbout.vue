<template>
  <div class="home-about" id="aboutUs">
    <AboutItem
      :img="whoWeAreIcon"
      :title="whoWeAreTitle"
      :texts="whoWeAreTexts"
    />
    <AboutItem
      :img="whatWeDoIcon"
      :title="whatWeDoTitle"
      :texts="whatWeDoTexts"
    />
    <AboutItem
      :img="technologyIcon"
      :title="technologyTitle"
      :texts="technologyTexts"
    />
  </div>
</template>

<script>
import AboutItem from "./about-item/AboutItem";
import whoWeAreIcon from "@/assets/images/about1.png";
import whatWeDoIcon from "@/assets/images/about2.png";
import technologyIcon from "@/assets/images/about3.png";

export default {
  name: "HomeAbout",
  components: {
    AboutItem
  },
  data() {
    return {
      whoWeAreIcon,
      whatWeDoIcon,
      technologyIcon,
      whoWeAreTitle: "Who we are",
      whatWeDoTitle: "What we do",
      technologyTitle: "Technology",
      whoWeAreTexts: [
        "It is a long established fact that a reader will be distracted",
        "The readable content of a page when looking at its layout",
        "The point of using Lorem Ipsum",
        "As opposed to using 'Content here, content here'."
      ],
      whatWeDoTexts: [
        "Many desktop publishing packages and web page",
        "There are many variations of passages of Lorem Ipsum available, but the majority have ",
        "Various versions have evolved over the years, sometimes by accident"
      ],
      technologyTexts: [
        "The point of using Lorem Ipsum",
        "As opposed to using 'Content here, content here'",
        "Contrary to popular belief, Lorem Ipsum is not simply random text",
        "A Latin professor at Hampden‑Sydney College in Virginia"
      ]
    };
  }
};
</script>

<style scoped lang="scss" src="./homeAbout.scss"></style>
