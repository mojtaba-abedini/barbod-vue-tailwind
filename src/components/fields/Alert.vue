<template>
  <div
    class="
    alert
      mt-10
      bg-gray-100
      shadow-lg
      border  border-red-500
      text-red-500
      px-4
      py-3
      rounded-lg
    
    "
    role="alert"

  >
    <p class="text-sm">{{title}}</p>
  </div>
</template>

<script>

export default {
    props:['title']
};
</script>

<style>

</style>