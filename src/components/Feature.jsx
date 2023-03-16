import { motion } from "framer-motion";
import { Box, Button, Center } from "@chakra-ui/react";
import React from "react";

export const Feature = () => {
    const constraintsRef = React.useRef(null)

    return (
        <Center>
            <Box pt={'100px'} mb={'150px'}>
                <motion.div className="drag-area" ref={constraintsRef} />
                <motion.div
                    drag
                    dragConstraints={{
                        top: -50,
                        left: -50,
                        right: 50,
                        bottom: 50,
                        bg: '#080D17'
                    }}
                >
                    <Button width={'50px'} height={'50px'}></Button>
                </motion.div>
            </Box>
        </Center>

    )
}