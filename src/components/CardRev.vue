<template>
    <div class="card shadow card-product">
    <img :src=" '../assets/images/' + product.gambar " class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text"></p>{{ product.buket }}.
      <br><p> {{ product.keterangan }}</p>
      
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: "CardRev",
    props: ["product"],
  };
  </script>
  
  <style>
  </style>