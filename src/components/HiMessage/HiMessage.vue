<template>
  <!-- 消息列表 -->
  <transition name="slide-fade">
    <div class="message-container" v-show="visibled">
      <!-- 内容 -->
      <div class="message-content" :class="[config.type ? `message-${config.type}-immersive` : '']">
        <!-- 消息类型图标 -->
        <div class="message-icon" v-if="config.icon">
          <i :class="config.icon"></i>
        </div>
        <span v-text="config.content"></span>
        <div class="option" v-if="!config.close">
          <!-- 手动关闭消息 -->
          <i class="ri-close-fill" @click="onClose"></i>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MessageConfig } from './HiMessage'

const props = defineProps({
  config: {
    type: Object,
    default: () => { }
  },
  remove: {
    type: Function,
    default: () => { }
  }
})

const visibled = ref(false)

const onOpen = (config: MessageConfig) => {
  setTimeout(() => {
    visibled.value = true
  }, 10);

  if (config.duration !== 0) {
    setTimeout(() => {
      onClose()
    }, config.duration);
  }
}

onOpen(props.config)

const onClose = () => {
  visibled.value = false
  setTimeout(() => {
    props.remove()
  }, 200);
}

</script>

<style lang="scss">
@import '../../style/common/theme.scss';

.hi-message {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 9999;
  transform: translateZ(9999px);
  padding-top: 28px;
  pointer-events: none;
  transition: top .4s ease;

  .message-container {
    margin-bottom: 14px;

    .message-icon {
      display: inline-block;

      i {
        font-size: 16px;
        font-weight: 400;
        margin-top: -3px;
        margin-right: 6px;
        display: inline-block;
        box-sizing: border-box;
        vertical-align: middle;
      }

      .ri-checkbox-circle-fill {
        color: $success-3;
      }

      .ri-error-warning-fill {
        color: $warning-3;
      }

      .ri-close-circle-fill {
        color: $danger-3;
      }

      // 加载图标
      .ri-loader-5-fill {
        display: inline-block;
        animation: rotating 1s ease-in-out infinite;
        -webkit-animation: rotating 1s ease-in-out infinite;
        color: $primary-3;
      }

      @keyframes rotating {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }

        100% {
          -webkit-transform: rotate(359deg);
          transform: rotate(359deg);
        }
      }
    }

    .message-content {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 8px 20px;
      text-align: left;
      font-size: 16px;
      font-weight: 400;
      border-radius: $radius;
      color: $gary-7;
      box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
      background: $gary-0;

      span {
        pointer-events: none;
        -moz-user-select: none;
        -o-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .option {
        display: inline-block;
        pointer-events: all;
        margin-left: 18px;

        i {
          font-size: 16px;
          font-weight: 400;
          margin-top: -3px;
          display: inline-block;
          box-sizing: border-box;
          vertical-align: middle;
          cursor: pointer;
          color: $gary-4;
          transition: color 0.2s ease;

          &:hover {
            color: $danger-3;
            transition: color 0.2s ease;
          }
        }
      }
    }

    .message-text-immersive {
      color: $primary-4;
      border: 1px solid $primary-2;
      background: $primary-1;
    }

    .message-success-immersive {
      color: $success-4;
      border: 1px solid $success-2;
      background: $success-1;
    }

    .message-warning-immersive {
      color: $warning-4;
      border: 1px solid $warning-2;
      background: $warning-1;
    }

    .message-error-immersive {
      color: $danger-4;
      border: 1px solid $danger-2;
      background: $danger-1;
    }

  }

  .slide-fade-enter-active {
    transition: all .4s ease-out;
  }

  .slide-fade-leave-active {
    transition: all .4s ease;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }
}
</style>