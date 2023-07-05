<template>
  <div class="flower-detail">
    <navbar />
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/flower" class="text-dark">Flower</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Keterangan
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
         <img :src=" '../assets/images/' + product.gambar " class="img-fluid shadow" />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr>
          <h4>Harga : <strong>Rp. {{ product.harga }}</strong></h4>
          <form class="mt-4">
            <div class="form-group">
              <h5>{{ product.keterangan }}</h5>
              <h5>{{ product.ket2 }}</h5>
              <h5>{{ product.ket3 }}</h5>
              <h5>{{ product.ket4 }}</h5>
            </div>
            <div class="tiga">
            <li><a href="https://wa.me/088229902402"><img src="../assets/images/wa.png"></a></li>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "FlowerDetailView",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
    }
  },
  methods: {
    setProduct(data) {
      this.product = data
    }
  },

  mounted() {
    axios
      .get("http://localhost:3000/products/"+this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  }
};
</script>

<style>

</style>