import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
function Congratulations() {
    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
            p={['5px', '10px', '30px', '50px']}
            my={10}
            bg="#F2F2F2"
            borderRadius="10px"
            border="2px solid #E0E0E0"
        >
            <Box position="relative" width="240px" height="213px">
                <Image src="/congratulations.png" alt="congrats" fill style={{ objectFit: 'contain' }} />
            </Box>
            <Text fontWeight="500" fontSize="32px" mb={2}>
                Congratulations !
            </Text>
            <Text fontWeight="400" mb={2} color="#626262">
                Admin will review your details, Thank you !
            </Text>
        </Box>
    );
}

export default Congratulations;
