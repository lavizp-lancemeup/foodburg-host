import { Flex, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import ConditionallyRender from './ConditionallyRender';

type Props = {
    title: string;
    rightChildren?: ReactNode;
};

const SectionTitleTwo = ({ title, rightChildren }: Props) => {
    return (
        <Flex alignItems="center" justifyContent="space-between">
            <Text
                fontSize={{
                    base: '1.2rem',
                    sm: '1.6rem',
                }}
                fontWeight={500}
            >
                {title}
            </Text>
            <ConditionallyRender condition={rightChildren !== undefined} show={rightChildren} />
        </Flex>
    );
};

export default SectionTitleTwo;
