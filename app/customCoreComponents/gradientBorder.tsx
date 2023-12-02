import React from "react";
import { Box, keyframes, type BoxProps } from "@chakra-ui/react";
import { mainShadow, palette } from "~/customTheme";

// Define keyframes for different gradient transitions
const slideLeftToRight = keyframes`
  0% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const slideRightToLeft = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

const slideUp = keyframes`
  0% { background-position: 50% 100%; }
  100% { background-position: 50% 0%; }
`;

const slideDown = keyframes`
  0% { background-position: 50% 0%; }
  100% { background-position: 50% 100%; }
`;

const rotateClockwise = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
`;

const rotateCounterClockwise = keyframes`
  0% { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
`;

const pulsate = keyframes`
  0%, 100% { background-size: 200% 200%; }
  50% { background-size: 100% 100%; }
`;

const colorFillToLeft = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

interface GlowingBorderProps extends BoxProps {
  children?: React.ReactNode;
  gradientColors?: string[];
  transitionDuration?: string;
  boxBg?: string;
  p?: string | number | object;
  gradientSize?: string | number | object;
  rounded?: string;
  gradientDirection?: string;
  animationType?:
    | "slideLeftToRight"
    | "slideRightToLeft"
    | "slideUp"
    | "slideDown"
    | "rotateClockwise"
    | "rotateCounterClockwise"
    | "pulsate"
    | "colorTransition"
    | "staticGradient";
}

export default function GradientBorder({
  children,
  gradientColors = [palette[300], palette[400], palette[600], palette[200]],
  transitionDuration = "3s",
  gradientSize = 2,
  p = 4,
  boxBg = palette[800],
  color = palette[100],
  rounded = "25px 0px 25px 0",
  gradientDirection = "45deg",
  animationType = "staticGradient",
  ...props
}: GlowingBorderProps) {
  const mirroredColors = [
    ...gradientColors,
    ...gradientColors.slice(1, -1).reverse(),
  ];
  const gradientString = `linear-gradient(${gradientDirection}, ${mirroredColors.join(
    ", "
  )})`;

  const getAnimation = (type: string) => {
    switch (type) {
      case "slideLeftToRight":
        return slideLeftToRight;
      case "slideRightToLeft":
        return slideRightToLeft;
      case "slideUp":
        return slideUp;
      case "slideDown":
        return slideDown;
      case "rotateClockwise":
        return rotateClockwise;
      case "rotateCounterClockwise":
        return rotateCounterClockwise;
      case "pulsate":
        return pulsate;
      case "colorFillToLeft":
        return colorFillToLeft;
      case "staticGradient":
        return generateStaticGradient();
      default:
        return slideLeftToRight;
    }
  };

  const generateStaticGradient = () => {
    const percentagePerColor = 100 / gradientColors.length;
    let keyframesString = "";

    gradientColors.forEach((color, index) => {
      keyframesString += `${
        index * percentagePerColor
      }% { background-color: ${color}; } `;
    });

    return keyframes`${keyframesString}`;
  };

  const animation = getAnimation(animationType);

  return (
    <Box position="relative" {...props}>
      <Box
        shadow={mainShadow}
        rounded={rounded}
        p={gradientSize}
        position="relative"
        overflow="hidden"
        sx={{
          bgGradient: gradientString,
          bgSize: "200% 200%",
          animation: `${animation} ${transitionDuration} ease infinite`,
        }}
      >
        <Box bg={boxBg} rounded={rounded} p={p} shadow={mainShadow}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
