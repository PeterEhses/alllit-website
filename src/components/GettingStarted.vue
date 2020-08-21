<template>
  <div id="gettingstarted">
    <duotone
    class="duotone"
    src="https://images.unsplash.com/photo-1597265774095-a9461d3ce759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"
    :topgrad="{
      gradients: [120,130,135,135],
      s2: true,
      s3: true
    }"
    :bottomgrad="{
      gradients: [5,15,45,70],
      s1: false,
      s3: false,
      s2: false
    }"
  />
    <hooper :itemsToShow="1" :centerMode="true" pagination="yes" :wheelControl="false" :keysControl="false" class="carousel">
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
      <slide v-for="(slide, id) in slides" :key="id">
        <CarouselComponent :content="slide" :number="id+1"/>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>

    </hooper>

    <div class="startedtext">
      <h3>wanna get right into it?</h3>
      Download a copy and follow these easy steps to get started!
    </div>
  </div>


</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination, Navigation as HooperNavigation} from 'hooper';
import 'hooper/dist/hooper.css';

import CarouselComponent from '@/components/CarouselComponent.vue'

export default {
  data(){
    return{
  slides: [
    {
      img: "/img/joyride 1.png",
      text: "When you open alllit for the first time or start a new project, you’ll be greeted by the devices view. "
    },
    {
      img: "/img/joyride 2.png",
      text: "Choose an existing template for your device or create a new one. Give your device a name, an ID, set up the matrix size or let the program handle everything automatically."
    },
    {
      img: "/img/joyride 3.png",
      text: "Automatically discover connected devices and add all of them, any selection, or fill in any single IPs in the template and add them manually. You can specify an IP range through wildcards <kbd>*</kbd>, ranges <kbd>-</kbd> and separated by comma <kbd>,</kbd>."
    },
    {
      img: "/img/joyride 4.png",
      text: "Your added devices will show up in the detailed device manager list. You can edit them and check their status from here at any time."
    },
    {
      img: "/img/joyride 5.png",
      text: "Open the code editor view from the view selection drawer to view and modify the default program."
    },
    {
      img: "/img/joyride 6.png",
      text: "Here you can set up p5 and javascript sketches to interact with your devices however you want."
    },
    {
      img: "/img/joyride 7.png",
      text: "In the code editor you’ll find familiar functions such as tabs, a console and your syntax highlighted and linked code."
    },
    {
      img: "/img/joyride 9.png",
      text: "If you want to access any existing project, add a new one or use any existing sketch open its system folder here. Any assets and node packages you’d want to include will be stored here, too. All files will be accessible from inside the editor through tabs."
    },
    {
      img: "/img/joyride 8.png",
      text: "To preview your animation at any time, press the play button in the preview window."
    },

    {
      img: "/img/joyride 10.png",
      text: "To set up your devices, enter the mapping view. By default, the pixel map will show an overview of your sketch."
    },
    {
      img: "/img/joyride 11.png",
      text: "You can zoom and adjust the pixel aspect ratio from the settings bar."
    },
    {
      img: "/img/joyride 12.png",
      text: "To add a device to the mapping, simply drag it from the device list onto the map. Depending on your settings, it will either snap to the pixel grid or you will be able to scale and rotate it freely. To edit multiple devices at once, group them in the device list by dragging any onto one another."
    },
    {
      img: "/img/joyride 13.png",
      text: "To easily identify devices, change their color by clicking and dragging on the colored label."
    },
    {
      img: "/img/joyride 14.png",
      text: "If you ever lose any device, press the locate icon to jump to it on the mapping or press the eye icon to blink the real device."
    },
    {
      img: "/img/joyride 15.png",
      text: "To change settings and program simple static colors for single devices on the fly, drop down the detailed device settings. Here you’ll also see additional information about the device's status."
    },
    {
      img: "/img/joyride 16.png",
      text: "If you ever want to change the look of the interface, switch to a different theme or change anything else under the hood, head to the settings view. To change the layout and included panels of any view, simply drag panels into or from the add card drawer. "
    },
  ]
  }
},
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
    CarouselComponent
  }
}
</script>

<style lang="scss">
@import 'alllit-design-system/dist/system/tokens/tokens.scss';

#gettingstarted{
  position: relative;
  display: flex;
  width: 100%;
  background-color: var(--bg-primary);
}

.startedtext{
  position: relative;
  width: 25%;

  font-size: $size-4;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: $safespace $space-header;
  margin-bottom: $safespace;
  text-align: left;
}

.duotone{
  position: absolute !important;
  top: 0;
  left: 0;
  width: 75vw;
  height: 100vh;
}
.carousel{

  width: 75%;
  height: 100vh;
  & section{
    width: 100%;
    height: 100vh;
  }

  & .hooper-list{
    display: flex;
    flex-direction: column-reverse;
  }
  & .hooper-pagination{
    bottom: auto;
    top: 0;
  }

  & .hooper-indicator{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 16px;
    height: 16px;
    margin: $icon-padding;
    border: $space-s solid var(--text-color);
    border-radius: $radius-force-circle;
    background: transparent;
    //background-color: var(--bg-primary) ;
    &:hover{
      background: transparent;
    }
    &.is-active{
      background: transparent;
      &:before{
        padding: 0;
        margin: 0;
        border-radius: $radius-force-circle;
        position: relative;
        content: " ";
        width: 6px;
        height: 6px;
        background-color: var(--text-color);
      }

    }
  }

  & .icon{
    height: $icon-size*4;
    width: auto;
    fill: var(--text-color);
  }
}
@media (max-width: 1080px){
  #gettingstarted{
    & .hooper-pagination{
      display: none;
    }
    flex-direction: column-reverse;
    min-height: 100vh;
    & .carousel{
      width: 100%;
      height: auto;
      max-height: 100vh;
    }
    & .startedtext{
      flex-grow: 1;
      flex-shrink: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 75%;
      padding: 0;
      margin: 0;
      & h3{
        margin: .4em 0;
      }
    }
  }
}
@media (max-width: 450px){
  .carousel {
    & .icon{
      width: 3em;
    }
    & .carcomp{
      padding: 1em;
    }
  }
}
</style>
