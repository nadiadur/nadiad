<template>

<div class="satu">
    <b-navbar variant="faded" type="light">
      <b-navbar-brand tag="h1" href="#">BUKETKU</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/flower">
          <b-nav-item href="#">Home</b-nav-item>
        </router-link>
          <b-nav-item-dropdown text="Kategori">
            <b-dropdown-item href="#">Flower</b-dropdown-item>
            <b-dropdown-item href="#">Money</b-dropdown-item>
            <b-dropdown-item href="#">Snack</b-dropdown-item>
            <b-dropdown-item href="#">Figura</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
        <!-- Right aligned nav items -->
      

       
        <div>
          <b-navbar type="light" variant="light">
            <b-nav-form class="form-inline my-2 my-lg-0">
              <b-form-input class="from-control mr-sm-2" placeholder="Search"></b-form-input>
              <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
            <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/keranjang">
              <b-icon-bag></b-icon-bag>
              <span class="badge badge-success ml-auto">0</span>
            </router-link>
          </li>
        </ul>
          </b-navbar>
        </div>
    </b-navbar>
    
<div class="home">
  


  
  </div>
</div>

 
</template>
  
  <script>
export default {
  name: "NavbarView",
};
</script>
  
  <style>
</style>