<template>
    <div>
      <div class="home">
    <Navbar />
    <div class="container">
      <div class="row mt-4 ">
        <div class="control text-center">
          <ul>
          <li class="button " >Customer's Review</li>
          
        </ul>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id" >
          <CardRev :product="product"/>
        </div>
      </div>
    </div>
  </div>

      <div class="lima">
  <h4>Toko Buket</h4>
  <h2>Banyak <span>Pilihan</span>  Untuk Anda</h2>
  <button class="normal">Explore</button>
  
  </div>
  
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
import CardRev from "@/components/CardRev.vue";
import axios from "axios";

  export default {
  name: "RiviewView",
  components: {
    Navbar,
    CardRev,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/customers")
      .then((response)  =>this.setProducts(response.data))
      .catch((error)  => console.log(error))
    
     
  },
};
</script>
  
  <style>
  .lima {
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url('../assets/images/bg3.jpg');
    width: 100%;
    height: 40vh;
    background-size: cover;
    background-position: center;
  }
  .lima h4 {
    color: #000000;
    font-size: 16px;
  
  }
  .lima h2 {
    color: #696565;
    font-size: 30px;
    padding: 10px 0;
  }
  .lima h2 span{
    color: #2e08b8;
   
  }
  button.normal{
    font-size: 14px;
    font-weight: 600;
    padding: 15px 30px;
    color: #000;
    background-color: #666161;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    outline: none;
    transition: 0.2s;
  }
  .lima button:hover {
    background: #088178;
    color: #fff;
  }
 
  </style>