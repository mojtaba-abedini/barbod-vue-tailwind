<template>
  <Navbar title="بارهای فعال" />
  <div class="w-full mx-auto pt-11 pb-11">
    <div
      class="fixed mx-5 mt-3 top-20 inset-x-0 shadow-lg bg-white pt-6 pb-4 px-6 rounded-xl"
      role="group"
    >
      <div class="grid grid-cols-1 gap-4">
        <div class="mx-auto w-full bg-gray-200 rounded-lg p-4">
         
          <Accordion title="فیلتر کردن" class="text-sm">
         
            <div class="grid grid-cols-1 gap-4 m-3 lg:grid-cols-2">
              <div>
                <label
                  class="block text-gray-700 text-sm text-right"
                  for="nationalCode"
                >
                  محل بارگیری
                </label>
                <SelectCity
                  id="filterLoadingPlace"
                  @childData="saveToStore('filterLoadingPlace', $event)"
                />
              </div>
              <div>
                <label
                  class="block text-gray-700 text-sm text-right"
                  for="nationalCode"
                >
                  محل تخلیه بار
                </label>
                <SelectCity
                  id="filterDischargePlace"
                  @childData="saveToStore('filterDischargePlace', $event)"
                />
              </div>
              <div>
                <label
                  class="block text-gray-700 text-sm text-right mb-5"
                  for="nationalCode"
                >
                  تاریخ
                </label>
                <InputText
                  class="input"
                  type="text"
                  @childData="saveToStore('filterDate', $event)"
                  id="filterDate"
                  maxlength="10"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
                />
              </div>
              <div>
                <label
                  class="block text-gray-700 text-sm text-right"
                  for="nationalCode"
                >
                  ناوگان
                </label>
                <SelectCar
                  id="filterCar"
                  @childData="saveToStore('filterCar', $event)"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 m-3">
              <div>
                <label
                  class="block text-gray-700 text-sm text-right"
                  for="nationalCode"
                >
                  قیمت
                </label>
                <InputText
                  class="input"
                  type="text"
                  @childData="saveToStore('filterPrice', $event)"
                  id="filterPrice"
                  maxlength="10"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
                />
              </div>

              <div class="grid grid-cols-2 gap-4">
                <Button title="اعمال فیلتر" class="mt-4" @click="filter" />
                <Button
                  title="حذف فیلترها"
                  class="mt-4"
                  @click="deleteFilter"
                />
              </div>
            </div>
          </Accordion>
             
        </div>
        <div :class="[filterClass , 'grid grid-cols-2 gap-4 mx-auto']">
            <div class="text-sm bg-green-600 rounded-xl p-2 text-white" v-if="filterFrom">مبدا : {{this.$store.state.filter.filterLoadingPlace}}</div>
            <div class="text-sm bg-green-600 rounded-xl p-2 text-white" v-if="filterTo">مقصد : {{this.$store.state.filter.filterDischargePlace}}</div>
        </div>
        
      </div>
    </div>
    <div class="h-full cardDiv grid grid-cols-1 lg:grid-cols-2 lg:gap-0 ">
      <OrdersCard
        v-for="(filterCargo, index) in filterCargos"
        :key="index"
        :dayOfWeek="filterCargo.dayOfWeek"
        :date="filterCargo.date"
        :detail="filterCargo.detail"
        :from="filterCargo.from"
        :to="filterCargo.to"
        :cast="filterCargo.cast"
        :billType="filterCargo.billType"
        :carType="filterCargo.carType"
        :cargoType="filterCargo.cargoType"
        :weight="filterCargo.weight"
        buttonType="active"
      />
    </div>
  </div>

  <BottomNavigation />
</template>

<script>
import Navbar from "../fields/NavbarDriver.vue";
import BottomNavigation from "../fields/BottomNavigationDriver.vue";
import OrdersCard from "../fields/OrdersCardDriver.vue";
import Accordion from "../fields/AccordionComp.vue";
import InputText from "../fields/InputTextDriver.vue";
import Button from "../fields/ButtonDriver.vue";
import SelectCity from "../fields/SelectCityDriver.vue";
import SelectCar from "../fields/SelectCarDriver.vue";
import { activeCargos } from "../../info";

export default {
  data() {
    return {
      filterClass:`lg:grid-cols-${this.filter.length}`,
      filters:[],
      activeCargos,
      filterCargos:[],
      filterFrom:false,
      filterTo:false,
     
    };
  },
  components: {
    Navbar,
    BottomNavigation,
    OrdersCard,
    Accordion,
    InputText,
    Button,
    SelectCity,
    SelectCar,
  },

mounted(){
  this.filterCargos = this.activeCargos;
  },

  methods: {
    saveToStore(input, event) {
      if (input === "filterLoadingPlace")
        this.$store.state.filter.filterLoadingPlace = event;
      if (input === "filterDischargePlace")
        this.$store.state.filter.filterDischargePlace = event;
      if (input === "filterDate") this.$store.state.filter.filterDate = event;
      if (input === "filterCar") this.$store.state.filter.filterCar = event;
      if (input === "filterPrice") this.$store.state.filter.filterPrice = event;
    },

    filter() {

      document.getElementById("filterB").click();

      this.filterCargos = this.activeCargos;

      if (!this.$store.state.filter.filterLoadingPlace == "" || !this.$store.state.filter.filterLoadingPlace == "شهر مورد نظر را انتخاب کنید")
        {
         this.filterCargos = this.filterCargos.filter((filterCargo) => filterCargo.from === this.$store.state.filter.filterLoadingPlace);
         this.filterFrom=true;
         this.filters.push('filterFrom');
        }
     
      if (!this.$store.state.filter.filterDischargePlace == "" || !this.$store.state.filter.filterDischargePlace == "شهر مورد نظر را انتخاب کنید")
        {
           this.filterCargos = this.filterCargos.filter((filterCargo) => filterCargo.to === this.$store.state.filter.filterDischargePlace); 
           this.filterTo=true;  
           this.filters.push('filterTo');   
        }

      if (!this.$store.state.filter.filterDate == "")
        {
           this.filterCargos = this.filterCargos.filter((filterCargo) => filterCargo.date === this.$store.state.filter.filterDate);      
        }

   

    },

    deleteFilter() {
      document.getElementById("filterB").click();
       this.filterCargos = this.activeCargos;
      this.filterFrom=false;
      this.filterTo=false;
    },
    validate() {
      return 1;
    },
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