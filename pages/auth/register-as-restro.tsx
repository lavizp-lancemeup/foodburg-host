import CheckBox from '@/components/Checkbox/CheckBox';
import { Box, Flex, Text, Button, Input, InputGroup, InputRightElement, HStack } from '@chakra-ui/react';
import { AiOutlineEye, AiOutlineMail } from 'react-icons/ai';

function RegisterAsRestro() {
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} my={10}>
            <Box
                mt="5"
                mb="5"
                w={{ base: '90%', md: '60%', xl: '640px' }}
                h="100%"
                bg="#E0E0E0"
                borderRadius="md"
                p={20}
            >
                <Box>
                    <Flex justify={'center'} align={'center'} direction={'column'}>
                        <Text fontSize={'32px'} fontWeight={'500px'} lineHeight={'42px'} align={'center'}>
                            Setup your Restaurant Account
                        </Text>
                    </Flex>
                </Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                    <Box w="100%" mt="6">
                        <Text fontWeight="600" mb={1}>
                            Full Name
                        </Text>
                        <InputGroup>
                            <Input placeholder="Enter your full name" border="none" bg="white" />
                            <InputRightElement>
                                <AiOutlineMail />
                            </InputRightElement>
                        </InputGroup>
                    </Box>
                    <Box w="100%" mt="6">
                        <Text fontWeight="600" mb={1}>
                            Phone number
                        </Text>
                        <InputGroup>
                            <Input placeholder="Enter your phone number" border="none" bg="white" />
                            <InputRightElement>
                                <AiOutlineMail />
                            </InputRightElement>
                        </InputGroup>
                    </Box>

                    <Box w="100%" mt="6">
                        <Text fontWeight="600" mb={1}>
                            Email Address
                        </Text>
                        <InputGroup>
                            <Input placeholder="Email" border="none" bg="white" />
                            <InputRightElement>
                                <AiOutlineMail />
                            </InputRightElement>
                        </InputGroup>
                    </Box>
                    <Flex alignItems="center" justifyContent="space-between" mt="6">
                        <Box width="45%">
                            <Text fontWeight="600" mb={1}>
                                Password
                            </Text>
                            <InputGroup>
                                <Input placeholder="Type your password" border="none" type="password" bg="white" />
                                <InputRightElement>
                                    <AiOutlineEye />
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                        <Box width="45%">
                            <Text fontWeight="600" mb={1}>
                                Confirm Password
                            </Text>
                            <InputGroup>
                                <Input placeholder="Confirm your password" border="none" type="password" bg="white" />
                                <InputRightElement>
                                    <AiOutlineEye />
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                    </Flex>
                    <Box w="100%" mt="6">
                        <Text fontWeight="600" mb={1}>
                            Restaurant Name
                        </Text>
                        <Input placeholder="Enter your Restaurant name" border="none" bg="white" />
                    </Box>
                    <Box w="100%" mt="6">
                        <Text fontWeight="600" mb={1}>
                            ABN or ACN Number
                        </Text>
                        <Input border="none" bg="white" />
                    </Box>
                    <Box w="100%" mt="6">
                        <Text fontWeight="600" mb={1}>
                            Legal Address of Restaurant
                        </Text>
                        <Input border="none" bg="white" />
                    </Box>
                    <Box w="100%" mt="6">
                        <Text fontWeight="600" mb={1}>
                            Do you Registered GST?
                        </Text>
                        <HStack gap={5} pt={2}>
                            <HStack>
                                <CheckBox />
                                <Text>Yes</Text>
                            </HStack>
                            <HStack>
                                <CheckBox />
                                <Text>No</Text>
                            </HStack>
                        </HStack>
                    </Box>
                    <Box w="100%" mt="6">
                        <Text fontWeight="600" mb={2}>
                            Upload Documents
                        </Text>
                        <Input
                            type="file"
                            placeholder=" No File Chosen"
                            borderWidth={0.5}
                            borderColor="#292932"
                            bg="white"
                            px={0}
                            sx={{
                                '::file-selector-button': {
                                    height: '100%',
                                    px: '10px',
                                    background: '#292932',
                                    border: 'none',
                                    color: 'white',
                                    mr: '10px',
                                },
                            }}
                        />
                    </Box>

                    <Box width="100%" mt="6">
                        <Button variant="brand" border="none" gap={2} w="100%">
                            {' '}
                            Send Application
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default RegisterAsRestro;
