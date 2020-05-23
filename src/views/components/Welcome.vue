<template>
  <section class="section pb-0 pt-4">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-8">
          <b-card no-body class="overflow-hidden">
            <div class="row welcome-information">
              <div class="col-lg-7 text-white pr-0">
                <b-card-body>
                  <b-card-text>
                    <h4 class="card-title mb-3">
                      <div class="round round-sm hollow white text-success mr-1">
                        <i class="fa fa-handshake-o"></i>
                      </div>Welcome
                    </h4>
                    <small>
                      <p class="font-weight-bold mb-0">Travel safe with Welcome Pickups</p>-
                      <strong>Hand sanitiser gel</strong> is available in our vehicles;
                      <br />-
                      <strong>Regular cleaning</strong> of all the car surfaces;
                      <br />- Extra
                      <strong>flexibility</strong> in changes or cancellation.
                    </small>
                  </b-card-text>
                </b-card-body>
              </div>

              <div class="col-lg-5">
                <b-card-img
                  src="img/man-cleaning-car.jpg"
                  height="100%"
                  alt="Image"
                  width="230px"
                  class="rounded-0"
                ></b-card-img>
              </div>
            </div>
          </b-card>
        </div>
      </div>

      <div class="row justify-content-center align-items-center mt-3">
        <div class="col-lg-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Magnis dis parturient montes nascetur ridiculus mus. Mi in nulla posuere sollicitudin aliquam ultrices. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Eu mi bibendum neque egestas congue. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Tincidunt id aliquet risus feugiat in ante metus dictum. Mauris commodo quis imperdiet massa tincidunt. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Consequat interdum varius sit amet. Nisl tincidunt eget nullam non nisi est. Dolor magna eget est lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div class="row justify-content-center mt-3 form-background p-5">
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-6">
              <img class="logo" src="img/brand/logo.png" />
            </div>
            <div class="col-lg-6" style="top:-48px">
              <img src="img/background/review.png" />
            </div>
          </div>
          <h4
            class="clr-white"
            style="margin-top:30%"
          >Book a trusted, English-speaking driver to pick you up at the same price as a regular taxi</h4>
          <a href="#!">Learn more</a>
        </div>
        <div class="col-lg-6">
          <form>
            <div class="input-group">
              <input type="text" class="form-control" value="Singapore Changi Airport (SIN)" />
              <i class="search-clear fa fa-times"></i>
            </div>
            <div class="input-group">
              <input type="text" class="form-control" value="Pan Pacific Singapore" />
              <i class="search-clear fa fa-times"></i>
            </div>
            <div class="form-row">
              <div class="mt-3 col-md-6">
                <label for="inputAddress" class="clr-white">Pickup Date</label>
                <input type="date" class="form-control" />
              </div>
              <div class="mt-3 col-md-6">
                <label for="inputAddress" class="clr-white">Time</label>
                <select class="form-control">
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                </select>
              </div>
              <div class="mt-3 col-md-6">
                <label for="inputAddress" class="clr-white">Passenger</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">-</span>
                  </div>
                  <input type="text" class="form-control text-center" value="1" />
                  <div class="input-group-append">
                    <span class="input-group-text">+</span>
                  </div>
                </div>
              </div>
              <div class="mt-3 col-md-6">
                <label for="inputAddress" class="clr-white">Luggage Pieces</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">-</span>
                  </div>
                  <input type="text" class="form-control text-center" value="1" />
                  <div class="input-group-append">
                    <span class="input-group-text">+</span>
                  </div>
                </div>
              </div>
              <div class="mt-3 col-lg-12 input-group">
                <button
                  type="button"
                  class="btn btn-1 btn-success"
                  style="width:100%; line-height: 30px;"
                >Book a taxi</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <mode-of-transports />
      <mrt-information />
      <mrt-convenience />
      <mrt-time-tables />
      <mrt-information-tips />
      <arrive-in-athen />
      <share-with-friends />
    </div>
  </section>
</template>
<script>
const DatePickers = () => import("./JavascriptComponents/DatePickers");
const ModeOfTransports = () => import("../../components/ModeOfTransports");
const MrtInformation = () => import("../../components/MrtInformation");
const MrtConvenience = () => import("../../components/MrtConvenience");
const MrtTimeTables = () => import("../../components/MrtTimeTables");
const MrtInformationTips = () => import("../../components/MrtInformationTips");
const ArriveInAthen = () => import("../../components/ArriveInAthen");
const ShareWithFriends = () => import("../../components/ShareWithFriends");

import { BCard, BCardText, BButton, BCardImg, BCardBody } from "bootstrap-vue";

export default {
  components: {
    DatePickers,
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
    ShareWithFriends
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
