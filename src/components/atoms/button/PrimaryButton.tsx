import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  disabled?: boolean; //文字が入力されていない場合はボタンをクリックできないようにする
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      // disabled になるのは、 disabled か loading の時
      disabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
    >
      {/* ボタンの中の文字は children として受け取る */}
      {children}
    </Button>
  );
});
