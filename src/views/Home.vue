<template>
  <div class="home">
    <HeroMain/>
    <div id="features">
      <h2>Features</h2>
      <middle-text imgsrc="https://images.unsplash.com/photo-1544981037-82284dcf0a0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      content="alllit features three main areas to make the main stages of your lighting design project organized and agile."
      style="scroll-snap-align: start;"
      :bottomgrad="{
        s2: false
      }"
      />
      <Devices/>
      <Editor/>
      <Mapping/>
      <Variability/>
      <GettingStarted style="scroll-snap-align: start;"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroMain from '@/components/HeroMain.vue'
import Mapping from '@/components/Mapping.vue'
import Editor from '@/components/Editor.vue'
import Devices from '@/components/Devices.vue'
import Variability from '@/components/Variability.vue'
import GettingStarted from '@/components/GettingStarted.vue'
export default {
  name: 'Home',
  components: {
    HeroMain,
    Mapping,
    Editor,
    Devices,
    Variability,
    GettingStarted
  }
}
</script>

<style lang="scss">
:root{
  scroll-snap-type: y proximity;
}
</style>
