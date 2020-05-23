<template>
  <div class="rating">
    <b-form-rating variant="success" inline class="ml-2" v-model="value" no-border size="sm"></b-form-rating>
  </div>
</template>

<script>
import { BFormRating } from "bootstrap-vue";

export default {
  name: "rating",
  components: {
    BFormRating
  },
  data() {
    return {
      value: 3
    };
  }
};
</script>
