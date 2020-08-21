<template>
  <div id="bg" aria-hidden="true">
    <div class="sec" v-if="s1">

    </div>
    <div v-else class="bgcol">

    </div>
    <div class="half" v-if="s2">
    </div>
    <div v-else class="bgcol">

    </div>
    <div class="prim" v-if="s3">

    </div>
    <div v-else class="bgcol">

    </div>
    <div class="bgcol">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    s1: {
      type: Boolean,
      default: true
    },
    s2: {
      type: Boolean,
      default: true
    },
    s3: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
#bg{
  z-index: 0;
  //background-color: var(--bg-primary);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  & > * {
    width: 25%;
    height: 100%;
  }
  & .prim{
    background-color: var(--primary-color);
  }
  & .half{
    background-color: var(--grad-color);
  }
  & .sec{
    background-color: var(--secondary-color);
  }
  & .bgcol{
    background-color: var(--bg-primary);
  }
}
</style>
