import { Flex, type FlexProps } from "@chakra-ui/react";

interface EntirePageProps extends FlexProps {
  children: React.ReactNode;
}

export default function EntirePage({ children, ...props }: EntirePageProps) {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      align="center"
      direction="column"
      {...props}
    >
      {children}
    </Flex>
  );
}
