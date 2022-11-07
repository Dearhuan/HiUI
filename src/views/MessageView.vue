<template>
  <div style="padding: 20px;">
    <div class="mb-10">
      <HiButton type="primary" @click="openMsg">success</HiButton>
      <HiButton type="primary" @click="openMsg2">warning</HiButton>
      <HiButton type="primary" @click="openMsg3">error</HiButton>
      <HiButton type="primary" @click="openMsg4">text</HiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import HiButton from '../components/HiButton/HiButton.vue'
import HiMessage from '../components/HiMessage/HiMessage'

const openMsg = () => {
  HiMessage.success({
    type: 'success',
    immersive: true,
    content: 'hello, this is message.',
    duration: 2000
  })
}
const openMsg2 = () => {
  HiMessage.warning({
    immersive: true,
    content: 'hello, this is message.',
    duration: 2000
  })
}
const openMsg3 = () => {
  HiMessage.error({
    immersive: true,
    content: 'hello, this is message.',
    duration: 2000
  })
}
const openMsg4 = () => {
  HiMessage.text({
    immersive: true,
    content: 'hello, this is message.',
    duration: 2000
  })
}
</script>

<style lang="scss" scoped>
.mb-10 {
  margin-bottom: 10px;
}
.mt-10 {
  margin-top: 10px;
}
</style>