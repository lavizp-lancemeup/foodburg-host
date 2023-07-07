import React from 'react';
import { Box, Text, HStack, SelectField } from '@chakra-ui/react';
import Image from 'next/image';
function PopularSelectiion() {
    return (
        <Box>
            <Text fontSize="16px" fontWeight="600" mb={4}>
                Most Popular
            </Text>
            <HStack>
                <Image src="/icons/person-celebrate.png" alt="delivery" height={30} width={30} />

                <SelectField fontWeight="600">
                    <option>Restaurants</option>
                    <option>Hotels</option>
                </SelectField>
            </HStack>
        </Box>
    );
}

export default PopularSelectiion;
