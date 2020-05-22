<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/brand/logo.png" class="logo" alt="logo" />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
          <a href="#!">
            <img src="img/brand/logo.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center justify-content-end">
        <li><a href="#" role="button" class="nav-link"><span class="nav-link-inner--text">Company</span></a></li>
        <li><a href="#" role="button" class="nav-link"><span class="nav-link-inner--text selected">Traveler</span></a></li>
        <li><a href="#" role="button" class="nav-link"><span class="nav-link-inner--text">Partner</span></a></li>
        <li><a href="#" role="button" class="nav-link"><span class="nav-link-inner--text">Driver</span></a></li>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-5">
        <li><a href="#" role="button" class="nav-link"><span class="nav-link-inner--text">En</span></a></li>
        <li class="nav-item d-lg-block ml-lg-4">
          <base-button class="btn-1" type="success">Book a taxi</base-button>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>