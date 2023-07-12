<template>
    <div>
      <div class="review">
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
  <h4>Berikan kesan</h4>
  <h2>pada momen istimewa dengan<span> buket</span> bunga indah dari toko kami! </h2>
 
    <router-link class="btn btn-success" to="/flower">Explore</router-link>
  
  </div>

  <div class="contact py-5"></div>
  <div class="container py-5">
        <h1 class="text-center">Contact Us.</h1>
        <div class="row py-5">
          <div class="col-lg-10 mx-auto">
            <div class="row text-center">
              <div class="col-lg-4">
                <div class="circel">
                 <span>  <b-icon-cart-fill></b-icon-cart-fill></span>
                </div>
                <h5>Shopee</h5>
                <p>Buketku.id_</p>
              </div>
              <div class="col-lg-4">
                <div class="circel">
                  <span><b-icon-instagram></b-icon-instagram></span>
                </div>
                <h5>Instagram</h5>
                <p>@buket.ku_</p>
              </div>
              <div class="col-lg-4">
                <div class="circel">
                  <span> <b-icon-telephone-fill></b-icon-telephone-fill></span>
                </div>
                <h5>WhatsApp</h5>
                <p>+6283154711184</p>
              </div>
            </div>
          </div>
        </div>
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
  .circel{
    height: 70px;
    width: 70px;
    background-color: lightgray;
    color: black;
    padding: 12px;
    font-size: 30px;
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 20px;
}
  .circel:hover{
    background-color: black;
    transition: 0,4s;
    color: white;
}
  
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

  .review {
  background-color: #add3ec;
}

  </style>