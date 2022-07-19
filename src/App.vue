<template>
  <router-view></router-view>
  <section class="bg-video">
    <video class="bg-video-item" src="http://static.anlan.xyz/screenbg.mp4" muted autoplay loop></video>
    <video class="bg-video-item" src="http://static.anlan.xyz/screenbg.mp4" muted autoplay loop></video>
  </section>
</template>

<style scoped>
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  font-size: 0;
}
.bg-video-item {
  width: 100%;
}
</style>
