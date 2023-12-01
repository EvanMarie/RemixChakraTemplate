import {
  Center,
  type FlexProps,
  HStack,
  Spinner,
  Text,
} from "@chakra-ui/react";
import CustomTooltip from "./customTooltip";
import { ButtonStyles, mainShadow } from "~/customTheme";

const IconSize = "23px";
const ButtonSize = "35px";

interface SingleButtonProps extends FlexProps {
  icon: React.ComponentType;
  tooltipPlacement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight";
  onClick?: React.MouseEventHandler;
  iconSize?: string | number | object;
  buttonSize?: string | object | number;
  text?: string;
  textButtonWidth?: string | number | object;
  textSize?: string | number | object;
  position?: "relative" | "absolute" | "fixed" | "sticky";
  top?: string | number | object;
  right?: string | number | object;
  bottom?: string | number | object;
  left?: string | number | object;
  isLoading?: boolean;
  tooltipLabel?: string;
}

export default function CustomIconButton({
  icon: Icon,
  onClick,
  iconSize = IconSize,
  buttonSize = ButtonSize,
  tooltipPlacement = "top",
  tooltipLabel,
  text,
  textButtonWidth,
  textSize = "1.1rem",
  position = "relative",
  top,
  right,
  left,
  bottom,
  isLoading = false,
}: SingleButtonProps) {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <CustomTooltip label={tooltipLabel} placement={tooltipPlacement}>
      <Center
        fontSize={iconSize}
        {...ButtonStyles}
        h={buttonSize}
        w={textButtonWidth ? textButtonWidth : buttonSize}
        onClick={handleClick}
        rounded="md"
        px={textButtonWidth ? 2 : 0}
        position={position}
        top={top}
        bottom={bottom}
        right={right}
        left={left}
        transition="all 0.3s ease-in-out"
        shadow={mainShadow}
        zIndex="1"
      >
        {" "}
        {isLoading ? (
          <Spinner size="sm" />
        ) : (
          <HStack w="100%" justify="center">
            <Icon />
            {text && <Text fontSize={textSize}>{text}</Text>})
          </HStack>
        )}
      </Center>
    </CustomTooltip>
  );
}
