import { Box, HStack, Text } from "@chakra-ui/react";

import BouncingDots from "./bouncingDots";
import { largeTextShadow } from "~/customTheme";

export default function LoadingText({
  fontSize = "2rem",
  lineHeight = "2rem",
  dotSize = 8,
  color = "cyan",
}: {
  fontSize?: string;
  lineHeight?: string;
  fontFamily?: string;
  dotSize?: number;
  color?: string;
}) {
  return (
    <HStack
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color}
      align="end"
      textShadow={largeTextShadow}
      spacing={0}
    >
      <Text>Loading</Text>
      <Box mb={2}>
        <BouncingDots dotSize={dotSize} />
      </Box>
    </HStack>
  );
}
