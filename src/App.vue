<template>
  <div id="app">
    <mu-button flat color="primary" @click="changeLang" class='btn-lang'>{{currentLangText}}</mu-button>
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route(to, from) {
      if(to.name === 'Home'){
        this.transitionName = 'slide-right';
      }else{
        this.transitionName = 'slide-left';
      }
    }
  },
  computed: {
    currentLangText () {
      return this.$i18n.locale === 'en' ? '中文' : 'EN';
    }
  },
  methods: {
    changeLang() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'zh' : 'en'
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
html{
  font-size: 16px;
}
html, body, #app{
  width: 100%;
  height: 100%;  
}
.btn-lang {
  background: transparent;
  position: absolute !important;
  top: .5rem;
  right: 0;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
