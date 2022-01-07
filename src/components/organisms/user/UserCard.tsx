/**ユーザーカードのコンポーネントを作成 */
import { memo, ReactNode, VFC } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

/**Props　として渡す値の型を定義 */
type Props = {
  id: number;
  ImageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void; //ユーザを識別するためのid を渡す
};

export const UserCard: VFC<Props> = memo((props) => {
  const { ImageUrl, userName, fullName, onClick, id } = props; //これらを動的にするように props　として渡す
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)} //クリックした時idも受け取る（ユーザー識別のため）
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={ImageUrl}
          alt={userName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
