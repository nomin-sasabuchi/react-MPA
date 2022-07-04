---
to: src/components/<%= atomic %>/<%= h.changeCase.pascal(component_name) %>/__stories__/index.stories.ts
---
import { Meta, StoryObj } from '@storybook/react'
import { <%= h.changeCase.pascal(component_name) %> as C } from '..'
import { userEvent, within } from '@storybook/testing-library'
<% if(hasProps){ -%>
  import { Props } from '../types'
<% } -%>

export default {
  title: '<%= atomic %>/<%= h.changeCase.pascal(component_name) %>',
  component: C,
} as Meta

export const Default: StoryObj<Props> = {
  <% if(hasProps){ -%>
  args: {
  },
  <% } -%>
  play: async ({ canvasElement }) => {
  },
}
