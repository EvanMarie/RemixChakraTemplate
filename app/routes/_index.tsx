import { Center, Flex } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import { ButtonStyles } from "~/customTheme";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Center w="100%" h="100%">
      <NavLink to="/theme">
        <Flex
          {...ButtonStyles}
          h="fit-content"
          w="fit-content"
          p={2}
          fontSize="30px"
          lineHeight="30px"
          align="center"
        >
          View Default Theme
        </Flex>
      </NavLink>
    </Center>
  );
}
