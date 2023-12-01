import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import {
  gradients,
  largeTextShadow,
  mainShadow,
  shadow3D,
} from "~/customTheme";
import CustomIconButton from "./CustomIconButton";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";

interface SnapScrollViewerProps {
  images?: string[];
  contentHeight?: string;
  contentWidth?: string;
  children?: React.ReactNode;
}

export function VerticalSnapScrollViewer({
  images,
  contentHeight,
  contentWidth,
  children,
}: SnapScrollViewerProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  // const scrollAmount = useBreakpointValue({ base: 100, md: 350 }) ?? 100;
  const numericImageWidth = parseInt(contentWidth ? contentWidth : "", 10);
  const scrollAmount =
    useBreakpointValue({
      base: numericImageWidth,
    }) ?? numericImageWidth;

  // Function to scroll the container
  const scroll = (direction: "up" | "down") => {
    const container = scrollContainerRef.current;
    if (container) {
      // Ensure we have a number for scroll amount
      const y =
        direction === "up" ? -(scrollAmount ?? 100) : scrollAmount ?? 100;
      container.scrollBy({ top: y, behavior: "smooth" });
    }
  };

  return (
    <VStack
      align="center"
      p={5}
      rounded="lg"
      bg="aiArt.800"
      bgGradient={gradients.radialMagentaMix}
    >
      <HStack spacing={4} align="center" h="fit-content">
        <VStack
          ref={scrollContainerRef}
          w={contentWidth ?? "350px"}
          h={contentHeight ?? "350px"}
          rounded="md"
          shadow={shadow3D}
          overflowY="scroll"
          css={{
            scrollSnapType: "y mandatory",
            "&::-webkit-scrollbar": { display: "none" },
          }}
          spacing={4}
          p={0}
        >
          {images &&
            images.map((src, index) => (
              <Box
                key={index}
                h={contentHeight ?? "350px"}
                w={contentWidth ?? "350px"}
                shadow={mainShadow}
                css={{
                  scrollSnapAlign: "start",
                }}
              >
                <Image src={src} objectFit="cover" w="100%" h="100%" />
              </Box>
            ))}
          <Box
            h={contentHeight ?? "350px"}
            w={contentWidth ?? "350px"}
            shadow={mainShadow}
            css={{
              scrollSnapAlign: "start",
            }}
          >
            {children}
          </Box>
        </VStack>
        <VStack h="100%" justify="space-around" spacing="200px">
          <CustomIconButton
            aria-label="scroll up"
            icon={ChevronUpIcon}
            buttonSize="40px"
            iconSize="30px"
            onClick={() => scroll("up")}
          />
          <CustomIconButton
            aria-label="scroll down"
            icon={ChevronDownIcon}
            buttonSize="40px"
            iconSize="30px"
            onClick={() => scroll("down")}
          />
        </VStack>
      </HStack>
      <Text textShadow={largeTextShadow}>(Image Title)</Text>
    </VStack>
  );
}

export function HorizontalSnapScrollViewer({
  images,
  imageHeight = "350px",
  imageWidth = "350px",
}: SnapScrollViewerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Assume imageWidth is a string like '350px' and extract the numeric value
  const numericImageWidth = parseInt(imageWidth, 10);
  const scrollAmount =
    useBreakpointValue({
      base: numericImageWidth,
    }) ?? numericImageWidth;

  // Function to horizontally scroll the container
  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollX = direction === "left" ? -scrollAmount : scrollAmount;
      container.scrollBy({ left: scrollX, behavior: "smooth" });
    }
  };

  return (
    <Box
      position="relative"
      w="fit-content"
      h="fit-content"
      p={5}
      rounded="lg"
      bg="aiArt.800"
      bgGradient={gradients.radialMagentaMix}
    >
      <VStack>
        <HStack
          rounded="lg"
          ref={scrollContainerRef}
          spacing={0}
          w={imageWidth}
          h={imageHeight}
          overflowX="auto"
          shadow={mainShadow}
          css={{
            scrollSnapType: "x mandatory",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {images.map((src, index) => (
            <Box
              key={src}
              flex="none"
              scrollSnapAlign="start"
              w={imageWidth}
              h={imageHeight}
              lineHeight="0" // Prevents extra space inside the box
            >
              <Image src={src} w="100%" h="100%" objectFit="cover" />
            </Box>
          ))}
        </HStack>
        <HStack w="100%" justify="space-between">
          <CustomIconButton
            aria-label="scroll left"
            icon={ChevronLeftIcon}
            buttonSize="40px"
            iconSize="30px"
            onClick={() => scroll("left")}
          />
          <Text textShadow={largeTextShadow}>(Image Title)</Text>
          <CustomIconButton
            aria-label="scroll right"
            icon={ChevronRightIcon}
            buttonSize="40px"
            iconSize="30px"
            onClick={() => scroll("right")}
          />
        </HStack>
      </VStack>
    </Box>
  );
}
