<template>
  <Navbar title="اطلاعات شخصی" />
  <div>
    <div>
      <form class="bg-white rounded  text-center grid grid-cols-1 lg:grid-cols-2 lg:gap-5 px-20 mx-auto mt-20">
        <div class="mb-4 md:mb-0">
          <label
            class="block text-gray-700 text-sm font-bold text-right"
            for="username"
          >
            نام و نام خانوادگی
          </label>
          <InputText
            type="text"
            :value="this.userinfo.name + ' ' + this.userinfo.family"
            id="username"
          />
        </div>
        <div class="mb-6  md:mb-0">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 text-right"
            for="nationalCode"
          >
            کدملی
          </label>
          <InputText
            class="input"
            type="text"
            :value="this.userinfo.nationalCode"
            id="nationalCode"
            maxlength="10"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
          />
        </div>
        <div class="mb-6 md:mb-0">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 text-right"
            for="nationalCode"
          >
            تلفن همراه
          </label>
          <InputText
            class="input"
            type="text"
            :value="this.userinfo.mobile"
            id="nationalCode"
            maxlength="10"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
          />
        </div>
        <Button
          title="ذخیره اطلاعات"
          v-on:click.prevent="validate"
          class="mt-10 h-11"
        />
      </form>
    </div>
  </div>

  <BottomNavigation />
</template>

<script>
import Navbar from "../fields/Navbar.vue";
import BottomNavigation from "../fields/BottomNavigation.vue";
import InputText from "../fields/InputText.vue";
import Button from "../fields/Button.vue";
import { userinfo } from "../../info.js";
export default {
  data() {
    return {
      userinfo,
    };
  },
  components: {
    Navbar,
    BottomNavigation,
    InputText,
    Button,
  },
  methods: {
    validate() {
      this.$router.push("/owner/profile");
    },
  },
};
</script>

<style>
</style>