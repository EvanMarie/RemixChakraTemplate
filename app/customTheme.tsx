import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const radius = "md";
export const shadow = "0px 0px 10px rgba(0,0,0,0.7)";
export const mainShadow = "2px 2px 8px rgba(0, 0, 0, 0.9)";
export const subtleShadow = "rgba(0, 0, 0, 0.07) 0px 1px 2px";
export const largeShadow = "rgb(38, 57, 77) 0px 20px 30px -10px";
export const lightShadow = "2px 2px 8px rgba(255, 255, 255, 0.9)";
export const subtleTextShadow = "2px 2px 2px rgba(0, 0, 0, 0.9)";
export const largeTextShadow = "2px 3px 5px rgba(0, 0, 0, 0.9)";
export const lightTextShadow = "2px 2px 2px rgba(148, 208, 255, 0.9)";
export const shadow3D =
  "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;";

export const colors = {
  // Main Colors
  darkBlue: "#0B0C26",
  darkTeal: "#152840",
  mediumBlue: "#456B8C",
  lightBlue: "#B8D3D9",
  lightCreme: "#F2E7C4",
  darkMagenta: "#8A1C7C",
  mediumMagenta: "#B5307A",
  lightMagenta: "#D98CB3",

  // Opacity 0.25
  darkBlue25: "rgba(11, 12, 38, 0.25)",
  darkTeal25: "rgba(21, 40, 64, 0.25)",
  mediumBlue25: "rgba(69, 107, 140, 0.25)",
  lightBlue25: "rgba(184, 211, 217, 0.25)",
  lightCreme25: "rgba(242, 231, 196, 0.25)",
  darkMagenta25: "rgba(138, 28, 124, 0.25)",
  mediumMagenta25: "rgba(181, 48, 122, 0.25)",
  lightMagenta25: "rgba(217, 140, 179, 0.25)",

  // Opacity 0.5
  darkBlue50: "rgba(11, 12, 38, 0.5)",
  darkTeal50: "rgba(21, 40, 64, 0.5)",
  mediumBlue50: "rgba(69, 107, 140, 0.5)",
  lightBlue50: "rgba(184, 211, 217, 0.5)",
  lightCreme50: "rgba(242, 231, 196, 0.5)",
  darkMagenta50: "rgba(138, 28, 124, 0.5)",
  mediumMagenta50: "rgba(181, 48, 122, 0.5)",
  lightMagenta50: "rgba(217, 140, 179, 0.5)",

  // Opacity 0.75
  darkBlue75: "rgba(11, 12, 38, 0.75)",
  darkTeal75: "rgba(21, 40, 64, 0.75)",
  mediumBlue75: "rgba(69, 107, 140, 0.75)",
  lightBlue75: "rgba(184, 211, 217, 0.75)",
  lightCreme75: "rgba(242, 231, 196, 0.75)",
  darkMagenta75: "rgba(138, 28, 124, 0.75)",
  mediumMagenta75: "rgba(181, 48, 122, 0.75)",
  lightMagenta75: "rgba(217, 140, 179, 0.75)",
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
          overflowX: "hidden",
          overflowY: "hidden",
          fontFamily: "'Niramit', sans-serif;",
          bgGradient:
            "linear(to-b, gray.700, gray.800, gray.900, gray.800, gray.700)",
          color: "gray.100",
          fontSize: "1.3rem",
        },
        a: {
          color: "teal.300",
          _hover: {
            color: "purple.200",
          },
          fontWeight: "600",
          _active: {
            bg: "purple.200",
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

export const InputStyles = {
  variant: "filled",
  rounded: radius,
  bg: colors.darkBlue,
  w: "100%",
  maxW: "600px",
  color: colors.lightCreme,
  shadow: shadow,
  borderColor: colors.mediumBlue,
  focusBorderColor: colors.deepMagenta,
  _hover: {
    bg: colors.darkTeal,
    borderColor: colors.mediumMagenta,
    shadow: largeShadow,
  },
  _focus: {
    bg: colors.darkTeal,
    borderColor: colors.deepMagenta,
  },
  transition: "all 0.3s ease-in-out",
};

export const ButtonStyles = {
  bg: colors.mediumBlue,
  color: colors.lightCreme,
  shadow: shadow3D,
  textShadow: largeTextShadow,
  fontWeight: "500",
  rounded: radius,
  _hover: {
    bg: colors.lightBlue,
    color: colors.darkTeal,
    shadow: lightTextShadow,
    fontWeight: "600",
  },
};
