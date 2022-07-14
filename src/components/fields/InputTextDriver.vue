<template>
  <input
    :type="type"
    :id="id"
    class="
      mt-3
      bg-gray-50
      border border-gray-300
      text-gray-700 text-sm
      rounded-lg
      focus:text-gray-700
      focus:bg-white
      focus:border-green-600
      focus:outline-none
      text-right
      block
      w-full
      p-3
      shadow-md
    "
    :placeholder="placeholder"
    v-on:keyup="$emit('childData', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    type: String,
    id: String,
    placeholder: String,
  },
};
</script>

<style>
</style>