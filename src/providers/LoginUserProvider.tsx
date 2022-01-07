/**ログインしたユーザーが管理者ユーザか識別する */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

import { UserMold } from "../types/api/user";

/**=======型指定 =========== */
//** Context の型を指定 */
export type LoginUserContextType = {
  loginUser: LoginUser | null;
  //User情報を変更する関数の型定義
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>; // Stateを変更して更新する
};
//ユーザーの方指定　　管理者ユーザーかどうかを識別する方も && で追加
type LoginUser = UserMold & { isAdmin: boolean };
/**======================== */

//* Context の作成  <>内で型を指定 */
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType //必ずこの型であることを指定
);

/** Context を扱うための Provider を用意する */
export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props; //props の値を代入
  // loginUser の情報を管理するステートを useState で定義
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

  return (
    //state で定義した情報を Provider で扱えるように value に指定
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
