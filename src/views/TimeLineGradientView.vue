<template>
  <div>
    <HiTimeLineGradient :timeLineList="list" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HiTimeLineGradient from '../components/HiTimeLineGradient/HiTimeLineGradient.vue'

const list = ref()

list.value = [
  {
    content: ['Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.Doloremque et distinctio quod molestiae ut.', 'Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.Doloremque et distinctio quod molestiae ut.'],
    time: '10-11 08:57',
    title: '深圳10月10日新增14例确诊病例和19例无症状感染者',
    origin: '信息来源：界面新闻',
    link: 'https://h5.baike.qq.com/mobile/landing.html?docid=20221011A016LQ00&amp;isNews=1&amp;adtag=wxjk.yqssc.yqdt',
  },
  {
    content: 'Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.Doloremque et distinctio quod molestiae ut.',
    origin: '信息来源：界面新闻',
    link: 'https://h5.baike.qq.com/mobile/landing.html?docid=20221011A016LQ00&amp;isNews=1&amp;adtag=wxjk.yqssc.yqdt',
    linkText: 'News'
  },
  {
    content: ['Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.Doloremque et distinctio quod molestiae ut.', 'Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.Doloremque et distinctio quod molestiae ut.'],
    time: '10-11 08:57',
    title: '深圳10月10日新增14例确诊病例和19例无症状感染者',
    link: 'https://h5.baike.qq.com/mobile/landing.html?docid=20221011A016LQ00&amp;isNews=1&amp;adtag=wxjk.yqssc.yqdt',
  },
  {
    content: 'Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.Doloremque et distinctio quod molestiae ut.'
  },
  {
    content: 'Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos.Doloremque et distinctio quod molestiae ut.'
  }
]
</script>

<style scoped>

</style>