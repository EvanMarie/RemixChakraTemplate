import { type ButtonProps, IconButton } from "@chakra-ui/react";
import CustomTooltip from "./customTooltip";
import { ButtonStyles } from "~/customTheme";

const IconSize = "23px";
const ButtonSize = "35px";

interface SingleButtonProps extends ButtonProps {
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
  iconSize?: string | number | object;
  buttonSize?: string | object | number;
  tooltipLabel?: string;
}

export default function CustomIconButton({
  icon: Icon,
  iconSize = IconSize,
  buttonSize = ButtonSize,
  tooltipPlacement = "top",
  tooltipLabel,
}: SingleButtonProps) {
  return (
    <CustomTooltip label={tooltipLabel} placement={tooltipPlacement}>
      <IconButton
        icon={<Icon />}
        fontSize={iconSize}
        {...ButtonStyles}
        aria-label="icon button"
        w={buttonSize}
      />
    </CustomTooltip>
  );
}
