<template>
  <div class="card">
    <div
      class="
        mx-10
        mt-7
        p-10
        bg-white
        rounded-xl
        border border-gray-200
        shadow-lg
        dark:bg-gray-800 dark:border-gray-700
      "
    >
      <div class="grid grid-cols-2 gap-2">
        
        <div class="bg-gray-200 inline-block rounded-lg p-2 text-sm">
          {{ dayOfWeek }} {{ date }}
        </div>
        <div class="bg-gray-200 rounded-lg p-2 text-sm">
          <div class="mx-auto">
            <Accordion title="مشاهده جزییات">
              <p class="p-2">
                {{ detail }}
              </p>
            </Accordion>
          </div>
        </div>
        <div class="rounded-lg p-2 text-sm"><i class="fas fa-map-marker-alt text-blue-600 ml-1"></i>
          از {{ from }}
        </div>
        <div class="rounded-lg p-2 text-sm"><i class="fas fa-map-marker-alt text-blue-600 ml-1"></i>
          به {{ to }}
        </div>
        

       
        <div class="bg-gray-200 rounded-lg p-2 amount text-sm">
          {{ cast }} تومان
        </div>
         <div class="bg-gray-200 rounded-lg p-2 text-sm">{{ billType }}</div>
 <button
          v-if="buttonType === 'waiting'"
          class="
            mt-5
            shadow-lg
            py-2
            px-4
            text-sm
            font-medium
            text-center text-white
            bg-gradient-to-r
            from-cyan
            to-blue-600
            rounded-lg
            border border-gray-300
            hover:bg-gray-100
            focus:ring-4 focus:ring-blue-300
            dark:bg-gray-800
            dark:text-white
            dark:border-gray-600
            dark:hover:bg-gray-700
            dark:hover:border-gray-700
            dark:focus:ring-gray-800
          "
        >
          ویرایش
        </button>
        <button
          v-if="buttonType === 'waiting'"
          class="
            mt-5
            shadow-lg
            py-2
            px-4
            text-sm
            font-medium
            text-center text-white
            bg-gradient-to-r
            from-red-400
            to-red-600
            rounded-lg
            hover:bg-blue-800
            focus:ring-4 focus:ring-blue-300
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
          "
        >
          لغو سفارش
        </button>
       
      </div>

      <div class="grid grid-cols-1 mt-2">
        <button
          v-if="buttonType === 'canceled'"
          class="
            mt-5
            shadow-lg
            py-2
            px-4
            text-sm
            font-medium
            text-center text-white
            bg-gradient-to-r
            from-cyan
            to-blue-600
            rounded-lg
            border border-gray-300
            hover:bg-gray-100
            focus:ring-4 focus:ring-blue-300
            dark:bg-gray-800
            dark:text-white
            dark:border-gray-600
            dark:hover:bg-gray-700
            dark:hover:border-gray-700
            dark:focus:ring-gray-800
          "
        >
          بازگشت به چرخه
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import Accordion from "./AccordionComp.vue";

export default {
  components: {
    Accordion,
  },
  props: [
    "dayOfWeek",
    "date",
    "detail",
    "from",
    "to",
    "cast",
    "billType",
    "buttonType",
  ],
  methods: {
    log() {
      this.log(this.buttonType);
    },
  },
};
</script>

<style>
.amount {
  direction: rtl;
}
</style>