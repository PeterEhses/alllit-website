<template>
  <article id="devices">
    <image-text
    title="manage your devices with ease"
    body="alllit allows for fast and detailed registration and customization of devices. Use many preinstalled presets, add your own or import a growing library of community contributed templates."
    imgsrc2="/img/iMac-psd-mockup-template-2.png"
    direction="left"
    :gradients="[85, 40, 50, 0]"
    />
    <image-text
    title=""
    body="The device registration view allows for maximum automation. Turn any setting or field into an automated directive through easy to use configurators.
If your fixture uses color, you will be able to granularly control the output and input color model, as well as configure matrix type devices for a number of pixel mapping and interpolation modes. "
    imgsrc="/img/Group 235.png"
    imgsrc2="gradientGoesHere"
    direction="right"
    :gradients="[0, 0, 25, 25]"
    />

    <image-text
    title=""
    body="To keep all your devices organized, display them in a compact and detailed list. Filter, tag and group devices to keep an overview of large numbers of fixtures of any type. "
    imgsrc2="/img/Group 238.png"
    direction="right"
    imsize="small"
    :gradients="[0, 0, 25, 25]"
    />


    <!-- To keep all your devices organized, display them in a compact and detailed list. Filter, tag and group devices to keep an overview of large numbers of fixtures of any type.  -->

  </article>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#devices{
  padding: 2.5em 0 2.5em 0;
  position: relative;
}
</style>
