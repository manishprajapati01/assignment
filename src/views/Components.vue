<template>
  <div>
    <hero></hero>
    <welcome></welcome>
  </div>
</template>
<script>
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";

export default {
  name: "components",
  components: {
    Hero,
    Welcome
  }
};
</script>
