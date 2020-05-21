<template>
  <svg
    class="dr-loading"
    viewBox="25 25 50 50"
  >
    <circle
      cx="50"
      cy="50"
      r="20"
      fill="none"
    ></circle>
  </svg>
</template>

<script lang="ts">
</script>

<style lang="scss" scoped>
@import '../../../style/animation.scss';
.dr-loading {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 0;
  animation: dr-rotate 1.8s linear infinite;
  circle {
    animation: dr-circular 1.5s ease-in-out infinite;
    stroke: currentColor;
    stroke-width: 3;
    stroke-linecap: round;
  }
}
@keyframes dr-circular {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120;
  }
}
</style>