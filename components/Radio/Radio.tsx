import { chakra, Flex, Box, useRadio, RadioProps } from '@chakra-ui/react';
import React from 'react';

const MyRadio = (props: RadioProps) => {
    const { state, getInputProps, getRadioProps, htmlProps } = useRadio(props);
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
                {...getRadioProps()}
            >
                {state.isChecked && <Box w={3} h={3} bg="secondary2" />}
            </Flex>
        </chakra.label>
    );
};

export default MyRadio;
