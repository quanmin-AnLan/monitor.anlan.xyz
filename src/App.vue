<template>
  <router-view></router-view>
  <section class="bg-video">
    <video class="bg-video-item" src="http://static.anlan.xyz/screenbg.mp4" muted autoplay loop></video>
  </section>
</template>

<script setup>
import { ElMessage } from 'element-plus';

ElMessage({
  message: '欢迎进入安澜网监控大盘',
  type: 'success'
})
</script>

<style scoped>
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.bg-video-item {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  object-fit: cover;
  min-height: 800px;
}
</style>
