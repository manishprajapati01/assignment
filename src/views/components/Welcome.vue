<template>
  <section class="section section-components pb-0" id="section-components">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-8">
          <b-card no-body class="overflow-hidden">
            <div class="row welcome-information">
              <div class="col-lg-7 text-white pr-0">
                <b-card-body>
                  <b-card-text>
                    <h4 class="card-title mb-0">
                      <i class="fa fa-handshake-o"></i>
                      Welcome
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

      <!-- <div class="row justify-content-center align-items-center">
        <div class="col-lg-7">
          <div class="card">
            <div class="card-horizontal">
              <div class="card-body">
                <h4 class="card-title">Welcome</h4>
                <p class="card-text"></p>
              </div>
              <div class="img-square-wrapper">
                <img class src="img/man-cleaning-car.jpg" width="230px" height="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>-->

      <div class="row justify-content-center align-items-center mt-3">
        <div class="col-lg-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Magnis dis parturient montes nascetur ridiculus mus. Mi in nulla posuere sollicitudin aliquam ultrices. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Eu mi bibendum neque egestas congue. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Tincidunt id aliquet risus feugiat in ante metus dictum. Mauris commodo quis imperdiet massa tincidunt. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Consequat interdum varius sit amet. Nisl tincidunt eget nullam non nisi est. Dolor magna eget est lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div class="row justify-content-center align-items-center mt-3 form-background p-5">
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-6">
              Logo
            </div>
            <div class="col-lg-6">
              Rating
            </div>
          </div>
          Book a trusted, English-speaking driver to pick you up at the same price as a regular taxi
          <a
            href="#!"
          >Learn more</a>
        </div>
        <div class="col-lg-6">
          <form>
            <div class="input-group">
              <input
                type="text"
                class="form-control form-control-sm"
                value="Singapore Changi Airport (SIN)"
              />
              <i class="search-clear fa fa-times"></i>
            </div>
            <div class="input-group mt-1">
              <input type="text" class="form-control form-control-sm" value="Pan Pacific Singapore" />
              <i class="search-clear fa fa-times"></i>
            </div>
            <div class="form-row">
              <div class="form-group mt-1 col-md-6">
                <date-pickers></date-pickers>
              </div>
              <div class="form-group mt-1 col-md-6">
                <label for="inputAddress">Time</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mt-3">
        <div class="col-lg-8">
          <p class="font-weight-bold">Comparison of the options</p>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mt-3">
        <div class="col-lg-8">
          <div class="bg-secondary font-weight-bold text-uppercase p-3 text-center" role="alert">
            price for
            <i class="fa fa-minus ml-3 mr-3" aria-hidden="true"></i>
            2 passengers
            <i class="fa fa-plus ml-3" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-8">
          <table class="table table-responsive" style="width:100%">
            <thead>
              <tr>
                <th class="pl-0" scope="col" style="width: 30em;">OPTION</th>
                <th scope="col" style="width: 15em;">PRICE</th>
                <th scope="col" style="width: 15em;">DURATION</th>
                <th scope="col" style="width: 20em;">AVAILABILITY</th>
                <th scope="col" style="width: 10em;"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="pl-0">
                  <i class="fa fa-taxi"></i>
                  Taxi
                </td>
                <td>
                  <i class="fa fa-eur" aria-hidden="true"></i>15
                </td>
                <td>23min</td>
                <td>24/7</td>
                <td></td>
              </tr>
              <tr>
                <td class="pl-0">
                  <i class="fa fa-odnoklassniki" aria-hidden="true"></i> Best Pickup
                </td>
                <td>
                  <i class="fa fa-eur" aria-hidden="true"></i>35
                </td>
                <td>23min</td>
                <td>24/7</td>
                <td>
                  <base-button type="dark" size="sm">Book</base-button>
                </td>
              </tr>
              <tr>
                <td class="pl-0">
                  <i class="fa fa-subway" aria-hidden="true"></i> Metro
                </td>
                <td>
                  <i class="fa fa-eur" aria-hidden="true"></i>2.40
                </td>
                <td>32min</td>
                <td>05:51-23:18</td>
                <td></td>
              </tr>
              <tr>
                <td class="pl-0">
                  <i class="fa fa-bus" aria-hidden="true"></i> Bus
                </td>
                <td>
                  <i class="fa fa-eur" aria-hidden="true"></i>3
                </td>
                <td>90min</td>
                <td>06:06-22:52</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row justify-content-center align-items-center mt-3">
        <div class="col-lg-8">
          <p>
            <i class="fa fa-subway" aria-hidden="true"></i> How to get from Singapore Airport to city centre by metro (MRT)
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

      <div class="row justify-content-center align-items-center mr-1 ml-1 mt-3">
        <div class="col-lg-4 border-top border-right border-left">
          <div class="row mt-4">
            <div class="col-sm-6 col-lg-6">
              <div class="text-uppercase">Cost</div>
              <h3>
                <i class="fa fa-eur" aria-hidden="true"></i>1.20
              </h3>
            </div>
            <div class="col-sm-6 col-lg-6">
              <div class="text-uppercase">Trip duration</div>
              <h3>30 Min.</h3>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-lg-12">There can be up to a 13 mintue wait for the metro</div>
          </div>
        </div>
        <div class="col-lg-3 border-top border-right">
          <div class="row mt-3">
            <div class="col-sm-6 col-lg-6 text-uppercase">Convenience</div>
            <div class="col-sm-6 col-lg-6 text-uppercase">
              <span class="fa fa-star checked ml-1"></span>
              <span class="fa fa-star checked ml-1"></span>
              <span class="fa fa-star checked ml-1"></span>
              <span class="fa fa-star ml-1"></span>
              <span class="fa fa-star ml-1"></span>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-sm-6 col-lg-6 text-uppercase">Safety</div>
            <div class="col-sm-6 col-lg-6 text-uppercase">
              <span class="fa fa-star checked ml-1"></span>
              <span class="fa fa-star checked ml-1"></span>
              <span class="fa fa-star checked ml-1"></span>
              <span class="fa fa-star ml-1"></span>
              <span class="fa fa-star ml-1"></span>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-sm-6 col-lg-6 text-uppercase">Value for money</div>
            <div class="col-sm-6 col-lg-6 text-uppercase">
              <span class="fa fa-star checked ml-1"></span>
              <span class="fa fa-star checked ml-1"></span>
              <span class="fa fa-star checked ml-1"></span>
              <span class="fa fa-star ml-1"></span>
              <span class="fa fa-star ml-1"></span>
            </div>
          </div>
          <div class="row mt-4"></div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mr-1 ml-1">
        <div class="col-lg-8 border">
          <p class="mt-2">
            <i class="fa fa-info-circle" aria-hidden="true"></i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium.
          </p>
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

      <div class="row justify-content-center align-items-center mt-4">
        <div class="col-lg-8">
          <div class="d-flex flex-row mb-3">
            <div>
              <h4>Convenience</h4>
            </div>
            <div class="p-2">
              <span class="fa fa-star checked ml-2"></span>
              <span class="fa fa-star checked ml-2"></span>
              <span class="fa fa-star checked ml-2"></span>
              <span class="fa fa-star ml-2"></span>
              <span class="fa fa-star ml-2"></span>
            </div>
          </div>

          <p
            class="mt-3"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium. Fermentum odio eu feugiat pretium.</p>
        </div>
      </div>

      <div class="row justify-content-center align-items-center mt-4">
        <div class="col-lg-8">
          <h4>Timetables</h4>

          <p class="mt-3 mb-5">
            <i class="fa fa-list mr-2" aria-hidden="true"></i>
            Terminal Transfers at Changi
          </p>
          <p>
            <i class="fa fa-list mr-2" aria-hidden="true"></i>
            Metro MRT Map Singapore
          </p>
          <hr />

          <div class="mb-5">
            <div class="card">
              <div class="card-header pt-0 pb-0 pl-1">
                <div class="d-flex">
                  <div class="mr-auto p-2">
                    <p class="mb-0 font-weight-bold text-uppercase">Editor's Note</p>
                  </div>
                  <div class="p-2">
                    <i class="fa fa-chevron-up" aria-hidden="true"></i>
                  </div>
                </div>
              </div>

              <div class="collapse show">
                <div
                  class="card-body p-3"
                >Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</div>
              </div>
            </div>

            <div class="card mt-3">
              <div class="card-header pt-0 pb-0 pl-1">
                <div class="d-flex">
                  <div class="mr-auto p-2">
                    <p class="mb-0 font-weight-bold text-uppercase">Useful tips</p>
                  </div>
                  <div class="p-2">
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div class="collapse">
                <div
                  class="card-body p-3"
                >Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</div>
              </div>
            </div>
          </div>

          <div class="mb-5 d-flex">
            <div class="flex-grow-1">
              <img src="img/images.jpg" alt />
            </div>
            <div class="athen-container">
              <div class="pt-3 pl-5 pr-3">
                <h6>Welcome</h6>
                <h4>The best way to arrive in Athens</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button class="btn btn-success">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mt-4 mb-4">
        <div class="col-lg-5">
          <p
            class="mt-2 mb-2 text-muted font-weight-bold text-uppercase small"
          >Save the article for later or share it with friends</p>
          <div class="share-article">
            <a href="#!" class="mr-4 ml-1">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
            <a href="#!" class="mr-4">
              <i class="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
            <a href="#!" class="mr-4">
              <i class="fa fa-weixin" aria-hidden="true"></i>
            </a>
            <a href="#!" class="mr-4">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
            <a href="#!" class="mr-4">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <button class="btn btn-sm btn-outline-dark">Copy Link</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
const DatePickers = () => import("./JavascriptComponents/DatePickers");
import { BCard, BCardText, BButton, BCardImg, BCardBody } from "bootstrap-vue";

export default {
  components: {
    DatePickers,
    BCard,
    BCardText,
    BButton,
    BCardImg,
    BCardBody
  }
};
</script>
<style>
.card-horizontal {
  display: flex;
  flex: 1 1 auto;
}
.checked {
  color: #71eeb8;
}
.share-article i {
  color: #c7c7c7;
  font-size: 1.5em;
}
.athen-container {
  background-color: rgba(0, 0, 0, 0.03);
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
