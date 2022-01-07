/**どのURLにも当てはまらない場合の処理 */
import { memo, VFC } from "react";

export const Page404: VFC = memo(() => {
  return <p>404ページ</p>;
});
