<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="stylus">
  @import "style/reset.styl"
html,body{
    width: 100%;
    height: 100%;
    margin:0;
    overflow: auto;
}
#app {
    width: 100%;
    height: 100%;
    overflow: auto;
    min-width: 1280px;
}
</style>
