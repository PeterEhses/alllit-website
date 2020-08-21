<template>
  <div :class="['imagetext', direction, imsize, centertext]">
    <div class="imagecontainer first" v-if="imgsrc2">
      <all-container :src="imgsrc2" :class="['image', imgsrc2 == '/img/blank1x1.png' ? 'blank' : '']"  :gradients="grads" :s1="s1" :s2="s2" :s3="s3">
        <ColorPicker v-if="imgsrc2=='gradientGoesHere'"/>
        <img :src="imgsrc2" v-else>
      </all-container>
    </div>
    <div class="text">
      <h3 v-if="title">{{title}}</h3>
      <p v-if="body" v-html="body"></p>
    </div>
    <div class="imagecontainer second" v-if="imgsrc">
      <all-container :src="imgsrc" :class="['image', imgsrc == '/img/blank1x1.png' ? 'blank' : '']"  :gradients="grads" :s1="s1" :s2="s2" :s3="s3">
        <img :src="imgsrc">
      </all-container>
    </div>
  </div>
</template>

<script>

export default {

  props: {
    gradients: {
      type: Array
    },
    title: {
      type: String,
      default: ""
    },
    body: {
      type: String,
      default: ""
    },
    imgsrc: {
      type: String,
      default: ""
    },
    imgsrc2: {
      type: String,
      default: ""
    },
    imsize: {
      type: String,
      default: "large",
      validator: value => {
        return value.match(/(large|small)/)
      }
    },
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
    },
    direction: {
      type: String,
      default: "left",
      validator: value => {
        return value.match(/(left|right)/)
      },
    }
  },
  computed: {
    centertext(){
      if(this.imgsrc != "" && this.imgsrc2 != ""){
        return "centertext"
      }
      else {
        return ""
      }
    },
    grads(){
      if(this.gradients){
        return this.gradients
      }
      if(this.direction == "left"){
        if(this.imsize == "large"){
          return [80, 60, 30, 0]
        }
        return [60, 35, 0, 0]
      }
      return undefined
    }

  }
}
</script>

<style lang="scss" scoped>
@import 'alllit-design-system/dist/system/tokens/tokens.scss';

.imagetext{
  position: relative;
  z-index: 8000;
  display: flex;
  margin: 2.5em 0;
}
// .left{
//   flex-direction: row-reverse;
// }
.text{
  font-size: $size-4;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  width: 25%;
  margin-bottom: $safespace;
  padding: $safespace $space-header;
  text-align: left;
  p{
    margin-top: 0;
  }
}
.imagecontainer{
  box-sizing: border-box;
  width: 50%;
  padding: $safespace;
}
.image {
  max-height: calc(100vh - #{$space-header*2});
  width: 100%;
  & img{
    max-height: calc(100vh - #{$space-header*2});
    width: auto;
    max-width: 100%;
  }
}

.large{
  & .imagecontainer{
    width: 75%;
    padding: $space-header*2;
  }
}
.small{
  & .imagecontainer{
    width: 50%;
    padding: $space-header*2;
  }
  & .text{
    width: 25%;
    flex-grow: 0;
  }
}
.centertext{
  align-items: center;
  & .text{
    margin: 0;
  }
  &.left{
    & .imagecontainer.first{

        width: 50%;
      padding: $space-header calc(#{$space-header} + 12.5%);
    }
    & .imagecontainer.second{

        width: 25%;
      padding: $space-header;
    }
  }
  &.right{
    & .imagecontainer.first{
      width: 25%;
      padding: $space-header;

    }
    & .imagecontainer.second{
      width: 50%;
    padding: $space-header calc(#{$space-header} + 12.5%);

    }
  }
}

@media (max-width: 1080px){
  .large .imagecontainer{
    width: 50%;
    padding: $space-header*2;
  }
  .small .text{
    width: 50%;
  }
  .centertext.left,
  .centertext.right{
    & .imagecontainer.first{
      width: 25%;
      padding: $space-header;

  }
  & .imagecontainer.second{

      width: 25%;
    padding: $space-header;
  }
}
}
@media (max-width: 800px){

  .blank{
    display: none;
  }

  .imagetext{
    flex-direction: column-reverse;
    // flex-wrap: wrap;

    & .text{
      width: 100%;
      margin-bottom: 1em;
      padding: 1em $space-header;
    }
    &.left,
    &.right{
      & .imagecontainer{

        &.first,
        &.second{
          max-width: 100%;
          width: auto;
          height: auto;
          max-height: auto;
          & .image{
            max-width: 100%;
            width: auto;
            height: auto;
            max-height: 66vh;
            & img{
              max-width: 100%;
              width: auto;
              max-height: 66vh;
            }
          }
        }

      }
    }
  }
}
</style>
