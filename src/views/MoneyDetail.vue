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
                  <router-link to="/money" class="text-dark">Money</router-link>
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
            <h4>Harga : <strong>Rp. {{ product.harga }}.000</strong></h4>
            <form class="mt-4">
              <div class="form-group">
                <h5> <b-icon-flower3></b-icon-flower3> {{ product.keterangan }}</h5>
                <h5> <b-icon-flower3></b-icon-flower3> {{ product.ket2 }}</h5>
                <h5> <b-icon-flower3></b-icon-flower3> {{ product.ket3 }}</h5>
                <h5> <b-icon-flower3></b-icon-flower3> {{ product.ket4 }}</h5>
                <h5> <b-icon-flower3></b-icon-flower3> Wrapping Exlusive </h5>
              <h5> <b-icon-flower3></b-icon-flower3> Free gretting card</h5>
              <h5> <b-icon-flower3></b-icon-flower3> Bisa ganti warna wrapping </h5>
              <h5> <b-icon-flower3></b-icon-flower3> Warna bunga artificial bisa request </h5> 
              <h5> <b-icon-flower3></b-icon-flower3> Proses pengerjaan 2-3 hari setelah fix order </h5>
              <h5> <b-icon-flower3></b-icon-flower3> Bisa diambil di rumah/Gosend </h5>
              </div>
              <hr><div class="text-center">
              <h5><strong>Silahkan Hubungi Kami Dengan Sosmed Dibawah Ini!</strong> </h5>
            </div>
              <div class="sosmed mt-4">
            <div class="whatsapp-container">
              <a href="https://wa.me/6283154711184">
                <img src="../assets/images/wa.png" alt="WhatsApp Icon" />
              </a>
            </div>
            <div class="instagram-container">
              <a href="https://www.instagram.com/buketku.id_/">
                <img src="../assets/images/ig3.png" alt="Instagram Icon" />
              </a>
            </div>
            <div class="instagram-container">
              <a href="https://shopee.co.id/amaliasari_/">
                <img src="../assets/images/shopee.png" alt="Instagram Icon" />
              </a>
            </div>
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
    name: "MoneyDetailView",
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
        .get("http://localhost:3000/uangs/"+this.$route.params.id)
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log(error));
    }
  };
  </script>
  
  <style>
  
  </style>