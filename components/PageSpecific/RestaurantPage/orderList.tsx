import React from 'react';
import { Box, Text, HStack, Stack, Button } from '@chakra-ui/react';
import { AiFillTag, AiOutlineArrowLeft } from 'react-icons/ai';
import { SlNote } from 'react-icons/sl';
import { RxCross1 } from 'react-icons/rx';

function OrderList({ setOrder, goBack }: { setOrder: () => void; goBack: () => void }) {
    return (
        <Box bg="white" width="540px" px={10} height="fit-content" pb={40} pt={10}>
            <HStack>
                <AiOutlineArrowLeft size={20} />
                <Text fontSize="22px" fontWeight="600">
                    Order List
                </Text>
            </HStack>
            <Stack mt={3} pl={8}>
                <HStack justifyContent="space-between" fontWeight="600" color="secondary">
                    <Text width="100px">Item</Text>
                    <Text>Note</Text>
                    <Text>Quantity</Text>
                    <Text>Price</Text>
                </HStack>
                <HStack justifyContent="space-between" fontWeight="400">
                    <Text width="100px">Mo:Mo</Text>
                    <Text>
                        <SlNote />
                    </Text>
                    <Text>- 2 +</Text>
                    <Text>Rs. 40</Text>
                </HStack>
                <HStack justifyContent="space-between" fontWeight="400">
                    <Text width="100px">Chowmein</Text>
                    <Text>
                        <SlNote />
                    </Text>
                    <Text>- 2 +</Text>
                    <Text>Rs. 40</Text>
                </HStack>
                <HStack justifyContent="space-between" fontWeight="400">
                    <Text width="100px">Mo:Mo</Text>
                    <Text>
                        <SlNote />
                    </Text>
                    <Text>- 2 +</Text>
                    <Text>Rs. 40</Text>
                </HStack>
                <HStack justifyContent="space-between" fontWeight="400">
                    <Text mt={2}>Delivery charge</Text>
                    <Text fontWeight="600">Rs. 1</Text>
                </HStack>
                <HStack justifyContent="space-between" fontWeight="400">
                    <Text mt={2}>Sub total</Text>
                    <Text fontWeight="600">Rs. 120</Text>
                </HStack>
                <HStack justifyContent="space-between" fontWeight="400">
                    <Text mt={2}>Apply Discount</Text>
                    <Text fontWeight="600">Rs. 20</Text>
                </HStack>
                <Box width="100%" rounded="sm" border="1px solid #E1E3E6">
                    <Button variant="text" gap={2}>
                        <AiFillTag />
                        Coupon20
                        <RxCross1 />
                    </Button>
                </Box>
                <HStack justifyContent="space-between" fontWeight="400">
                    <Text mt={2}>VAT (13%)</Text>
                    <Text fontWeight="600">Rs. 13</Text>
                </HStack>
                <HStack justifyContent="space-between" fontWeight="400" color="success">
                    <Text mt={2}>Total</Text>
                    <Text fontWeight="600">Rs. 113</Text>
                </HStack>
                <HStack>
                    <Button variant="brand" bg="red" width="50%" onClick={goBack}>
                        Back
                    </Button>
                    <Button variant="brand" bg="success" width="50%" onClick={setOrder}>
                        Order now
                    </Button>
                </HStack>
            </Stack>
        </Box>
    );
}

export default OrderList;
