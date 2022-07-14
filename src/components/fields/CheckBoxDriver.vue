<template>
    <div class="max-w-sm mx-auto p-8">
        <label class="inline-flex items-center text-white">
          {{ label }}

          <input
            class="
          accent-[#50d71e]
           
              w-4
              h-4
              ml-2
             
              rounded
            "
            type="checkbox"
            v-model="checked"
            @change="this.$emit('childData', this.checked)"
            
          />
        </label>
      </div>

      
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
props:['label'],

mounted(){
  this.$emit('childData', this.checked);
}


}
</script>

<style scoped>
label.inline-flex.items-center.text-white {
  color: #007751;
}


</style>