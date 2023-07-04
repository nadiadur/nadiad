<template>
  <div class="hero">
    <div class="d-none d-md-block">
      <!-- Desktop-->
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-conten-center align-self-center">
              <h2>
                <strong>Temukan Pilihan Buket Terbaik Anda,<br /></strong>di toko kami
              </h2>
              <router-link class="btn btn-lg btn-success" to="/flower">Explore</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/foto1.png" width="70%" />
          
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: "heroView",
};
</script>

<style>

</style>