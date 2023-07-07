import { ReactNode } from 'react';
import { Box, Container, Stack, Text, Link, Flex, GridItem, useMediaQuery, Grid } from '@chakra-ui/react';
import { APP_NAME } from '@/data/variables';
import Image from 'next/image';
import AppStoreBadge from '@/components/Icons/AppBadge/AppStoreBadge';
import PlayStoreBadge from '@/components/Icons/AppBadge/PlayStoreBadge';

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} textTransform="uppercase" mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    const [isSmallerThan1150] = useMediaQuery('(max-width: 1150px)', {
        ssr: true,
        fallback: false, // return false on the server, and re-evaluate on the client side
    });

    const [isSmallerThan480] = useMediaQuery('(max-width: 480px)', {
        ssr: true,
        fallback: false, // return false on the server, and re-evaluate on the client side
    });
    return (
        <Box bg="darkRed" px={{ base: 5, sm: '1rem', md: '5.75rem' }} py={5}>
            <Container as={Stack} maxW="1710px" py={10} color="white">
                <Grid
                    gridTemplateColumns={
                        isSmallerThan480 ? 'repeat(1, 1fr)' : isSmallerThan1150 ? 'repeat(4, 1fr)' : 'repeat(9, 1fr)'
                    }
                    gap={8}
                >
                    <GridItem colSpan={{ base: 1, sm: 3 }} maxW="30rem">
                        <Stack align={'flex-start'}>
                            <Flex alignItems="center">
                                <Image src="/logo.png" width={50} height={50} alt={APP_NAME + ' Logo'} />
                                <Text color="white" fontSize="24px" fontWeight="400" fontFamily="Road Rage">
                                    {APP_NAME}
                                </Text>
                            </Flex>
                            <Text color="white">
                                FoodBourg is an Online Food Delivery Company rooted in the year 2022 A.D at Luxembourg.
                            </Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, sm: 2 }}>
                        <Stack align={'flex-start'}>
                            <ListHeader>Company</ListHeader>
                            <Link href={'#'}>About Us</Link>
                            <Link href={'#'}>Helo & Support</Link>
                            <Link href={'#'}>Blogs</Link>
                            <Link href={'#'}>FAQs</Link>
                            <Link href={'#'}>Contact us</Link>
                        </Stack>
                    </GridItem>

                    <GridItem colSpan={{ base: 1, sm: 2 }}>
                        <Stack align={'flex-start'}>
                            <ListHeader>Useful links</ListHeader>
                            <Link href={'/career'}>Careers</Link>
                            <Link href={'/vendor/auth/register-as-restaurant'}>Become a Vendor</Link>
                            <Link href={'#'}>Become a Rider</Link>
                            <Link href={'#'}>Refund Policy</Link>
                            <Link href={'#'}>Privacy Policy</Link>
                            <Link href={'#'}>Terms of Service</Link>
                        </Stack>
                    </GridItem>

                    <GridItem colSpan={{ base: 1, sm: 2 }}>
                        <Stack align={'flex-start'}>
                            <ListHeader>Links</ListHeader>
                            <Link href={'#'}>
                                <AppStoreBadge />
                            </Link>
                            <Link href={'#'}>
                                <PlayStoreBadge />
                            </Link>
                        </Stack>
                    </GridItem>
                </Grid>
            </Container>
            <Box width="100%" height={0.5} bg="white" my={5} />
            <Text textAlign="center" mb={['4.5rem', '4.5rem', 0]} color="white">
                © {new Date().getFullYear()} FoodBourg Pvt. Ltd. All Rights Reserved | Product Of Lanceme Up
            </Text>
        </Box>
    );
}
