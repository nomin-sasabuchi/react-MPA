---
to: <%= hasProps?`src/components/${atomic}/${h.changeCase.pascal(component_name)}/types.ts`:null %> 
---

export type Props = {
  /**
   * 型の説明
   */
  children?: React.ReactNode
}