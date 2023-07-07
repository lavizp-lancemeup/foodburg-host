import RestaurantCard from '@/components/Common/Cards/RestaurantCard';
import SearchWithTags from '@/components/Common/Input/SearchWithTags';
import { DefaultPageLayout } from '@/components/Layout';
import { Flex, Grid } from '@chakra-ui/react';
import React, { Fragment, ReactNode } from 'react';

const Delivery = () => {
    return (
        <Fragment>
            <Flex justifyContent="center" my={5} width="100%">
                <SearchWithTags />
            </Flex>

            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(4, 1fr)',
                }}
                my={5}
                gap={10}
            >
                {Array(8)
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
        </Fragment>
    );
};

export default Delivery;

Delivery.getLayout = (component: ReactNode) => <DefaultPageLayout>{component}</DefaultPageLayout>;
