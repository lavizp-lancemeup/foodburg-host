import { Container, Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const DefaultPageLayout = ({ children }: { children: ReactNode }): React.JSX.Element => {
    return (
        <>
            <Container
                maxW="1589px"
                minW={{ base: '100%', md: 'auto' }}
                overflow="hidden"
                px={{ base: 5, sm: '1rem', md: '5.75rem' }}
                height="100%"
                minH="100vh"
                as={Flex}
                direction="column"
                minHeight="100vh"
            >
                <Header />
                <Flex flex={1} width="100%" flexDirection="column" height="100%" as="main">
                    {children}
                </Flex>
            </Container>
            <Footer />
        </>
    );
};

export default DefaultPageLayout;
