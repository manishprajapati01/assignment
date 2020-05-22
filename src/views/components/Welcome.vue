<template>
  <section class="section section-components pb-0" id="section-components">
    <div class="container">
      <div>
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>

      <div class="row justify-content-center align-items-center">
        <div class="col-lg-7">
          <div class="card">
            <div class="card-horizontal">
              <div class="card-body">
                <h4 class="card-title">Welcome</h4>
                <p class="card-text">
                  Travel safe with Welcome Pickups
                  <br />- Hand sanitiser gel is available in our vehicles;
                  <br />- Regular cleaning of all the car surfaces;
                  <br />- Extra flexibility in changes or cancellation.
                </p>
              </div>
              <div class="img-square-wrapper">
                <img class src="img/man-cleaning-car.jpg" width="230px" height="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center align-items-center mt-3">
        <div class="col-lg-7">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Magnis dis parturient montes nascetur ridiculus mus. Mi in nulla posuere sollicitudin aliquam ultrices. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Eu mi bibendum neque egestas congue. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Tincidunt id aliquet risus feugiat in ante metus dictum. Mauris commodo quis imperdiet massa tincidunt. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Consequat interdum varius sit amet. Nisl tincidunt eget nullam non nisi est. Dolor magna eget est lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div class="row justify-content-center align-items-center mt-3">
        <div class="col-lg-5">
          Book a trusted, English-speaking driver to pick you up at the same price as a regular taxi
          <a
            href="#!"
          >Learn more</a>
        </div>
        <div class="col-lg-5">
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
        <div class="col-lg-7">
          <table class="table table-responsive">
            <thead>
              <tr>
                <th scope="col">OPTION</th>
                <th scope="col">PRICE</th>
                <th scope="col">DURATION</th>
                <th scope="col">AVAILABILITY</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
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
                <td>
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
                <td>
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
                <td>
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
        <div class="col-lg-7">
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
        <div class="col-lg-7 border">
          <p class="mt-2">
            <i class="fa fa-info-circle" aria-hidden="true"></i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium.
          </p>
        </div>
      </div>

      <div class="row justify-content-center align-items-center mt-4">
        <div class="col-lg-7">
          <h4>Where do I get it from?</h4>
          <p
            class="mt-3"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras adipiscing enim eu turpis egestas pretium. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Magnis dis parturient montes nascetur ridiculus mus. Mi in nulla posuere sollicitudin aliquam ultrices. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Eu mi bibendum neque egestas congue. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Tincidunt id aliquet risus feugiat in ante metus dictum. Mauris commodo quis imperdiet massa tincidunt. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Consequat interdum varius sit amet. Nisl tincidunt eget nullam non nisi est. Dolor magna eget est lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div class="row justify-content-center align-items-center mt-4">
        <div class="col-lg-7">
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
        <div class="col-lg-7">
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
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">EDITOR'S NOTE</h5>
                <i class="fa fa-chevron-up" aria-hidden="true"></i>
              </div>

              <div id="collapseOne" class="collapse show">
                <div
                  class="card-body"
                >Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</div>
              </div>
            </div>

            <div class="card mt-3">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">USEFUL TIPS</h5>
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
              </div>

              <div id="collapseOne" class="collapse">
                <div
                  class="card-body"
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
import { BCard, BCardText, BButton } from "bootstrap-vue";

export default {
  components: {
    DatePickers,
    BCard,
    BCardText,
    BButton
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
</style>
