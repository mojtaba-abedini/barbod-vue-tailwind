<template>
  <button
    v-on:click.prevent="validate"
    type="submit"
    class="
      text-white
      bg-gradient-to-r from-green-500 to-green-700
      hover:bg-blue-500
      focus:ring-4 focus:ring-blue-300
      focus:outline-none
      font-medium
      rounded-lg
      text-sm
      w-full
      sm:w-auto
      px-5
      py-2.5
      text-center
      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
    "
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style>
</style>