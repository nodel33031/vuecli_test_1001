<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
    <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Headers/>
    </div>
  
  <router-view />  
  <!-- {{name}} -->
  
</template>
<script>
// import Headers from "@/components/Header.vue";
export default {
  data(){
    return{
      name:process.env.VUE_APP_NAME,
    };
  },
    components: {
    // HelloWorld,
    // Headers,
  },
};
</script>


<style lang="scss">
@import "bootstrap";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
