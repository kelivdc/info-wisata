import React from "react";
import {
  Avatar,
  Box,
  Flex,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Divider,
  IconButton,
  useColorMode,
  Link,
  Heading
 
} from "@chakra-ui/react";
import {
  ExternalLinkIcon,
  SettingsIcon,
  MoonIcon,
  SunIcon,
  UnlockIcon
} from "@chakra-ui/icons";
import Goto from "../Goto";

function Topbar() {
  const bgColor = useColorModeValue("white", "gray.500");
  const bgMenu = useColorModeValue("white", "blue.800");
  const textTop = useColorModeValue("gray.500", "white");
  const textColor = useColorModeValue("#718096", "white");
  const { colorMode, toggleColorMode } = useColorMode();  
  const admin = process.env.admin;
  
  return (
    <Box
      bg={bgColor}
      w="full"
      boxShadow={"0 .15rem 1.75rem 0 rgba(58,59,69,.15)"}
    >
      <Flex
        height={"4.375rem"}
        justifyContent={"space-between"}
        alignItems="center"
        px={8}
        color={textTop}
      >
        <Box>A</Box>
        <Box>
            <Link href={process.env.project_website || ''} isExternal><Heading fontSize="xl">{process.env.project_name}</Heading></Link>
        </Box>
        <Flex>         
          <Menu>
            <MenuButton>
              <Flex>
                <Text px={2}>Admin</Text> <Avatar size={"xs"} />
              </Flex>
            </MenuButton>
            <MenuList bg={bgMenu} color={textColor} mt={4}>
              <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
              <MenuItem icon={<UnlockIcon />}>Change Password</MenuItem>
              <MenuItem color={textColor} icon={colorMode == "light" ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} size="sm"> 
                Light mode
              </MenuItem>
              <Divider />
              <Goto url={`${admin}/login`}>
                <MenuItem icon={<ExternalLinkIcon />}>                
                    <Link>Logout</Link>
                </MenuItem>
              </Goto>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Topbar;
