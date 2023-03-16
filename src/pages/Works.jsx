import { Text, Container, Box, Center, Divider } from "@chakra-ui/react"
import { CardWorks } from "../components/CardWorks";

const Works = () => {
    return (
        <Box pt={'100px'}>
            <Container>
                <Text fontWeight={600} display={'inline-block'} className={'h3'}>Works</Text>

                <Box display={'flex'} justify-content={'space-around'} pb={'25px'}>
                    <CardWorks
                        title={"Alex's Sneakers"}
                        image={'./sneaker8.png'}
                        descrition={'In this website you can add to favorite, add to cart, and buy your sneakers. Click to see it!'}
                    />
                    <CardWorks
                        title={"Your cards"}
                        image={'./yourcards.png'}
                        descrition={'In this website you can create section with language and title. Into you`ll create a card with word, translate, and sentence with this word.'}
                    />
                </Box>

                <Box pb={'15px'}>
                    <Divider />
                </Box>

                <Text fontWeight={600} display={'inline-block'} className={'h3'}>Collaborations</Text>

                <Center display={'flex'} justify-content={'space-around'} flexWrap={'wrap'} pb={'25px'}>
                    <CardWorks
                        title={"Margelo"}
                        image={'./margelo.png'}
                        descrition={'A website of the elite app development and contracting agency based in Austria'}
                    />
                    <CardWorks
                        title={"mode.tokyo"}
                        image={'./modatokio.png'}
                        descrition={'The mode magazine for understanding to personally enjoy Japan'}
                    />
                </Center>
                <Center opacity={0.4} pt={'52px'}>
                    © 2023 Alexandr Golobokov. All Rights Reserved
                </Center>
            </Container>

        </Box>
    )
}

export default Works;

