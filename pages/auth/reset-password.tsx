import React from 'react';
import { Box, Text, Button, HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { AiOutlineMail } from 'react-icons/ai';

function ResetPassword() {
    return (
        <Box display={'flex'} alignItems={'center'} flexDirection={'column'} my={20}>
            <Box bg="#E0E0E0" borderRadius="md" mt="5" mb="5" w={{ base: '90%', md: '60%', xl: '640px' }} h="100%">
                <Text
                    fontFamily={'Inter'}
                    fontSize={'32px'}
                    fontWeight={'500px'}
                    lineHeight={'42px'}
                    align={'center'}
                    pt={{ base: '5', md: '10', xl: '20' }}
                >
                    Reset Password
                </Text>
                <Text
                    fontFamily={'Inter'}
                    fontSize={'16px'}
                    fontWeight={'400px'}
                    lineHeight={'24px'}
                    align={'center'}
                    pt={{ base: '5', md: '2', xl: '2' }}
                >
                    Enter Your email to reset your password
                </Text>

                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mt={5}>
                    <Box w="80%" mt="6">
                        <Text mb={1}>Email Address</Text>
                        <InputGroup>
                            <InputLeftElement>
                                <AiOutlineMail />
                            </InputLeftElement>
                            <Input placeholder="Enter your full name" border="none" bg="white" />
                        </InputGroup>
                    </Box>
                </Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Box w="80%" mt="6" mb="20">
                        <Button variant="brand" border="none" gap={2} w="100%">
                            {' '}
                            Continue
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default ResetPassword;
