import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {
  ButtonStyles,
  shadow3D,
  scrollBarStyles,
  gradients,
  colors,
} from "~/customTheme";
import { truncateText } from "~/utils";

interface CustomDropdownProps {
  options?: string[];
  selectedOption?: string;
  placeholder?: string;
  w?: string | object;
  onChange?: (option: string) => void;
  showEditButtons?: boolean;
  editButtonStartIndex?: number;
  onEdit?: (option: string) => void;
  onDelete?: (option: string) => void;
  fontSize?: string | object;
  displayIcon?: React.ReactNode;
  isLoading?: boolean;
}

function CustomDropdown({
  options,
  selectedOption,
  placeholder = "Select an option",
  w = { base: "350px", sm: "375px" },
  onChange,
  onEdit,
  onDelete,
  displayIcon,
  fontSize = { base: "17px" },
  isLoading,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      if (
        isOpen &&
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    // Attach the listener when the dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleDocumentClick);
    }

    // Cleanup the listener when the component is unmounted or the dropdown is closed
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [isOpen]);

  useEffect(() => {
    if (selectedOption) {
      setSelected(selectedOption);
    }
  }, [selectedOption]);

  return (
    <VStack position="relative" width={w} ref={dropdownRef} spacing={0}>
      <Box
        position="absolute"
        top="10px"
        right="10px"
        zIndex="1"
        fontSize="17px"
        color="aiArt.400"
        onClick={() => setIsOpen(!isOpen)}
        cursor="pointer"
      >
        <AiFillCaretDown />
      </Box>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        w={w}
        mb={1}
        py={4}
        fontSize={fontSize}
        isLoading={isLoading}
        spinnerPlacement="end"
        {...ButtonStyles}
      >
        {selected && (
          <HStack w="100%">
            <Flex w="85%">
              <Text noOfLines={1} fontSize={fontSize}>
                {selected}
              </Text>
            </Flex>
          </HStack>
        )}
        {!selected && (
          <HStack w="100%">
            {displayIcon} <Text fontSize={fontSize}>{placeholder}</Text>
          </HStack>
        )}
      </Button>
      {isOpen && (
        <VStack
          pt={0}
          py={3}
          position="absolute"
          w="99%"
          top="100%"
          left="0"
          spacing={1}
          bg={colors.darkTeal}
          bgGradient={gradients.opacityCremeToBlueTop}
          rounded="md"
          maxH="300px"
          overflowY="auto"
          shadow={shadow3D}
          zIndex="1000"
          sx={{
            ...scrollBarStyles,
            "&::-webkit-scrollbar": { w: "5px", h: "0px" },
          }}
        >
          {options &&
            options.map((option, index) => (
              <HStack
                w="100%"
                justify="space-between"
                key={index}
                spacing={3}
                px={{ base: 0.5, md: 2 }}
              >
                <Button
                  p={1}
                  w="100%"
                  rounded="md"
                  cursor="pointer"
                  fontSize={fontSize}
                  border="none"
                  shadow="none"
                  bg={selected === option ? "aiArt.400" : "none"}
                  color={selected === option ? "aiArt.900" : "aiArt.400"}
                  justifyContent="flex-start"
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                    onChange && onChange(option);
                  }}
                >
                  <HStack>
                    <Box display={{ base: "none", md: "inline" }}>
                      <Text>{truncateText(option, 23)}</Text>
                    </Box>
                    <Box display={{ base: "inline", md: "none" }}>
                      <Text>{truncateText(option, 15)}</Text>
                    </Box>
                  </HStack>
                </Button>{" "}
              </HStack>
            ))}
        </VStack>
      )}
    </VStack>
  );
}

export default CustomDropdown;
