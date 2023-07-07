import React, { useState } from 'react';
import { Box, Text, HStack, Stack, Button } from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function Rating({ goBack }: { goBack: () => void }) {
    const [stars, setStars] = useState<number>(0);
    const onStarClick = (star: number) => {
        setStars(star);
    };
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
                <AiFillStar size={50} />
            </Box>
            <Text fontSize="24px" fontWeight="600">
                Rating
            </Text>
            <Text align="center" fontSize="16px" fontWeight="400">
                Please provide us the rating
            </Text>
            <HStack color="#FFA620" mt={5}>
                {Array(stars)
                    .fill(0)
                    .map((_, i) => (
                        <AiFillStar size={40} key={i} onClick={() => setStars(i + 1)} />
                    ))}
                {Array(5 - stars)
                    .fill(0)
                    .map((_, i) => (
                        <AiOutlineStar size={40} key={i + stars} onClick={() => setStars(i + stars + 1)} />
                    ))}
            </HStack>
            <Button variant="brand" width="100%" mt={20} onClick={goBack}>
                Submit
            </Button>
        </Box>
    );
}

export default Rating;
