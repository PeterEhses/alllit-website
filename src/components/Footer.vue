<template>
  <div id="footer">
    <footer>
      <div class="footersection">
        <div class="top">
          <h5>documentation</h5>

          <span><a href="https://system.alllit.peter-ehses.de/">view design guide</a></span>
        </div>
        <div class="bottom">
<a href="https://system.alllit.peter-ehses.de/"><img src="https://unpkg.com/simple-icons@v3/icons/facebook.svg" /></a>
        </div>
      </div>
      <div class="footersection">
        <div class="top">
          <h5>get started</h5>

          <span><a href="https://system.alllit.peter-ehses.de/">start your journey here</a></span>
        </div>
        <div class="bottom">
<a href="https://system.alllit.peter-ehses.de/"><img src="https://unpkg.com/simple-icons@v3/icons/twitter.svg" /></a>
        </div>
      </div>
      <div class="footersection">
        <div class="top">
          <h5>download</h5>

          <span><a href="https://github.com/PeterEhses/alllit">source</a></span>
          <span><a href="https://github.com/PeterEhses/alllit/releases">releases</a></span>
        </div>
        <div class="bottom">
<a href="https://system.alllit.peter-ehses.de/"><img src="https://unpkg.com/simple-icons@v3/icons/instagram.svg" /></a>
        </div>
      </div>
      <div class="footersection">
        <div class="top">
          <h5>community</h5>

          <span><a href="https://discord.gg/d5xQq9G" target="_blank">discord</a></span>
          <span><a href="https://www.reddit.com/r/alllit/">reddit</a></span>
        </div>
        <div class="bottom">
<router-link to="/datenschutz" >Datenschutz</router-link> <router-link to="/impressum" >Impressum</router-link>
        </div>
      </div>
      <background/>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import 'alllit-design-system/dist/system/tokens/tokens.scss';
#footer{
  padding-top: $safespace;
  position: relative;
  width: 100%;
  min-height: 33vh;
  background: var(--bg-primary);
}
footer{
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  background: red;
  & a{
    color: var(--text-color);
  }
  & span{
    font-size: $size-4;
    & a{
      text-decoration: underline;
    }
  }
}
.footersection{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  position: relative;
  width: 25%;

  & .top{
    min-height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    & h5{
      margin-top: $safespace;
    }
  }
  & .bottom{
    margin-top: 1em;
    & img{
      font-size: $size-0;
      width: 1em;
      height: 1em;
    }
    & a span{
      font-size: $size-0;
    }
    margin-bottom: $safespace;
  }
}

@media (max-width: 900px){
  #footer{
    height: auto;
  }
  footer{
    flex-direction: column;
    align-items: stretch;
    //flex-wrap: wrap;
    & .footersection:nth-child(1){
      background: var(--secondary-color);
    }
    & .footersection:nth-child(2){
      background: var(--grad-color);
    }
    & .footersection:nth-child(3){
      background: var(--primary-color);
    }
    & .footersection:nth-child(4){
      background: var(--bg-primary);
    }

    & .footersection{
      width: 100%;
      height: 12.5vh;
      flex-direction: row;

      & .top{
        justify-content: center;
        height: auto;
        width: 75%;
        & h5{
          margin: 0;
          margin-bottom: .64em;
        }
        margin: 0;
      }
      & .bottom{
        width: 25%;
        margin: 0;
        overflow: hidden;
      }
    }
  }
  @media (max-height: 900px){
    footer .footersection{
      height: auto;
      padding: 1em 0;
    }
  }
}
@media (max-width: 390px){
  footer .footersection .bottom a{
    font-size: $size-fineprint;
  }
}

</style>
