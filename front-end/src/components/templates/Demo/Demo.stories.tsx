import { Meta, StoryObj } from '@storybook/react'
import  { Demo as C } from './Demo'

export default { component: C } as Meta

export const Demo: StoryObj = {
  args: {
    children: '滝本ひふみ',
  },
}
