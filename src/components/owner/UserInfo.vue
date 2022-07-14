<template>
  <Navbar title="ورود به سامانه" />
  <div class="w-full mx-auto mt-20 pt-10">
    <form class="bg-white rounded w-80 mx-auto text-center">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold text-right"
          for="username"
        >
          نام و نام خانوادگی
        </label>
        <InputText
          type="text"
          @childData="saveToStore('name', $event)"
          id="username"
        />
      
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 text-right"
          for="nationalCode"
        >
          کدملی
        </label>
        <InputText
          class="input"
          type="text"
          @childData="saveToStore('nationalCode', $event)"
          id="nationalCode"
          maxlength="10"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
        />
      </div>
      <Button
        title="ذخیره اطلاعات"
        v-on:click.prevent="validate"
        class="mt-8"
      />

      <AlertMessage
        v-if="alertName === true"
        title="نام و نام خانوادگی خود را وارد کنید"
      />
      <AlertMessage
        v-if="alertNationalCode === true"
        title="کد ملی خود را وارد کنید"
      />
      <AlertMessage
        v-if="alertNationalCodeLength === true"
        title="کد ملی نادرست می باشد"
      />
    </form>
  </div>
  <!-- <BottomNavigation/> -->
</template>

<script>
import Navbar from "../fields/Navbar.vue";
import InputText from "../fields/InputText.vue";
import Button from "../fields/Button.vue";
import AlertMessage from "../fields/Alert.vue";
// import BottomNavigation from '../fields/BottomNavigation.vue'
export default {
  components: {
    Navbar,
    InputText,
    Button,
    AlertMessage,
    // BottomNavigation
  },
  data() {
    return {
      alertName: false,
      alertNationalCode: false,
      alertNationalCodeLength: false,
    };
  },
  methods: {
    saveToStore(input, event) {
      if (input === "name") this.$store.state.userInfo.name = event;
      if (input === "nationalCode")
        this.$store.state.userInfo.nationalCode = event;

      console.log(this.$store.state.userInfo.nationalCode);
    },
    validate() {
      if (this.$store.state.userInfo.name === "") {
        this.alertName = true;
        setTimeout(() => {
          this.alertName = false;
        }, 1800);
      } else if (this.$store.state.userInfo.nationalCode === "") {
        this.alertNationalCode = true;
        setTimeout(() => {
          this.alertNationalCode = false;
        }, 1800);
      } else if (this.$store.state.userInfo.nationalCode.length < 10) {
        this.alertNationalCodeLength = true;
        setTimeout(() => {
          this.alertNationalCodeLength = false;
        }, 1800);
      } else {
        this.$router.push("/owner/new-order");
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  direction: rtl;
}

form {
  direction: rtl;
}
.navbar {
  position: absolute;
  width: 100%;
  left: 0;
}

</style>