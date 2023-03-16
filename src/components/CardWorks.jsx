import { Card, CardBody, Box } from '@chakra-ui/react';
import { Image, Stack, Text, Heading } from '@chakra-ui/react';

export const CardWorks = ({ title, image, descrition }) => {
    return (
        <Box pt={'25px'} pr={'10px'}>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        opacity={1}
                        src={image}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{title}</Heading>
                        <Text>
                            {descrition}
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    )
}