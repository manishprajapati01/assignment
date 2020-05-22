import BaseButton from "../components/BaseButton";
import BaseInput from "../components/BaseInput";
import Icon from "../components/Icon";

export default {
  install(Vue) {
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(Icon.name, Icon);
  }
};
