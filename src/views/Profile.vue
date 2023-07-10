<template>
  <div>
    <Navbar/>
    <div class="enam">
<div class="content">
  <h3>Fresh Flower</h3>
  <span> natural & beautiful flower </span>
  <p>snsnndjd jkkajdbffsi kkmeidjd mdokfije. nvidvjdnvidnvjid jdnvjenvu 
    mdkmfkgkong kdmfknge kmkovne wpsdk,pa jjjri kff.
  </p>
  <button class="normal">Shop Now</button>

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
button.normal{
  font-size: 14px;
  font-weight: 600;
  padding: 15px 30px;
  color: #000;
  background-color: #645f5f;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: 0.2s;
}
.enam button:hover {
  background: #088178;
  color: #fff;
}
</style>