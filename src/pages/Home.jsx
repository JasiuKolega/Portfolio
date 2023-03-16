import { Box } from "@chakra-ui/react";
import { Hello } from "../components/Hello"
import { MainHome } from "../components/MainHome"


const Home = () => {
    return (
        <Box pt={'100px'}>
            <Hello />

            <MainHome />
        </Box>
    )
}

export default Home;