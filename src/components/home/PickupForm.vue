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
</template>