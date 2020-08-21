<template>
<div class="image">
  <slot/>
  <div class="decoration" ref="deco" aria-hidden="true">
    <div :style="{width: quadDiv[0]+'px', background: cssGradients[0]}">
    </div>
    <div :style="{width: quadDiv[1]+'px', background: cssGradients[1]}">
      <!-- <div :style="{ background: cssGradients[2]}">
        </div> -->
    </div>
    <div :style="{width: quadDiv[2]+'px', background: cssGradients[3]}">
    </div>
    <div :style="{width: quadDiv[3]+'px', background: cssGradients[4]}">
    </div>
  </div>
</div>
</template>

<script>
function offsetLeft(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  return rect.left + scrollLeft
}

export default {
  data() {

    return {
      windowWidth: 0,
      selfWidth: 0,
      selfOffset: 0,
    }
  },
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
    /**
     * gradient start values by column. ignores column visibility
     */
    gradients: {
      type: Array,
      default: () => [
        25,
        50,
        75,
        100
      ]
    },
    src: {
      type: String
    },
    size: {
      type: Number
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
    }
  },
  computed: {
    quadDivData(){
      let singleDiv = this.windowWidth / 4;
      let startDivWidth = singleDiv - this.selfOffset % singleDiv
      let startDivRaw = (this.selfOffset - singleDiv + startDivWidth)
      let startDiv = startDivRaw / singleDiv
      let endDivWidth = (this.selfWidth - startDivWidth) % singleDiv
      let numInter = (this.selfWidth - endDivWidth - startDivWidth) / singleDiv;
      return{
        singleDiv,
        startDivWidth,
        startDivRaw,
        startDiv,
        endDivWidth,
        numInter
      }
    },
    quadDiv() {

      let divs = []
      if (this.quadDivData.startDiv > 0) {
        for (let i = 0; i < Math.floor(this.quadDivData.startDiv); i++) {
          divs.push(0)
        }
      }
      if (this.quadDivData.startDivWidth > 0) {
        divs.push(this.quadDivData.startDivWidth)
      }
      for (let i = 0; i < this.quadDivData.numInter; i++) {
        divs.push(this.quadDivData.singleDiv)
      }
      if (this.quadDivData.endDivWidth > 0) {
        divs.push(this.quadDivData.endDivWidth)
      }
      while (divs.length < 4) {
        divs.push(0)
      }


      return divs

    },
    cssGradients() {
      let cs = "var(--secondary-color)"
      let cg = "var(--grad-color)"
      let cp = "var(--primary-color)"
      let cbg = "var(--bg-primary)"

      let gc = [
        cs,
        cg,
        cp,
        cbg
      ]

      if (!this.s1) {
        gc[0] = cbg
      }

      if (!this.s2) {
        gc[1] = cbg
      }

      if (!this.s3) {
        console.log("yeet")
        gc[2] = cbg
      }

      let nums1 = [
        100 - this.gradients[0],
        100 - this.gradients[1],
        100 - this.gradients[2],
        100 - this.gradients[3]
      ]
      let nums2 = [
        135 - this.gradients[0],
        135 - this.gradients[1],
        135 - this.gradients[2],
        135 - this.gradients[3]
      ]

      if(this.reverse){

        for(let i = 0; i < nums1.length; i++){
            if(nums2[i] < 0){
              nums2[i] = 0;
            }
            if(nums1[i] < 0){
              nums1[i] = 0;
            }
        }

        return [

          "linear-gradient(" + gc[0] + nums1[0] + "%, rgba(0,0,0,0.0)" + nums2[0] + "%)",
          "linear-gradient(" + gc[1] + nums1[1] + "%, rgba(0,0,0,0.0)" + nums2[1] + "%)",
          "",
          "linear-gradient(" + gc[2] + nums1[2] + "%, rgba(0,0,0,0.0)" + nums2[2] + "%)",
          "linear-gradient(" + gc[3] + nums1[3] + "%,  rgba(0,0,0,0.0)" + nums2[3] + "%)"

        ]
      }


      for(let i = 0; i < nums1.length; i++){
          if(nums2[i] > 100){
            nums2[i] = 100;
          }
          if(nums1[i] > 100){
            nums1[i] = 100;
          }
      }

      return [

        "linear-gradient(rgba(0,0,0,0.0)" + nums1[0] + "%, " + gc[0] + nums2[0] + "%)",
        "linear-gradient(rgba(0,0,0,0.0)" + nums1[1] + "%, " + gc[1] + nums2[1] + "%)",
        "",
        "linear-gradient(rgba(0,0,0,0.0)" + nums1[2] + "%, " + gc[2] + nums2[2] + "%)",
        "linear-gradient(rgba(0,0,0,0.0)" + nums1[3] + "%,  " + gc[3] + nums2[3] + "%)"

      ]
    }
  },
  methods: {
    getDims() {
      console.dir(this.$refs['deco'])
      console.dir(this.$el)
      this.windowWidth = document.body.clientWidth
      this.selfOffset = offsetLeft(this.$refs.deco);
      this.selfWidth = this.$refs['deco'].clientWidth
    }
  },
  mounted() {
    this.getDims();
    let that = this
    this.$el.addEventListener('resize', () => {
      that.getDims()
    })
    window.addEventListener('resize', () => {
      that.getDims()
    })
  },
  beforeDestroy() {
    let that = this
    this.$el.removeEventListener('resize', () => {
      that.getDims()
    })
    window.removeEventListener('resize', () => {
      that.getDims()
    })
  }
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    height: auto;
}

.image {
    position: relative;
    height: auto;
}

.decoration {
    pointer-events: none;
    display: flex;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    & div {
        height: 100%;
    }
    & :nth-child(1) {
        background: linear-gradient(rgba(0,0,0,0.0) 65%, var(--secondary-color) 99%);
    }
    & :nth-child(2) {
        background: linear-gradient(rgba(0,0,0,0.0) 65%, var(--primary-color) 99%);
        & > * {
            background: linear-gradient(rgba(0,0,0,0.0) 65%, var(--secondary-color) 99%);
            opacity: 0.5;
            width: 100%;
            height: 100%;
        }
    }
    & :nth-child(3) {
        background: linear-gradient(rgba(0,0,0,0.0) 65%, var(--primary-color) 99%);
    }
    & :nth-child(4) {
        background: linear-gradient(rgba(0,0,0,0.0) 65%, var(--bg-primary) 99%);
    }
}
</style>
