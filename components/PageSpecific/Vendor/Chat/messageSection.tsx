import React from 'react';
import { Box, Text, Flex, HStack, Divider } from '@chakra-ui/react';
import Image from 'next/image';
Image;
function MessageSection() {
    return (
        <Flex direction="column" width="100%" ml={10}>
            <Box width="100%">
                <HStack mb={3}>
                    <Box position="relative" width="24px" height="24px" rounded="full">
                        <Image src="/logo_restro.png" alt="asd" fill />
                    </Box>
                    <Text>shyam Group</Text>
                </HStack>
                <Divider color="#D5DAE1" />
            </Box>
            <Box height="100%">Top</Box>
            <Box>Top</Box>
        </Flex>
    );
}

export default MessageSection;
