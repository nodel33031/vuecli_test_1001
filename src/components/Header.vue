<template>
    <nav class="header_nav navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li class="nav-item mx-5">
                  <!-- <a class="nav-link active" href="#">{{first}}</a> -->
                  <router-link to="/" class="nav-link active">{{first}}</router-link>
                </li>
                <li class="nav-item mx-5">
                    <!-- <a class="nav-link " href="#">{{second}}</a> -->
                  <router-link to="/about" class="nav-link">{{second}}</router-link>
                </li>
                <li class="nav-item mx-5">
                  <!-- <a class="nav-link " href="#">{{third}}</a> -->
                  <router-link to="/ruler" class="nav-link">{{third}}</router-link>
                </li>
                <li class="nav-item mx-5">
                    <!-- <a class="nav-link " href="#">{{fourth}}</a> -->
                    <router-link to="/image" class="nav-link">{{fourth}}</router-link>
                </li>
                <li class="nav-item mx-5">
                    <!-- <a class="nav-link " href="#">{{fifth}}</a> -->
                    <router-link to="/cart" class="nav-link">{{fifth}}</router-link>
                </li>
                <li class="nav-item mx-5">
                    <!-- <a class="nav-link " href="#">{{sixth}}</a> -->
                    <router-link to="/message" class="nav-link">{{sixth}}</router-link>
                </li>
                <li class="nav-item mx-5">
                    <!-- <a class="nav-link " href="#">{{sixth}}</a> -->
                    <router-link to="/movie" class="nav-link">{{seventh}}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<style>
    .header_nav{
        position: fixed;
        width:100%;
        opacity:0.9;
    }    
</style>
<script>
export default {
    data(){
        return{
          first:'首頁',
          second:'關於',
          third:'導航',
          fourth:'圖鑑',
          fifth:'商城',
          sixth:'佈告欄',
          seventh:'影音'
        }
        
    }
}
</script>