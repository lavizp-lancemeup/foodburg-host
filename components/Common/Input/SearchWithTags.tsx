import React from 'react';
import { Box, Button, HStack } from '@chakra-ui/react';
import SearchInput from './SearchInput';
import Image from 'next/image';
import { GoLocation } from 'react-icons/go';
import { FiFilter } from 'react-icons/fi';

function SearchWithTags() {
    return (
        <Box width="100%">
            <SearchInput />
            <HStack mt={4}>
                <Button variant="text" gap={2}>
                    <Image src="/icons/type.png" alt="delivery" height={15} width={15} />
                    Type:{' '}
                    <Box fontWeight="bold" as="span">
                        All
                    </Box>
                </Button>
                <Button variant="text" gap={2}>
                    <GoLocation />
                    Location:{' '}
                    <Box fontWeight="bold" as="span">
                        San Fransisco
                    </Box>
                </Button>
                <Button variant="brand" gap={2}>
                    <FiFilter size={18} />
                    Filter
                </Button>
            </HStack>
        </Box>
    );
}

export default SearchWithTags;
