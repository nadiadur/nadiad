<template>

<div class="satu">
    <b-navbar variant="faded" type="light">
      <b-navbar-brand tag="h1" href="#">BUKETKU</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
          <b-nav-item-dropdown text="Kategori">
            <li class="nav-item">
          <router-link class="nav-link" to="/bunga">Flower</router-link>
        </li> 
        <li class="nav-item">
          <router-link class="nav-link" to="/money">Money</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/snack">Snack</router-link>
        </li>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Review</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
        <!-- Right aligned nav items -->
      
       
      
    </b-navbar>
    

</div>

 
</template>
  
  <script>
export default {
  name: "NavbarView",
};
</script>
  
  <style>
</style>