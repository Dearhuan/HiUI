<template>
  <div class="g-card-link">
    <div class="g-card-item"
         v-for="(item, k) in cardList"
         :key="k">
      <a :href="item.link"
         rel="external nofollow"
         target="_self"
         :title="item.title">{{ item.title }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { CardItem } from './HiCard'

const props = defineProps({
  cardList: {
    type: Array as PropType<CardItem[]>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.g-card-link {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  text-align: center;
  line-height: 38px;
  .g-card-item {
    background: blue;
    padding: 0 10px;
    border-radius: 5px;
    height: 38px;
    cursor: pointer;
    overflow: hidden;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  .g-card-item:nth-of-type(2n) {
    background: rgba(44, 104, 255, 0.1);
  }
  .g-card-item:nth-of-type(2n + 1) {
    background: rgba(56, 203, 137, 0.1);
  }
}
</style>