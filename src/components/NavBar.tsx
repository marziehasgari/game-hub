//LIBS
import { HStack, Image } from "@chakra-ui/react";

//IMAGES
import logo from "../assets/logo.webp";

//COMPONENTS
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
