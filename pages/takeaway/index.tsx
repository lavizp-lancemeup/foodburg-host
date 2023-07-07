import RestaurantCard from '@/components/Common/Cards/RestaurantCard';
import SearchInput from '@/components/Common/Input/SearchInput';
import { DefaultPageLayout } from '@/components/Layout';
import {
    Flex,
    Grid,
    GridItem,
    FormControl,
    FormLabel,
    Switch,
    Text,
    Divider,
    Button,
    Icon,
    SimpleGrid,
} from '@chakra-ui/react';
import React, { Fragment, ReactNode } from 'react';
import { AiOutlineStar } from 'react-icons/ai';

const Takeaway = () => {
    return (
        <Fragment>
            <Flex justifyContent="flex-end" my={5}>
                <SearchInput />
            </Flex>
            <Grid templateColumns="1fr 5fr" gap={10} my={5}>
                <GridItem
                    colSpan={{
                        base: 6,
                        sm: 6,
                        md: 1,
                    }}
                >
                    <Flex direction="column" gap={5} position="sticky" top={0}>
                        <FormControl>
                            <Flex justifyContent="space-between" alignItems="center">
                                <FormLabel color="rgba(0, 0, 0, 0.85)" fontSize="1.2rem">
                                    Open Now
                                </FormLabel>
                                <Switch size="lg" />
                            </Flex>
                        </FormControl>
                        <Divider bg="secondary" />
                        <Text color="dark.900" fontSize="1.3rem">
                            Sort By
                        </Text>
                        <Button variant="outline">Newly Added</Button>
                        <Button variant="brand">Distance</Button>
                        <Divider bg="secondary" />
                        <Text color="dark.900" fontSize="1.3rem">
                            Restaurant Ratings
                        </Text>
                        <SimpleGrid columns={5}>
                            <Icon as={AiOutlineStar} color="warning" fontSize="1.8rem" />
                            <Icon as={AiOutlineStar} color="warning" fontSize="1.8rem" />
                            <Icon as={AiOutlineStar} color="warning" fontSize="1.8rem" />
                            <Icon as={AiOutlineStar} color="warning" fontSize="1.8rem" />
                            <Icon as={AiOutlineStar} color="warning" fontSize="1.8rem" />
                        </SimpleGrid>
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
                    <Grid
                        templateColumns={{
                            base: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(2, 1fr)',
                            lg: 'repeat(3, 1fr)',
                        }}
                        gap={5}
                    >
                        {Array(20)
                            .fill(0)
                            .map((_, i) => (
                                <RestaurantCard
                                    cardPrpos={{
                                        variant: 'elevated',
                                    }}
                                    key={i}
                                />
                            ))}
                    </Grid>
                </GridItem>
            </Grid>
        </Fragment>
    );
};

export default Takeaway;

Takeaway.getLayout = (component: ReactNode) => <DefaultPageLayout>{component}</DefaultPageLayout>;
