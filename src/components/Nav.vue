<template>
  <div>
    <div class="rightside" aria-hidden="true">

    </div>
    <div id="nav" :class="[folded ? '' : 'folded', downsize ? 'downsize' : '']">

      <div>
        <div class="logo">
          <Logo/>
          <Icon name="foldout" size="inline" :class="['foldout']" @click.native="folded = !folded"/>
        </div>
        <div class="links">
          <router-link to="/" ref="firstelem">Home</router-link>
          <router-link to="/#features" >Features</router-link>
          <router-link to="/#gettingstarted">Get Started</router-link>
          <a href="https://system.alllit.peter-ehses.de" target="_blank">Documentation</a>
          <a href="https://github.com/PeterEhses/alllit" target="_blank">Contribute</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return {
      windowTop: 0,
      folded: false,
    }
  },
  computed: {
    downsize(){
    let top = this.windowTop;
    if(window.innerWidth > 885){
      if(this.$refs['firstelem'] && top >= 120 ){
        return true;
      }
    } else {
      if(this.$refs['firstelem'] && top >= 105 ){
        return true;
      }
    }
      return false;
    }
  },

  methods: {
    onScroll() {
      this.windowTop = window.top.scrollY;
    }
  },
  mounted() {
  window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
}
</script>

<style lang="scss" scoped>
@import 'alllit-design-system/dist/system/tokens/tokens.scss';


.rightside{
  opacity: .5;
  z-index: 21000;
  pointer-events: none;
  right: 0;
  position: fixed;
  width: 25%;
  height: 24em;
  background: linear-gradient(var(--bg-primary), var(--bg-primary) 50%, rgba(0,0,0,0));
}

.foldout{
  display: none;
}

#nav {
  z-index: 1800001;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 25%;
  position: fixed;
  right: 0;
  padding-top: $space-header;

  & > *,
  & .links > * {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 11em;
  }

  & .links{
  }
  a {
    white-space: nowrap;
    text-align: left;
    font-size: $size-2;
    font-weight: $weight-normal;
    text-decoration: none;
    color: var(--text-color);

    &.router-link-exact-active {
      color: var(--primary-color);
    }
  }
  & .logo svg{
    position: relative;
    left: -.35em;
    width: 11.3em;
    height: auto;
    margin-bottom: $space-header;
  }
}

@media (max-width: 1200px) {
  #nav{
    position: absolute;
    &.downsize{
      position: fixed;
      top: -120px;
    }
}
}
@media (max-height: 700px) {
  #nav{
    position: absolute;
    &.downsize{
      position: fixed;
      top: -120px;
    }
}
}

@media (max-width: 1000px) {
  #nav{
      width: 17rem;
  }
}

@media (max-width: 885px) {
  .rightside{
    display: none;
  }

  #nav{
    background: var(--bg-primary);
    width: calc(100% - #{$space-m * 2});
    left: $space-m;
    border: $space-s solid var(--primary-color);
    border-radius: 0 0 $radius-l $radius-l;
    padding-top: $space-indent;
    padding-bottom: $space-indent;
    & > div{
      align-items: center;
    }
    &.downsize{
      margin-top: 1em;
    }
    & .links{

      & a{
        align-items: center;
        width: auto;
      }
    }

     & .logo svg{
      margin: 0;
    }
    .foldout{
      user-select: none;
      font-size: $size-1;
      display: inline-block;
      transition: all $duration-quickly;
      padding: $space-indent;
    }

    &.folded{
      padding-bottom: 85px;
      &.downsize{
        margin-top: 0;
        top: -105px;
        & .logo{
          position: fixed;
        }
      }
      & .links{
        position: absolute;
        top: calc(-100% - 85px);
      }
      & .logo{
        display: flex;
        flex-direction: column;
        position: absolute;
      }
      & .foldout{

        transform: rotate(180deg);
      }
    }
  }
}

</style>
