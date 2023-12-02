import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const radius = "md";
export const shadow = "0px 0px 10px rgba(0,0,0,0.7)";
export const mainShadow = "2px 2px 8px rgba(0, 0, 0, 0.9)";
export const subtleShadow = "rgba(0, 0, 0, 0.07) 0px 1px 2px";
// export const largeShadow = "rgb(38, 57, 77) 0px 20px 30px -10px";
export const lightShadow = "2px 2px 8px rgba(255, 255, 255, 0.9)";
export const subtleTextShadow = "2px 2px 2px rgba(0, 0, 0, 0.9)";
export const largeTextShadow = "2px 3px 5px rgba(0, 0, 0, 0.9)";
export const lightTextShadow = "2px 2px 2px rgba(148, 208, 255, 0.9)";
export const shadow3D =
  "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;";

export const palette = {
  100: "#F2E7F2", // paleMagenta
  125: "rgba(242, 231, 242, 0.25)", // paleMagenta25
  150: "rgba(242, 231, 242, 0.5)", // paleMagenta50
  175: "rgba(242, 231, 242, 0.75)", // paleMagenta75

  200: "#F2E7C4", // lightCreme
  225: "rgba(242, 231, 196, 0.25)", // lightCreme25
  250: "rgba(242, 231, 196, 0.5)", // lightCreme50
  275: "rgba(242, 231, 196, 0.75)", // lightCreme75

  300: "#B8D3D9", // lightBlue
  325: "rgba(184, 211, 217, 0.25)", // lightBlue25
  350: "rgba(184, 211, 217, 0.5)", // lightBlue50
  375: "rgba(184, 211, 217, 0.75)", // lightBlue75

  400: "#D98CB3", // lightMagenta
  425: "rgba(217, 140, 179, 0.25)", // lightMagenta25
  450: "rgba(217, 140, 179, 0.5)", // lightMagenta50
  475: "rgba(217, 140, 179, 0.75)", // lightMagenta75

  500: "#456B8C", // mediumBlue
  525: "rgba(69, 107, 140, 0.25)", // mediumBlue25
  550: "rgba(69, 107, 140, 0.5)", // mediumBlue50
  575: "rgba(69, 107, 140, 0.75)", // mediumBlue75

  600: "#B5307A", // mediumMagenta
  625: "rgba(181, 48, 122, 0.25)", // mediumMagenta25
  650: "rgba(181, 48, 122, 0.5)", // mediumMagenta50
  675: "rgba(181, 48, 122, 0.75)", // mediumMagenta75

  700: "#8A1C7C", // darkMagenta
  725: "rgba(138, 28, 124, 0.25)", // darkMagenta25
  750: "rgba(138, 28, 124, 0.5)", // darkMagenta50
  775: "rgba(138, 28, 124, 0.75)", // darkMagenta75

  800: "#152840", // darkTeal
  825: "rgba(21, 40, 64, 0.25)", // darkTeal25
  850: "rgba(21, 40, 64, 0.5)", // darkTeal50
  875: "rgba(21, 40, 64, 0.75)", // darkTeal75

  900: "#0B0C26", // darkBlue
  925: "rgba(11, 12, 38, 0.25)", // darkBlue25
  950: "rgba(11, 12, 38, 0.5)", // darkBlue50
  975: "rgba(11, 12, 38, 0.75)", // darkBlue75
};

export const gradients = {
  // Linear Gradients

  verticalMedium: `linear-gradient(to bottom, ${palette[600]}, ${palette[200]})`,
  verticalLight: `linear-gradient(to left, ${palette[300]}, ${palette[400]})`,
  diagonalMedium: `linear-gradient(45deg, ${palette[600]}, ${palette[300]})`,

  // Radial Gradients
  radialLight: `radial-gradient(circle, ${palette[300]} 0%, ${palette[200]} 100%)`,
  radialMedium: `radial-gradient(circle, ${palette[400]} 0%, ${palette[500]} 100%)`,
  radialMedium2: `radial-gradient(circle, ${palette[700]}, ${palette[400]})`,

  // Mixed Colors Gradients
  verticalMedium2: `linear-gradient(to right, ${palette[400]}, ${palette[400]}, ${palette[600]})`,
  diagonalLight: `linear-gradient(to top left, ${palette[400]}, ${palette[200]}, ${palette[300]})`,

  // Opacity Variants Gradients
  opacityVerticalMedium: `linear-gradient(to top, ${palette[950]}, ${palette[650]})`,
  opacityHorizontalLight: `linear-gradient(to right, ${palette[150]}, ${palette[650]})`,
  opacityHorizontalMedium: `linear-gradient(to left, ${palette[150]}, ${palette[600]})`,
  opacityVerticalLight: `linear-gradient(to top, ${palette[225]}, ${palette[375]})`,

  // Diagonal Gradients
  mediumDarkDiagonal: `linear-gradient(135deg, ${palette[700]}, ${palette[500]})`,
  mediumLightDiagonal: `linear-gradient(135deg, ${palette[600]}, ${palette[200]})`,
  darkDiagonal: `linear-gradient(135deg, ${palette[900]}, ${palette[700]})`,
};

