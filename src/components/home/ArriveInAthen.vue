<template>
  <div class="row justify-content-center align-items-center mt-3">
    <div class="col-lg-7">
      <b-card img-src="img/images.jpg" img-alt="Card image" img-left class="mb-3 bg-secondary">
        <b-card-text>
          <span class="round round-sm round-icon light text-muted mr-1">
            <i class="fa fa-handshake-o"></i>
          </span>
          <span class="text-muted h6 ml-1">Welcome</span>
          <h5 class="font-weight-bold mt-2">The best way to arrive in Athens</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
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