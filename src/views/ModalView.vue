<template>
  <div style="padding: 20px;">
    <HiButton size="large" type="primary" @click="showDefaultHiModal = true">默认弹窗</HiButton>
    <HiButton size="large" type="success" @click="showHiModalTitle = true">自定义标题</HiButton>
    <HiButton size="large" type="warning" @click="showHiModalBody = true">自定义内容</HiButton>
    <HiButton size="large" type="danger" @click="showHiModalNoBtn = true">无按钮弹窗</HiButton>
    <HiButton size="large" type="info" @click="showHiModalBtn = true">自定义按钮弹窗</HiButton>
    <HiButton size="large" type="primary" @click="showHiModal = true">自定义弹窗</HiButton>
  </div>

  <HiModal :show="showDefaultHiModal" @close="showDefaultHiModal = false" />

  <HiModal :show="showHiModalTitle" @close="showHiModalTitle = false">
    <template #header>
      <h3>自定义标题</h3>
    </template>
  </HiModal>

  <HiModal :show="showHiModalBody" @close="showHiModalBody = false">
    <template #body>
      <h3>内容区域设置</h3>
      <p>内容区域设置</p>
    </template>
  </HiModal>

  <HiModal :show="showHiModalNoBtn" @close="showHiModalNoBtn = false">
    <template #footer>
      <template></template>
    </template>
  </HiModal>

  <HiModal :show="showHiModalBtn" @close="showHiModalBtn = false">
    <template #footer>
      <div style="display: flex; justify-content: flex-end;">
        <HiButton type="primary" @click="handleConfirmA">确认</HiButton>
        <HiButton type="danger" @click="handleCancelA">取消</HiButton>
      </div>
    </template>
  </HiModal>

  <HiModal :show="showHiModal" @close="showHiModal = false">
    <template #header>
      <h2>标题</h2>
    </template>
    <template #body>
      <h3>内容区域标题</h3>
      <p>内容区域设置</p>
    </template>
    <template #footer>
      <div style="display: flex; justify-content: flex-end;">
        <HiButton type="primary" @click="handleConfirm">确认</HiButton>
        <HiButton type="danger" @click="handleCancel">取消</HiButton>
      </div>
    </template>
  </HiModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HiButton from '../components/HiButton/HiButton.vue'
import HiModal from '../components/HiModal/HiModal.vue'

const showDefaultHiModal = ref(false)
const showHiModalTitle = ref(false)
const showHiModalBody = ref(false)
const showHiModalNoBtn = ref(false)
const showHiModalBtn = ref(false)
const showHiModal = ref(false)

const handleConfirmA = () => {
  console.log('confirmed')
  showHiModalBtn.value = false
}

const handleCancelA = () => {
  console.log('canceled')
  showHiModalBtn.value = false
}

const handleConfirm = () => {
  console.log('confirmed')
  showHiModal.value = false
}

const handleCancel = () => {
  console.log('canceled')
  showHiModal.value = false
}
</script>

