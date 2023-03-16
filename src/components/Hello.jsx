import { Box, Text, Card, CardBody, Center } from '@chakra-ui/react'

export const Hello = () => {
    return (
        <Box className='card'>
            <Card borderRadius={'12px'} bgColor={'red'} className='hellocard' width={'515px'}>
                <CardBody>
                    <Center>
                        <Text fontSize={'20px'}>Hello! I'm front-end developer based in Poland.</Text>
                    </Center>
                </CardBody>
            </Card>
        </Box>
    )
}