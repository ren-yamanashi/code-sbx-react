//外部インポート
import { memo, VFC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
//内部インポート
import { Login } from "../components/pages/Login";
import { HomeRoots } from "../rooter/HomeRoots";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

//関数の作成
export const RooterA: VFC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Home 配下のルーティング設定 */}
        {HomeRoots.map((route) => (
          <Route
            key={route.path}
            path={`/home${route.path}`}
            element={<HeaderLayout>{route.children}</HeaderLayout>}
          />
        ))}
        {/* 404ページへの遷移 */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
