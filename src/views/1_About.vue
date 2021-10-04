<template>
<div>
  <Headers/>
</div>
  <div class="about d-flex justify-content-center align-items-center flex-column">      
        <h1 class="home_title ">關於</h1>
        <h2 class="home_title">About</h2> 
  </div>
  <div class="about1">
    <p>這裏是七種元素交匯的幻想世界“提瓦特”。</p>
    <p>在遙遠的過去，人們藉由對神靈的信仰，獲賜了驅動元素的力量，得以在荒野中築起家園。</p>
    <p>五百年前，古國的覆滅卻使得天地變異……</p>
    <p>如今，席捲大陸的災難已經停息，和平卻仍未如期光臨。</p>
    <p>你從世界之外漂流而來，降臨大地。你將在這廣闊的世界中，自由旅行、結識同伴、尋找掌控塵世元素的七神，直到與分離的血親重聚。</p>
  </div>

  <div class="d-flex justify-content-around m-5 bg-light" >
  
  <router-link to="/about/a" class="nav-link fs-2 fw-bold d-inline" >玩法</router-link>  
  <router-link to="/about/b" class="nav-link fs-2 fw-bold d-inline" >劇情設定</router-link>
  <router-link to="/about/c" class="nav-link fs-2 fw-bold d-inline" >版本紀錄</router-link>
  </div>
  <router-view name="a" ></router-view>
  <router-view name="b"></router-view>
  <div class="d-flex justify-content-around">
  <router-view name="left"></router-view>
  <router-view name="right"></router-view>
  </div>
  <div class="item"> 

  </div>

  
</template>

<script>
import Headers from "@/components/Header.vue";
// import ComponentsA from "@/components/ ComponentsA.vue";
export default {
    components: {
    Headers,
  },
}
</script>
<style >
.about{
  background: url("../assets/image/home4.jpg");
  background-size: cover;
  height: 600px;
  width: 100%
}
.about1{
  background-color: #769bd3;
  font-weight: bold;
  color: white;
  padding: 20px 0 10px 0;
}
.item{
  background-color: #769bd3;
  height: 200px;
}
  
</style>
