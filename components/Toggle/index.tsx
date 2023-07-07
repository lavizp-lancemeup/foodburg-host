import React from 'react';
import { Switch, FormControl, FormLabel, SwitchProps } from '@chakra-ui/react';
interface Props extends SwitchProps {
    label?: string;
}

function ToggleSwitch({ label, ...rest }: Props) {
    return (
        <FormControl display="flex" alignItems="center">
            <FormLabel mb="0">{label}</FormLabel>
            <Switch {...rest} />
        </FormControl>
    );
}

export default ToggleSwitch;
