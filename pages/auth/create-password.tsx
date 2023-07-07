import { Box, Button, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { AiOutlineEye } from 'react-icons/ai';

const CreateNewPassword = () => {
    return (
        <>
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
                        Create a new password
                    </Text>
                    <Text
                        fontFamily={'Inter'}
                        fontSize={'16px'}
                        fontWeight={'400px'}
                        lineHeight={'24px'}
                        align={'center'}
                        pt={{ base: '5', md: '2', xl: '2' }}
                    >
                        Your new character must be at 8-character.
                    </Text>

                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                        <Box w="80%" mt="6" mb={2}>
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
                        <Box w="80%" mt="6">
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
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box w="80%" mt="6" mb="20">
                            <Button variant="brand" border="none" gap={2} w="100%">
                                {' '}
                                Create new password
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default CreateNewPassword;
