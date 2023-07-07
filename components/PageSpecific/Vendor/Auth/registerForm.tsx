import React from 'react';
import { Box, Button, HStack, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { AiOutlineEye, AiOutlineMail } from 'react-icons/ai';
function RegisterForm({ onSubmit }: { onSubmit: () => void }) {
    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
            p={['5px', '10px', '30px', '60px']}
            my={20}
            bg="#F2F2F2"
            borderRadius="10px"
            border="2px solid #E0E0E0"
        >
            <Text fontSize="32px" fontWeight="500">
                Register as a Restaurant Owner
            </Text>
            <Box w="100%" mt="6">
                <Text fontWeight="400" mb={1}>
                    Full Name
                </Text>
                <Input placeholder="Enter your full name" border="none" bg="white" />
            </Box>
            <Box w="100%" mt="6">
                <Text fontWeight="400" mb={1}>
                    Phone nunmber
                </Text>
                <Input placeholder="Enter your phone number" border="none" bg="white" />
            </Box>
            <Box w="100%" mt="6">
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
            <HStack flexWrap="wrap" justifyContent="space-between" alignItems="center" mt="6" width="100%">
                <Box width={['100%', '100%', '49%']} minW="180px">
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
                <Box width={['100%', '100%', '49%']} minW="180px">
                    <Text fontWeight="400" mb={1}>
                        Confirm Password
                    </Text>
                    <InputGroup>
                        <Input placeholder="Confirm password" border="none" type="password" bg="white" />
                        <InputRightElement>
                            <AiOutlineEye size={20} />
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </HStack>
            <Button variant="brand" width="100%" mt={10} onClick={onSubmit}>
                {' '}
                Create Account as Restaurant Owner
            </Button>
        </Box>
    );
}

export default RegisterForm;
