import React from 'react';
import { Select, FormLabel, SelectProps, FormControl } from '@chakra-ui/react';

interface Props extends SelectProps {
    label?: string;
}

function SelectField({ label, isRequired, ...rest }: Props) {
    return (
        <FormControl>
            <FormLabel>
                {label}
                {isRequired && '*'}
            </FormLabel>
            <Select {...rest}></Select>
        </FormControl>
    );
}

export default SelectField;
