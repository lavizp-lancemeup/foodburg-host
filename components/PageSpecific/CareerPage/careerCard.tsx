import React from 'react';
import { Box, Text, Flex, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
function CareerCard({ title, description, date }: { title: string; description: string; date: string }) {
    return (
        <Flex
            bg="#F2F2F2"
            p={8}
            justifyContent={['center', 'center', 'center', 'space-between']}
            flexWrap="wrap"
            mb={10}
            borderRadius="sm"
        >
            <Box width={['100%', '100%', '80%']} textAlign={['center', 'center', 'center', 'left']}>
                <Text fontSize="20px" mb={2}>
                    {title}
                </Text>
                <Text fontSize="16px">{description}</Text>
            </Box>
            <Box width="3px" height="100px" display={['none', 'none', 'none', 'block']}></Box>
            <Flex gap="10" mt={[5, 5, 5, 0]}>
                <Flex direction="column" alignItems={['center', 'center', 'start']}>
                    <Text fontSize="12px" color="#97ABC0">
                        Application ends:
                    </Text>
                    <Text color="primary" fontSize="18px">
                        {date}
                    </Text>
                    <NextLink href="/career/asd">
                        <Button variant="brand" mt="5" w="full">
                            Apply Now
                        </Button>
                    </NextLink>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default CareerCard;
