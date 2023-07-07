import { Box, Flex, Text, Button, Input, InputGroup, InputRightElement, HStack, Divider } from '@chakra-ui/react';
import { AiOutlineEye, AiOutlineMail } from 'react-icons/ai';
import CheckBox from '@/components/Checkbox/CheckBox';

function Login() {
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} my={10}>
            <Box
                mt="5"
                mb="5"
                w={{ base: '90%', md: '60%', xl: '640px' }}
                h="100%"
                bg="#F2F2F2"
                borderRadius="10px"
                border="2px solid #E0E0E0"
            >
                <Box>
                    <Flex justify={'center'} align={'center'} direction={'column'}>
                        <Text
                            fontSize={'32px'}
                            fontWeight={'500'}
                            lineHeight={'42px'}
                            align={'center'}
                            pt={{ base: '5', md: '10', xl: '20' }}
                        >
                            Login to your Account
                        </Text>
                    </Flex>
                    <Flex align="center" width="100%" px={20} my={7}>
                        <Divider color="#E0E0E0;" />
                        <Text
                            width="700px"
                            px="3"
                            fontSize={{ base: '14px', xl: '16px' }}
                            align="center"
                            style={{
                                fontFamily: 'Inter',
                                fontWeight: '600',
                                lineHeight: '24px',

                                letterSpacing: '0em',
                            }}
                        >
                            Sign in with your Email
                        </Text>
                        <Divider color="#E0E0E0;" />
                    </Flex>
                </Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                    <Box w="80%" mt="6">
                        <Text fontWeight="400" mb={1}>
                            Email Address
                        </Text>
                        <InputGroup>
                            <Input placeholder="Email" border="none" bg="white" />
                            <InputRightElement>
                                <AiOutlineMail size={20} />
                            </InputRightElement>
                        </InputGroup>
                    </Box>
                    <Box w="80%" mt="6">
                        <Text fontWeight="400" mb={1}>
                            Password
                        </Text>
                        <InputGroup>
                            <Input placeholder="Type your password" border="none" type="password" bg="white" />
                            <InputRightElement>
                                <AiOutlineEye size={20} />
                            </InputRightElement>
                        </InputGroup>
                    </Box>

                    <Box w="80%" mt="6">
                        <Flex justify={'space-between'} direction={{ base: 'column', md: 'row' }}>
                            <HStack>
                                <CheckBox
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        lineHeight: '24px',
                                    }}
                                ></CheckBox>
                                <Text fontSize="16px" fontWeight="400">
                                    Keep me Logged In
                                </Text>
                            </HStack>
                            <Button
                                variant="text"
                                color="primary"
                                border={'none'}
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: '15px',
                                    fontWeight: '500',
                                    lineHeight: '22px',
                                }}
                            >
                                Forget Password ?
                            </Button>
                        </Flex>
                    </Box>
                    <Box w="80%" mt="6">
                        <Button variant="brand" border="none" gap={2} w="100%">
                            {' '}
                            Login
                        </Button>
                    </Box>
                </Box>
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDirection={{ base: 'column', md: 'row' }}
                    mt="5"
                    p="3"
                    mb="10"
                    style={{
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '24px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                    }}
                >
                    <Text>Dont have an account ?</Text>
                    <Button variant="filled" bg="none" color="primary" border="none">
                        {' '}
                        Register Here
                    </Button>
                </Box>
            </Box>
            <Box
                display={'flex'}
                alignItems={'center'}
                flexDirection={{ base: 'column', md: 'row' }}
                mt="10"
                mb="5"
                style={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                }}
            >
                <Text mx={{ base: '5', md: 0 }} fontSize={{ base: '16px', sm: '16px', md: '16' }}>
                    I want to register my restaurant /
                </Text>
                <Button
                    variant="filled"
                    bg="none"
                    color="primary"
                    border="none"
                    fontSize={{ base: '16px', sm: '16px', md: '16' }}
                    display={'flex'}
                    flexWrap={'wrap'}
                >
                    {' '}
                    Click here
                </Button>
            </Box>
        </Box>
    );
}

export default Login;
