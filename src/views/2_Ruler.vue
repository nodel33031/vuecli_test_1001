<template>
<div>
  <Headers/>                                               
</div>
<div>
  <Ruler1/>
</div>
<div>
  <Ruler2/>
</div>
<div>
  <button @click="openModal">OpenModal</button>
</div>

</template>
<script>
import Headers from "@/components/Header.vue";
import Ruler1 from "@/components/Ruler1.vue";
import Ruler2 from "@/components/Ruler2.vue";

// const app=Vue.createApp({
//   data(){
//     return{
//       bsModal:''
//     }
//   },
//   methods: {
//     openModal(){
//       this.bsModal.show()
//     }
//   },
//   mounted(){
//     this.bsModal=new bootstrap.Modal(this.$refs.modal)
//   }
// })

export default {
    components: {
    Headers, 
    Ruler1, 
    Ruler2,
  },
//     data(){
//     return{
//       bsModal:''
//     }
//   },
//   methods: {
//     openModal(){
//       this.bsModal.show()
//     }
//   },
//   mounted(){
//     this.bsModal=new bootstrap.Modal(this.$refs.modal)
//   }
}
</script>