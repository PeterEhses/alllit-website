<template>
  <article class="herotext">
    <div>
      <h1>bring creative coding into the real world</h1>
      <p>alllit allows you to seamlessly interact with physical lighting and effects devices from a familiar and easy to learn creative coding environment. No experience needed.</p>
      <br/>
      <router-link to="/#gettingstarted">get started</router-link>
    </div>
  </article>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import 'alllit-design-system/dist/system/tokens/tokens.scss';
article{
  box-sizing: border-box;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  & div{
    box-sizing: border-box;
    text-align: left;
    width: 50%;
    padding: 6%;
  }
  & p, & a{
    font-size: $size-2;
  }
  & a{
    color: var(--text-color);
    font-weight: $weight-bold;
  }
}

/* breakpoints to mobile */

@media (max-width: 1480px) {
article{
  & div{
    width: 100%;
    max-width: 53em;
  }
}

}

@media (max-width: 650px){
  article{
    & p,
    & a{
      font-size: $size-4; 

    }
  }
  h1{
    font-size: $size-1;
    margin: .64em 0;
  }
}
</style>
