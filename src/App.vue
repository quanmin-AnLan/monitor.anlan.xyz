<template>
  <router-view></router-view>
  <video class="bg-video" src="http://static.anlan.xyz/screenbg.mp4" muted autoplay loop></video>
</template>

<style scoped>
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
}
</style>
