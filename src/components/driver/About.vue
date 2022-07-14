<template>
  <Navbar title="درباره ما" />
  <div class=" mx-20 mt-20">
    <div
      class="
        p-5
        font-bold
        mt-6
        text-gray-700
        bg-white
        hover:bg-gray-300
        focus:ring-4 focus:ring-blue-300
        border border-gray-300
        rounded-lg
        leading-8
        text-sm
        w-full
        sm:w-auto
        text-justify
        shadow-lg
        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
      "
      style="direction: rtl"
    >
      شرکت باربد در جهت اصلاح ، تسهیل و تسریع فرآیند حمل بارف سامانه هوشمندی
      برای ارتباط مستقیم صاحبان بار و شرکت های باربری با راننده ها را فراهم کرده
      است.
    </div>

    <Button
      title="بازگشت"
      @click="this.$router.push('/driver/profile')"
      class="mt-8"
    />
  </div>

  <BottomNavigation />
</template>

<script>
import Navbar from "../fields/NavbarDriver.vue";
import BottomNavigation from "../fields/BottomNavigationDriver.vue";
import Button from "../fields/ButtonDriver.vue";

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