import React, { useState, useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { palette } from "~/customTheme";

interface CustomTooltipProps {
  label?: string;
  bg?: string;
  color?: string;
  w?: string;
  h?: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  fontSize?: string;
  children?: React.ReactNode;
  displacementPercentage?: string;
  display?: string;
  placement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight";
}

export default function CustomTooltip({
  label,
  bg = palette[300],
  color = palette[700],
  w = "150px",
  h = "fit-content",
  fontSize = "1rem",
  children,
  placement = "top",
  display,
  displacementPercentage = "110%",
}: CustomTooltipProps) {
  const [isHovered, setHovered] = useState(false);
  const ref = useRef(null);

  let placementStyles;
  switch (placement) {
    case "top":
      placementStyles = {
        bottom: displacementPercentage,
        left: "50%",
        transform: "translateX(-50%)",
      };
      break;
    case "bottom":
      placementStyles = {
        top: displacementPercentage,
        left: "50%",
        transform: "translateX(-50%)",
      };
      break;
    case "left":
      placementStyles = {
        top: "50%",
        right: displacementPercentage,
        transform: "translateY(-50%)",
      };
      break;
    case "right":
      placementStyles = {
        top: "50%",
        left: displacementPercentage,
        transform: "translateY(-50%)",
      };
      break;
    case "topLeft":
      placementStyles = { bottom: "100%", right: "0%" };
      break;
    case "topRight":
      placementStyles = { bottom: "100%", left: "0%" };
      break;
    case "bottomLeft":
      placementStyles = { top: "110%", right: "0%" };
      break;
    case "bottomRight":
      placementStyles = { top: "100%", left: "0%" };
      break;
    default:
      placementStyles = {};
  }

  return !label ? (
    children
  ) : (
    <Box
      position="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      _hover={{ cursor: "pointer" }}
      ref={ref}
      display={display}
    >
      {children}
      {isHovered && (
        <Flex
          {...placementStyles}
          justify="center"
          p={2}
          zIndex="tooltip"
          lineHeight="1.2" // Line height can be adjusted for better readability if text wraps.
          w={w}
          h={h}
          bg={bg}
          color={color}
          fontSize={fontSize}
          fontWeight="500"
          rounded="md"
          position="absolute"
          shadow="2px 2px 5px rgba(0,0,0,0.5)"
          textShadow="none"
          whiteSpace="normal" // Updated from 'nowrap' to 'normal'
        >
          {label}
        </Flex>
      )}
    </Box>
  );
}
