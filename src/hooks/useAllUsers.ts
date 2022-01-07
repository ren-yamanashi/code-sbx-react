import axios from "axios";
import { useCallback, useState } from "react";

import { UserMold } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  //ユーザーを取得する関数の設定
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<UserMold>>([]);
  const { showMessage } = useMessage();

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      // データ配列を展開したいので、Array を使用する
      .get<Array<UserMold>>("https://jsonplaceholder.typicode.com/users/")
      //正常に受け取れた場合の処理
      .then((res) => {
        setUsers(res.data);
      })
      // エラーの場合の処理 .finally関数は、tsconfig のesを2018以降にしないと使えない
      .catch(() =>
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" })
      )
      .finally(() => setLoading(false));
  }, []);
  //ここで定数を返す
  return { getUsers, users, loading };
};
