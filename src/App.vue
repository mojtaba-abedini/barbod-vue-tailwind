<template>
  <div class="container mx-auto w-full text-center">
    <div class="row pt-20">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@font-face {
  font-family: iranyekan;
  font-style: normal;
  font-weight: bold;
  src: url("./fonts/eot/iranyekanwebbold(fanum).eot");
  src: url("./fonts/eot/iranyekanwebbold(fanum).eot?#iefix")
      format("embedded-opentype"),
    /* IE6-8 */ url("./fonts/woff2/iranyekanwebbold(fanum).woff2")
      format("woff2"),
    /* FF39+,Chrome36+, Opera24+*/
      url("./fonts/woff/iranyekanwebbold(fanum).woff") format("woff"),
    /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
      url("./fonts/ttf/iranyekanwebbold(fanum).ttf") format("truetype");
}

@font-face {
  font-family: iranyekan;
  font-style: normal;
  font-weight: 300;
  src: url("./fonts/eot/iranyekanweblight(fanum).eot");
  src: url("./fonts/eot/iranyekanweblight(fanum).eot?#iefix")
      format("embedded-opentype"),
    /* IE6-8 */ url("./fonts/woff2/iranyekanweblight(fanum).woff2")
      format("woff2"),
    /* FF39+,Chrome36+, Opera24+*/
      url("./fonts/woff/iranyekanweblight(fanum).woff") format("woff"),
    /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
      url("./fonts/ttf/iranyekanweblight(fanum).ttf") format("truetype");
}

@font-face {
  font-family: iranyekan;
  font-style: normal;
  font-weight: normal;
  src: url("./fonts/eot/iranyekanwebregular(fanum).eot");
  src: url("./fonts/eot/iranyekanwebregular(fanum).eot?#iefix")
      format("embedded-opentype"),
    /* IE6-8 */ url("./fonts/woff2/iranyekanwebregular(fanum).woff2")
      format("woff2"),
    /* FF39+,Chrome36+, Opera24+*/
      url("./fonts/woff/iranyekanwebregular(fanum).woff") format("woff"),
    /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
      url("./fonts/ttf/iranyekanwebregular(fanum).ttf") format("truetype");
}

@font-face {
  font-family: KalamehWebNoEn;
  font-style: normal;
  font-weight: 100;
  src: url("fonts/woff2/KalamehWebNoEn-Thin.woff2") format("woff2"),
    /* FF39+,Chrome36+, Opera24+*/ url("fonts/woff/KalamehWebNoEn-Thin.woff")
      format("woff"); /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
}

@font-face {
  font-family: KalamehWebNoEn;
  font-style: normal;
  font-weight: 900;
  src: url("fonts/woff2/KalamehWebNoEn-Black.woff2") format("woff2"),
    /* FF39+,Chrome36+, Opera24+*/ url("fonts/woff/KalamehWebNoEn-Black.woff")
      format("woff"); /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
}
@font-face {
  font-family: KalamehWebNoEn;
  font-style: normal;
  font-weight: bold;
  src: url("fonts/woff2/KalamehWebNoEn-Bold.woff2") format("woff2"),
    /* FF39+,Chrome36+, Opera24+*/ url("fonts/woff/KalamehWebNoEn-Bold.woff")
      format("woff"); /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
}
@font-face {
  font-family: KalamehWebNoEn;
  font-style: normal;
  font-weight: normal;
  src: url("fonts/woff2/KalamehWebNoEn-Regular.woff2") format("woff2"),
    /* FF39+,Chrome36+, Opera24+*/ url("fonts/woff/KalamehWebNoEn-Regular.woff")
      format("woff"); /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
}
</style>
