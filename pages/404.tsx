import { SEO } from '@/components/SEO';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import Image from 'next/image';
const PageNotFound = () => {
    return (
        <Fragment>
            <SEO title="404 Page Not Found" />
            <Box p={10} m={10}>
                <Flex align={'center'} direction={'column'}>
                    <Box position="relative" width="530px" height="420px">
                        <Image src="/error.png" alt="404 error" fill style={{ objectFit: 'contain' }} />
                    </Box>

                    <Text
                        fontFamily={'Inter'}
                        fontSize={'28px'}
                        fontWeight={'600px'}
                        lineHeight={'36px'}
                        align={'center'}
                        color="primary"
                    >
                        404 Not Found
                    </Text>
                    <Text
                        fontFamily={'Inter'}
                        fontSize={'36px'}
                        fontWeight={'600px'}
                        lineHeight={'44px'}
                        align={'center'}
                    >
                        Whoops! That page doesen’t exist.
                    </Text>
                    <Text
                        fontFamily={'Inter'}
                        fontSize={'16px'}
                        fontWeight={'500px'}
                        lineHeight={'24px'}
                        align={'center'}
                        mt="5"
                    >
                        The page you requested could not be found
                    </Text>

                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box mt="6">
                            <Button variant="brand" border="none" gap={2} w="100%">
                                {' '}
                                Back to start
                            </Button>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Fragment>
    );
};

export default PageNotFound;
