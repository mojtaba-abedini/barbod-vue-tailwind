<template>
  <Navbar title="باربد" />
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 px-20 mx-auto mt-20">
    <ButtonIcon
      title="اطلاعات شخصی"
      icon="fa-solid fa-user"
      class="font-bold"
      @click="this.$router.push('/driver/profile/personal-info')"
    />

     <ButtonIcon
      title="مشخصات ناوگان"
      icon="fa-solid fa-car"
      class="font-bold"
      @click="this.$router.push('/driver/profile/car-info')"
    />

    <ButtonIcon
      title="اعلان ها"
      icon="fas fa-bell"
      class="font-bold"
      @click="this.$router.push('/driver/profile/notification')"
    />
    <ButtonIcon
      title="درباره ما"
      icon="fas fa-exclamation-circle"
      class="font-bold"
      @click="this.$router.push('/driver/profile/about')"
    />
    <ButtonIcon title="پشتیبانی" icon="fa fa-headset" class="font-bold" />
    <ButtonIcon
      title="خروج از حساب"
      icon="fa fa-sign-out"
      class="font-bold"
      @click="this.$router.push('/driver/profile/exit')"
    />
  </div>

  <BottomNavigation />
</template>

<script>
import Navbar from "../fields/NavbarDriver.vue";
import BottomNavigation from "../fields/BottomNavigationDriver.vue";
import ButtonIcon from "../fields/ButtonIcon.vue";
export default {
  components: {
    Navbar,
    BottomNavigation,
    ButtonIcon,
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