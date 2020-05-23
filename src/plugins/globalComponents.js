import BaseInput from "../components/BaseInput";
import Icon from "../components/Icon";
import Rating from "../components/Rating";

export default {
  install(Vue) {
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(Icon.name, Icon);
    Vue.component(Rating.name, Rating);
  }
};
