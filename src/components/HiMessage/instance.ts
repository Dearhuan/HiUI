import { createApp } from 'vue'
import HiMessage from './HiMessage.vue'
import { MessageConfig } from './HiMessage'

const createInstance = (cfg: MessageConfig) => {
  const config  = cfg || {}

  const messageClassName = 'hi-message'

  let messageNode = document.createElement('div')
  let attr = document.createAttribute('class')
  attr.value = messageClassName
  messageNode.setAttributeNode(attr)

  const height = 64
  const messageList= document.getElementsByClassName(messageClassName)
  messageNode.style.top = `${messageList.length * height}px`

  const resetMsgTop = () => {
    for (let i = 0; i < messageList.length; i++) {
      messageList[i].style.top = `${i * height}px`
    }
  }

  const handleRemove = () => {
    app.unmount(messageNode)
    document.body.removeChild(messageNode)
    resetMsgTop()
  }

  const app = createApp(HiMessage, {
    config,
    remove() {
      handleRemove()
    }
  })

  app.vm = app.mount(messageNode)
  document.body.appendChild(messageNode)

  app.close = () => {
    handleRemove()
  }
  return app
}

export default createInstance