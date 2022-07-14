<template>
  <select
    @change="onChange($event)"
    class="
      shadow-lg
      rounded-lg
      p-3
      mt-5
      form-select
      appearance-none
      block
      w-full
      text-right
      font-normal
      text-gray-700 text-sm
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      transition
      ease-in-out
      m-0
      focus:text-gray-700
      focus:bg-white
      focus:border-green-600
      focus:outline-none
    "
    aria-label="Default select example"
  >
    <option>ناوگان مورد نظر را انتخاب کنید</option>
    <option v-for="(car, index) in cars" value="index" :key="index">
      {{ car.name }}
    </option>
  </select>
</template>

<script>
import { cars } from "../../info";
export default {
  data() {
    return {
      cars,
      selectedCar: "",
    };
  },
  methods: {
    onChange(event) {
      this.selectedCar =
        event.target.options[event.target.options.selectedIndex].text;
      this.$emit("childData", this.selectedCar);
    },
  },
};
</script>

<style>
</style>