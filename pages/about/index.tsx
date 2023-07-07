import { DefaultPageLayout } from '@/components/Layout';
import {
    Box,
    Flex,
    HStack,
    Icon,
    Stack,
    Text,
    IconButton,
    Divider,
    Grid,
    GridItem,
    Table,
    Tbody,
    Tr,
    Td,
    chakra,
} from '@chakra-ui/react';
import React, { Fragment, ReactNode } from 'react';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineStar, AiOutlineHeart } from 'react-icons/ai';
import { BsFillShareFill } from 'react-icons/bs';
import { RiMessengerLine, RiQuestionLine } from 'react-icons/ri';

const AboutPage = () => {
    return (
        <Fragment>
            <Box
                position="relative"
                width="100%"
                height={['10rem', '15rem', '20rem', '25rem', '25rem']}
                marginBottom="5rem"
            >
                <Image src="/resturant.png" alt="resturant" fill />

                <Box
                    position="absolute"
                    left={['1.5rem', '2rem', '2rem', '2rem', '2rem']}
                    bottom={['-2.5rem', '-3.5rem', '-4rem', '-5rem', '-5rem']}
                    width={['5rem', '7rem', '8rem', '10rem', '10rem']}
                    height={['5rem', '7rem', '8rem', '10rem', '10rem']}
                    rounded="full"
                    overflow="hidden"
                    borderStyle="solid"
                    borderWidth={['5px', '5px', '7px', '10px', '10px']}
                    borderColor="white"
                >
                    <Image src="/resturant.png" alt="resturant" fill />
                </Box>
            </Box>
            <Flex py={2} justifyContent="space-between" alignItems="flex-end">
                <Stack>
                    <Text fontSize="1.8rem" fontWeight={500}>
                        Pizzfire Cafe and Restaurant
                    </Text>
                    <Flex alignItems="center" gap={2}>
                        <Icon as={CiLocationOn} color="primary" />
                        <Text color="secondary">Maitidevi, Kathmandu</Text>
                    </Flex>

                    <Flex alignItems="center" gap={2}>
                        <Icon as={AiOutlineStar} color="warning" />
                        <Text color="secondary">4.5 (250 Reviews)</Text>
                    </Flex>
                </Stack>

                <HStack spacing="1rem">
                    <IconButton
                        aria-label="sckj"
                        icon={<Icon as={BsFillShareFill} color="gray" />}
                        variant="outline"
                        colorScheme="gray"
                        borderRadius="full"
                    />

                    <IconButton
                        aria-label="sckj"
                        icon={<Icon as={RiMessengerLine} color="gray" />}
                        variant="outline"
                        colorScheme="gray"
                        borderRadius="full"
                    />

                    <IconButton
                        aria-label="sckj"
                        icon={<Icon as={RiQuestionLine} color="gray" />}
                        variant="outline"
                        colorScheme="gray"
                        borderRadius="full"
                    />

                    <IconButton
                        aria-label="sckj"
                        icon={<Icon as={AiOutlineHeart} color="gray" />}
                        variant="outline"
                        colorScheme="gray"
                        borderRadius="full"
                    />
                </HStack>
            </Flex>

            <Divider my={5} color="secondary" />

            <Grid templateColumns="2fr 1fr" gap={10}>
                <GridItem
                    colSpan={{
                        sm: 2,
                        md: 1,
                    }}
                >
                    <Text color="secondary">
                        Its doors initially opened in January 2019. Travelers, climbers, and locals all loved it right
                        once as the spot to meet for an Italian espresso in the morning or later in the day to catch up
                        with friends over delectable pizza, pasta, organic salads, deserts, and even a Grappa after
                        dinner.
                    </Text>

                    <Text fontSize="1.4rem" fontWeight={500} my={3}>
                        Location
                    </Text>
                    <chakra.div width="100%">
                        <chakra.iframe
                            width="100%"
                            height="400"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(FoodBourg)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        >
                            <a href="https://www.maps.ie/distance-area-calculator.html">area maps</a>
                        </chakra.iframe>
                    </chakra.div>
                </GridItem>

                <GridItem>
                    <Text fontSize="1.4rem" fontWeight={500} my={3} ml={5}>
                        Delivery Hours
                    </Text>

                    <Table variant="unstyled">
                        <Tbody>
                            {Array(6)
                                .fill(0)
                                .map((_, i) => (
                                    <Tr key={i}>
                                        <Td>
                                            <Text color="secondary">Sunday</Text>
                                        </Td>
                                        <Td>
                                            <Text color="secondary">9:00 A.M - 12:00 P.M</Text>
                                        </Td>
                                    </Tr>
                                ))}
                        </Tbody>
                    </Table>
                </GridItem>
            </Grid>
        </Fragment>
    );
};

export default AboutPage;

AboutPage.getLayout = (component: ReactNode) => <DefaultPageLayout>{component}</DefaultPageLayout>;
