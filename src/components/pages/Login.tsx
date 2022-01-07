/**ログインページのコンポーネントを作成 */

import { memo, useState, VFC, ChangeEvent } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack
} from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  //useAuth で設定した関数を呼び出す
  const { Login, loading } = useAuth();

  const [userId, setuserId] = useState("");

  // ChangeEvent<HTMLInputElement> で テキストボックスでのイベント型指定
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setuserId(e.target.value);

  //Login ボタンをクリックした時の処理を設定
  //useAuth から取得した Login に引数を設定する　（認証識別はuserId なので、それを渡す）
  const onClickLogin = () => Login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          {/* children に文字を指定して、ボタンのラベルを設定することができる */}
          {/* disabled　で userId（フォームの入力値）が空の時は、非活性にする */}
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            children="ログイン"
            onClick={onClickLogin}
          />
        </Stack>
      </Box>
    </Flex>
  );
});
