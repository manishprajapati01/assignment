<template>
  <div class="row justify-content-center align-items-center mt-3">
    <div class="col-lg-8">
      <b-card img-src="img/images.jpg" img-alt="Card image" img-left class="mb-3 bg-secondary">
        <b-card-text>
          <h6>Welcome</h6>
          <h4>The best way to arrive in Athens</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button class="btn btn-success">Learn more</button>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>
<script>
import { BCard, BCardText, BCardGroup } from "bootstrap-vue";

export default {
  name: "arrive-in-athen",
  components: {
    BCard,
    BCardText,
    BCardGroup
  }
};
</script>
<style >
</style>