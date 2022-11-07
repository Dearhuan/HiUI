import createInstance from "./instance"

export interface MessageConfig {
  type?: string
  icon?: string
  content?: string
  immersive?: boolean
  duration?: number
  close?: boolean
}

const renderMsg = (typeCfg = {}, cfg: MessageConfig | string = '') => {
  if (typeof cfg === 'string') {
    cfg = {
      content: cfg
    }
  } else {
    cfg = cfg
  }

  const config = Object.assign({}, typeCfg, cfg)

  const {
    type = 'text',
    icon = '',
    content = '',
    immersive = false,
    duration = 3000,
    close = false
  } = config

  return createInstance({
    type,
    icon,
    content,
    immersive,
    duration,
    close
  })
}

export default {
  // 纯文本消息
  text(cfg:MessageConfig | string) {
    const textCfg = {
      type: "text",
      icon: ''
    }

    return renderMsg(textCfg, cfg);
  },
  // 成功提示
  success(cfg:MessageConfig | string) {
    const successCfg = {
      type: "success",
      icon: 'ri-checkbox-circle-fill'
    }

    return renderMsg(successCfg, cfg);
  },
  // 警告提示
  warning(cfg:MessageConfig | string) {
    const warningCfg = {
      type: "warning",
      icon: 'ri-error-warning-fill'
    }

    return renderMsg(warningCfg, cfg);
  },
  // 错误提示
  error(cfg:MessageConfig | string) {
    const errorCfg = {
      type: "error",
      icon: 'ri-close-circle-fill'
    }

    return renderMsg(errorCfg, cfg);
  },
  // 加载提示
  loading(cfg:MessageConfig | string) {
    const loadingCfg = {
      type: "loading",
      icon: 'ri-loader-5-fill',
      duration: 0
    }

    return renderMsg(loadingCfg, cfg);
  },
}