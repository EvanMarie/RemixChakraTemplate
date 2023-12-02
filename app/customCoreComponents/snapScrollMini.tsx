import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { gradients, mainShadow, shadow3D } from "~/customTheme";
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
  contentHeight = "350px",
  contentWidth = "350px",
  children,
}: SnapScrollViewerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setAtTop(container.scrollTop === 0);
      setAtBottom(
        container.scrollTop + container.clientHeight === container.scrollHeight
      );
    }
  };

  const scroll = (direction: "up" | "down") => {
    const container = scrollContainerRef.current;
    if (container) {
      const y = direction === "up" ? -100 : 100; // Adjust this value as needed
      container.scrollBy({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  return (
    <VStack
      align="center"
      p={5}
      rounded="lg"
      bg="aiArt.800"
      bgGradient={gradients.darkDiagonal}
      shadow={mainShadow}
      w="fit-content"
    >
      <HStack spacing={4} align="stretch" h="fit-content">
        <VStack
          ref={scrollContainerRef}
          w={contentWidth}
          h={contentHeight}
          rounded="md"
          shadow={shadow3D}
          overflowY="scroll"
          css={{
            scrollSnapType: "y mandatory",
            "&::-webkit-scrollbar": { display: "none" },
          }}
          spacing={0}
          p={0}
        >
          {images &&
            images.map((src, index) => (
              <Box
                key={index}
                h={contentHeight}
                w={contentWidth}
                shadow={mainShadow}
                css={{
                  scrollSnapAlign: "start",
                }}
              >
                <Image src={src} objectFit="cover" w="100%" h="100%" />
              </Box>
            ))}
          {children &&
            React.Children.map(children, (child, index) => (
              <Box
                key={index}
                flex="none"
                overflow="hidden"
                scrollSnapAlign="start"
                w={contentWidth}
                h={contentHeight}
                lineHeight="0"
              >
                {child}
              </Box>
            ))}
        </VStack>
        <VStack justify="space-between" h={contentHeight} py={4}>
          <CustomIconButton
            aria-label="scroll up"
            icon={ChevronUpIcon}
            onClick={() => scroll("up")}
            isDisabled={atTop}
          />
          <CustomIconButton
            aria-label="scroll down"
            icon={ChevronDownIcon}
            onClick={() => scroll("down")}
            isDisabled={atBottom}
          />
        </VStack>
      </HStack>
      {/* <Text textShadow={largeTextShadow}>(Image Title)</Text> */}
    </VStack>
  );
}

export function HorizontalSnapScrollViewer({
  images,
  children,
  contentHeight = "350px",
  contentWidth = "350px",
}: SnapScrollViewerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [atLeft, setAtLeft] = useState(true);
  const [atRight, setAtRight] = useState(false);

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setAtLeft(container.scrollLeft === 0);
      setAtRight(
        container.scrollLeft + container.clientWidth === container.scrollWidth
      );
    }
  };

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollX = direction === "left" ? -100 : 100; // Adjust this value as needed
      container.scrollBy({ left: scrollX, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  return (
    <Box
      position="relative"
      w="fit-content"
      h="fit-content"
      p={5}
      rounded="lg"
      bg="aiArt.800"
      bgGradient={gradients.darkDiagonal}
      shadow={mainShadow}
    >
      <VStack spacing={5}>
        <HStack
          rounded="lg"
          ref={scrollContainerRef}
          spacing={0}
          w={contentWidth}
          h={contentHeight}
          overflowX="auto"
          shadow={mainShadow}
          css={{
            scrollSnapType: "x mandatory",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {images &&
            images.map((src, index) => (
              <Box
                key={src}
                flex="none"
                scrollSnapAlign="start"
                w={contentWidth}
                h={contentHeight}
                lineHeight="0" // Prevents extra space inside the box
              >
                <Image src={src} w="100%" h="100%" objectFit="cover" />
              </Box>
            ))}
          {children &&
            React.Children.map(children, (child, index) => (
              <Box
                key={index}
                flex="none"
                overflow="hidden"
                scrollSnapAlign="start"
                w={contentWidth}
                h={contentHeight}
                lineHeight="0"
              >
                {child}
              </Box>
            ))}
        </HStack>
        <HStack w="100%" justify="space-between">
          <CustomIconButton
            aria-label="scroll left"
            icon={ChevronLeftIcon}
            onClick={() => scroll("left")}
            isDisabled={atLeft}
          />
          {/* <Text textShadow={largeTextShadow}>(Image Title)</Text> */}
          <CustomIconButton
            aria-label="scroll right"
            icon={ChevronRightIcon}
            onClick={() => scroll("right")}
            isDisabled={atRight}
          />
        </HStack>
      </VStack>
    </Box>
  );
}
