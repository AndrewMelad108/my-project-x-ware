<template>
  <div class="error-image"></div>
</template>

<script>
export default {
  name: "error",
};
</script>
<style scoped lang="scss">
.error-image {
  background-image: url("../assets/images.jpg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh !important; //full height image
}
</style>
