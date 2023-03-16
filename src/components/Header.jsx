import { Box, Text, Image, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import React from "react";
import ThemeToggleButton from "../theme/theme-toggle-button";

export const Header = () => {
    return (
        <Box className="header" >
            <Box p={'5px'} alignItems={'center'} display={'flex'} justifyContent={'center'}>
                <Link to="/">
                    <Box display={'flex'} alignItems={'center'}>
                        <Image
                            borderRadius='full'
                            boxSize='30px'
                            src='./logo.png'
                            alt='Dan Abramov'
                        />
                        <Text p={'10px'} px={'15px'} fontSize={'20px'} className={'tohome'}>Alexandr Golobokov</Text>
                    </Box>

                </Link>

                |<Link to="/works"><Text fontWeight={300} p={'10px'} fontSize={'20px'} px={'15px'} className={'works'}>Works</Text></Link>
                |<Link to="/posts"><Text fontWeight={300} p={'10px'} fontSize={'20px'} px={'15px'} className={'posts'}>Posts</Text></Link>
                |<a href="https://github.com/JasiuKolega" target="_blank"><Text fontWeight={300} p={'10px'} fontSize={'20px'} px={'15px'} className={'posts'}>Sources</Text></a>

                <Box pl={'350px'}>
                    <ThemeToggleButton />
                </Box>

            </Box>
        </Box>
    )
}