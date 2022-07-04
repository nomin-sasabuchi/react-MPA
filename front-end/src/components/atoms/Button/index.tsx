import { Props } from './types'
/**
 * ボタン/リンク
 *
 * hrefを指定した場合aタグとしてレンダリングされます
 */
export const Button = ({ extraClass, children }: Props): JSX.Element => (
  <button className={extraClass} onClick={() => alert(children)}>
    {children}
  </button>
)
