import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

/**Home配下の3つのページ　（Home.tsx,Setting.tsx,UserManagement）のルーティングをまとめる */
export const HomeRoots = [
  {
    path: "/",
    children: <Home />
  },
  {
    path: "/user_management",
    children: <UserManagement />
  },
  {
    path: "/setting",
    children: <Setting />
  },
  {
    path: "/*",
    children: <Page404 />
  }
];
