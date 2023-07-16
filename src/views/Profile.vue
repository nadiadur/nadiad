<template>
  <div>
    <Navbar/>

    <div class="enam">
<div class="content">
  <h3>Fresh Flower</h3>
  <span> natural & beautiful flower </span>
  <p>Kami menciptakan keindahan dengan 
    buket bunga eksklusif <br>
    setiap momen berharga Anda! </p> 
  
 
 
  <div class="content">
  <div class="baru mt-4">
    <div class="button-group">
          <router-link class="btn btn-success" to="/flower">Shop Now</router-link>
          <b-button class="promo-button" v-b-toggle.sidebar-1 >Promo</b-button>
        </div>
    <b-sidebar id="sidebar-1" title="Diskon Akhir Tahun" shadow>
      <div class="px-3 py-2">
        <p>
          "Tutup Tahun dengan Penawaran Fantastis! 
          Belanja Sekarang untuk Diskon Akhir Tahun dan Promosi Eksklusif!"
        </p>
        <b-img src="https://th.bing.com/th/id/OIP.8BkbCvhhrq2S-gEX412VmAHaG9?pid=ImgDet&rs=1" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</div>
</div>

    </div>
    
    

</div>


  
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
name: "ProfileView",
components: {
      Navbar,
},

};

</script>

<style>

button.normal{
  font-size: 14px;
  font-weight: 600;
  padding: 15px 30px;
  color: #000;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: 0.2s;
}
.enam {
  display: flex;
  align-items: center;
  min-height: 100vh;
  background: url('../assets/images/cover1.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  padding: 2rem 9%;
}
.enam .content{
  max-width: 50rem;
}
.enam .content h3{
  font-size: 6rem;
  color: #333;

}
.enam .content span {
  font-size: 3.5rem;
  color: var(--blue);
  padding: 1rem 0;
  line-height: 1.5;
}
.enam .content p {
  font-size: 1.5rem;
  color: #333;
  padding: 1rem 0;
  line-height: 1.5;
}
.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.button-group router-link {
  flex: 10;
}

.button-group .promo-button {
  flex: 10;
  margin-left: 10px;
}

</style>