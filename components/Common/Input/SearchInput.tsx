import React, { useState } from 'react';
import { Flex, Icon, Input } from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchInput = ({ placeholder }: { placeholder?: string }) => {
    const [focused, setFocused] = useState<boolean>(false);
    return (
        <Flex
            borderRadius="5px"
            px={3}
            alignItems="center"
            outline="1px solid"
            outlineColor={focused ? 'blue.primary' : 'rgba(151, 151, 151, 0.5)'}
        >
            <Icon as={AiOutlineSearch} fontSize="25px" color="secondary" />
            <Input
                type="text"
                variant="search"
                placeholder={placeholder || 'Search Here...'}
                color="secondary"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </Flex>
    );
};

export default SearchInput;
