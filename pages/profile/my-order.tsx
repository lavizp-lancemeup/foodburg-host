import ProfileNav from '@/components/PageSpecific/Profile/profile-nav';
import { Box, HStack, Table, TableContainer, Tbody, Td, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

function StatusCard({ status }: { status: string }) {
    return (
        <Box
            h="28px"
            px={2}
            borderRadius="md"
            bg={status == 'On process' ? '#FFBC0E' : '#006CEA'}
            textAlign="center"
            pt={1}
            color="white"
        >
            {status}
        </Box>
    );
}

function MyOrder() {
    return (
        <>
            <ProfileNav />
            <TableContainer mt={10} bg="#F2F2F2" borderRadius="10px">
                <Table>
                    <Thead bg="#EAEAEA">
                        <Tr fontSize="14px" fontWeight="400">
                            <Td borderBottom="none">Order ID</Td>
                            <Td borderBottom="none">Order Date</Td>
                            <Td borderBottom="none">Your Orders</Td>
                            <Td borderBottom="none">Code</Td>
                            <Td borderBottom="none">Aount Paid</Td>
                            <Td borderBottom="none">Status</Td>
                            <Td borderBottom="none">Aount Paid</Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr textAlign="start" fontSize="14px" fontWeight="400">
                            <Td borderBottom="none">#123456</Td>
                            <Td borderBottom="none">Fr, Dec 16,2022</Td>
                            <Td borderBottom="none">Momo, chaumin, pizza ( 2 ) , burger, coke...</Td>
                            <Td borderBottom="none">5466</Td>
                            <Td borderBottom="none">$100</Td>
                            <Td borderBottom="none">
                                <StatusCard status="On process" />
                            </Td>
                            <Td borderBottom="none">
                                <HStack justifyContent="center" gap={2}>
                                    <AiOutlineEye size={20} />
                                    <BsThreeDotsVertical size={20} />
                                </HStack>
                            </Td>
                        </Tr>
                        <Tr textAlign="start" fontSize="14px" fontWeight="400">
                            <Td borderBottom="none">#123456</Td>
                            <Td borderBottom="none">Fr, Dec 16,2022</Td>
                            <Td borderBottom="none">Momo, chaumin, pizza ( 2 ) , burger, coke...</Td>
                            <Td borderBottom="none">5466</Td>
                            <Td borderBottom="none">$100</Td>
                            <Td borderBottom="none">
                                <StatusCard status="On the way" />
                            </Td>
                            <Td borderBottom="none">
                                <HStack justifyContent="center" gap={2}>
                                    <AiOutlineEye size={20} />
                                    <BsThreeDotsVertical size={20} />
                                </HStack>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
}

export default MyOrder;
