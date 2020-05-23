<template>
  <div>
    <div class="d-block mb-3">Pickup date</div>
    <base-input addon-left-icon="fa fa-calendar-o ">
      <flat-picker
        slot-scope="{focus, blur}"
        @on-open="focus"
        @on-close="blur"
        :config="{allowInput: true}"
        class="form-control datepicker"
        v-model="dates.simple"
      ></flat-picker>
    </base-input>
  </div>
</template>
<script>
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
  name: "date-pickers",
  components: {
    flatPicker
  },
  data() {
    return {
      dates: {
        simple: "17-07-2018",
        range: "2018-07-17 to 2018-07-19"
      }
    };
  }
};
</script>
