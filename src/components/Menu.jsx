import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons';
import { IconButton } from "@chakra-ui/react";


export const MenuHeader = () => {
    return (
        <Menu>
            <MenuButton
                _hover={`
                    background-color: #00040D;
                    opacity: 0.83;
                `}
                _active={`
                    bg: #00040D;
                    opacity: 0.83;
                `}
                bg={'#080D17'}
                opacity={0.83}
                border={'1px solid #00040D'}
                color={'white'}
                className='menubutton'
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
            />
            <MenuList>
                <MenuItem icon={<AddIcon />} command='⌘T'>
                    New Section
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                    New Card
                </MenuItem>
                <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                    Open Closed Tab
                </MenuItem>
                <MenuItem icon={<EditIcon />} command='⌘O'>
                    Open File...
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
