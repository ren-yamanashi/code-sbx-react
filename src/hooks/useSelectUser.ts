/**ユーザ認証により識別したユーザの情報kら、必要な情報を抜き取り、出力する */
import { useCallback, useState } from "react";

import { UserMold } from "../types/api/user";

type Props = {
  id: number;
  users: Array<UserMold>;
  onOpen: () => void;
};

//選択したユーザー情報を特定し、モーダルを表示するカスタムフックを作成
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<UserMold | null>(null);
  //クリックされたユーザーを特定する関数を記述
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;

    //条件に当てはまる最初の要素を返す
    //クリックしたユーザーの id と 一致する最初のユーザーを返す
    const targetUser = users.find((user) => user.id === id);
    //取得したユーザーの情報を setSelectedUser のステートに保管
    setSelectedUser(targetUser!); // targetUser が undefind の場合はあり得ないことを指示
    onOpen();
  }, []);
  //ここで定数を返す
  return { onSelectUser, selectedUser };
};
