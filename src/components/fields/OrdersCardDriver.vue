<template>
  <div class="card">
    <div
      class="
        mx-10
        mt-7
        pt-10
        px-10
        pb-6
        bg-white
        rounded-xl
        border border-gray-200
        shadow-lg
        dark:bg-gray-800 dark:border-gray-700
      "
    >
      <div class="grid grid-cols-1 gap-3">
        <div class="bg-gray-400 inline-block rounded-lg p-2 text-sm text-white">
          {{ dayOfWeek }} {{ date }}
        </div>

        <div class="bg-gray-200 rounded-lg p-2 text-sm mt-1.5">
          <div class="mx-auto">
            <div class="grid grid-cols-2 gap-4 m-3">
              <div class="rounded-lg p-2 text-sm bg-white font-bold">
                <i class="fas fa-map-marker-alt text-green-600 ml-1"></i>
                مبدا :
              </div>
              <div class="rounded-lg p-2 text-sm bg-white">
                {{ from }}
              </div>

              <div class="rounded-lg p-2 text-sm bg-white font-bold">
                <i class="fas fa-map-marker-alt text-green-600 ml-1"></i> مقصد :
              </div>
              <div class="rounded-lg p-2 text-sm bg-white">
                {{ to }}
              </div>
            </div>

            <Accordion title="مشاهده جزییات" class="text-sm p-3">
              <div class="grid grid-cols-2 gap-4 m-3">
                <div class="rounded-lg p-2 amount text-sm bg-white font-bold">
                  صافی راننده :
                </div>

                <div class="rounded-lg p-2 amount text-sm bg-white">
                  {{ cast }} تومان
                </div>
                <div class="rounded-lg p-2 text-sm bg-white font-bold">
                  نوع پرداخت :
                </div>
                <div class="rounded-lg p-2 text-sm bg-white">
                  {{ billType }}
                </div>

                <div class="rounded-lg p-2 text-sm bg-white font-bold">
                  نوع ناوگان :
                </div>
                <div class="rounded-lg p-2 text-sm bg-white">{{ carType }}</div>
                <div class="rounded-lg p-2 text-sm bg-white font-bold">
                  نوع بار :
                </div>
                <div class="rounded-lg p-2 text-sm bg-white">
                  {{ cargoType }}
                </div>
                <div class="rounded-lg p-2 text-sm bg-white font-bold">
                  وزن بار :
                </div>
                <div class="rounded-lg p-2 text-sm bg-white">
                  {{ weight }} کیلوگرم
                </div>
              </div>
            </Accordion>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-2">
          <button
            v-if="buttonType === 'current'"
            class="
              mt-2
              shadow-lg
              py-2
              px-4
              text-sm
              font-medium
              text-center text-white
              bg-gradient-to-r
              from-red-500
              to-red-700
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
            بار را لغو میکنم
          </button>

          <button
            v-if="buttonType === 'active'"
            class="
              mt-2
              shadow-lg
              py-2
              px-4
              text-sm
              font-medium
              text-center text-white
              bg-gradient-to-r
              from-green-500
              to-green-700
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
            بار را می برم
          </button>
        </div>
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
    "carType",
    "cargoType",
    "weight",
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