<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import baseRouters from './router/modules/base'
import HiSider from './components/HiSider/HiSider.vue'
import HiButton from './components/HiButton/HiButton.vue'

const sliderTitle = ref<string>('我的菜单')

const sliderShow = ref<boolean>(false)

const list = baseRouters.filter(p => {
  return p.name !== '404'
}).map(x => {
  return {
    title: x.zhName,
    link: x.path
  }
})

const router = useRouter()

const handleLink = (link: string) => {
  sliderShow.value = false
  router.push(link)
}

const position = reactive({
  x: 0,
  y: 0
})

const handleMouse = (e: MouseEvent) => {
  position.x = e.pageX
  position.y = e.pageY

  if(position.x === 0 && !sliderShow.value) {
    sliderShow.value = !sliderShow.value
  }
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouse)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', handleMouse)
})
</script>

<template>
  <HiSider :title="sliderTitle" :show="sliderShow" @close="sliderShow = false">
    <template #drawerBody>
      <div class="btn-box">
        <HiButton round v-for="(item, i) in list" :key="i" :type="i % 2 == 0 ? 'primary' : 'danger'" size="large"
        @click="handleLink(item.link)">{{ item.title }}</HiButton>
      </div>
    </template>
  </HiSider>
  <router-view />
</template>

<style scoped>
.btn-box {
  display: flex;
  flex-wrap: wrap;
}
</style>
