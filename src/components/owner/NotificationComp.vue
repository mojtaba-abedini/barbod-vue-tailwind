<template>
  <Navbar title="اعلان ها" />
  <div class=" mx-20 mt-20">
    <div
      class="
        font-bold
        p-3
        mt-6
        text-gray-700 text-right
        bg-white
        hover:bg-gray-300
        focus:ring-4 focus:ring-blue-300
        border border-gray-300
        rounded-lg
        text-sm
        w-full
        sm:w-auto
        shadow-lg
        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
      "
      v-for="(notification, index) in notifications"
      :key="index"
    >
      {{ notification }}
    </div>
    <Button
      title="بازگشت"
      @click="this.$router.push('/owner/profile')"
      class="mt-8"
    />
  </div>

  <BottomNavigation />
</template>

<script>
import Navbar from "../fields/Navbar.vue";
import BottomNavigation from "../fields/BottomNavigation.vue";
import Button from "../fields/Button.vue";
import { notifications } from "../../info.js";
export default {
  data() {
    return {
      notifications,
    };
  },
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