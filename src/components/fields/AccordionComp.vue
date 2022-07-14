<template>
  <div class="">
    <div class="tab__header">
 
      <a
        href="#"
        class="
          tab__link
          inline-block
          bg-blue-dark
          hover:bg-blue-darker
          no-underline
          text-right
        "
        @click.prevent="active = !active"
        id="filterB"
      >
        <strong>{{ title }}</strong>
        <i class="fas fa-angle-down text-xs mr-1" v-show="!active"></i>
        <i class="fas fa-angle-up text-xs mr-1" v-show="active"></i>
      </a>
    </div>
    <div class="tab__content p-2"  v-show="active"><slot /></div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  

  data() {
    return {
      active: false,
    };
  },
};
</script>

<style>
</style>