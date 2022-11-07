<template>
  <div id="box">
    <div class="flex" v-for="(item,i) in [1,2,3,4,5]" :key="i">
      <HiSkeleton type="image" :animated="animated" containerStyle="width:200px;" itemStyle="width:200px;height:150px;" />
      <div style="flex: 1;margin-left:10px;position:relative;">
        <HiSkeleton type="h1" :animated="animated" containerStyle="height:30px;" itemStyle="height: 100%;" />
        <HiSkeleton type="text" :animated="animated" containerStyle="width:80%;height:20px;margin-top: 10px;"
          itemStyle="height: 100%;" />
        <div style="position:absolute;bottom:0;">
          <HiSkeleton v-for="(item, j) in [1,2,3,4]" :key="j" type="text" :animated="animated"
            containerStyle="display:inline-block;width:auto;margin-right:10px;" itemStyle="width:60px;height:30px;" />
        </div>
        <div style="position:absolute;bottom:0;right:10px;">
          <HiSkeleton type="circle" :animated="animated" itemStyle="width:50px;height:50px;" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HiSkeleton from '../components/HiSkeleton/HiSkeleton.vue'

const animated = ref<boolean>(true)

</script>

<style>
#box {
  padding: 10px;
  background: #e3e3e3;
}
.flex {
  display: flex;
  margin-bottom: 10px;
  background: #fff;
  padding: 10px;
}
.flex:last-child {
  margin-bottom: 0;
}
</style>