<template>
  <article id="variability">
    <image-text
    title="your way is the way"
    body="To truly fit your specific usecase, alllit is fully customizable. Apart from the usual light and dark themes for easy viewing, we added two extra dark themes for cases where spill light matters."
    imgsrc2="/img/farb varianten.png"
    direction="left"
    :gradients="[0,0,0,0]"
    :s2="false"
    :s3="false"
    />
    <div class="slido">
      <div class="slideros">
        <HueColorPicker :color="sec" @dragged="changeSecCol"/>
      </div>
      <div class="texto">
        <p>for all your further customization needs, you can change pretty much anything from fonts to code syntax to accent colors from the settings. In fact, if you're on Google Chrome, you can change the accent colors for this site just like in the app. <strong>Try the sliders!</strong></p>
      </div>
      <div class="slideros">
        <HueColorPicker :color="prim" @dragged="changePrimCol"/>
      </div>
    </div>
    <div class="bgdiv" aria-hidden="true">
      <div class="">

      </div>
      <div class="">

      </div>
      <div class="">

      </div>
    </div>
  </article>
</template>

<script>
export default {
  computed: {
    prim(){
      return {h:this.$root.$children[0].theme.primary_color, s:0, v:0}
    },
    sec(){
      return {h:this.$root.$children[0].theme.secondary_color, s:0, v:0}
    }
  },
  methods: {
      changePrimCol(col){
        this.$root.$children[0].theme.primary_color = col.h;
      },
      changeSecCol(col){
        this.$root.$children[0].theme.secondary_color = col.h;
      }
  },
  mounted(){
    console.dir(this.$root)

  }
}
</script>

<style lang="scss" scoped>
@import 'alllit-design-system/dist/system/tokens/tokens.scss';
#variability{
  min-height: 100vh;
  padding: 2.5em 0 10em 0;
  position: relative;
}
.bgdiv{
  top: 0;
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  & :nth-child(1){
    background: var(--bg-primary);
    width: 75%;
    height: 25vh;
  }
  & :nth-child(2){
    background: var(--bg-primary);
    width: 50%;
    height: 25vh;
  }
  & :nth-child(3){
    background: var(--bg-primary);
    width: 25%;
    height: 25vh;
  }
}

.slido{
  display: flex;
  height: 50vh;
  & .texto{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25%;
    font-size: $size-4;
    text-align: left;
    padding: $safespace $space-header;
    box-sizing: border-box;
  }
  & .slideros{
    display: flex;
    justify-content: center;
    width: 25%;
    min-height: 10em;
  }
}
@media (max-width: 900px){
  .slido{
    flex-wrap: wrap;
    height: 66vh;
    & .slideros{
      justify-content: center;
      flex-grow: 1;
      & .slido{
        margin: 0;
      }
    }
  }
  .slido :nth-child(1) {
    order: 2;
    margin-right: 25%;
  }
  .slido :nth-child(2) {

    order: 1;
    width: 50%;
    margin: 0 25%;
    & p{
      margin: 0;
    }
  }
  .slido :nth-child(3) {

    order: 3;
    margin-right: 25%;
  }
}
@media (max-width: 500px){
  .slido .texto{
    width: 100%;
    margin: 0;
    padding: 2em;
  }
}
</style>
