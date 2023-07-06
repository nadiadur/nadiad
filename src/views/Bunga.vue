<template>
    <div>
      <Navbar />
      <div class="container">
        <div class="row mt-4">
          <div class="col">
            <h2><strong>Buket Flower Artifisial</strong></h2>
          </div>
        </div>
  
        <div class="row mt-3">
          <div class="col">
            <div class="input-group mb-3">
              
              <input
              v-model="search"
                type="text"
                class="form-control"
                placeholder="Search Your Favorit..."
                aria-label="Search"
                aria-describedby="basic-addon1"
                @keyup="searchFlower"
              />
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <b-icon-search></b-icon-search>
                </span>
              </div>
            </div>
          </div>
        </div>
  
        <div class="row mb-4">
          <div
            class="col-md-4 mt-4"
            v-for="product in products"
            :key="product.id"
          >
            <CardBunga :product="product" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  import CardBunga from "@/components/CardBunga.vue";
  import axios from "axios";
  
  export default {
    name: "BungaView",
    components: {
      Navbar,
      CardBunga,
    },
    data() {
      return {
        products: [],
        search: '',
      };
    },
    methods: {
      setProducts(data) {
        this.products = data;
      },
      searchFlower() {
        axios
        .get("http://localhost:3000/bungas?q="+ this.search)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error));
  
      }
    },
    mounted() {
      axios
        .get("http://localhost:3000/bungas")
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error));
    },
  };
  </script>
  
  <style>
  </style>