import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Box, Wrap, WrapItem, VStack, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import CustomIconButton from "~/customCoreComponents/CustomIconButton";
import CometBorder from "~/customCoreComponents/cometBorder";
import CustomAlert from "~/customCoreComponents/customAlert";
import { ToastButton } from "~/customCoreComponents/customToast";
import EntirePage from "~/customCoreComponents/entirePage";
import { FadeInImage } from "~/customCoreComponents/fadeComponents";
import GradientBorder from "~/customCoreComponents/gradientBorder";
import ImageIcon from "~/customCoreComponents/imageIcon";
import LoadingText from "~/customCoreComponents/loadingDots";
import {
  HorizontalSnapScrollViewer,
  VerticalSnapScrollViewer,
} from "~/customCoreComponents/snapScrollMini";
import { AnimationSelector } from "~/customCoreComponents/sticker";

import {
  ButtonStyles,
  gradients,
  largeTextShadow,
  lightTextShadow,
  mainShadow,
  palette,
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
        textShadow={lightTextShadow}
      >
        {Object.entries(palette).map(([colorName, colorValue]) => (
          <WrapItem key={colorName}>
            <VStack>
              <Text fontSize="xs" color={palette[900]}>
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
        textShadow={lightTextShadow}
        p={3}
      >
        {Object.entries(gradients).map(([gradientName, gradientValue]) => (
          <WrapItem key={gradientName}>
            {" "}
            <VStack>
              <Text fontSize="xs" color={palette[900]}>
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
    color: palette[200],
    textShadow: largeTextShadow,
    w: "100%",
    textAlign: "left" as const,
    pl: 5,
  };

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const openAlert = () => setIsAlertOpen(true);
  const closeAlert = () => setIsAlertOpen(false);
  const handleConfirm = () => {
    // Logic for what happens when the user confirms
    console.log("Confirmed");
    closeAlert();
  };

  return (
    <EntirePage
      gap="20px"
      overflowY="auto"
      sx={scrollBarStyles}
      justify="start"
    >
      <VStack w="99vw" h="100%" fontWeight="600" overflowX="hidden">
        <Text {...heading}>Color Theme</Text>
        <ColorSwatch />
        <VStack w="100%" h="100%">
          <Text {...heading}>Components</Text>
          <Wrap spacing="30px" justify="center" align="stretch" pb="20px">
            <VStack>
              <Text textShadow={largeTextShadow}>Horizontal Snap Scroll</Text>
              <HorizontalSnapScrollViewer images={images} />
            </VStack>
            <VStack>
              <Text textShadow={largeTextShadow}>Vertical Snap Scroll</Text>
              <VerticalSnapScrollViewer images={images} />
            </VStack>
            <VStack spacing="30px" justify="space-evenly">
              <VStack>
                <Text textShadow={largeTextShadow}>Button Style</Text>
                <Button {...ButtonStyles}>Click me</Button>
              </VStack>
              <VStack>
                <Text textShadow={largeTextShadow}>Icon Button Style</Text>
                <CustomIconButton icon={ChevronDownIcon} />
              </VStack>
              <VStack>
                <Text textShadow={largeTextShadow}>Loading Text</Text>
                <LoadingText />
              </VStack>
            </VStack>
            <VStack justify="space-evenly">
              <VStack>
                <Text textShadow={largeTextShadow}>Comet Border</Text>
                <CometBorder>
                  <Box w="300px" h="1 00px">
                    Contents of Comet Border
                  </Box>
                </CometBorder>
              </VStack>
              <VStack>
                <Text textShadow={largeTextShadow}>Gradient Border</Text>
                <GradientBorder>
                  <Box w="300px" h="1 00px">
                    Contents of Gradient Border
                  </Box>
                </GradientBorder>
              </VStack>
            </VStack>
            <FadeInImage src="/cute/cute1.png" />
            <VStack h="100%" justify="stretch">
              <Text textShadow={largeTextShadow}>Sticker</Text>
              <AnimationSelector />
            </VStack>
            <VStack spacing={8}>
              <VStack spacing={5}>
                <Text textShadow={largeTextShadow}>Image Icon</Text>
                <ImageIcon keyword="stars" size="50px" />
              </VStack>
              <VStack>
                <Text textShadow={largeTextShadow}>Custom Toast</Text>
                <ToastButton />
              </VStack>
              <VStack>
                <Text textShadow={largeTextShadow}>Custom Alert</Text>
                <Button {...ButtonStyles} onClick={openAlert}>
                  Open Alert
                </Button>

                <CustomAlert
                  isAlertOpen={isAlertOpen}
                  onClose={closeAlert}
                  onConfirmClick={handleConfirm}
                  cancelRef={cancelRef}
                  title="Your Alert Title"
                  body="This is the alert message."
                  confirmButtonText="Confirm"
                  cancelButtonText="Cancel"
                  imageIcon="stars" // Replace with your icon keyword if needed
                  image="/cute/sticker.png" // Replace with your image path
                />
              </VStack>
            </VStack>
          </Wrap>
        </VStack>
      </VStack>
    </EntirePage>
  );
}
