import React from 'react';
import { Box, Text, Flex, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import ActionButton from '@/components/Common/ActionButton';

function FoodCategoryCard() {
    return (
        <Flex p={5} justifyContent="space-between" flexWrap="wrap" alignItems="center" width="571px">
            <Box pos="relative" width="150px" height="100px" borderRadius="10px">
                <Image src="/momo.png" alt="" fill />
            </Box>
            <Box>
                <Text fontWeight="600" fontSize="18px">
                    Cusines
                </Text>
                <HStack gap={5}>
                    <Box>
                        <Text fontWeight="400" fontSize="16px">
                            Sub Category
                        </Text>
                        <Text fontWeight="500" fontSize="20px">
                            15
                        </Text>
                    </Box>
                    <Box>
                        <Text fontWeight="400" fontSize="16px">
                            Sub Category
                        </Text>
                        <Text fontWeight="500" fontSize="20px">
                            120
                        </Text>
                    </Box>
                </HStack>
            </Box>
            <ActionButton />
        </Flex>
    );
}

export default FoodCategoryCard;
