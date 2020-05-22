<template>
  <footer class="bg-dark pt-4 footer">
    <div class="container text-center text-md-left">
      <div class="row">
        <div class="col-md-2 mx-auto">
          <span class="badge badge-pill">
            <i aria-hidden="true" class="fa fa-odnoklassniki"></i>
          </span>
          <div class="font-weight-bold text-white">Welcome</div>
          <ul class="list-unstyled">
            <li>
              <div>
                <b-dropdown text="English" variant="dark"></b-dropdown>
              </div>
            </li>
            <li class="mt-3">
              <button type="button" class="btn">
                <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                Help
              </button>
            </li>
          </ul>
        </div>
        <hr class="clearfix w-100 d-md-none" />
        <div class="col-md-2 mx-auto">
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4 heading">Mobile App</h5>
          <img class src="img/app-store.png" width="100px" />
        </div>
        <hr class="clearfix w-100 d-md-none" />
        <div class="col-md-2 mx-auto">
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4 heading">About</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Company</a>
            </li>
            <li>
              <a href="#!">Blog</a>
            </li>
            <li>
              <a href="#!">Terms of Use</a>
            </li>
            <li>
              <a href="#!">Privacy Policy</a>
            </li>
            <li>
              <a href="#!">Cookie Settings</a>
            </li>
          </ul>
        </div>
        <hr class="clearfix w-100 d-md-none" />
        <div class="col-md-2 mx-auto">
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4 heading">Network</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Become a Driver</a>
            </li>
            <li>
              <a href="#!">Hotels</a>
            </li>
            <li>
              <a href="#!">Partners</a>
            </li>
            <li>
              <a href="#!">Vacation Rentals</a>
            </li>
            <li>
              <a href="#!">Newsroom</a>
            </li>
          </ul>
        </div>
        <hr class="clearfix w-100 d-md-none" />

        <div class="col-md-3 mx-auto">
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4 heading">Payment Methods</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#!">All Credit Card Accepted</a>
            </li>
            <li>
              <a href="#!">PayPal</a>
            </li>
            <li>
              <a href="#!">
                <i class="fa fa-credit-card-alt" aria-hidden="true"></i>
                Checkout.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <ul class="list-unstyled list-inline text-center mt-5">
      <li class="list-inline-item">
        <a>
          <i class="fa fa-facebook-official"></i>
        </a>
      </li>
      <li class="list-inline-item">
        <a>
          <i class="fa fa-twitter"></i>
        </a>
      </li>
      <li class="list-inline-item">
        <a>
          <i class="fa fa-instagram"></i>
        </a>
      </li>
      <li class="list-inline-item">
        <a>
          <i class="fa fa-yelp"></i>
        </a>
      </li>
      <li class="list-inline-item">
        <a>
          <i class="fa fa-linkedin"></i>
        </a>
      </li>
    </ul>
    <div class="copyright text-center py-3">© 2011 - 2020 All rights reserved.</div>
  </footer>
</template>
<script>
import { BDropdownItem, BDropdown } from "bootstrap-vue";

export default {
  name: "app-footer",
  components: {
    BDropdownItem,
    BDropdown
  }
};
</script>
<style>
.badge-pill {
  background-color: white;
}

.badge-pill i {
  color: black;
}
.footer .fa {
  padding: 0.6em 0.6em;
  background-color: white;
  color: black;
}
</style>
