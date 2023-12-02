import { Box, Button, Flex, Image, VStack } from "@chakra-ui/react";
import React, { useState, useEffect, type CSSProperties } from "react";
import { ButtonStyles, gradients, mainShadow, palette } from "~/customTheme";

interface FadeInProps {
  children: React.ReactNode;
  duration?: number | string; // Duration in milliseconds
  style?: CSSProperties; // Additional styles
}

export default function FadeIn({
  children,
  duration = 400,
  style,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInStyle: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transition: `opacity ${duration}ms ease-in-out`,
    ...style, // Merge additional styles here
  };

  return <div style={fadeInStyle}>{children}</div>;
}

// ------------------------------------------------------------------------------------------------ //
// To show how FadeIn works in the theme page:

interface FadeInImageProps {
  src: string;
  imageSize?: string;
}

export function FadeInImage({ src, imageSize = "300px" }: FadeInImageProps) {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(!showImage);
  };

  return (
    <VStack spacing={4}>
      <Button onClick={handleClick} {...ButtonStyles}>
        {showImage ? "Fade Out Image" : "Fade In Image"}
      </Button>

      <Box w={imageSize} h={imageSize} shadow={mainShadow} rounded="lg">
        {showImage ? (
          <FadeIn duration={500}>
            <Image
              src={src}
              w="100%"
              h="100%"
              alt="Faded In"
              objectFit="cover"
              rounded="lg"
            />{" "}
          </FadeIn>
        ) : (
          <Flex
            h="100%"
            w="100%"
            align="center"
            justify="center"
            bgGradient={gradients.diagonalLight}
            rounded="lg"
            color={palette[900]}
          >
            Image will appear here.
          </Flex>
        )}
      </Box>
    </VStack>
  );
}
