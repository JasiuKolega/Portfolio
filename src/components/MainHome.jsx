import { Box, Text, Container, Button, Center, Image } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export const MainHome = () => {
    return (
        <>
            <Container>
                <Box display={'flex'} alignItems={''} justifyContent={'space-between'}>
                    <Box flexGrow={1}>
                        <Box>
                            <Text pt={'50px'} fontSize={'36px'} fontWeight={600}>Alexandr Golobokov</Text>
                        </Box>


                        <Box>
                            <Text>Digital Prodaction (Artist / Developer / Designer)</Text>
                        </Box>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} alignItems={'center'} mt={'40px'}>
                        <Image
                            borderColor={'whiteAlpha.800'}
                            borderWidth={2}
                            borderStyle={'solid'}
                            maxWidth={'100px'}
                            display={'inline-block'}
                            borderRadius={'100%'}
                            src={'./myphoto.jpg'}
                        />
                    </Box>
                </Box>

                <Box className={'main'} pt={'10px'}>
                    <Text display={'inline-block'} className={'h3'}>Works</Text>
                    <Text fontSize={'16px'} pt={'20px'}>Alex is a freelance and front-end developer based in Katowice. I have been programming for 3 months now. My mainstack is Next.js (TypeScript), Chakra-ui, React Query. This website I created by React.js, Chakra UI, Framer Motion, and Three.js. In this tab you will get acquainted with my works that I have done or have been doing for 3 months</Text>
                </Box>
                <Center pt={'30px'}>
                    <Link to="/works">
                        <Button>View Works
                            <Box pl={'7px'}>
                                <ArrowForwardIcon />
                            </Box>
                        </Button>
                    </Link>

                </Center>
                <Box pt={'30px'}>
                    <Text display={'inline-block'} className={'h3'}>Bio</Text>
                    <Box pt={'20px'} display={'flex'}>
                        <Text fontWeight={700}>2007</Text><Text pl={'20px'} fontSize={'16px'}>Born in Mariupol (Маріуполь), Ukraine</Text>
                    </Box>
                    <Box pt={'5px'} display={'flex'}>
                        <Text fontWeight={700}>2021</Text><Text pl={'20px'} fontSize={'16px'}>Completed the Master's Program in the Graduate School of Information Science at Mariupol Institute of Science and Technology (Мариупольській університет науки та технологій).</Text>
                    </Box>
                    <Box pt={'5px'} display={'flex'}>
                        <Text fontWeight={700}>2022</Text><Text pl={'20px'} fontSize={'16px'}>Working in Microsoft! Czech Republick</Text>
                    </Box>
                    <Box pt={'5px'} display={'flex'}>
                        <Text fontWeight={700}>2023</Text><Text pl={'20px'} fontSize={'16px'}>Working as a freelancer!</Text>
                    </Box>
                </Box>
                <Box pt={'30px'}>
                    <Text display={'inline-block'} className={'h3'}>I ♥</Text>
                    <Text fontSize={'16px'} pt={'20px'}>Art, Music, Drawing, Playing Drums, Photography, Leica, Machine Learning.</Text>
                </Box>
                <Box pt={'30px'}>
                    <Text display={'inline-block'} className={'h3'}>On the web</Text>
                    <Box fontSize={'18px'} pt={'20px'}>
                        <Box><a href='https://www.instagram.com/1__gus_1' target={'_blank'}><Button display={'block'}>instagram</Button></a></Box>
                        <Box pt={'10px'}><a href='https://t.me/alexgolobokov' target={'_balnk'}><Button display={'block'}>telegram</Button></a></Box>
                        <Box pt={'10px'}><a href="https://twitter.com/Alexxxxx3278" target={'_balnk'}><Button display={'block'}>twiter</Button></a></Box>
                    </Box>
                </Box>
                <Box pt={'180px'}>
                    <Center alignItems={'center'} opacity={0.4}>
                        © 2023 Alexandr Golobokov. All Rights Reserved
                    </Center>
                </Box>
            </Container>
        </>
    )
}
