//外部ファイルからのインポート
import { BrowserRouter, Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

//自分のファイルからのインポート
import theme from "./theme/theme";
import { RooterA } from "./rooter/Rooter";

//関数の作成
export default function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* react-router を使用するので Browser-Router で囲む */}
      <BrowserRouter>
        <RooterA />
      </BrowserRouter>
    </ChakraProvider>
  );
}
