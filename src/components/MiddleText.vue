<template>
  <duotone class="middletext" :src="imgsrc" :bottomgrad="bottomgrad" :topgrad="topgrad">
    <DeepChipContainer accentcolor="var(--primary-color)" class="container">
    <h4>{{content}}</h4>
  </DeepChipContainer>
  </duotone>
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
    content: {
      type: String,
      default: ""
    },
    imgsrc: {
    type: String,
    default: ""
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'alllit-design-system/dist/system/tokens/tokens.scss';

.container{
  margin: 0 calc( 25% + #{$safespace});
}

.middletext{

  box-sizing: border-box;
  margin: 0 0%;
  padding: calc( 25% + #{$safespace});
  height: 75vh !important;
  display: flex;
  align-items: center;
  justify-content: center;
  & div{
    box-shadow: $shadow-light;
  }

  & h4{
    padding: $safespace;
    font-weight: $weight-normal;
    font-size: $size-2;
    //border: var(--text-color) solid $space-s;
    //border-radius: $radius-l;
  }
}
</style>
