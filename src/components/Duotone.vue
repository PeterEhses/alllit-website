<template>
  <!-- <all-container :src="imgsrc" class="image" v-if="imgsrc" :gradients="grads" :s1="s1" :s2="s2" :s3="s3"> -->
  <all-container
  :style="style"
  class="container"
  :gradients="topgradcomputed.gradients"
  :reverse="true"
  :s1="topgrad.s1"
  :s2="topgrad.s2"
  :s3="topgrad.s3"
  >
    <div class="before"></div>
    <div class="after"></div>

    <all-container
    class="container"
    :gradients="bottomgradcomputed.gradients"
    :reverse="false"
    :s1="bottomgrad.s1"
    :s2="bottomgrad.s2"
    :s3="bottomgrad.s3"
    >
      <div >



    <slot/>
    </div>

    </all-container>
  </all-container>
</template>

<script>
export default {
  props: {
    topgrad: {
      type: Object,
      default: ()=>{return{
        gradients: [95,115,135,135],
        s1: true,
        s2: true,
        s3: true
      }}
    },
    bottomgrad: {
      type: Object,
      default: ()=>{return{
        gradients: [0,0,20,40],
        s1: true,
        s2: true,
        s3: true
      }}
    },
    src: {
      type: String,
      default: ""
    }
  }, computed: {
    topgradcomputed(){
      return{
        gradients: this.topgrad.gradients || [95,115,135,135]
      }
    },
    bottomgradcomputed(){
      return{
        gradients: this.bottomgrad.gradients || [0,0,20,40]
      }
    },
    style(){
      return {
        background: "linear-gradient(black, black), url("+ this.src+ ") no-repeat center fixed",
        position: "relative",
        'background-size': "cover",
        'background-blend-mode': 'saturation'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.before{
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: var(--secondary-color);
  opacity: .5;
  mix-blend-mode: darken;
}

.after{
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: .5;
  background-color: var(--primary-color);
  mix-blend-mode: lighten;
}

</style>
