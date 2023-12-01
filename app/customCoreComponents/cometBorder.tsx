import { Box, Flex, keyframes } from "@chakra-ui/react";
import { colors, largeTextShadow } from "~/customTheme";

interface CometBorderProps {
  children?: React.ReactNode;
  bg?: string;
  w?: string | object;
  h?: string | object;
  rounded?: string;
  fontSize?: string;
  p?: number | string;
  color?: string;
  cometColor?: string;
  cometSize?: number;
  cometSpeed?: string;
  cometLength?: string;
  cometDirection?: "clockwise" | "counter-clockwise";
  cometIntensity?: number;
}

const CometAnimationClockwise = keyframes`
  0% { transform: rotate(0deg); }
  33% { transform: rotate(120deg); }
  66% { transform: rotate(210deg); }
  100% { transform: rotate(360deg); }
`;

const CometAnimationCounterClockwise = keyframes`
  0% { transform: rotate(0deg); }
  33% { transform: rotate(-120deg); }
  66% { transform: rotate(-210deg); }
  100% { transform: rotate(-360deg); }
`;

export default function CometBorder({
  children,
  w = "fit-content",
  h = "fit-content",
  bg = colors.darkTeal,
  rounded = "xl",
  fontSize = "lg",
  color = colors.paleMagenta,
  p = 6,
  cometSize = 2,
  cometSpeed = "8s",
  cometLength = "70%",
  cometIntensity = 1,
  cometDirection = "counter-clockwise",
}: CometBorderProps) {
  const cometAnimation =
    cometDirection === "clockwise"
      ? CometAnimationClockwise
      : CometAnimationCounterClockwise;

  const cometColorStart = `rgba(0, 237, 254, ${cometIntensity})`; // Adjust transparency
  const cometColorEnd = `rgba(6, 222, 255, ${cometIntensity})`; // Adjust transparency

  // Define the gradient with dynamic stops and intensity
  const cometGradient = `linear-gradient(to left, transparent, ${cometColorStart} ${cometLength}, ${cometColorEnd} ${cometLength}, transparent 100%)`;

  return (
    <Box position="relative" w={w} h={h} rounded={rounded}>
      <Flex
        position="relative"
        overflow="hidden"
        rounded={rounded}
        w="100%"
        h="100%"
        justify="center"
        align="center"
        p={cometSize}
      >
        <Box
          w="100%"
          h="100%"
          filter="blur(5px)"
          position="absolute"
          inset="50% -70% -70% 50%"
          background={cometGradient}
          borderRadius={rounded}
          transition="all 400ms ease"
          backgroundRepeat="no-repeat"
          transformOrigin="0 0"
          backgroundSize="100% 100%"
          animation={`${cometAnimation} ${cometSpeed} infinite linear`}
        ></Box>
        <Box
          w="100%"
          h="100%"
          color={color}
          bg={bg}
          p={p}
          fontSize={fontSize}
          borderRadius={rounded}
          border="1px solid transparent"
          display="block"
          transition="all 200ms ease"
          position="relative"
          textShadow={largeTextShadow}
        >
          {children}
        </Box>
      </Flex>
    </Box>
  );
}
