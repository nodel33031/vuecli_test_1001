<template>
  <div>
    <Headers/>
  </div>
  <div class="home_main d-flex justify-content-center align-items-center flex-column">
    <!-- <h1 class="home_title">歡迎來到未知的冒險旅程</h1> -->
    <img class="home_img" src="../assets/image/logo.jpg" alt="">
    <h2 class="home_title">Welcome to the world</h2>
  </div>
  <div class="home1 d-flex justify-content-center align-items-center flex-column">
    <h1 class="home_title">關於</h1>
    <h2 class="home_title">The Game</h2>    
    <button type="button" class="btn btn-outline-light">
    <router-link to="/about" class="nav-link">View More</router-link>
    </button>
  </div>
  <div class="home2 d-flex justify-content-center align-items-center flex-column">
    <h1 class="home_title">導航</h1>
		<h2 class="home_title"> Leader</h2>
	  <button type="button" class="btn btn-outline-light">
    <router-link to="/ruler" class="nav-link">View More</router-link>
    </button>
  </div>
  <div class="home3 d-flex justify-content-center align-items-center flex-column">
    <h1 class="home_title">圖鑑</h1>
		<h2 class="home_title">Illustrated Book</h2>
		<button type="button" class="btn btn-outline-light">
    <router-link to="/world" class="nav-link">View More</router-link>
    </button>
  </div>
  <div class="home4 d-flex justify-content-center align-items-center flex-column">
    <h1 class="home_title">商城</h1>
		<h2 class="home_title">Cart</h2>
		<button type="button" class="btn btn-outline-light">
    <router-link to="/activity" class="nav-link">View More</router-link>
    </button>
  </div>
  <div class="home5 d-flex justify-content-center align-items-center flex-column">
    <h1 class="home_title">佈告欄</h1>
    <h2 class="home_title">Message</h2>
    <button type="button" class="btn btn-outline-light">
    <router-link to="/mission" class="nav-link">View More</router-link>
    </button>
  </div>
  <div class="home6 d-flex justify-content-center align-items-center flex-column">
    <h1 class="home_title">影音</h1>
    <h2 class="home_title">Movie</h2>
    <button type="button" class="btn btn-outline-light">
    <router-link to="/movie" class="nav-link">View More</router-link>
    </button>
  </div>
  <router-view></router-view>
</template>


<style>
    .home_img{
      height: 100px;
    } 
    .home_title{
      font-weight: bold;
      
    }
    .home_main{
     background: url("../assets/image/home1.jpg");
     background-size: cover;
     height: 100vh;
     width: 100%;
    }
    .home1{
     background: url("../assets/image/home8.jpg");
     background-size: cover;
     height: 100vh;     
     width: 100%
    }
    .home2{
     background: url("../assets/image/home5.jpg");
     background-size: cover;
     height: 100vh;     
     width: 100%
    }
    .home3{
     background: url("../assets/image/home6.jpg");
     background-size: cover;
     height: 100vh;     
     width: 100%
    }
    .home4{
     background: url("../assets/image/home7.jpg");
     background-size: cover;
     height: 100vh;     
     width: 100%
    }
    .home5{
     background: url("../assets/image/home2.jpg");
     background-size: cover;
     height: 100vh;     
     width: 100%
    }
    .home6{
     background: url("../assets/image/home11.jpg");
     background-size: cover;
     height: 100vh;     
     width: 100%
    }
    .home_title{
     color: #fff;
    }
</style>
<script>
import Headers from "@/components/Header.vue";
export default {  
  components: {
    Headers,
  },
  created() {
    console.log(process.env.VUE_APP_API,process.env.VUE_APP_PATH);
  },

};

</script>