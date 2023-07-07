import { DefaultPageLayout } from '@/components/Layout';
import { Box, Flex, HStack, Icon, Stack, Text, Grid, GridItem, Button } from '@chakra-ui/react';
import React, { ReactNode, Fragment, useState } from 'react';
import Image from 'next/image';
import { AiOutlineStar } from 'react-icons/ai';
import { BsFillShareFill } from 'react-icons/bs';
import SearchInput from '@/components/Common/Input/SearchInput';
import BuyFoodCard from '@/components/Common/Cards/BuyFoodCard';
import { BsChevronDown, BsFillBookmarkFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { FiFilter } from 'react-icons/fi';
import { HiOutlineTag } from 'react-icons/hi';
import { SlCalender } from 'react-icons/sl';
import OrderList from '@/components/PageSpecific/RestaurantPage/orderList';
import OrderListConfirm from '@/components/PageSpecific/RestaurantPage/orderListConfirm';
import OrderConfirm from '@/components/PageSpecific/RestaurantPage/orderConfirm';
const Restaurant = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [orderState, setOrderState] = useState<number>(0);
    return (
        <Fragment>
            {isOpen && (
                <Box position="relative">
                    <Box
                        position="fixed"
                        height="100%"
                        width="100%"
                        top="0"
                        left="0"
                        bg="rgb(0, 0, 0, 0.7)"
                        zIndex={2}
                        display="flex"
                        justifyContent={orderState == 2 ? 'center' : 'flex-end'}
                        alignItems={orderState == 2 ? 'center' : 'flex-start'}
                    >
                        {orderState == 0 && (
                            <OrderList setOrder={() => setOrderState(1)} goBack={() => setOpen(false)} />
                        )}
                        {orderState == 1 && (
                            <OrderListConfirm setOrder={() => setOrderState(2)} goBack={() => setOrderState(0)} />
                        )}
                        {orderState == 2 && <OrderConfirm goBack={() => setOpen(false)} />}
                    </Box>
                </Box>
            )}
            <Box position="relative" width="100%" marginBottom={['10rem', '10rem', '10rem', '5rem']}>
                <Box height={['10rem', '13rem', '18rem', '20rem', '20rem']} pos="relative">
                    <Image src="/cover-image.png" alt="resturant" fill />
                </Box>
                <Box
                    position="absolute"
                    bottom={['-15rem', '-12rem', '-12rem', '-5.5rem']}
                    pl={10}
                    width="100%"
                    display="flex"
                    justifyContent="start"
                    alignItems="flex-end"
                    flexWrap="wrap"
                    gap="20px"
                >
                    <Box
                        position="relative"
                        width={['5rem', '7rem', '8rem', '10rem', '10rem']}
                        height={['5rem', '7rem', '8rem', '10rem', '10rem']}
                        borderStyle="solid"
                        borderWidth={['3px', '3px', '6px', '8px', '8px']}
                        borderColor="white"
                    >
                        <Image src="/resturant.png" alt="resturant" fill />
                    </Box>

                    <Flex
                        py={2}
                        justifyContent="space-between"
                        alignItems="flex-start"
                        flexWrap="wrap"
                        gap={['20px', '10px', '20px', '150px']}
                        flexGrow={1}
                    >
                        <Stack>
                            <Text fontSize="1.5rem" fontWeight="600">
                                Pizzfire Cafe and Restaurant
                            </Text>
                            <Flex alignItems="center" gap={2}>
                                <Text>Resultant</Text>
                                <Box bg="#54BA56" width="6px" height="6px" rounded="full"></Box>
                                <Text>Kathmandu, Nepal</Text>
                            </Flex>
                        </Stack>

                        <HStack gap={2} flexWrap="wrap">
                            <Button variant="filled" bg="#1C1C24" color="white" gap={2}>
                                <BsFillShareFill />
                                Message
                            </Button>
                            <Button variant="filled" bg="#1C1C24" color="white" gap={2}>
                                <BsFillShareFill />
                                Share
                            </Button>
                            <Button variant="filled" bg="#1C1C24" color="white" gap={2}>
                                <AiOutlineStar />
                                Rating
                            </Button>
                            <Button variant="filled" bg="#1C1C24" color="white" gap={2}>
                                <BsFillBookmarkFill />
                                Save
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Box>
            <Box px={10}>
                <Box my={10}>
                    <SearchInput placeholder="Search for cuisine, dishes , desert and many more... " />
                </Box>
                <Grid templateColumns="1fr 5fr" gap={10} my={5}>
                    <GridItem
                        colSpan={{
                            base: 6,
                            sm: 6,
                            md: 1,
                        }}
                    >
                        <Flex direction="column" gap={5} position="sticky" top={0}>
                            <Button variant="text" gap={2} justifyContent="flex-start" fontSize="14px" fontWeight="400">
                                <Image src="/icons/type.png" alt="delivery" height={15} width={15} />
                                Category:{' '}
                                <Box fontWeight="bold" as="span">
                                    Cuisines
                                </Box>
                            </Button>
                            <Button variant="text" gap={2} justifyContent="flex-start" fontSize="14px" fontWeight="400">
                                <GoLocation />
                                Location: 45th street Sa..
                            </Button>
                            <Button variant="text" gap={2} justifyContent="flex-start" fontSize="14px" fontWeight="400">
                                <HiOutlineTag />
                                Type:{' '}
                                <Box fontWeight="bold" as="span">
                                    Veg
                                </Box>
                                <FiFilter size={18} />
                            </Button>
                            <Button variant="text" gap={2} justifyContent="flex-start" fontSize="14px" fontWeight="400">
                                <SlCalender />
                                Distance: 500 meter
                            </Button>
                            <Button variant="text" gap={2} justifyContent="flex-start" fontSize="14px" fontWeight="400">
                                <FiFilter />
                                <Box fontWeight="bold" as="span">
                                    Filter
                                </Box>
                                <FiFilter size={18} />
                            </Button>
                        </Flex>
                    </GridItem>
                    <GridItem
                        colSpan={{
                            base: 6,
                            sm: 6,
                            md: 1,
                            lg: 1,
                        }}
                    >
                        {Array(2)
                            .fill(0)
                            .map((_, i) => (
                                <Fragment key={i}>
                                    <Flex gap={3} alignItems="center">
                                        <Text fontSize="1.2rem" fontWeight="600" mb={4}>
                                            Indian{' '}
                                        </Text>
                                    </Flex>

                                    <Grid
                                        templateColumns={{
                                            base: 'repeat(1, 1fr)',
                                            sm: 'repeat(2, 1fr)',
                                            md: 'repeat(2, 1fr)',
                                            lg: 'repeat(3, 1fr)',
                                        }}
                                        gap={5}
                                    >
                                        {Array(6)
                                            .fill(0)
                                            .map((_, i) => (
                                                <GridItem key={i}>
                                                    <BuyFoodCard addToCart={() => setOpen(true)} />
                                                </GridItem>
                                            ))}

                                        <GridItem
                                            colSpan={{ base: 1, sm: 2, md: 2, lg: 3 }}
                                            as={Flex}
                                            justifyContent="center"
                                        >
                                            <Button
                                                variant="outline"
                                                mx="auto"
                                                rightIcon={<Icon as={BsChevronDown} color="secondary" />}
                                            >
                                                See More
                                            </Button>
                                        </GridItem>
                                    </Grid>
                                </Fragment>
                            ))}
                    </GridItem>
                </Grid>
            </Box>

            {/* <FoodCardExpanded /> */}
        </Fragment>
    );
};

export default Restaurant;

Restaurant.getLayout = (component: ReactNode) => <DefaultPageLayout>{component}</DefaultPageLayout>;
