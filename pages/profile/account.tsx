import React from 'react';
import ProfileNav from '@/components/PageSpecific/Profile/profile-nav';
import { Box, Flex, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import { AiFillEdit } from 'react-icons/ai';
const personalData = [
    {
        PIKey: 'Name',
        PIValue: 'Jane Copper',
    },
    {
        PIKey: 'Email',
        PIValue: 'janecopper@xyz.com',
    },
    {
        PIKey: 'Phone No.',
        PIValue: '981235557',
    },
    {
        PIKey: 'Age',
        PIValue: '20-25',
    },
    {
        PIKey: 'Gender',
        PIValue: 'Male',
    },
    {
        PIKey: 'Address',
        PIValue: 'Kathmandu,Nepal',
    },
];
function Account() {
    return (
        <>
            <ProfileNav />
            <Box
                px="2"
                bg="#F2F2F2"
                borderRadius="8px"
                mt={10}
                w={{ base: '100%', md: '80%', lg: '60%', xl: '500px' }}
                mb={10}
            >
                <Flex justify={'space-between'} align={'center'}>
                    <Text p="5" fontWeight={'500'} fontSize={'20px'} lineHeight={'28px'}>
                        Personal Information
                    </Text>
                    <Box
                        p="2"
                        mr="5"
                        h="8"
                        w="8"
                        justifyContent={'center'}
                        alignItems={'center'}
                        borderRadius={'50%'}
                        bg={'#292932'}
                        color="white"
                    >
                        <AiFillEdit />
                    </Box>
                </Flex>
                <Flex>
                    <SimpleGrid
                        columns={12}
                        pb="10"
                        pt="5"
                        fontFamily={'Inter'}
                        fontWeight={'400'}
                        fontSize={'16px'}
                        lineHeight={'24px'}
                    >
                        {personalData.map((data) => {
                            return (
                                <>
                                    <GridItem colSpan={4} h="100%" w="100%" p="1" px="5">
                                        <Text fontSize={'16px'} lineHeight={'24px'}>
                                            {data.PIKey}:
                                        </Text>
                                    </GridItem>
                                    <GridItem
                                        colStart={5}
                                        colEnd={13}
                                        h="100%"
                                        w="100%"
                                        px="5"
                                        fontFamily={'Inter'}
                                        fontWeight={'400'}
                                        fontSize={'16px'}
                                        lineHeight={'24px'}
                                    >
                                        <Text textAlign={'start'} w="100%" p="1" px="5">
                                            {data.PIValue}
                                        </Text>
                                    </GridItem>
                                </>
                            );
                        })}
                    </SimpleGrid>
                </Flex>
            </Box>
        </>
    );
}

export default Account;
