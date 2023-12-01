import { keyframes } from "@emotion/react";
import FadeIn from "./fadeIn";
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface StickerProps {
  fadeDuration?: string;
  randomFade?: boolean;
  position?: "absolute" | "relative" | "fixed" | "sticky";
  top?: string | number | object;
  bottom?: string | number | object;
  left?: string | number | object;
  right?: string | number | object;
  src: string;
  w?: string | number | object;
  h?: string | number | object;
  maxW?: string | number | object;
  zIndex?: string | number | object;
  showAt?: "base" | "sm" | "md" | "lg" | "xl" | "xxl";
  transform?: string;
  animate?:
    | "blink"
    | "heartbeat"
    | "spin"
    | "swing"
    | "float"
    | "shake"
    | "flipHorizontal"
    | "flipVertical"
    | "none";
  animationDuration?: string;
  heartbeatStartSize?: string;
  heartbeatEndSize?: string;
}

const blinky = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export default function Sticker({
  fadeDuration,
  randomFade = false,
  position = "absolute",
  top,
  bottom,
  left,
  right,
  src,
  w = "auto",
  h = "auto",
  maxW,
  zIndex = "1",
  showAt = "base",
  transform,
  animate = "none",
  animationDuration = "4s",
  heartbeatStartSize = "0.5",
  heartbeatEndSize = "1.2",
}: StickerProps) {
  const displayAtBreakpoint = useBreakpointValue({
    base: "none",
    [showAt]: "block",
  });

  const heartbeat = keyframes`
  0%, 100% { transform: scale(${heartbeatStartSize}); }
  50% { transform: scale(${heartbeatEndSize}); }
`;

  const swing = keyframes`
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

  const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

  const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
`;

  const flipHorizontal = keyframes`
  0% { transform: rotateY(0); }
  100% { transform: rotateY(360deg); }
`;

  const flipVertical = keyframes`
  0% { transform: rotateX(0); }
  100% { transform: rotateX(360deg); }
`;

  const animation =
    animate === "blink"
      ? `${blinky} ${animationDuration} infinite`
      : animate === "heartbeat"
      ? `${heartbeat} ${animationDuration} infinite`
      : animate === "spin"
      ? `${spin} ${animationDuration} infinite linear`
      : animate === "swing"
      ? `${swing} ${animationDuration} infinite ease-in-out`
      : animate === "float"
      ? `${float} ${animationDuration} infinite ease-in-out`
      : animate === "shake"
      ? `${shake} ${animationDuration} infinite ease-in-out`
      : animate === "flipHorizontal"
      ? `${flipHorizontal} ${animationDuration} infinite linear`
      : animate === "flipVertical"
      ? `${flipVertical} ${animationDuration} infinite linear`
      : "none";

  const fadeDurations = Array.from({ length: 5 }, (_, i) =>
    (0.1 + i * 0.05).toFixed(2)
  );

  // State to store the final fade duration
  const [finalFadeDuration, setFinalFadeDuration] = useState<string>(
    fadeDuration || "0.2s"
  );

  useEffect(() => {
    // If randomFade is true, pick a random duration when the component mounts or when randomFade changes
    if (randomFade) {
      const randomDuration = `${
        fadeDurations[Math.floor(Math.random() * fadeDurations.length)]
      }s`;
      setFinalFadeDuration(randomDuration);
    }
  }, [randomFade, fadeDurations]);

  return (
    <FadeIn duration={finalFadeDuration}>
      <Box
        position={position}
        top={top}
        left={left}
        right={right}
        bottom={bottom}
        zIndex={zIndex}
        display={displayAtBreakpoint}
        transform={transform}
        animation={animation}
      >
        <Image src={src} width={w} height={h} maxW={maxW} />
      </Box>
    </FadeIn>
  );
}
