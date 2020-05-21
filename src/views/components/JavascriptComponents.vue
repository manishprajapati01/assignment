<template>
  <section class="section section-components">
    <div class="container">
      <h3 class="h4 text-success font-weight-bold mb-4">Tabs</h3>
      <div class="row row-grid justify-content-between">
        <div class="col-lg-5"></div>
        <div class="col-lg-5">
          <h3 class="h4 text-success font-weight-bold mb-5">Labels</h3>
          <badge type="primary" class="text-uppercase">Primary</badge>
          <badge type="success" class="text-uppercase">Success</badge>
          <badge type="danger" class="text-uppercase">Danger</badge>
          <badge type="warning" class="text-uppercase">Warning</badge>
          <badge type="info" class="text-uppercase">Info</badge>
        </div>
      </div>
      <h3 class="mt-lg mb-4">
        <span>Alerts</span>
      </h3>Datepicker
      <h3 class="h4 text-success font-weight-bold mt-md mb-4">Datepicker</h3>
      <date-pickers></date-pickers>
      <!-- Tooltips and Popovers -->
      <h3 class="h4 text-success font-weight-bold mt-md mb-4">Tooltips &amp; Popovers</h3>
      <tooltips></tooltips>
    </div>
  </section>
</template>
<script>
const Tooltips = () => import("./JavascriptComponents/Tooltips");
const DatePickers = () => import("./JavascriptComponents/DatePickers");
import Images from "./JavascriptComponents/Images";
import Typography from "./JavascriptComponents/Typography";

export default {
  components: {
    DatePickers,
    Images,
    Typography,
    Tooltips
  }
};
</script>
<style>
</style>
