import BaseInput from "../components/shared/BaseInput";
import Rating from "../components/shared/Rating";
import DatePickers from "../components/shared/DatePickers";

export default {
  install(Vue) {
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(Rating.name, Rating);
    Vue.component(DatePickers.name, DatePickers);
  }
};