const customTransition = {
  enter: {
    duration: 0.5, // time in seconds
    ease: [0.4, 0, 0.2, 1], // custom easing
  },
  exit: {
    duration: 0.5, // time in seconds
    ease: [0.4, 0, 0.2, 1], // custom easing
  },
};

const CustomTheme = extendTheme(
  withDefaultColorScheme({
    colorScheme: "",
  }),
  {
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },

    breakpoints: {
      base: "0em", // 0px
      sm: "37em", // ~600px
      md: "53em", // 848px
      lg: "75em", // 1200px
      xl: "80em", // 1280px);
      xxl: "100em", // 1600px
      xxxl: "115em", // 1840px
    },
    fontSizes: {
      xxs: "0.75rem", // 12px
      xs: "0.9rem",
      sm: "1.1rem",
      md: "1.3rem",
      lg: "1.5rem",
      xl: "1.75rem",
      "2xl": "2rem",
      "3xl": "2.25rem",
      "4xl": "2.5rem",
      "5xl": "2.75rem",
      "6xl": "3rem",
      "7xl": "3.5rem",
      "8xl": "4rem",
      "9xl": "4.5rem",
    },
    styles: {
      global: {
        html: {
          scrollBehavior: "smooth",
          overflowX: "hidden",
          scrollbarWidth: "thin",
          overflowY: "hidden",
        },
        body: {
          w: "100vw",
          h: "100vh",
          overflowX: "hidden",
          overflowY: "hidden",
          fontFamily: "'Niramit', sans-serif;",
          bg: palette[100],
          bgGradient: gradients.mediumDarkDiagonal,
          color: palette[200],
          fontSize: "1.3rem",
        },
        a: {
          color: palette[600],
          _hover: {
            color: palette[700],
          },
          fontWeight: "600",
          _active: {
            bg: gradients.radialMedium2,
          },
        },
      },

      components: {
        Fade: {
          defaultProps: {
            transition: customTransition,
          },
        },
      },
    },
  }
);

export default CustomTheme;

export const scrollBarStyles = {
  // For Chrome, Safari, and newer versions of Edge
  "&::-webkit-scrollbar": {
    width: "7px",
    height: "7px",
    backgroundColor: "gray.700",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "teal.300",
    borderRadius: "7px",
    minHeight: "50px",
    maxHeight: "150px",
    transition: "all 0.3s ease-in-out",
  },
  "&:hover::-webkit-scrollbar-thumb": {
    backgroundColor: "teal.300",
    transition: "all 0.3s ease-in-out",
  },
};

export const overlayStyles = {
  bgGradient: gradients.mediumLightDiagonal,
  backdropFilter: "blur(4px)",
};

export const InputStyles = {
  variant: "filled",
  rounded: radius,
  bg: palette[900],
  w: "100%",
  maxW: "600px",
  color: palette[200],
  shadow: shadow,
  borderColor: palette[500],
  focusBorderColor: palette[700],
  _hover: {
    bg: palette[800],
    borderColor: palette[600],
    shadow: mainShadow,
  },
  _focus: {
    bg: palette[800],
    borderColor: palette[700],
  },
  transition: "all 0.3s ease-in-out",
};

export const ButtonStyles = {
  bg: gradients.radialLight,
  h: "35px",
  color: palette[900],
  shadow: mainShadow,
  textShadow: lightTextShadow,
  fontWeight: "600",
  rounded: radius,
  _hover: {
    bg: gradients.verticalLight,
    color: palette[700],
    shadow: mainShadow,
    textShadow: subtleShadow,
    transition: "all 0.3s ease-in-out",
  },
};
