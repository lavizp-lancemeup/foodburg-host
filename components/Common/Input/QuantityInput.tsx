import { Flex, Icon, Input } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const QuantityInput = () => {
    const [focused, setFocused] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState<number>(1);
    return (
        <Flex
            w="6rem"
            alignItems="center"
            gap={1}
            px={2}
            borderRadius={5}
            outline={`${focused ? 3 : 2}px solid`}
            outlineColor={focused ? 'green.primary' : 'secondary'}
            onClick={() => {
                inputRef?.current?.focus();
            }}
        >
            <Icon
                as={AiOutlineMinus}
                onClick={() => {
                    if (value !== 0) {
                        setValue(value - 1);
                    }
                }}
                color={value === 1 ? 'secondary' : 'dark.900'}
            />
            <Input
                variant="flushed"
                border="none"
                outline="none"
                py="0"
                defaultValue={1}
                type="number"
                textAlign="center"
                onChange={(e) => setValue(Number(e.target.value))}
                value={value}
                ref={inputRef}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
            <Icon as={AiOutlinePlus} onClick={() => setValue(value + 1)} />
        </Flex>
    );
};

export default QuantityInput;
