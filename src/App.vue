<script setup lang="ts"></script>

<template>
  <div class="wrap">
    <div class="container">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 0;
  font-size: 24px;
  flex-shrink: 0;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  height: 0;
  overflow: auto;
  padding: 20px;
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
