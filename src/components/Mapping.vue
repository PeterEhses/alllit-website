<template>
  <article id="mapping">
    <image-text
    title="your entire show in one place"
    body="At it’s core stands alllit’s intuitive workflow for pixel mapping. Devices can simply be added to the pixel map by drag and drop and can then be arranged freely on the map, with as much freedom or constraints as needed."
    imgsrc2="/img/Group 230.png"
    direction="left"
    :s2="false"
    :s3="false"
    />
    <image-text
    title=""
    body="The map comes with many ease of use features to make setup as comfortable as possible. For example, devices can be tagged, grouped and transformed as groups.
The map has an adjustable aspect ratio and devices’ pixels can be up- and down scaled to fit most usecases."
    imgsrc="/img/device list.png"
    direction="right"
    imsize="small"
    :s2="false"
    :s3="false"
    />
    <image-text
    title=""
    body="Single devices can be directly accessed and changed live through a powerful custom interface. Anything that doesn’t require animation can be set up directly from the device list. "
    imgsrc2="/img/List Item.png"
    imgsrc="/img/List Item extended.png"
    :gradients="[0,0,0,0]"
    direction="right"
    :s2="false"
    :s3="false"
    />
    <background :s2="false" :s3="false"/>
  </article>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  #mapping{
    padding: 2.5em 0 2.5em 0;
    position: relative;
  }
</style>
