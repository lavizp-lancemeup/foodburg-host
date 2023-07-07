import React, { Fragment, useState } from 'react';
import {
    Button,
    Flex,
    Icon,
    Text,
    Menu,
    MenuButton,
    MenuList,
    Stack,
    Avatar,
    Divider,
    MenuItem,
    chakra,
    IconButton,
    SimpleGrid,
    HStack,
    Box,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import IconWithBadge from '@/components/Badge/IconWithBadge';
import { MdPerson } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { APP_NAME } from '@/data/variables';
import { BsHandbag } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineInfoCircle } from 'react-icons/ai';
import { MdOutlineLibraryBooks, MdOutlineWorkHistory, MdOutlinePrivacyTip, MdClose } from 'react-icons/md';
import { GiNotebook } from 'react-icons/gi';
import { RiNotification4Fill } from 'react-icons/ri';
import NextLink from 'next/link';
const Header = () => {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(true);
    // const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <Fragment>
            <Flex alignItems="center" justifyContent="space-between" py="1rem">
                <Flex
                    alignItems={['flex-start', 'flex-start', 'flex-start', 'flex-start', 'center']}
                    direction={['column', 'column', 'column', 'column', 'row']}
                    justifyContent="flex"
                    columnGap="2rem"
                >
                    <NextLink href="/">
                        <Flex alignItems="center">
                            <Image src="/logo.png" width={50} height={50} alt={APP_NAME + ' Logo'} />
                            <Text variant="logo">{APP_NAME}</Text>
                        </Flex>
                    </NextLink>

                    {/* {!isExpanded && <SelectLocation />} */}
                </Flex>
                <Flex gap={['1.68rem', '3.5rem', '2.3rem', '3.68rem']} alignItems="center" justifyContent="flex-end">
                    {!isLoggedIn ? (
                        <Flex
                            gap={['1.68rem', '1.68rem', '2.3rem', '3.68rem']}
                            display={['none', 'none', 'none', 'flex', 'flex']}
                            alignItems="center"
                        >
                            <Text variant="link" as={Link} href="/delivery" passHref>
                                Delivery
                            </Text>
                            <Text variant="link" as={Link} href="/" passHref>
                                Takeway
                            </Text>

                            <Text variant="link" as={Link} href="/" passHref>
                                Reservation
                            </Text>
                        </Flex>
                    ) : (
                        <Flex
                            gap={['1.68rem', '1.68rem', '2.3rem', '3.68rem']}
                            display={['none', 'none', 'none', 'flex', 'flex']}
                            alignItems="center"
                        >
                            <Button variant="brand" gap={2} onClick={() => setLoggedIn(true)}>
                                <Image src="/icons/delivery.png" alt="delivery" height={20} width={20} />
                                Delivery
                            </Button>
                            <Button variant="text" gap={2}>
                                <Image src="/icons/takeaway.png" alt="delivery" height={20} width={20} />
                                Takeaway
                            </Button>
                            <Button variant="text" gap={2}>
                                <Image src="/icons/popcorn.png" alt="delivery" height={20} width={20} />
                                Dine-in
                            </Button>
                        </Flex>
                    )}
                </Flex>
                <Box>
                    {isLoggedIn ? (
                        <HStack gap={10}>
                            {/* <SearchBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} /> */}

                            <Menu placement="top-end" direction="rtl">
                                <MenuButton>
                                    <IconWithBadge as={RiNotification4Fill} fontSize="1.5rem" showBadge />
                                </MenuButton>
                                <MenuList padding="1.5rem 10px" border="1px solid rgba(151, 151, 151, 0.5)" mt={1}>
                                    <MenuItem
                                        width={['100%', '100%', '25rem', '25rem', '25rem']}
                                        bg="info"
                                        rounded={8}
                                        border="1px solid"
                                        borderColor="blue.main"
                                    >
                                        <Flex gap={2} alignItems="flex-start" w="100%">
                                            <Icon as={RiNotification4Fill} color="blue.main" fontSize="1.7rem" />
                                            <chakra.div m={0} flex={1}>
                                                <Text fontSize="xl" fontWeight={600}>
                                                    Info Notification
                                                </Text>
                                                <Text>Lorem ipsum dolor sit amet consectetu</Text>
                                            </chakra.div>
                                            <IconButton
                                                as="span"
                                                icon={<Icon as={MdClose} color="secondary" fontSize="1.7rem" />}
                                                variant="ghost"
                                                aria-label="close"
                                                colorScheme="blackAlpha"
                                            />
                                        </Flex>
                                    </MenuItem>
                                </MenuList>
                            </Menu>

                            <IconWithBadge as={FaShoppingCart} fontSize="1.5rem" showBadge />

                            <Menu placement="top-end" direction="rtl">
                                <MenuButton>
                                    <Icon as={MdPerson} fontSize="1.5rem" />
                                </MenuButton>
                                <MenuList padding="1.5rem 10px" border="1px solid rgba(151, 151, 151, 0.5)" mt={1}>
                                    <Flex direction="column" alignItems="center">
                                        <Avatar src="/logo.png" name="Niraj Thakur" size="xl" my={2} />
                                        <Text color="dark.900" textAlign="center" fontSize="2xl">
                                            Niraj Thakur
                                        </Text>
                                        <Button
                                            as={Link}
                                            href="/profile/account"
                                            variant="link"
                                            colorScheme="red"
                                            fontWeight={400}
                                            textAlign="center"
                                        >
                                            Edit Profile
                                        </Button>
                                    </Flex>

                                    <Divider my={3} />

                                    <Stack gap={3}>
                                        <Link href="/" passHref color="secondary">
                                            <Flex gap={3} color="secondary">
                                                <Icon as={BsHandbag} fontSize="1.5rem" />
                                                My Orders
                                            </Flex>
                                        </Link>

                                        <Link href="/" passHref color="secondary">
                                            <Flex gap={3} color="secondary">
                                                <Icon as={AiOutlineHeart} fontSize="1.5rem" />
                                                Favourites
                                            </Flex>
                                        </Link>

                                        <Link href="/" passHref color="secondary">
                                            <Flex gap={3} color="secondary">
                                                <Icon as={MdOutlineLibraryBooks} fontSize="1.5rem" />
                                                Transaction History
                                            </Flex>
                                        </Link>

                                        <Link href="/" passHref color="secondary">
                                            <Flex gap={3} color="secondary">
                                                <Icon as={MdOutlineWorkHistory} fontSize="1.5rem" />
                                                Order History
                                            </Flex>
                                        </Link>

                                        <Link href="/" passHref color="secondary">
                                            <Flex gap={3} color="secondary">
                                                <Icon as={MdOutlinePrivacyTip} fontSize="1.5rem" />
                                                Privacy Policy
                                            </Flex>
                                        </Link>

                                        <Link href="/" passHref color="secondary">
                                            <Flex gap={3} color="secondary">
                                                <Icon as={GiNotebook} fontSize="1.5rem" />
                                                Terms and Conditions
                                            </Flex>
                                        </Link>
                                    </Stack>
                                    <Divider my={3} />
                                    <Flex justifyContent="center">
                                        <Button
                                            as={Link}
                                            href="/profile"
                                            variant="text"
                                            color="primary"
                                            fontWeight={600}
                                            textAlign="center"
                                        >
                                            Log Out
                                        </Button>
                                    </Flex>
                                </MenuList>
                            </Menu>
                        </HStack>
                    ) : (
                        <HStack>
                            <Text variant="link" whiteSpace="nowrap" as={Link} href="/" passHref pr={10}>
                                Log In
                            </Text>
                            <Button variant="brand" px={10}>
                                Start Ordering
                            </Button>
                        </HStack>
                    )}
                </Box>
            </Flex>
            <BottomNav />
        </Fragment>
    );
};

