import axios from "axios";
import { useCallback, useState } from "react";
import { UserMold } from "../types/api/user";
import { useNavigate } from "react-router-dom";

import { useMessage } from "../hooks/useMessage";
import { useLoginUser } from "../hooks/useLoginUser";

export const useAuth = () => {
  //画面遷移のための関数を代入
  const navigate = useNavigate();
  //ロード中の処理を設定
  const [loading, setLoading] = useState(false);
  // メッセージ処理を設定
  const { showMessage } = useMessage();
  //　ログイン時にログインユーザーの情報を処理
  const { setLoginUser } = useLoginUser();

  const Login = useCallback(
    (id: string) => {
      //ログインが始まったら　loading を開始する
      setLoading(true);
      // ログイン関数に渡されたid を urlの末尾に追加する
      axios
        .get<UserMold>(`https://jsonplaceholder.typicode.com/users/${id}`)
        //正常に受け取れた場合の処理
        .then((res) => {
          showMessage({ title: "ログインしました", status: "success" });
          if (res.data) {
            //　ログインユーザーの id　が10の時は isAdmin フラグを ture　にする
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            navigate("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
            setLoading(false);
          }
        })
        // エラーの場合の処理 .finally関数は、tsconfig のesを2018以降にしないと使えない
        .catch(() => {
          showMessage({ title: "ユーザーが見つかりません", status: "error" });
          setLoading(false);
        });
      // .finally(() => setLoading(false));
    },
    [navigate, showMessage, setLoginUser] //依存配列を追加
  );
  return { Login, loading };
};
