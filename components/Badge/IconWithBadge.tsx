import { Box, Icon, IconProps, chakra } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

interface Props extends IconProps {
    showBadge?: boolean;
    as: IconType;
}
const IconWithBadge = ({ showBadge = false, ...iconProps }: Props) => {
    return (
        <Box position="relative">
            <Icon {...iconProps} />
            {showBadge && (
                <chakra.span position="absolute" top="0" right="0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5" fill="#C41E24" />
                    </svg>
                </chakra.span>
            )}
        </Box>
    );
};

export default IconWithBadge;
