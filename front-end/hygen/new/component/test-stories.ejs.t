---
to: src/components/<%= atomic %>/<%= h.changeCase.pascal(component_name) %>/__stories__/index.test.ts
---
import { render, screen } from '@testing-library/react'
import ue from '@testing-library/user-event'
import { composeStory } from '@storybook/testing-react'
import * as s from './index.stories'

const <%= component_name %> = composeStory(s.<%= component_name %>, s.{該当のStoryObj})

describe('<%= component_name %>', () => {
  test('rendered as <%= component_name %>', () => {
    render(<<%= component_name %> />)
  })
})