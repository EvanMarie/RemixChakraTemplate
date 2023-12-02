import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  ButtonStyles,
  colors,
  largeTextShadow,
  overlayStyles,
  shadow3D,
} from "~/customTheme";
import ImageIcon from "./imageIcon";

interface CustomAlertProps {
  isAlertOpen: boolean;
  onClose: () => void;
  onConfirmClick: () => void;
  cancelRef: React.MutableRefObject<HTMLButtonElement | null>;
  title: string;
  body: string;
  confirmButtonText: string;
  cancelButtonText: string;
  imageIcon?: string;
  image?: string;
}

export default function CustomAlert({
  isAlertOpen,
  onClose,
  onConfirmClick,
  cancelRef,
  title,
  body,
  confirmButtonText,
  cancelButtonText,
  image,
  imageIcon,
}: CustomAlertProps) {
  return (
    <AlertDialog
      isOpen={isAlertOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay {...overlayStyles}>
        <AlertDialogContent
          bg={colors.darkMagenta}
          color={colors.paleMagenta}
          maxW="390px"
          shadow={shadow3D}
          position="relative"
        >
          <Image
            src={image}
            w="140px"
            position="absolute"
            bottom="0"
            left="5px"
          />
          <AlertDialogHeader
            fontSize="2xl"
            fontWeight="bold"
            color={colors.paleMagenta}
            textShadow={largeTextShadow}
          >
            <HStack>
              {imageIcon && <ImageIcon keyword={imageIcon} size="50px" />}
              <Text>{title}</Text>
            </HStack>
          </AlertDialogHeader>

          <AlertDialogBody display="flex" justifyContent="end">
            <VStack w="65%" align="start" textAlign="right" spacing={1}>
              <Text size="xl">{body}</Text>
            </VStack>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              {cancelButtonText}
            </Button>
            <Button {...ButtonStyles} onClick={onConfirmClick} ml={3}>
              {confirmButtonText}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
