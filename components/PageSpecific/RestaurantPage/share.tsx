import React from 'react';
import { Box, Text, HStack, Button } from '@chakra-ui/react';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

function Rating({ goBack }: { goBack: () => void }) {
    return (
        <Box
            bg="white"
            width="630px"
            height="630px"
            rounded="md"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
            px={10}
        >
            <Box
                width="120px"
                height="120px"
                rounded="full"
                bg="#219653"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
            >
                <FaCheck size={50} />
            </Box>
            <Text fontSize="24px" fontWeight="600">
                Share
            </Text>
            <Text align="center" fontSize="16px" fontWeight="400">
                Please provide us the rating
            </Text>
            <HStack color="primary" mt={5}>
                <Text color="black">Share on:</Text>
                <BsFacebook size={19} />

                <AiFillInstagram size={20} />

                <AiFillLinkedin size={20} />
                <AiFillTwitterCircle size={20} />
            </HStack>
            <Button variant="brand" width="100%" mt={20} onClick={goBack}>
                Copy Link
            </Button>
        </Box>
    );
}

export default Rating;
