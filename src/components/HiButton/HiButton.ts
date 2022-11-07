export type ButtonSize = 'large' | 'default' | 'small' | ''

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | ''

export type ButtonNativeTypes = 'button' | 'submit' | 'reset'

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
}