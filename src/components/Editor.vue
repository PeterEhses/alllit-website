<template>
  <article id="editor">
    <image-text
    title="everything where you’d expect it"
    body="allit’s code editor comes with everything you are used to from common applications, combined into an easy to digest, beginner friendly package. If you are familiar with Atom, Processing, VSCode or similar IDEs, you will find your way around it immediately.
"
    imgsrc2="/img/Group 239.png"
    direction="left"
    :s3="false"
    :gradients="[80, 20, 50, 0]"
    />
    <image-text
    title=""
    body="You’ll find a live preview next to the editor, to get immediate visual feedback from anything you change in the code. For your advanced file needs, the editor is fully integrated with the system file explorer and the electron console. Import your existing files and get the feedback you know.
"
    imgsrc2="/img/Group 240.png"
    imgsrc="/img/blank1x1.png"
    direction="left"
    imsize="small"
    :s3="false"
    :gradients="[80, 20, 50, 0]"
    />
    <image-text
    title=""
    body="Additionally the editor offers full compatibility with node.js packages. In the code editor, any packages can be used in your own scripts via the standard node package manager of your choice, including interfaces to connected devices, networking, system and other programming languages. The integration is done as usual in code."
    imgsrc="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
    direction="left"
    :s3="false"
    imsize="small"
    :gradients="[0, 30, 60, 0]"
    />
    <background :s3="false"/>
  </article>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#editor{
  padding: 2.5em 0 2.5em 0;
  position: relative;
}
</style>
