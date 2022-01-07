/**ヘッダーのみのテンプレートを作成 */

import { memo, ReactNode, VFC } from "react";
import { Header } from "../organisms/layout/Header";

type Props = {
  children: ReactNode;
};
//props に型を定義する
export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props; //props の中から children を展開
  return (
    <>
      <Header />
      {children}
    </>
  );
});
