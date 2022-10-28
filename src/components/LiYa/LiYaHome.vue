<template>
  <div
      :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
      class="pt-5 p-st"
  >
    <div
        class="container"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
    >
      <div class="row align-items-center">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5">
          <div>
            <p v-html="description"></p>
          </div>
        </div>
      </div>

      <div class="row">
        <div
            v-for="(design, idx) in home_portfolio_design"
            :key="idx"
            :class="{ 'mt-4': idx === 0 ? true : true }"
            class="col-xl-12 col-bg-12 col-md-24 col-sm-24"
            style="position: relative;"
        >
          <!--            最多一個slide class="col-xl-12 col-bg-12 col-md-24 col-sm-24"-->
          <!--            最多兩個slide class="col-xl-6 col-bg-6 col-md-12 col-sm-12"-->
          <!--        class="col-xl-12 col-bg-12 col-md-24 col-sm-24"-->
          <!--        class="col-xl-6 col-bg-6 col-md-12 col-sm-12"-->
          <vueper-slides
              :dragging-distance="50"
              fixed-height="300px"
              :bullets="false"
              :autoplay="true"
              slide-content-outside="bottom"
              style="position: aboslute"
              @click.prevent="showDesignModalFn(design)"

          >
            <vueper-slide
                v-for="(slide, i) in design.pictures"
                :key="i"
                :image="slide.img"
            />
          </vueper-slides>
        </div>
      </div>

      <div class="home-title"
           :class="{ pgray: !nightMode, 'text-light': nightMode }">
        <p v-html="display_name"></p>
      </div>
      <div class="home-title"
           :class="{ pgray: !nightMode, 'text-light': nightMode }">
        <a>"____"</a>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../../LiYaInfo";
import Wave from "../helpers/Wave";

import {VueperSlides, VueperSlide} from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "LiYaHome",
  components: {
    VueperSlides,
    VueperSlide,
    Wave,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      home_portfolio_design: info.home_portfolio_design,
      picture: info.flat_picture,
      description: info.description,
      name: info.name,
      display_name: info.display_name,
    };
  },
  methods: {

  },
};
</script>

<style scoped>
.home-title {
  font-size: 32px;
  font-weight: 500;
}

img {
  max-width: 800px;
  max-height: 500px;
  margin-top: 80px;
  transform: rotateY(180deg);
}

@media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid rgb(205, 205, 205);
  }
}

.fa {
  font-size: 15px;
}

.btn {
  border-color: #759CC9;
  color: #759CC9;
}

.btn:hover {
  background-color: #759CC9;
  border-color: #759CC9;
  color: white;
}

.btn:focus {
  background-color: #759CC9;
  border-color: #759CC9;
  color: white;
}

.btn:focus {
  outline: none !important;
}

p {
  text-align: justify;
  font-weight: 400;
}

/* LEAVES */
</style>
