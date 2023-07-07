import React, { useState } from 'react';
import { Box, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { AiFillLock, AiFillQuestionCircle } from 'react-icons/ai';
import Image from 'next/image';
function CircularCheckbox({ color }: { color: string }) {
    const [isChecked, setIsChecked] = useState<boolean>(true);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    return (
        <Box
            width="20px"
            height="20px"
            borderRadius="100%"
            borderColor={color}
            bg="transparent"
            borderWidth={3}
            onClick={toggleCheckbox}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            {isChecked && <Box width="10px" height="10px" bg={color} borderRadius="100%"></Box>}
        </Box>
    );
}
function PaymentMethod() {
    return (
        <Box width="100%" pb={5} mt={5}>
            <Box pt={5}>
                <Box>
                    <Flex justifyContent="space-between" alignItems="center" mb={5} px={5}>
                        <Flex gap={3} alignItems="center">
                            <CircularCheckbox color="primary" />
                            <Text color="darkMode.secondaryText" fontSize="14px" fontWeight="500">
                                Credit card
                            </Text>
                        </Flex>
                        <Flex gap={3} alignItems="center">
                            <Image src="/icons/visa.png" alt="card" height={30} width={30} />
                            <Image src="/icons/card.png" alt="card" height={30} width={30} />
                        </Flex>
                    </Flex>
                    <Box width="100%" h={1} bg="darkMode.borderColor" mb={5}></Box>
                </Box>
                <Box mb={10} px={5}>
                    <InputGroup color="darkMode.secondaryText" mb={5}>
                        <Input placeholder="Card number" variant="main" bg="transparent" border="none" />
                        <InputRightElement>
                            <AiFillLock size={20} />
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup color="darkMode.secondaryText" mb={5}>
                        <Input placeholder="Name on card" variant="main" bg="transparent" border="none" />
                    </InputGroup>
                    <Flex gap={5}>
                        <InputGroup color="darkMode.secondaryText">
                            <Input
                                placeholder="Expiration date (MM/YY)"
                                variant="main"
                                bg="transparent"
                                border="none"
                            />
                        </InputGroup>
                        <InputGroup color="darkMode.secondaryText">
                            <Input placeholder="Securoty code" variant="main" bg="transparent" border="none" />
                            <InputRightElement>
                                <AiFillQuestionCircle size={20} />
                            </InputRightElement>
                        </InputGroup>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}

export default PaymentMethod;
