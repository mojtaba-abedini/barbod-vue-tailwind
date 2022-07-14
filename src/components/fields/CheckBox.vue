<template>
    <div class="max-w-sm mx-auto p-8">
        <label class="inline-flex items-center text-white">
          {{ label }}

          <input
            class="
              text-indigo-500
              w-4
              h-4
              ml-2
              focus:ring-indigo-400 focus:ring-opacity-25
              border border-gray-300
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

<style>

</style>