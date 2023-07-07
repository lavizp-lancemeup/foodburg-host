import React from 'react';
import { Box, Text } from '@chakra-ui/react';
function NavPath({ path }: { path: string }) {
    let arrayPath = path.split('/');
    return (
        <Box py={3} bg="#F8F8F8" mx={-20} px={20}>
            {arrayPath.map((item: string, index: number) => {
                if (index != arrayPath.length - 1) {
                    return (
                        <Text key="index" as="span" fontSize="16px">
                            {item + ' / '}
                        </Text>
                    );
                } else {
                    return (
                        <Text key="index" color="primary" as="span" fontSize="16px">
                            {item}
                        </Text>
                    );
                }
            })}
        </Box>
    );
}

export default NavPath;
