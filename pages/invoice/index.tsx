import React from 'react';
import { Box, Flex, Text, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import Image from 'next/image';
import { APP_NAME } from '@/data/variables';

function Invoice() {
    return (
        <Box>
            <Flex
                alignItems={['flex-start', 'flex-start', 'flex-start', 'flex-start', 'center']}
                direction={['column', 'column', 'column', 'column', 'row']}
                justifyContent="space-between"
                columnGap="2rem"
                bg="primary"
                width="100%"
                height="50px"
                p={10}
            >
                <Flex alignItems="center" gap={2}>
                    <Image src="/logo.png" width={50} height={50} alt={APP_NAME + ' Logo'} />
                    <Text variant="logo" color="white">
                        {APP_NAME}
                    </Text>
                </Flex>
                <Text variant="logo" color="white">
                    Download
                </Text>
            </Flex>
            <Box p={5}>
                <Text fontSize="24px" fontWeight="600">
                    Invoice
                </Text>
                <Flex justifyContent="space-between">
                    <Box>
                        <Text fontSize="18px" fontWeight="400" color="secondary" mb={2}>
                            Invoice to John Doe
                        </Text>
                        <Text fontSize="18px" fontWeight="400" color="secondary" mb={2}>
                            Baliya chowk, Itahari
                        </Text>
                        <Text fontSize="18px" fontWeight="400" color="secondary">
                            Sunsari, Nepal
                        </Text>
                    </Box>
                    <Box>
                        <Text fontSize="18px" fontWeight="400" color="secondary" mb={2}>
                            Invoice ID : YCCURW-000000
                        </Text>
                        <Text fontSize="18px" fontWeight="400" color="secondary">
                            Order Date : 10/05/2022
                        </Text>
                    </Box>
                </Flex>
                <TableContainer mt={5}>
                    <Table>
                        <Thead>
                            <Tr color="secondary" fontSize="14px" fontWeight="400">
                                <Th borderBottom="none">#</Th>
                                <Th borderBottom="none">Order Details</Th>
                                <Th borderBottom="none">Unit price</Th>
                                <Th borderBottom="none">Discount</Th>
                                <Th borderBottom="none">Totl</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr textAlign="start" fontSize="14px" fontWeight="400">
                                <Td borderBottom="none">1</Td>
                                <Td borderBottom="none">Veg Pizza</Td>
                                <Td borderBottom="none">$10. 00</Td>
                                <Td borderBottom="none">$10. 00</Td>
                                <Td borderBottom="none">$10. 00</Td>
                            </Tr>
                            <Tr textAlign="start" fontSize="14px" fontWeight="400">
                                <Td borderBottom="none">1</Td>
                                <Td borderBottom="none">Veg Pizza</Td>
                                <Td borderBottom="none">$10. 00</Td>
                                <Td borderBottom="none">$10. 00</Td>
                                <Td borderBottom="none">$10. 00</Td>
                            </Tr>
                            <Tr textAlign="start" fontSize="14px" fontWeight="400">
                                <Td borderBottom="none">1</Td>
                                <Td borderBottom="none">Veg Pizza</Td>
                                <Td borderBottom="none">$10. 00</Td>
                                <Td borderBottom="none">$10. 00</Td>
                                <Td borderBottom="none">$10. 00</Td>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr textAlign="start" fontSize="14px" fontWeight="400">
                                <Td borderBottom="none"></Td>
                                <Td borderBottom="none"></Td>
                                <Td borderBottom="none"></Td>
                                <Td borderBottom="none">Subtotal</Td>
                                <Td borderBottom="none">$125.00</Td>
                            </Tr>
                            <Tr textAlign="start" fontSize="14px" fontWeight="400">
                                <Td borderBottom="none"></Td>
                                <Td borderBottom="none"></Td>
                                <Td borderBottom="none"></Td>
                                <Td borderBottom="none">Discount</Td>
                                <Td borderBottom="none">$125.00</Td>
                            </Tr>
                            <Tr textAlign="start" fontSize="14px" fontWeight="400">
                                <Td borderBottom="none"></Td>
                                <Td borderBottom="none"></Td>
                                <Td borderBottom="none"></Td>
                                <Td borderBottom="none">Tax</Td>
                                <Td borderBottom="none">$125.00</Td>
                            </Tr>
                            <Tr textAlign="start" fontSize="14px" fontWeight="400">
                                <Td borderBottom="none"></Td>
                                <Td borderBottom="none"></Td>
                                <Td borderBottom="none"></Td>
                                <Td borderBottom="none">Total</Td>
                                <Td borderBottom="none">$125.00</Td>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
                <Flex alignItems="flex-end" direction="column" mt={10}>
                    <Text fontWeight="600" fontSize="24px">
                        Invoice Total : USD $87.00
                    </Text>
                    <Text fontWeight="400" fontSize="18px" color="secondary">
                        Paid via Stripe
                    </Text>
                </Flex>
            </Box>
        </Box>
    );
}

export default Invoice;
