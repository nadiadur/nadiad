<template>
    <div class="card shadow card-product">
    <img :src=" '../assets/images/' + product.gambar " class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text">Harga: Rp. {{ product.harga }}.000
      <br> Mau tau lebih lanjut klik tombol dibawah!</p>
      
      <router-link class="btn btn-success" :to="'/money/'+product.id">Keterangan </router-link>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: "CardMoney",
    props: ["product"],
  };
  </script>
  
  <style>
  </style>