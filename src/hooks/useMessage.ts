import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

export const useMessage = () => {
  const toast = useToast();

  type Props = {
    title: string;
    status: "info" | "warning" | "success" | "error";
  };

  /**Toastを使ったメッセージ表示を hooks　として扱う処理 */
  //メッセージの内容をProps として受け取る
  const showMessage = useCallback((props: Props) => {
    const { title, status } = props;
    toast({
      title,
      status,
      position: "top",
      duration: 2000, //表示される時間
      isClosable: true //閉じれるかどうか
    });
  }, []);
  return { showMessage };
};
