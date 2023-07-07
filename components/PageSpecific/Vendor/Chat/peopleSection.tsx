import React from 'react';
import { Box, Text, Flex, Stack, HStack } from '@chakra-ui/react';
import Image from 'next/image';

function PeopleSection() {
    return (
        <Stack>
            {Array(10)
                .fill(0)
                .map((_, i) => i + 1)
                .map((idx) => (
                    <>
                        <HStack borderRadius="4px" p="8px">
                            <Box position="relative" width="24px" height="24px" rounded="full">
                                <Image src="/logo_restro.png" alt="asd" fill />
                            </Box>
                            <Text>Sachin</Text>
                        </HStack>
                    </>
                ))}
        </Stack>
    );
}

export default PeopleSection;
