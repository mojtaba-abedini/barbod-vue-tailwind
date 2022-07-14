<template>
  <Navbar title="بار من" />
  <div class="w-full mx-auto mt-8">
    <div
      class="
        fixed mx-5 mt-3 top-20 inset-x-0 shadow-lg bg-white p-6 rounded-xl
      "
      role="group"
    >
      <button
        @click="previousShow"
        type="button"
        class="
          mx-0.5
          py-2
          px-4
          text-sm
          font-medium
          text-gray-900
          bg-white
          border-t border-b border-gray-200
          hover:bg-gray-100 hover:text-green-600
          focus:z-10 focus:ring-2 focus:bg-green-500 focus:text-white
          dark:bg-gray-700 dark:border-gray-600
          rounded-l-md
          dark:text-white
          dark:hover:text-white
          dark:hover:bg-gray-600
          dark:focus:ring-blue-500
          dark:focus:text-white
        "
      >
        بارهای پیشین
      </button>
      <button
        id="currentButton"
        @click="currentShow"
        type="button"
        class="
          py-2
          px-4
          text-sm
          font-medium
          text-gray-900
          bg-white
          rounded-r-md
          focus:outline-none
          border border-gray-200
          hover:bg-gray-100 hover:text-green-600
          focus:z-10 focus:ring-2 focus:bg-green-500 focus:text-white
          dark:bg-gray-700
          dark:border-gray-600
          dark:text-white
          dark:hover:text-white
          dark:hover:bg-gray-600
          dark:focus:ring-blue-500
          dark:focus:text-white
        "
      >
        بارهای جاری
      </button>
    </div>
    <div class="h-full cardDiv grid grid-cols-1 lg:grid-cols-2 lg:gap-0">
      <OrdersCard
        v-show="currentCargosShow === true"
        v-for="(currentCargo, index) in currentCargos"
        :key="index"
        :dayOfWeek="currentCargo.dayOfWeek"
        :date="currentCargo.date"
        :detail="currentCargo.detail"
        :from="currentCargo.from"
        :to="currentCargo.to"
        :cast="currentCargo.cast"
        :billType="currentCargo.billType"
        :carType="currentCargo.carType"
        :cargoType="currentCargo.cargoType"
        :weight="currentCargo.weight"
        buttonType="current"
      />
      <OrdersCard
        v-show="previousCargosShow === true"
        v-for="(previousCargo, index) in previousCargos"
        :key="index"
        :dayOfWeek="previousCargo.dayOfWeek"
        :date="previousCargo.date"
        :detail="previousCargo.detail"
        :from="previousCargo.from"
        :to="previousCargo.to"
        :cast="previousCargo.cast"
        :billType="previousCargo.billType"
        :carType="previousCargo.carType"
        :cargoType="previousCargo.cargoType"
        :weight="previousCargo.weight"
        buttonType="previous"
      />
    </div>
  </div>

  <BottomNavigation />
</template>

<script>
import Navbar from "../fields/NavbarDriver.vue";
import BottomNavigation from "../fields/BottomNavigationDriver.vue";
import OrdersCard from "../fields/OrdersCardDriver.vue";

import { previousCargos, currentCargos } from "../../info";

export default {
  data() {
    return {
      currentCargosShow: true,
      previousCargosShow: false,

      currentCargos,
      previousCargos,
    };
  },
  components: {
    Navbar,
    BottomNavigation,
    OrdersCard,
  },
  methods: {
    validate() {
      return 1;
    },
    currentShow() {
      this.currentCargosShow = true;
      this.previousCargosShow = false;
    },
    previousShow() {
      this.currentCargosShow = false;
      this.previousCargosShow = true;
    },
  },

  mounted() {
    document.getElementById("currentButton").focus();
  },
};
</script>

<style>
.cardDiv {
  margin-bottom: 100px;
  margin-top: 100px;
  z-index: -1;
}

/* width */
::-webkit-scrollbar {
  width: 2px;
  max-height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #06b6d4;
}
</style>