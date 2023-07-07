import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import PeopleSection from './peopleSection';
import MessageSection from './messageSection';
function ChatSection() {
    return (
        <Flex>
            <PeopleSection />
            <MessageSection />
        </Flex>
    );
}

export default ChatSection;
