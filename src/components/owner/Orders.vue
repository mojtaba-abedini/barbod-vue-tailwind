<template>
  <Navbar title="سفارش ها" />
  <div class="w-full mx-auto mt-8">
    <div
      class="
        fixed
        mx-auto
        w-80
        top-20
        inset-x-0
        shadow-lg
        rounded-xl
        bg-white
        p-5
        mt-2.5
      "
      role="group"
    >
      <button
        @click="cancelShow"
        type="button"
        class="
          py-2
          px-4
          text-sm
          font-medium
          text-gray-900
          bg-white
          rounded-l-lg
          border border-gray-200
          hover:bg-gray-100 hover:text-blue-700
          focus:z-10 focus:ring-2 focus:bg-blue-500 focus:text-white
          dark:bg-gray-700
          dark:border-gray-600
          dark:text-white
          dark:hover:text-white
          dark:hover:bg-gray-600
          dark:focus:ring-blue-500
          dark:focus:text-white
        "
      >
        لغو شده
      </button>
      <button
        @click="completedShow"
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
          hover:bg-gray-100 hover:text-blue-700
          focus:z-10 focus:ring-2 focus:bg-blue-500 focus:text-white
          dark:bg-gray-700
          dark:border-gray-600
          dark:text-white
          dark:hover:text-white
          dark:hover:bg-gray-600
          dark:focus:ring-blue-500
          dark:focus:text-white
        "
      >
        حمل شده
      </button>
      <button
        id="waitingButton"
        @click="waitingShow"
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
          hover:bg-gray-100 hover:text-blue-700
          focus:z-10 focus:ring-2 focus:bg-blue-500 focus:text-white
          dark:bg-gray-700
          dark:border-gray-600
          dark:text-white
          dark:hover:text-white
          dark:hover:bg-gray-600
          dark:focus:ring-blue-500
          dark:focus:text-white
        "
      >
        در انتظار
      </button>
    </div>
    <div class="h-full cardDiv grid grid-cols-1 lg:grid-cols-2 lg:gap-0">
      <OrdersCard
        v-show="cancelOrderShow === true"
        v-for="(cancelOrder, index) in cancelOrders"
        :key="index"
        :dayOfWeek="cancelOrder.dayOfWeek"
        :date="cancelOrder.date"
        :detail="cancelOrder.detail"
        :from="cancelOrder.from"
        :to="cancelOrder.to"
        :cast="cancelOrder.cast"
        :billType="cancelOrder.billType"
        buttonType="canceled"
      />
      <OrdersCard
        v-show="waitingOrderShow === true"
        v-for="(waitingOrder, index) in waitingOrders"
        :key="index"
        :dayOfWeek="waitingOrder.dayOfWeek"
        :date="waitingOrder.date"
        :detail="waitingOrder.detail"
        :from="waitingOrder.from"
        :to="waitingOrder.to"
        :cast="waitingOrder.cast"
        :billType="waitingOrder.billType"
        buttonType="waiting"
      />
      <OrdersCard
        v-show="completedOrderShow === true"
        v-for="(completedOrder, index) in completedOrders"
        :key="index"
        :dayOfWeek="completedOrder.dayOfWeek"
        :date="completedOrder.date"
        :detail="completedOrder.detail"
        :from="completedOrder.from"
        :to="completedOrder.to"
        :cast="completedOrder.cast"
        :billType="completedOrder.billType"
        buttonType="completed"
      />
    </div>
  </div>

  <BottomNavigation />
</template>

<script>
import Navbar from "../fields/Navbar.vue";
import BottomNavigation from "../fields/BottomNavigation.vue";
import OrdersCard from "../fields/OrdersCard.vue";

import { cancelOrders, completedOrders, waitingOrders } from "../../info";

export default {
  data() {
    return {
      cancelOrderShow: false,
      waitingOrderShow: true,
      completedOrderShow: false,
      cancelOrders,
      completedOrders,
      waitingOrders,
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
    cancelShow() {
      this.cancelOrderShow = true;
      this.waitingOrderShow = false;
      this.completedOrderShow = false;
    },
    waitingShow() {
      this.cancelOrderShow = false;
      this.waitingOrderShow = true;
      this.completedOrderShow = false;
    },
    completedShow() {
      this.cancelOrderShow = false;
      this.waitingOrderShow = false;
      this.completedOrderShow = true;
    },
  },

  mounted() {
    document.getElementById("waitingButton").focus();
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