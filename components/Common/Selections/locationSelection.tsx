import React from 'react';
import { Box, Text, HStack, SelectField } from '@chakra-ui/react';
import { MdOutlineLocationOn } from 'react-icons/md';
function LocationSelection() {
    return (
        <Box>
            <Text fontSize="16px" fontWeight="600" mb={4}>
                Find Resturant in
            </Text>
            <HStack>
                <MdOutlineLocationOn size={30} />
                <SelectField fontWeight="600">
                    <option>Nepal</option>
                    <option>India</option>
                </SelectField>
            </HStack>
        </Box>
    );
}

export default LocationSelection;
