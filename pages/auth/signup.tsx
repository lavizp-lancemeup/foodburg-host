import {
    AbsoluteCenter,
    Box,
    Flex,
    Text,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Divider,
} from '@chakra-ui/react';
import { AiFillApple, AiOutlineEye, AiOutlineGoogle, AiOutlineMail } from 'react-icons/ai';

function Signup() {
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} my={10}>
            <Box mt="5" mb="5" w={{ base: '90%', md: '60%', xl: '640px' }} h="100%" bg="#E0E0E0" borderRadius="md">
                <Box>
                    <Flex justify={'center'} align={'center'} direction={'column'}>
                        <Text
                            fontSize={'32px'}
                            fontWeight={'500px'}
                            lineHeight={'42px'}
                            align={'center'}
                            pt={{ base: '5', md: '10', xl: '20' }}
                        >
                            Create an Account
                        </Text>
                        <Button
                            variant="brand"
                            bg="#FFE81A"
                            color="black"
                            border="none"
                            gap={2}
                            mt="5"
                            w="80%"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: '16px',
                                fontWeight: '600',
                                lineHeight: '24px',
                                letterSpacing: '0em',
                                textAlign: 'left',
                            }}
                        >
                            <AiOutlineGoogle size={20} />
                            Sign up with Google
                        </Button>

                        <Button
                            variant="brand"
                            bg="#3D3D3D"
                            border="none"
                            gap={2}
                            mt="3"
                            w="80%"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: '16px',
                                fontWeight: '600',
                                lineHeight: '24px',
                                letterSpacing: '0em',
                                textAlign: 'left',
                            }}
                        >
                            <AiFillApple size={20} />
                            Sign up with Apple Id
                        </Button>
                        <Flex align="center" width="100%" px={20} mt={5}>
                            <Divider />
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
                            <Divider />
                        </Flex>
                    </Flex>
                </Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                    <Box w="80%" mt="6">
                        <Text fontWeight="600" mb={1}>
                            Full Name
                        </Text>
                        <InputGroup>
                            <Input placeholder="Enter your full name" border="none" />
                            <InputRightElement>
                                <AiOutlineMail />
                            </InputRightElement>
                        </InputGroup>
                    </Box>
                    <Box w="80%" mt="6">
                        <Text fontWeight="600" mb={1}>
                            Phone number
                        </Text>
                        <InputGroup>
                            <Input placeholder="Enter your phone number" border="none" />
                            <InputRightElement>
                                <AiOutlineMail />
                            </InputRightElement>
                        </InputGroup>
                    </Box>

                    <Box w="80%" mt="6">
                        <Text fontWeight="600" mb={1}>
                            Email Address
                        </Text>
                        <InputGroup>
                            <Input placeholder="Email" border="none" />
                            <InputRightElement>
                                <AiOutlineMail />
                            </InputRightElement>
                        </InputGroup>
                    </Box>
                    <Box w="80%" mt="6">
                        <Text fontWeight="600" mb={1}>
                            Password
                        </Text>
                        <InputGroup>
                            <Input placeholder="Type your password" border="none" type="password" />
                            <InputRightElement>
                                <AiOutlineEye />
                            </InputRightElement>
                        </InputGroup>
                    </Box>
                    <Box w="80%" mt="6">
                        <Text fontWeight="600" mb={1}>
                            Confirm Password
                        </Text>
                        <InputGroup>
                            <Input placeholder="Confirm your password" border="none" type="password" />
                            <InputRightElement>
                                <AiOutlineEye />
                            </InputRightElement>
                        </InputGroup>
                    </Box>

                    <Box w="80%" mt="6">
                        <Button variant="brand" border="none" gap={2} w="100%">
                            {' '}
                            Register
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
                    <Text>Already have an account ?</Text>
                    <Button variant="filled" bg="none" color="primary" border="none">
                        {' '}
                        Login
                    </Button>
                </Box>
            </Box>
            <Box
                display={'flex'}
                alignItems={'center'}
                flexDirection={{ base: 'column', md: 'row' }}
                mt="5"
                mb="5"
                style={{
                    fontFamily: 'Inter',
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

export default Signup;
