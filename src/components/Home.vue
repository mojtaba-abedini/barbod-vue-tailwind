<template>
  <Background />

  <div class=" grid grid-cols-1 gap-4 md:grid-cols-2 mx-10">



  <Button
    title="ورود صاحب بار"
    @click="this.$router.push('/owner/enter')"
    
  />

  

  <ButtonDriver
    title="ورود راننده"
    @click="this.$router.push('/driver/enter')"
    
  />



  
  </div>


</template>

<script>
import Background from "./fields/Background.vue";
import Button from "./fields/Button.vue";
import ButtonDriver from "./fields/ButtonDriver.vue";
export default {
  components: {
    Background,Button,ButtonDriver
  },
};
</script>

<style>
div {
  font-family: "iranyekan", Helvetica, Arial;
}
h1 {
  font-family: "iranyekan", Helvetica, Arial;
  font-size: 50px !important;
}

.primaryBGColor {
  background: rgb(11, 157, 255);
}
.primaryTextColor {
  color: rgb(11, 157, 255);
}
.grid{
  direction:rtl;
}
</style>