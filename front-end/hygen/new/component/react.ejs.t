---
to: src/components/<%= atomic %>/<%= h.changeCase.pascal(component_name) %>/index.tsx
---

<% if(hasProps){ -%>
import { Props } from './types'
<% } -%>

/**
 * <%= component_name %>
 *
 * hrefを指定した場合aタグとしてレンダリングされます
 */
export const <%= component_name %> = (
  <% if(hasProps){ -%>
  {  }: Props
  <% } -%>
): JSX.Element => {
  return (
    <></>
  )
}
