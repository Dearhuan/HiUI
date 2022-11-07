<template>
  <transition :name="ns.b('fade')">
    <div v-show="show" class="overlay" @click.self="handleClickOutSider">
      <div class="el-drawer ltr">
        <header class="el-drawer-header">
          <span class="el-drawer-title">{{ title }}</span>
          <HiButton type="primary" @click="handleClickOutSider">×</HiButton>
        </header>
        <div class="el-drawer-body">
          <slot name="drawerBody"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import HiButton from '../HiButton/HiButton.vue'
import { useNamespace } from '../../hooks'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  show: {
    type: Boolean
  }
})

const ns = useNamespace('drawer')

const emit = defineEmits({
  close: (evt: MouseEvent) => evt
})

const handleClickOutSider = (evt: MouseEvent) => {
  emit('close', evt)
}
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;

  .el-drawer {
    width: 25%;
    position: absolute;
    box-sizing: border-box;
    background-color: #141414;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 16px 48px 16px rgba(0, 0, 0, .72), 0px 12px 32px #000000, 0px 8px 16px -8px #000000;
    overflow: hidden;
    transition: all .3s;

    .el-drawer-header {
      align-items: center;
      color: #72767b;
      display: flex;
      margin-bottom: 32px;
      padding: 20px;
      padding-bottom: 0;

      .el-drawer-title {
        margin: 0;
        flex: 1;
        line-height: inherit;
        font-size: 1rem;
      }
    }

    .el-drawer-body {
      flex: 1;
      padding: 20px;
      overflow: auto;

      >* {
        box-sizing: border-box;
      }
    }
  }

  .el-drawer.ltr {
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
  }
}

.el-drawer-fade-enter-active,
.el-drawer-fade-leave-active {
  transition: all .3s;
}

.el-drawer-fade-enter-from,
.el-drawer-fade-enter-active,
.el-drawer-fade-enter-to,
.el-drawer-fade-leave-from,
.el-drawer-fade-leave-active,
.el-drawer-fade-leave-to {
  overflow: hidden !important
}

.el-drawer-fade-enter-from,
.el-drawer-fade-leave-to {
  opacity: 0
}

.el-drawer-fade-enter-to,
.el-drawer-fade-leave-from {
  opacity: 1
}

.el-drawer-fade-enter-from .ltr,
.el-drawer-fade-leave-to .ltr {
  transform: translate(-100%)
}
</style>