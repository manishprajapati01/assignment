<template>
  <div class="row justify-content-center align-items-center mt-4 mb-4">
    <div class="col-lg-5 text-center">
      <p
        class="mt-2 mb-2 text-muted font-weight-bold text-uppercase small"
      >Save the article for later or share it with friends</p>
      <div>
        <a href="#!" class="mr-4 ml-1">
          <i class="fa fa-envelope text-muted share-icon--text" aria-hidden="true"></i>
        </a>
        <a href="#!" class="mr-4">
          <i class="fa fa-whatsapp text-muted share-icon--text" aria-hidden="true"></i>
        </a>
        <a href="#!" class="mr-4">
          <i class="fa fa-weixin text-muted share-icon--text" aria-hidden="true"></i>
        </a>
        <a href="#!" class="mr-4">
          <i class="fa fa-facebook-official text-muted share-icon--text" aria-hidden="true"></i>
        </a>
        <a href="#!" class="mr-4">
          <i class="fa fa-twitter text-muted share-icon--text" aria-hidden="true"></i>
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