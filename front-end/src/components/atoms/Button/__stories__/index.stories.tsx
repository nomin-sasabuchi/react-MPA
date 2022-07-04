import { Meta, StoryObj } from '@storybook/react'
import { Button as C } from '..'
import { Props } from '../types'
import { userEvent, within } from '@storybook/testing-library'

export default {
  title: 'atoms/Button',
  component: C,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

export const Default: StoryObj<Props> = {
  args: {
    extraClass: 'test',
    children: 'テスト',
  },
  play: async ({ canvasElement }) => {
    // Assigns canvas to the component root element
    const canvas = within(canvasElement)

    // Starts querying from the component's root element
    await userEvent.click(canvas.getByRole('button', { name: 'テスト' }))
  },
}
