/**ユーザー管理ページのコンポーネントを作成 */
//外部インポート
import {
  Wrap,
  WrapItem,
  Spinner,
  Center,
  useDisclosure
} from "@chakra-ui/react";
import { memo, VFC, useEffect, useCallback } from "react";
/////

//内部インポート
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";
///////

//関数の作成
export const UserManagement: VFC = memo(() => {
  /**モーダルの設定 */
  const { isOpen, onOpen, onClose } = useDisclosure();
  /**ユーザーのデータを取得 */
  const { getUsers, users, loading } = useAllUsers();
  /**該当ユーザーデータの取得 */
  const {
    onSelectUser,
    selectedUser
  } = useSelectUser(); /**画面表示時にユーザーの一覧を取得するので useEffect を使用 */ //テストとして出力　結果:OK
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  useEffect(() => getUsers(), []); //初回だけで良いので、空の配列を渡す
  //クリックしたら id を渡すので、 idとその型の定義を指定
  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen }); //受け取る値を指定
      /*== console.log(id) //テストとして出力　結果:OK --*/
    },
    [users, onSelectUser, onOpen] //依存配列を設定
  ); //ユーザーをクリックしたら、モーダルが開かれるという指示
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                // {/* props の値を指定 */}
                id={user.id}
                ImageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        user={selectedUser}
        isOpen={isOpen}
        isAdmin={loginUser?.isAdmin}
        onClose={onClose}
      />
    </>
  );
});
