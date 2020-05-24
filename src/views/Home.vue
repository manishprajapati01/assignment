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