<template>
  <nav
    class="
      fixed
      inset-0
      py-3
      h-20
      bg-gradient-to-l
      from-green-400
      to-green-600
      hover:text-gray-700
      focus:text-gray-700
      shadow-lg
      w-full
    "
  >
    <div class="text-right px-10 pt-3">
      <div>
        <a class="text-xl text-white font-semibold pt-20" href="#">{{
          title
        }}</a>
        <a href="#"
          ><i @click="goToBack" class="fa fa-arrow-right ml-5 text-white"></i
        ></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    goToBack() {
      this.$router.back();
    },
  },
};
</script>

<style>
</style>