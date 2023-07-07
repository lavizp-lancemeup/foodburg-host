import React from 'react';
import SearchInput from '../Input/SearchInput';
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
function SelectLocationContainer() {
    return (
        <Stack p={10} gap={5} width={['400px', '500px', '630px']}>
            <Text> Set your location</Text>
            <SearchInput />
            <Box pos="relative" width="100%" height={['250px', '300px', '450px']}>
                <Image src="/map.png" alt="map" fill />
            </Box>
            <Flex justifyContent="center" width="100%">
                <Button variant="brand" width="95%">
                    Continue
                </Button>
            </Flex>
        </Stack>
    );
}

export default SelectLocationContainer;
