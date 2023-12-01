import { Box, Image } from "@chakra-ui/react";
import { mainShadow } from "~/customTheme";

interface ImageIconProps {
  keyword?: string;
  label?: string;
  onClick?: () => void;
  size?: string | object;
  shadow?: string;
  rounded?: string;
  transform?: string;
  transition?: string;
  cursor?: string;
  zIndex?: string;
  position?: "relative" | "absolute" | "fixed";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  imageIconPath?: string;
}

export default function ImageIcon({
  keyword,
  label,
  onClick,
  size = "40px",
  shadow = mainShadow,
  rounded = "lg",
  transform,
  transition,
  cursor = "arrow",
  zIndex,
  position = "relative",
  top,
  left,
  right,
  bottom,
  imageIconPath,
}: ImageIconProps) {
  return (
    // <CustomTooltip label={label} placement="bottom">
    <Box
      position={position}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      zIndex={zIndex}
      cursor={cursor}
      onClick={onClick}
      rounded={rounded}
    >
      <Image
        src={imageIconPath ? imageIconPath : `/images/icons/${keyword}Icon.png`}
        alt={label}
        boxSize={size}
        shadow={shadow}
        rounded={rounded}
        _hover={{
          transform: transform,
          transition: transition,
        }}
      />
    </Box>
    // </CustomTooltip>
  );
}
