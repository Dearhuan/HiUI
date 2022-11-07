<template>
  <div style="padding: 20px;">
    <div>
      <HiButton>Default</HiButton>
      <HiButton type="primary">Primary</HiButton>
      <HiButton type="success">Success</HiButton>
      <HiButton type="info">Info</HiButton>
      <HiButton type="warning">Warning</HiButton>
      <HiButton type="danger">Danger</HiButton>
    </div>
    <div class="mb-10">
      <HiButton plain>Plain</HiButton>
      <HiButton type="primary" plain>Primary</HiButton>
      <HiButton type="success" plain>Success</HiButton>
      <HiButton type="info" plain>Info</HiButton>
      <HiButton type="warning" plain>Warning</HiButton>
      <HiButton type="danger" plain>Danger</HiButton>
    </div>
    <div class="mb-10">
      <HiButton round>Round</HiButton>
      <HiButton type="primary" round>Primary</HiButton>
      <HiButton type="success" round>Success</HiButton>
      <HiButton type="info" round>Info</HiButton>
      <HiButton type="warning" round>Warning</HiButton>
      <HiButton type="danger" round>Danger</HiButton>
    </div>

    <div class="mb-10 mt-10">
      <HiButton disabled>Default</HiButton>
      <HiButton type="primary" disabled>Primary</HiButton>
      <HiButton type="success" disabled>Success</HiButton>
      <HiButton type="info" disabled>Info</HiButton>
      <HiButton type="warning" disabled>Warning</HiButton>
      <HiButton type="danger" disabled>Danger</HiButton>
    </div>
    <div class="mb-10">
      <HiButton plain disabled>Plain</HiButton>
      <HiButton type="primary" plain disabled>Primary</HiButton>
      <HiButton type="success" plain disabled>Success</HiButton>
      <HiButton type="info" plain disabled>Info</HiButton>
      <HiButton type="warning" plain disabled>Warning</HiButton>
      <HiButton type="danger" plain disabled>Danger</HiButton>
    </div>

    <div class="mb-10 mt-10">
      <HiButton>Default</HiButton>
      <HiButton size="large" type="primary">Primary</HiButton>
      <HiButton size="small" type="success">Success</HiButton>
      <HiButton size="large" type="info">Info</HiButton>
      <HiButton size="small" type="warning">Warning</HiButton>
      <HiButton size="large" type="danger">Danger</HiButton>
    </div>

    <div class="mb-10 mt-10">
      <HiButton color="#626aef">Default</HiButton>
      <HiButton color="#626aef" plain>Plain</HiButton>
      <HiButton color="#626aef" disabled>Disabled</HiButton>
      <HiButton color="#626aef" disabled plain>Disabled Plain</HiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import HiButton from '../components/HiButton/HiButton.vue'
</script>

<style lang="scss" scoped>
.mb-10 {
  margin-bottom: 10px;
}
.mt-10 {
  margin-top: 10px;
}
</style>