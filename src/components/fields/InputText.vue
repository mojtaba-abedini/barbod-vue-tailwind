<template>
  <input
    :type="type"
    :id="id"
    class="
      mt-5
      bg-gray-50
      border border-gray-300
      text-gray-700 text-sm
      rounded-lg
      focus:text-gray-700
      focus:bg-white
      focus:border-blue-500
      focus:outline-none
      text-right
      block
      w-full
      p-2.5
      shadow-lg
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