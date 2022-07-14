<template>
  <div
    class="
      grid grid-cols-6
      gap-1
      p-3
      text-gray-700
      bg-white
      hover:bg-gray-300
      focus:ring-4 focus:ring-blue-300
      font-medium
      border border-gray-300
      rounded-lg
      text-sm
      w-full
      sm:w-auto
      cursor-pointer
      shadow-lg
      text-center
      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
    "
  >
    <div><i :class="icon"></i></div>
    <div class="col-span-4">{{ title }}</div>
    <div><i class="fas fa-angle-left"></i></div>
  </div>
</template>

<script>
export default {
  props: ["title", "icon"],
};
</script>

<style>
</style>