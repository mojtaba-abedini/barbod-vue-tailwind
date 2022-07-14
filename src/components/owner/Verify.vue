<template>
  <Background />
  <TopBox />
  
    
  
  <div class="pt-20">
    <H1 title="باربد" class="m-1"/>
    <form class="w-80 mx-auto">
      <div class="mb-6">
        <label for="mobile" class="block text-sm font-medium text-white"
          >شماره تلفن همراه خود را وارد کنید</label
        >

        <InputText
          type="text"
          id="mobile"
          placeholder="09"
          @childData="showData($event)"
          maxlength="11"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
        />
      </div>

      <Button title="دریافت کد تایید" v-on:click.prevent="validate" />

      <AlertMessage v-if="alert === true" title="تلفن همراه خود را وارد کنید" />
      <AlertMessage
        v-if="alertNumber === true"
        title="تلفن همراه خود را به صورت صحیح وارد کنید"
      />
    </form>
  </div>
  <router-view></router-view>
</template>
<script>
import TopBox from "../fields/TopBox.vue";
import Background from "../fields/Background.vue";
import H1 from "../fields/H1.vue";
import InputText from "../fields/InputText.vue";
import Button from "../fields/Button.vue";
import AlertMessage from "../fields/Alert.vue";

export default {
  components: {
    TopBox,
    Background,
    H1,
    InputText,
    Button,
    AlertMessage,
  },

  data() {
    return {
      phone: "",
      alert: false,
      alertNumber: false,
    };
  },
  methods: {
    showData(event) {
      this.phone = event;
    },

    validate() {
      console.log();
      if (this.phone === "") {
        this.alert = true;

        setTimeout(() => {
          this.alert = false;
        }, 1800);
      } else if (this.phone.length < 11) {
        this.alertNumber = true;

        setTimeout(() => {
          this.alertNumber = false;
        }, 1800);
      } else if (this.phone != "") {
        this.$router.push("/owner/code");
      }
    },
  },
};
</script> 


<style>
</style>