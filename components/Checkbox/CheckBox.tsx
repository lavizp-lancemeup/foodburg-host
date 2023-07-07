import { CheckboxProps, chakra, Flex, Box, useCheckbox } from '@chakra-ui/react';
import React from 'react';

const CheckBox = (props: CheckboxProps) => {
    const { state, getCheckboxProps, getInputProps, htmlProps } = useCheckbox(props);
    return (
        <chakra.label display="flex" flexDirection="row" alignItems="center" cursor="pointer" {...htmlProps}>
            <input {...getInputProps()} hidden />
            <Flex
                alignItems="center"
                justifyContent="center"
                border="2px solid"
                borderColor="secondary"
                w={5}
                h={5}
                rounded="base"
                {...getCheckboxProps()}
            >
                {state.isChecked && <Box w={3} h={3} bg="secondary2" />}
            </Flex>
        </chakra.label>
    );
};

export default CheckBox;
