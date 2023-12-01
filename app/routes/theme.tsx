import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Box,
  Wrap,
  WrapItem,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import CustomIconButton from "~/customCoreComponents/CustomIconButton";
import EntirePage from "~/customCoreComponents/entirePage";
import {
  ButtonStyles,
  colors,
  gradients,
  largeTextShadow,
  mainShadow,
  scrollBarStyles,
} from "~/customTheme";

const ColorSwatch = () => {
  return (
    <VStack w="100%">
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

      <Wrap
        spacing="20px"
        justify="center"
        bg="white"
        w="90%"
        rounded="md"
        p={3}
      >
        {Object.entries(gradients).map(([gradientName, gradientValue]) => (
          <WrapItem key={gradientName}>
            {" "}
            <VStack>
              <Text fontSize="xs" color={colors.darkBlue}>
                {gradientName}
              </Text>
              <Box w="75px" h="75px" bg={gradientValue} borderRadius="md"></Box>
            </VStack>{" "}
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
};

export default function ViewTheme() {
  const heading = {
    fontSize: "2xl",
    color: colors.lightCreme,
    textShadow: largeTextShadow,
    w: "100%",
    textAlign: "left" as const,
    pl: 5,
  };
  return (
    <EntirePage
      gap="20px"
      overflowY="auto"
      sx={scrollBarStyles}
      justify="start"
      py="20px"
    >
      <VStack>
        <Text {...heading}>Color Theme</Text>
        <ColorSwatch />
        <VStack w="100%">
          <Text {...heading}>Components</Text>
          <HStack spacing={4}>
            <Button {...ButtonStyles}>Click me</Button>
            <CustomIconButton icon={ChevronDownIcon} />
          </HStack>
        </VStack>
      </VStack>
    </EntirePage>
  );
}
