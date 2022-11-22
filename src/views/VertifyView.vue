<template>
  <div style="padding: 20px;">
    <HiVertify :imgUrl='img' :onSuccess='onSuccess' :onFail='onFail' :onRefresh='onRefresh'/>
  </div>
</template>

<script setup lang="ts">
import HiVertify from '../components/HiVertify/HiVertify.vue'
import HiMessage from '../components/HiMessage/HiMessage'
import img from '../assets/images/404-dark.png'

const onSuccess = () => {
  HiMessage.success({
    type: 'success',
    immersive: true,
    content: 'vertify success',
    duration: 2000
  })
}

const onFail = () => {
  HiMessage.error({
    immersive: true,
    content: 'vertify failed',
    duration: 2000
  })
}

const onRefresh = () => {
  HiMessage.success({
    type: 'success',
    immersive: true,
    content: 'refresh success',
    duration: 2000
  })
}
</script>

<style lang="scss" scoped>
</style>