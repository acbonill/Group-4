<template>
  <div id="app">
    <!-- NAVIGATION -->
    <router-link to="/"/>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" style="background-color: #ff5733 ">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="/">SLOJAMS</a>

          <!-- <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
          </button> -->
          <div> {{this.$store.state.user.userLevel}} </div>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ml-auto">
              <ul class="nav-item">
                <router-link to="/" class="nav-link js-scroll-trigger">Home</router-link>
              </ul>
              <ul class="nav-item">
                <router-link to="/shop" class="nav-link js-scroll-trigger">Hot Deals</router-link>
              </ul>
              <ul class="nav-item">
                <router-link to="/shop" class="nav-link js-scroll-trigger">Shop</router-link>
              </ul>
              <ul class="nav-item">
                <router-link to="/cart" class="nav-link js-scroll-trigger">Cart</router-link>
              </ul>
              <ul class="nav-item">
                <router-link to="/orders" class="nav-link js-scroll-trigger" v-if="this.$store.state.user.userLevel == 'Admin' || this.$store.state.user.userLevel == 'Employee'">Orders</router-link>
              </ul>
              <ul class="nav-item">
                <router-link to="/employees" class="nav-link js-scroll-trigger" v-if="this.$store.state.user.userLevel == 'Admin'">Employees</router-link>
              </ul>
              <ul class="nav-item">
                <router-link to="/login" class="nav-link js-scroll-trigger" v-if="!this.$store.state.user.loggedIn">Login</router-link>
              </ul>
              <ul class="nav-item">
                <div v-on:click="logout"  class="nav-link js-scroll-trigger" v-if="this.$store.state.user.loggedIn">Logout</div>
              </ul>
              <!-- <ul class="nav-item"> -->
                <!-- <a class="nav-link js-scroll-trigger" href="ENTER PAGE LINK HERE">Log In/Sign Up</a> -->
                <!-- <router-link to="/profile" class="nav-link js-scroll-trigger">Profile</router-link> -->
              <!-- </ul> -->
            </ul>
          </div>
      </div>
    </nav>
    <div style="margin-top:100px"></div>
    <router-view/>
    <!-- FOOTER -->
<footer class="footer" style="margin-top:0px; margin-bottom: 0px; padding: 0px">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <span class="text-muted"> (808) 555-5555</span>
        </div>
        <div class="col-md-4">
          <span class="text-muted" style="margin-top: 10px; margin-bottom: 10px"> M-F 8:30AM - 6:00PM<br>
            1234 Chorro St. San Luis Obispo, CA 93401 </span>
        </div>
        <div class="col-md-4">
          <span class="text-muted"> slojams@gmail.com </span>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        return this.$router.push("/");
      });
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
@import './assets/css/styles.css';

$image-path: '~@/../mdb/mdbvue/img';
@import '~@/../mdb/mdbvue/scss/mdb.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#logo {
  text-align: left;
  margin: 0 50px;
}
</style>

<style>
.dropbtn {
  background-color: rgb(228, 232, 235);
  color: #42b983;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  position:absolute;
  top: -40px;
  right: -270px;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {background-color: #ddd;}
.show {display:block;}
</style>
