<template>
  <div>
    <div class="row justify-content-center align-items-center">
      <div class="col-lg-7">
        <b-card no-body class="overflow-hidden rounded-0">
          <div class="row bg-success">
            <div class="col-lg-7 text-white pr-0">
              <b-card-body>
                <b-card-text class="text-white">
                  <h4 class="card-title mb-3">
                    <div class="round round-sm round-icon white text-success mr-1">
                      <i class="fa fa-handshake-o"></i>
                    </div>Welcome
                  </h4>
                  <small>
                    <p class="font-weight-bold mb-0 text-white">Travel safe with Welcome Pickups</p>-
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
      <div class="col-lg-7">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Magnis dis parturient montes nascetur ridiculus mus. Mi in nulla posuere sollicitudin aliquam ultrices. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Eu mi bibendum neque egestas congue. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Tincidunt id aliquet risus feugiat in ante metus dictum. Mauris commodo quis imperdiet massa tincidunt. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Consequat interdum varius sit amet. Nisl tincidunt eget nullam non nisi est. Dolor magna eget est lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </div>
</template>
<script>
import { BCard, BCardText, BButton, BCardImg, BCardBody } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BCardText,
    BButton,
    BCardImg,
    BCardBody
  }
};
</script>