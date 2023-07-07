import React from 'react';
import { Box, Text, Button, HStack, PinInput, PinInputField } from '@chakra-ui/react';

function EmailVerification() {
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
                    Email Verification
                </Text>
                <Text
                    fontFamily={'Inter'}
                    fontSize={'16px'}
                    fontWeight={'400px'}
                    lineHeight={'24px'}
                    align={'center'}
                    pt={{ base: '5', md: '2', xl: '2' }}
                >
                    We just sent a 6 digit code to your email hello@gmail.com.
                </Text>

                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Box w="80%" mt="6">
                        <HStack justifyContent="center">
                            <PinInput
                                type="number"
                                autoFocus
                                otp
                                size={'lg'}
                                errorBorderColor={'red.500'}
                                colorScheme={'black'}
                                variant={'filled'}
                                placeholder={''}
                            >
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                    </Box>
                </Box>
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    mt="5"
                    style={{
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '24px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                    }}
                >
                    <Text>Didnt receive OTP ?</Text>
                    <Button variant="text" bg="none" color="#E14658" border="none">
                        {' '}
                        Resend OTP
                    </Button>
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

export default EmailVerification;
