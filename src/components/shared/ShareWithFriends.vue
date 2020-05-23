<template>
  <div class="row justify-content-center align-items-center mt-4 mb-4">
    <div class="col-lg-5 text-center">
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
</template>

<script>
export default {
  name: "share-with-friends"
};
</script>