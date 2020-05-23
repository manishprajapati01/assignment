<template>
  <div>
    <welcome-banner />
    <section class="section pb-0 pt-4">
      <div class="container">
        <travel-safety-information />
        <pickup-form />
        <mode-of-transports />
        <mrt-information />
        <mrt-convenience />
        <mrt-time-tables />
        <mrt-information-tips />
        <arrive-in-athen />
        <share-with-friends />
      </div>
    </section>
  </div>
</template>
<script>
const ModeOfTransports = () => import("../components/home/ModeOfTransports");
const MrtInformation = () => import("../components/home/MrtInformation");
const MrtConvenience = () => import("../components/home/MrtConvenience");
const MrtTimeTables = () => import("../components/home/MrtTimeTables");
const MrtInformationTips = () =>
  import("../components/home/MrtInformationTips");
const ArriveInAthen = () => import("../components/home/ArriveInAthen");
const PickupForm = () => import("../components/home/PickupForm");
const TravelSafetyInformation = () =>
  import("../components/home/TravelSafetyInformation");

const WelcomeBanner = () => import("../components/home/WelcomeBanner");
const ShareWithFriends = () => import("../components/shared/ShareWithFriends");

import { BCard, BCardText, BButton, BCardImg, BCardBody } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BCardText,
    BButton,
    BCardImg,
    BCardBody,
    ModeOfTransports,
    MrtInformation,
    MrtConvenience,
    MrtTimeTables,
    MrtInformationTips,
    ArriveInAthen,
    ShareWithFriends,
    PickupForm,
    TravelSafetyInformation,
    WelcomeBanner
  }
};
</script>
<style>
.logo {
  height: 30px;
}
.h-50 {
  height: 50px !important;
}
.clr-white {
  color: #ddd !important;
}
.checked {
  color: #71eeb8;
}
.share-article i {
  color: #c7c7c7;
  font-size: 1.5em;
}
.form-control-clear {
  z-index: 10;
  pointer-events: auto;
  cursor: pointer;
}

.search-clear {
  position: absolute;
  right: 5px;
  top: 0;
  bottom: 0;
  height: 14px;
  margin: auto;
  font-size: 14px;
  cursor: pointer;
  color: #ccc;
}
.welcome-information {
  background-color: #44c27c;
}
.welcome-information .card-title {
  color: #fff;
  font-size: 1rem;
}

/* i.fa {
  display: inline-block;
  border-radius: 60px;
  box-shadow: 0px 0px 2px #ccc;
  padding: 0.5em 0.4em;
  font-size: 1rem;
} */
</style>
