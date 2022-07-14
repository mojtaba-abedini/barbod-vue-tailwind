<template>
  <Navbar title="اطلاعات شخصی" />
  <div>
    <div>
      <form
        class="
          bg-white
          rounded
          text-center
          grid grid-cols-1
          lg:grid-cols-2 lg:gap-5
          px-20
          mx-auto
          mt-20
         
        "
      >
        <div class="mb-6 lg:mb-0">
          <label
            class="block text-gray-700 text-sm font-bold text-right"
            for="username"
          >
            نوع ناوگان
          </label>
          <SelectCar />
        </div>
        <div class="mb-6 lg:mb-0">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 text-right"
            for="nationalCode"
          >
            ویژگی ناوگان
          </label>
          <SelectProperty />
        </div>

        <div class="mb-6 lg:mb-0">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 text-right"
            for="nationalCode"
          >
            طول ناوگان
          </label>
          <InputText
            class="input"
            type="text"
            :value="this.carInfo.length"
            id="nationalCode"
            maxlength="10"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
          />
        </div>
        <div class="mb-6 lg:mb-0">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 text-right"
            for="nationalCode"
          >
            ارتفاع ناوگان
          </label>
          <InputText
            class="input"
            type="text"
            :value="this.carInfo.height"
            id="nationalCode"
            maxlength="10"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
          />
        </div>
        <div class="mb-6 lg:mb-0">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 text-right"
            for="nationalCode"
          >
            شماره پلاک
          </label>
          <InputText
            class="input"
            type="text"
            :value="this.carInfo.number"
            id="nationalCode"
            maxlength="10"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
          />
        </div>

      
          <Button
            title="ذخیره اطلاعات"
            v-on:click.prevent="validate"
            class="mt-8 h-10"
          />
      
      </form>
    </div>
  </div>

  <BottomNavigation />
</template>

<script>
import Navbar from "../fields/NavbarDriver.vue";
import BottomNavigation from "../fields/BottomNavigationDriver.vue";
import InputText from "../fields/InputTextDriver.vue";
import Button from "../fields/ButtonDriver.vue";
import SelectCar from "../fields/SelectCarDriver.vue";
import SelectProperty from "../fields/SelectProperty.vue";
import { carInfo } from "../../info.js";

export default {
  data() {
    return {
      carInfo,
    };
  },
  components: {
    Navbar,
    BottomNavigation,
    InputText,
    Button,
    SelectCar,
    SelectProperty,
  },
  methods: {
    validate() {
      this.$router.push("/driver/profile");
    },
  },
};
</script>

<style>
</style>