export default Header;

const BottomNav = () => {
    return (
        <SimpleGrid
            columns={4}
            bg="white.100"
            as="div"
            roundedTop={10}
            overflow="hidden"
            width="100vw"
            position="fixed"
            bottom={0}
            display={['grid', 'grid', 'none']}
            spacing={5}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
            zIndex={9999}
        >
            <Flex
                justifyContent="center"
                alignItems="center"
                p={2}
                gap={0}
                direction="column"
                as={Link}
                href="/"
                passHref
            >
                <Icon as={AiOutlineInfoCircle} color="primary" fontSize="1.3rem" />
                <Text color="primary" fontSize="sm">
                    Home
                </Text>
            </Flex>

            <Flex
                justifyContent="center"
                alignItems="center"
                p={2}
                gap={0}
                direction="column"
                as={Link}
                href="/"
                passHref
            >
                <Icon as={AiOutlineInfoCircle} color="primary" fontSize="1.3rem" />
                <Text color="primary" fontSize="sm">
                    Home
                </Text>
            </Flex>

            <Flex
                justifyContent="center"
                alignItems="center"
                p={2}
                gap={0}
                direction="column"
                as={Link}
                href="/"
                passHref
            >
                <Icon as={AiOutlineInfoCircle} color="primary" fontSize="1.3rem" />
                <Text color="primary" fontSize="sm">
                    Home
                </Text>
            </Flex>

            <Flex
                justifyContent="center"
                alignItems="center"
                p={2}
                gap={0}
                direction="column"
                as={Link}
                href="/"
                passHref
            >
                <Icon as={AiOutlineInfoCircle} color="primary" fontSize="1.3rem" />
                <Text color="primary" fontSize="sm">
                    Home
                </Text>
            </Flex>
        </SimpleGrid>
    );
};
