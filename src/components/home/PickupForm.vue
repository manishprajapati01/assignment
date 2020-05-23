<template>
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
      <h6
        class="text-white"
      >Book a trusted, English-speaking driver to pick you up at the same price as a regular taxi</h6>
      <a href="#!" class="text-white">
        <small>Learn more</small>
      </a>
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
            <label for="inputAddress" class="clr-white">Pickup date</label>
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
            <label for="inputAddress" class="clr-white">Passengers</label>
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
            <label for="inputAddress" class="clr-white">Luggage pieces</label>
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
            <button type="button" class="btn btn-block btn-success">Continue booking</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>