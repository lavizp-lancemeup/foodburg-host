import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Rating from '@/components/Common/Rating';

function UserReviewCard() {
    return (
        <Box width="270px">
            <HStack gap={2} mb={5}>
                <Box position="relative" width="48px" height="48px">
                    <Image src="/user.png" alt="user" fill />
                </Box>
                <Box>
                    <Text fontSize="18px" fontWeight="600">
                        Belle Epoque
                    </Text>
                    <text fontSize="14px" fontWeight="400">
                        20m ago
                    </text>
                </Box>
            </HStack>
            <Rating />
            <Text fontSize="14px" fontWeight="400" mt={5}>
                Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto
                repudiandae.
            </Text>
        </Box>
    );
}

export default UserReviewCard;
