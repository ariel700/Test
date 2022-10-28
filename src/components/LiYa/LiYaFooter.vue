<template>
  <div class="bg-secondary">
    <div class="container py-3">
      <div class="row pt-1 align-items-center">
        <div
            class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow"
            style="color: white;"
        >
          <h5 class="title2">地址：桃園市新屋區青田路83之19號</h5>
          <h5 class="title2">電話：(03)4902142</h5>
        </div>

        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <div class="text-center">
            <span>© 2022 Copyright: LIYA ENGINEERING LTD.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../../LiYaInfo";

export default {
  name: "LiYaFooter",
  data() {
    return {
      linkedin: info.links.linkedin,
      github: info.links.github,
      behance: info.links.behance,
      resume: info.links.resume,
    };
  },
  methods: {
    open(link) {
      switch (link) {
        case "linkedin":
          window.open(this.linkedin, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
        case "behance":
          window.open(this.behance, "_blank");
          break;
        case "resume":
          window.open(this.resume, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>
span {
  font-weight: 500;
}

.btn {
  border-color: white;
  color: white;
}

.btn:hover {
  background-color: white;
  border-color: white;
  color: gray;
}

.btn:focus {
  background-color: white;
  border-color: white;
  color: gray;
}

@media screen and (max-width: 580px) {
  .pbelow {
    padding-bottom: 20px;
    text-align: center;
  }
}
</style>
