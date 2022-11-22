<template>
  <teleport to='body'>
    <div class="gradient-bg" :style="bgColor">
      <div class="text-content" :style="{color: textColor}">
        Hello Awesome
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const deg = ref(0)
const bgColor = ref('background: linear-gradient(277deg,#04f8fb 1%,#ff006e 100%);')

const textColor = ref('#ffe200')

//获取随机数
const getRandNum = (min, max) => {
  return parseInt(Math.random() * (max - min + 1) + min);
};
// 获取随机16进制颜色
const getRandomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}

setInterval(() => {
  deg.value++
  if (deg.value >= 360) {
    deg.value = 0
  }
  bgColor.value = `background: linear-gradient(${deg.value}deg,#04f8fb 1%,#ff006e 100%);`
}, 200);

setInterval(() => {
  textColor.value = getRandomColor()
}, 2000);
</script>

<style lang="scss" scoped>
.gradient-bg {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;

  .text-content {
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    font-weight: 600;
    font-style: italic;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #00d0ff, 0 0 70px #00d0ff, 0 0 80px #00d0ff, 0 0 100px #00d0ff, 0 0 150px #00d0ff;
    animation-name: activeText;
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }
  @keyframes activeText {
    0% {
      transform: scale(1.1);
    }
    30% {
      transform: scale(0.9);
    }
    60% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1.1);
    }
  }
}
</style>
