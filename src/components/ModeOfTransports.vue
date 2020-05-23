<template>
  <div>
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
                <div class="round round-sm hollow light mr-1">
                  <i class="fa fa-taxi"></i>
                </div>Taxi
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
                <div class="round round-sm hollow light mr-1">
                  <i class="fa fa-odnoklassniki" aria-hidden="true"></i>
                </div>Best Pickup
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
                <div class="round round-sm hollow light mr-1">
                  <i class="fa fa-subway" aria-hidden="true"></i>
                </div>Metro
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
                <div class="round round-sm hollow light mr-1">
                  <i class="fa fa-bus" aria-hidden="true"></i>
                </div>Bus
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
  </div>
</template>
<script>
export default {
  name: "mode-of-transports"
};
</script>