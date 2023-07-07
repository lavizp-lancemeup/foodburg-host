import React from 'react';
import { Box, Text, HStack, Stack, Button } from '@chakra-ui/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import PaymentMethod from './paymentMethod';

function OrderListConfirm({ setOrder, goBack }: { setOrder: () => void; goBack: () => void }) {
    return (
        <Box bg="white" width="540px" px={10} height="full" pb={40} pt={10} overflow="scroll">
            <HStack>
                <Button onClick={goBack}>
                    <AiOutlineArrowLeft size={20} />
                </Button>
                <Text fontSize="22px" fontWeight="600">
                    Order List
                </Text>
            </HStack>
            <Stack mt={3} pl={8}>
                <Box mt={3}>
                    <Text fontSize="14px" fontWeight="400" color="secondary">
                        Location Details:
                    </Text>
                    <Text fontSize="18px" fontWeight="400">
                        100m from your location
                    </Text>
                </Box>
                <Box mt={3}>
                    <Text fontSize="14px" fontWeight="400" color="secondary">
                        Ordered from:
                    </Text>
                    <Text fontSize="18px" fontWeight="400">
                        Burger House
                    </Text>
                </Box>
                <Box mt={3}>
                    <Text fontSize="14px" fontWeight="400" color="secondary">
                        Delivery Type:
                    </Text>
                    <Text fontSize="18px" fontWeight="400">
                        Homme Delivery
                    </Text>
                </Box>
                <Box mt={3} mb={3}>
                    <Text fontSize="14px" fontWeight="400" color="secondary">
                        Discount status
                    </Text>
                    <Text fontSize="18px" fontWeight="400">
                        Applied
                    </Text>
                </Box>
                <Box>
                    <Text fontSize="20px" fontWeight="600" mt={5}>
                        Payment Method
                    </Text>
                </Box>
                <PaymentMethod />
                <Button variant="brand" width="100%" mt={2} bg="success" onClick={setOrder}>
                    Confirm & pay
                </Button>
            </Stack>
        </Box>
    );
}

export default OrderListConfirm;
