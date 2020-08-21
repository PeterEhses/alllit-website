<template>
  <div class="carcomp">
    <img :src="content.img" alt="">
    <div class="content">
      <div aria-hidden="true">

      </div>
      <h3 v-if="number">{{number}}</h3>
      <p v-html="content.text"></p>
    </div>

  </div>

</template>

<script>
export default {
  props: {
    content: {
      type: Object
    },
    number: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'alllit-design-system/dist/system/tokens/tokens.scss';
.content{
  box-sizing: border-box;
  padding: 1rem 3rem;
  display: flex;
  align-items: baseline;
  margin: 1em 0;
  position: relative;
  flex-grow: 1;
  & div{
    position: absolute;
    left: 0;
    top: 0;
    background-color: var(--bg-primary);
    border-radius: $radius-xs;
    opacity: 1;
    width: 100%;
    height: 100%;
    box-shadow: $shadow-light;
  }
}
.carcomp{
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 40px $icon-size*5;
  & h3{
    text-align: left;
    position: relative;
    color: var(--text-color);
  }
  & img{
    max-width: 100%;
    max-height: 100%;
    border-radius: $radius-xs;
  }
  & p{
    margin-left: 1.5em;
    position: relative;
    text-align: left;
    // background-color: var(--bg-primary);

    color: var(--text-color);
    font-size: $size-4;
  }
}
</style>
