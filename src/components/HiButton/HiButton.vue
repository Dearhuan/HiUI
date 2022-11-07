<template>
  <button :class="[
    ns.b(),
    ns.m(type),
    ns.m(size),
    ns.is('disabled', disabled),
    ns.is('plain', plain),
    ns.is('round', round),
    ns.is('circle', circle)
  ]"
          :disabled="disabled"
          :type="nativeType"
          :style="buttonStyle"
          @click="handleClick">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang='ts'>
import { PropType, computed } from 'vue'
import { useCssVar } from '@vueuse/core'
import { TinyColor } from '@ctrl/tinycolor'
import { useNamespace } from '../../hooks'
import type { ButtonSize, ButtonType, ButtonNativeTypes } from './HiButton'
import { buttonEmits } from './HiButton'

const emit = defineEmits(buttonEmits)
const props = defineProps({
  size: {
    type: String as PropType<ButtonSize>,
    default: ''
  },
  type: {
    type: String as PropType<ButtonType>,
    default: ''
  },
  nativeType: {
    type: String as PropType<ButtonNativeTypes>,
    default: 'button'
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  color: String
})

const ns = useNamespace('button')

const typeColor = computed(() => useCssVar(`--el-color-${props.type}`).value)
const buttonStyle = computed(() => {
  let styles: Record<string, string> = {}

  const buttonColor = props.color || typeColor.value

  if (buttonColor) {
    const color = new TinyColor(buttonColor)
    const shadeBgColor = color.shade(10).toString()
    if (props.plain) {
      styles = {
        '--el-button-bg-color': color.tint(90).toString(),
        '--el-button-text-color': buttonColor,
        '--el-button-hover-text-color': 'var(--el-color-white)',
        '--el-button-hover-bg-color': buttonColor,
        '--el-button-hover-border-color': buttonColor,
        '--el-button-active-bg-color': shadeBgColor,
        '--el-button-active-text-color': 'var(--el-color-white)',
        '--el-button-active-border-color': shadeBgColor
      }
    } else {
      const tintBgColor = color.tint(20).toString()
      styles = {
        '--el-button-bg-color': buttonColor,
        '--el-button-border-color': buttonColor,
        '--el-button-hover-bg-color': tintBgColor,
        '--el-button-hover-border-color': tintBgColor,
        '--el-button-active-bg-color': shadeBgColor,
        '--el-button-active-border-color': shadeBgColor
      }
    }
    if (props.disabled) {
      const disabledButtonColor = color.tint(50).toString()
      styles['--el-button-disabled-bg-color'] = disabledButtonColor
      styles['--el-button-disabled-border-color'] = disabledButtonColor
    }
  }
  return styles
})

const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}

</script>

<style lang="scss">
@import '../../style/el-button.scss'
</style>