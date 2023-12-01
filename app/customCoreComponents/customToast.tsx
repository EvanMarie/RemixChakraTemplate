import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import {
  colors,
  gradients,
  largeTextShadow,
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
    <Box position="absolute" w="375px" h="275px" shadow={mainShadow}>
      <Flex
        w="100%"
        h="100%"
        position="relative"
        bg="aiArt.990"
        bgGradient={gradients.radialTealToMagenta}
        rounded="lg"
        shadow={shadow3D}
        p={2}
      >
        <Image
          src={image}
          w="140px"
          position="absolute"
          bottom="0"
          left="5px"
        />
        <VStack
          fontSize="xl"
          fontWeight="600"
          color={colors.paleMagenta}
          textShadow={largeTextShadow}
        >
          <HStack spacing={4} w="100%">
            {ImageIcon && <ImageIcon keyword={imageIcon} size="50px" />}
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
