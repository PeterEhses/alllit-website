<template>
  <div id="app" :style="cssVars">
    <div id="foreground">
      <Nav/>
      <router-view/>
      <Footer/>
    </div>
    <background/>

  </div>
</template>

<script>
import designTokens from "alllit-design-system/dist/system/tokens/tokens.raw.json"
import Nav from "@/components/Nav.vue"
import Footer from '@/components/Footer.vue'

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    h=h/360
    s=s/100
    v=v/100
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

export default {
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      theme: {
        primary_color: 348,
        secondary_color: 60,
        text_color: designTokens.props.offblack.value,
        bg_primary: designTokens.props.offwhite.value,
        bg_2: designTokens.props.gray2.value,
        bg_4: designTokens.props.gray4.value,
      }
    }
  },
  computed: {
    gradColor(){
      let c1 = HSVtoRGB(this.theme.primary_color, 60,93)
      let c2 = HSVtoRGB(this.theme.secondary_color, 29,92)
      console.log(c1, c2)
      return("rgb("+Math.round((c1.r+c2.r)/2)+" "+Math.round((c1.g+c2.g)/2)+" "+Math.round((c1.b+c2.b)/2)+")")
    },
    cssVars() {

      return {
        "--text-color": this.theme.text_color, //default text color. also in icons, etc.
        "--bg-primary": this.theme.bg_primary, // default background. it's behind most things
        "--bg-2": this.theme.bg_2, // gray 2 for light mode.
        "--bg-4": this.theme.bg_4, // gray 4 for light mode.
        "--primary-hue": this.theme.primary_color, // primary accent color hue. for smart math stuff
        "--primary-color": "hsla( var(--primary-hue), 80%, 65%, 1)", // primary color as hacky thing
        "--secondary-color": "hsla(" + this.theme.secondary_color + ", 66%, 79%, 1)",
        "--grad-color": this.gradColor
      }
    },
  },
  watch: {
    theme: {
      handler(){
        this.setCss();
      },
      deep: true
    }
  },
  methods: {
    setCss(){
      for(let [key, value] of Object.entries(this.cssVars)){

        document.documentElement.style.setProperty(key, value);
      }
    },
    afterLeave () {
      this.$root.$emit('triggerScroll')
    }
  },
  mounted(){
    this.setCss();
  }
}
</script>

<style lang="scss">

@import 'alllit-design-system/dist/system/tokens/tokens.scss';
@import url("https://use.typekit.net/tlc2wzo.css");
@import url("https://cdn.jsdelivr.net/gh/tonsky/FiraCode@4/distr/fira_code.css");

:root {
  font-weight: $weight-normal;
  font-family: $font-default;
  font-size: $size-paragraph;
  background-color: var(--bg-primary);
  max-width: 100vw;
  overflow-x: hidden;

}
body{
  position: relative;
  margin: 0;
  padding: 0;
}

h1{
  font-size: $size-0*1.25;
}

h2{
   height: 0;
   opacity: 0;
   margin: 0;
}

h3{
  font-size: $size-1;
  margin: .64em 0;
}

h5{
  font-size: $size-2;
  margin: .64em 0;
}



input {
  font-weight: $weight-normal;
  font-family: $font-default;
  font-size: $size-paragraph;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
input[type="number"] {
  -moz-appearance: textfield;
}

/* width */
::-webkit-scrollbar {
  width: $space-m * 3;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--bg-2);
  margin: 2px;
  border: $space-m solid var(--bg-primary);
  border-radius: $radius-force-circle;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--bg-4);
}

::-webkit-resizer,
::-webkit-scrollbar-button,
::-webkit-scrollbar-corner {
  display: none;
}






#app {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}



#foreground{
  position: relative;
  z-index: 9001;
}


.legal{
  box-sizing: border-box;
  padding: $safespace;
  padding-top: 50vh;
  width: 100%;
  min-height: 100vh;
}

/* breakpoints to mobile */

@media (max-width: 1350px) {}

</style>
