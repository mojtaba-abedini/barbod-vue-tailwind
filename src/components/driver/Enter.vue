<template>

  <Background />
  <TopBox />

  <div>
    <H1 title="باربد" style="margin-top: 70px" />
    <h2 class="mb-10 text-white">بهترین سامانه حمل و نقل ایران</h2>
    <div class="w-80 mx-auto">
      <button @click="validate">
        <span
          class="
            shadow-lg
            bg-gray-100
            hover:bg-white hover:text-green-700
            text-green-600
            font-semibold
            py-3
            px-6
            mt-20
            hover:border-transparent
            rounded
          "
          ><i class="fa fa-sign-in mr-3"></i>ورود به سامانه</span
        >
      </button>



{{date}}
   





      <CheckBox
        label="قوانین و مقررات باربد را می پذیرم"
        @childData="setCheck($event)"
        style="color: black !important"
      />

      <AlertMessage
        v-if="alert === true"
        title="برای ادامه، باید قوانین باربد را بپذیرید"
      />
    </div>
  </div>
</template>

<script>
import TopBox from "../fields/TopBoxDriver.vue";
import Background from "../fields/Background.vue";
import H1 from "../fields/H1.vue";
import CheckBox from "../fields/CheckBoxDriver.vue";
import AlertMessage from "../fields/Alert.vue";


export default {
  data() {
    return {
      checked: true,
      alert: false,
       date: ''
    };
  },

  components: {
    TopBox,
    Background,
    H1,
    CheckBox,
    AlertMessage,

   
  },
  methods: {
    setCheck(event) {
      this.checked = event;
    },
    validate() {
      if (this.checked === true) this.$router.push("/driver/verify");
      else {
        this.alert = true;

        setTimeout(() => {
          this.alert = false;
        }, 1800);
      }
    },
  },
};
</script>

<style>

</style>