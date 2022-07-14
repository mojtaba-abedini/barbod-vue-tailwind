<template>
  <Navbar title="خروج از حساب کاربری" />
  <div class="w-80 mx-auto mt-20">
   <div>آیا مایل به خروج از حساب کاربری هستید؟</div>
   <div class="grid grid-cols-2 gap-4 mt-8">
         <Button title="بله"/>
     <Button title="خیر"/>
 
   </div>
   
  </div>

  <BottomNavigation />
</template>

<script>
import Navbar from "../fields/Navbar.vue";
import BottomNavigation from "../fields/BottomNavigation.vue";
import Button from "../fields/Button.vue";
export default {
  components: {
    Navbar,
    BottomNavigation,
    Button,
  },
  methods: {
    validate() {
      return 1;
    },
  },
};
</script>

<style>
</style>