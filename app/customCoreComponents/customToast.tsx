import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import {
  ButtonStyles,
  colors,
  gradients,
  lightTextShadow,
  mainShadow,
  shadow3D,
} from "~/customTheme";
import ImageIcon from "./imageIcon";

interface CustomToastProps {
  title: string;
  body: string;
  imageIcon?: string;
  image?: string;
}

export default function CustomToast({
  title,
  body,
  imageIcon,
  image,
}: CustomToastProps) {
  return (
    <Box w="375px" h="275px" shadow={mainShadow}>
      <Flex
        w="100%"
        h="100%"
        bg="aiArt.990"
        bgGradient={gradients.radialBlueToCreme}
        color={colors.darkBlue}
        textShadow={lightTextShadow}
        rounded="lg"
        shadow={shadow3D}
        p={2}
        position="relative"
      >
        <Image
          src={image}
          w="140px"
          position="absolute"
          bottom="0px"
          left="5px"
        />
        <VStack fontSize="xl" fontWeight="600">
          <HStack spacing={4} w="100%">
            {imageIcon && <ImageIcon keyword={imageIcon} size="50px" />}
            <Text>{title}</Text>
          </HStack>

          <Flex justify="end">
            <VStack w="60%" align="end" spacing={1}>
              <Text size="xl">{body}</Text>
            </VStack>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
}

// --------------------------------------------------------------------------------------------
// Component: to show example of CustomToast

export function ToastButton() {
  const toast = useToast();

  const showCustomToast = () => {
    toast({
      duration: 5000,
      position: "bottom-left",
      render: () => (
        <CustomToast
          title="Toast Title"
          body="This is the body of the toast."
          imageIcon="stars"
          image="/cute/sticker.png"
        />
      ),
    });
  };

  return (
    <Button {...ButtonStyles} onClick={showCustomToast}>
      Show Custom Toast
    </Button>
  );
}
