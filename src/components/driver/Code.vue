<template>
  <Background />
  <TopBox />

  <div class="pt-20">
    <H1 title="باربد" class="text-center" />

    <form class="w-80 mx-auto text-center">
      <label class="mb-3 text-white" for="InputMobile"
        >کد وارد شده به تلفن همراه خود را وارد کنید</label
      >
      <div class="flex flex-wrap mb-6">
        <div class="w-1/4 px-3 mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-first-name"
          >
          </label>
          <InputText
            class="text-center"
            @childData="codeToStore(0, $event)"
            type="text"
            id="CodeInput1"
            maxlength="1"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
          />
        </div>
        <div class="w-1/4 px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-last-name"
          >
          </label>
          <InputText
            class="text-center"
            @childData="codeToStore(1, $event)"
            type="text"
            id="CodeInput2"
            maxlength="1"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
          />
        </div>
        <div class="w-1/4 px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-last-name"
          >
          </label>
          <InputText
            class="text-center"
            @childData="codeToStore(2, $event)"
            type="text"
            id="CodeInput3"
            maxlength="1"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
          />
        </div>
        <div class="w-1/4 px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-last-name"
          >
          </label>
          <InputText
            class="text-center"
            type="text"
            @childData="codeToStore(3, $event)"
            id="CodeInput4"
            maxlength="1"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
          />
        </div>
      </div>

      <div class="d-grid gap-1 mt-4">
        <p v-if="Seconds > 9" class="text-center mb-5 text-green-600">
          00:{{ Seconds }}
        </p>
        <p
          v-if="Seconds <= 9 && Seconds > 0"
          class="text-center mb-5 text-green-600"
        >
          00:0{{ Seconds }}
        </p>
        <p v-if="Seconds <= 0" class="text-center mb-5 text-green-600">
          ارسال مجدد کد
        </p>
      </div>
      <div class="text-center mb-6">
        <router-link class="text-center text-green-600" to="/owner/verify"
          >ویرایش تلفن همراه</router-link
        >
      </div>

      <Button
        title="ورود به برنامه"
        v-on:click.prevent="validate"
        id="submit"
      />
      <AlertMessage
        class="text-center"
        v-if="alert === true"
        title="لطفا کد چهار رقمی را بصورت صحیح وارد کنید"
      />
    </form>
  </div>
  <router-view></router-view>
</template> <script>
import TopBox from "../fields/TopBoxDriver.vue";
import Background from "../fields/Background.vue";
import H1 from "../fields/H1.vue";
import InputText from "../fields/InputTextDriver.vue";
import Button from "../fields/ButtonDriver.vue";
import AlertMessage from "../fields/Alert.vue";

export default {
  components: {
    TopBox,
    Background,
    H1,
    InputText,
    Button,
    AlertMessage
  },
  data() {
    return {
      Seconds: 59,
      Minutes: "00",
      Code: "2458",

      alert: "",
      input1: "",
    };
  },
  methods: {
    codeToStore(index, event) {
      this.$store.state.verifyCode[index] = event;

      if (event != "" && index < 3)
        document.getElementById("CodeInput" + (index + 2)).focus();
      if (event != "" && index === 3) document.getElementById("submit").focus();
    },

    timer() {
      if (this.Seconds > 0) {
        setTimeout(() => {
          this.Seconds = this.Seconds - 1;
          this.timer();
        }, 1000);
      }
    },

    nextPlease: function (index, input) {
      console.log(this.$store.state.verifyCode[index]);
      document.getElementById(input).focus();
    },

    validate() {
      if (this.$store.state.verifyCode.length < 4) {
        this.alert = true;

        setTimeout(() => {
          this.alert = false;
        }, 1800);
      } else {
        this.$router.push("/driver/info");
      }
    },
  },
  created() {
    this.timer();
  },
  mounted() {
    document.getElementById("CodeInput1").focus();
  },
};
</script> 


<style scoped>
.text-center{
  text-align: center !important;
}
</style>