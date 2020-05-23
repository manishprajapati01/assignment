<template>
  <div>
    <div class="row justify-content-center align-items-center mt-3">
      <div class="col-lg-8">
        <p>
          <span class="round round-lg hollow light mr-2">
            <i class="fa fa-subway" aria-hidden="true"></i>
          </span> How to get from Singapore Airport to city centre by metro (MRT)
        </p>
        <p
          class="mt-3"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Magnis dis parturient montes nascetur ridiculus mus. Mi in nulla posuere sollicitudin aliquam ultrices. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Eu mi bibendum neque egestas congue. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Tincidunt id aliquet risus feugiat in ante metus dictum. Mauris commodo quis imperdiet massa tincidunt. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Consequat interdum varius sit amet. Nisl tincidunt eget nullam non nisi est. Dolor magna eget est lorem ipsum dolor sit amet.</p>
        <h4>How much is the metro from Singapore Airport to city centre?</h4>
        <p
          class="mt-3"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Magnis dis parturient montes nascetur ridiculus mus. Mi in nulla posuere sollicitudin aliquam ultrices. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Eu mi bibendum neque egestas congue. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Tincidunt id aliquet risus feugiat in ante metus dictum. Mauris commodo quis imperdiet massa tincidunt. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Consequat interdum varius sit amet. Nisl tincidunt eget nullam non nisi est. Dolor magna eget est lorem ipsum dolor sit amet.</p>
      </div>
    </div>

    <div class="row justify-content-center align-items-center mt-3">
      <div class="col-lg-8">
        <b-card-group>
          <b-card>
            <b-card-text>
              <div class="d-flex">
                <div class="text-uppercase">Cost</div>
                <div class="text-uppercase ml-5">Trip duration</div>
              </div>
              <div class="d-flex">
                <div class="text-uppercase">
                  <h4>
                    <i class="fa fa-eur" aria-hidden="true"></i>1.20
                  </h4>
                </div>
                <div class="text-uppercase ml-4">
                  <h4 class="pl-2">30 Min.</h4>
                </div>
              </div>
              <div class="mt-2">There can be up to a 13 mintue wait for the metro</div>
            </b-card-text>
          </b-card>

          <b-card>
            <b-card-text>
              <div class="d-flex mb-2">
                <div class="text-uppercase">Convenience</div>
                <div class="ml-auto">
                  <rating />
                </div>
              </div>
              <div class="d-flex mb-2">
                <div class="text-uppercase">Safety</div>
                <div class="ml-auto">
                  <rating />
                </div>
              </div>
              <div class="d-flex">
                <div class="text-uppercase">Value for money</div>
                <div class="ml-auto">
                  <rating />
                </div>
              </div>
            </b-card-text>
          </b-card>
        </b-card-group>

        <b-card-group>
          <b-card>
            <b-card-text>
              <i class="fa fa-info-circle" aria-hidden="true"></i>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium.
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </div>

    <div class="row justify-content-center align-items-center mt-4">
      <div class="col-lg-8">
        <h4>Where do I get it from?</h4>
        <p
          class="mt-3"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Magnis dis parturient montes nascetur ridiculus mus. Mi in nulla posuere sollicitudin aliquam ultrices. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Eu mi bibendum neque egestas congue. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Tincidunt id aliquet risus feugiat in ante metus dictum. Mauris commodo quis imperdiet massa tincidunt. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Consequat interdum varius sit amet. Nisl tincidunt eget nullam non nisi est. Dolor magna eget est lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { BCard, BCardText, BCardGroup } from "bootstrap-vue";

export default {
  name: "mrt-information",
  components: {
    BCard,
    BCardText,
    BCardGroup
  }
};
</script>