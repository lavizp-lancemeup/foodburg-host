import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { CSSObject } from '@emotion/react';
import { AiOutlineCamera } from 'react-icons/ai';

function ProfileNav() {
    const router = useRouter();

    const customScrollbarStyle: CSSObject = {
        '&::-webkit-scrollbar': {
            height: '6px',
            width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'transparent',
        },
        '&:hover::-webkit-scrollbar-thumb': {
            backgroundColor: 'gray.200',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
        },
    };
    return (
        <Flex justify={'start'} width="full" bg="#F2F2F2" borderRadius={'8px'} mt={5}>
            <Flex justify={'center'} align={'center'} direction={{ base: 'column', md: 'column' }}>
                <Box w="100%" mt="3" p={5} pb={0}>
                    <Flex
                        justify={'space-between'}
                        align={'center'}
                        direction={{ base: 'column', md: 'row', lg: 'row', xl: 'row' }}
                    >
                        <Flex align={'center'} direction={{ base: 'column', md: 'row', lg: 'row', xl: 'row' }}>
                            <Box rounded="full" border="1px solid" borderColor="primary" p={0.5}>
                                <Box position="relative" height="100px" width="100px" rounded="full">
                                    <Image
                                        src="/profile.png"
                                        alt="profile_image"
                                        fill
                                        style={{
                                            objectFit: 'contain',
                                        }}
                                    />
                                    <Box
                                        pos="absolute"
                                        bottom={0}
                                        right={0}
                                        bg="#292932"
                                        color="white"
                                        rounded="full"
                                        p={2}
                                    >
                                        <AiOutlineCamera />
                                    </Box>
                                </Box>
                            </Box>
                            <Box textAlign={'start'} mx={{ base: 0, md: '5' }} mt={{ base: '2', md: 0 }}>
                                <Flex direction={'column'} textAlign={'start'}>
                                    <Text fontWeight={'500'} fontSize={'20px'} lineHeight={'28px'} mb={2}>
                                        Jane Copper
                                    </Text>
                                    <Flex fontSize={'16px'} lineHeight={'18px'} mt="2">
                                        <Text mr="5">JaneCopper@xyz.com</Text>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Flex>
                    </Flex>
                    <Box mt={{ base: '12', md: 7, lg: 5, xl: 5 }} ml={5}>
                        <Flex
                            as="nav"
                            align="center"
                            justify="flex-start"
                            wrap="nowrap"
                            overflowX="auto"
                            css={customScrollbarStyle}
                        >
                            <Box whiteSpace="nowrap" as="nav">
                                <Link href="/profile/account">
                                    <Button
                                        as="span"
                                        fontWeight="600"
                                        lineHeight="20px"
                                        mr={{ base: 5, md: 8, xl: 8 }}
                                        color={router.pathname === '/profile/account' ? 'primary' : 'black'}
                                        borderBottom={router.pathname === '/profile/account' ? '2px solid' : 'none'}
                                        borderColor="primary"
                                        mb={router.pathname === '/profile-account' ? '-5px' : '0'}
                                        py={0}
                                        px={0}
                                        borderRadius={0}
                                    >
                                        My Account
                                    </Button>
                                </Link>
                                <Link href="/profile/my-order">
                                    <Button
                                        as="span"
                                        fontWeight="600"
                                        lineHeight="20px"
                                        mr={{ base: 5, md: 8, xl: 8 }}
                                        color={router.pathname === '/profile/my-order' ? 'primary' : 'black'}
                                        borderColor="primary"
                                        borderBottom={router.pathname === '/profile/my-order' ? '2px solid' : 'none'}
                                        mb={router.pathname === '/my-ticket' ? '-5px' : '0'}
                                        py={0}
                                        px={0}
                                        borderRadius={0}
                                    >
                                        My Order
                                    </Button>
                                </Link>
                                <Link href="/profile/history">
                                    <Button
                                        as="span"
                                        fontWeight="600"
                                        lineHeight="20px"
                                        mr={{ base: 5, md: 8, xl: 10 }}
                                        color={router.pathname === '/profile/history' ? 'primary' : 'black'}
                                        borderColor="primary"
                                        borderBottom={router.pathname === '/profile/history' ? '2px solid' : 'none'}
                                        mb={router.pathname === '/my-ticket' ? '-5px' : '0'}
                                        py={0}
                                        px={0}
                                        borderRadius={0}
                                    >
                                        History
                                    </Button>
                                </Link>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
}

export default ProfileNav;
