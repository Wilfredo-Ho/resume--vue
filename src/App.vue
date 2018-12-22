<template>
  <div id="app">
    <mu-button flat color="primary" @click="changeLang" class='btn-lang'>{{currentLangText}}</mu-button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
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
</style>
