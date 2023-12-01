import { Button, Box, Wrap, WrapItem, VStack, Text } from "@chakra-ui/react";
import EntirePage from "~/coreComponents/entirePage";
import {
  ButtonStyles,
  colors,
  gradients,
  mainShadow,
  scrollBarStyles,
} from "~/customTheme";

const ColorSwatch = () => {
  return (
    <VStack w="100%" h="80vh">
      <Wrap
        spacing="20px"
        justify="center"
        bg="white"
        w="90%"
        rounded="md"
        p={3}
      >
        {Object.entries(colors).map(([colorName, colorValue]) => (
          <WrapItem key={colorName}>
            <VStack>
              <Text fontSize="xs" color={colors.darkBlue}>
                {colorName}
              </Text>
              <Box
                w="75px"
                h="75px"
                bg={colorValue}
                borderRadius="md"
                shadow={mainShadow}
              ></Box>
            </VStack>
          </WrapItem>
        ))}
      </Wrap>

      <Wrap spacing="20px" justify="center" bg="white">
        {Object.entries(gradients).map(([gradientName, gradientValue]) => (
          <WrapItem key={gradientName}>
            <Box w="200px" h="75px" bg={gradientValue} borderRadius="md">
              {gradientName}
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
};

export default function ViewTheme() {
  return (
    <EntirePage gap="20px" overflowY="auto" sx={scrollBarStyles}>
      <Button {...ButtonStyles}>Click me</Button>
      <ColorSwatch />
    </EntirePage>
  );
}
