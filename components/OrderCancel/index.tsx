import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
function OrderCancel() {
    return (
        <Box p={10} width="540px">
            <Text fontSize="22px" fontWeight="600">
                Message from Vendor
            </Text>
            <Text fontSize="14px" fontWeight="400" color="#828182">
                Reason for order cancellation
            </Text>
            <Text fontSize="18px" fontWeight="400" px={10} py={5}>
                Items are out of stock
            </Text>
            <Text fontSize="12px" fontWeight="400" color="#494043">
                please order from next restaurant{' '}
            </Text>
            <Button variant="brand" width="100%" mt="5">
                Continue
            </Button>
        </Box>
    );
}

export default OrderCancel;
