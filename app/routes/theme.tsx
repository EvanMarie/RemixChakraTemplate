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
  HorizontalSnapScrollViewer,
  VerticalSnapScrollViewer,
} from "~/customCoreComponents/snapScrollMini";
import {
  ButtonStyles,
  colors,
  gradients,
  largeTextShadow,
  lightTextShadow,
  mainShadow,
  scrollBarStyles,
  subtleTextShadow,
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
              <Box
                w="75px"
                h="75px"
                bg={gradientValue}
                borderRadius="md"
                shadow={mainShadow}
              ></Box>
            </VStack>{" "}
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
};

const images = [
  "/cute/cute1.png",
  "/cute/cute2.png",
  "/cute/cute3.png",
  "/cute/cute4.png",
  "/cute/cute5.png",
  "/cute/cute6.png",
];

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
    >
      <VStack
        textShadow={lightTextShadow}
        w="99vw"
        fontWeight="600"
        py="20px"
        overflowX="hidden"
      >
        <Text {...heading}>Color Theme</Text>
        <ColorSwatch />
        <VStack w="100%">
          <Text {...heading}>Components</Text>
          <HStack spacing="30px" align="start">
            <VStack spacing="30px">
              <VStack>
                <Text>Button Style</Text>
                <Button {...ButtonStyles}>Click me</Button>
              </VStack>
              <VStack>
                <Text>Icon Button Style</Text>
                <CustomIconButton icon={ChevronDownIcon} />
              </VStack>
            </VStack>
            <VStack>
              <Text>Horizontal Snap Scroll</Text>
              <HorizontalSnapScrollViewer
                contentHeight="125px"
                contentWidth="125px"
                images={images}
              />
            </VStack>
            <VStack>
              <Text>Vertical Snap Scroll</Text>
              <VerticalSnapScrollViewer
                contentHeight="125px"
                contentWidth="125px"
                images={images}
              />
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </EntirePage>
  );
}
