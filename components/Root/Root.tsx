import { chakra } from '@chakra-ui/react';
import React from 'react';

const Root = ({ children }: { children: React.ReactNode }) => {
    return (
        <chakra.div width="100%" height="100%">
            {children}
        </chakra.div>
    );
};

export default Root;
