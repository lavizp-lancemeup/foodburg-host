import React, { Fragment, ReactNode } from 'react';
import LandingPageHero from '@/components/PageSpecific/LandingPage/LandingPageHero';
import AdsCarousel from '@/components/PageSpecific/LandingPage/AdsCarousel';
import { DefaultPageLayout } from '@/components/Layout';
import OrderSteps from '@/components/PageSpecific/LandingPage/OrderSteps';
import { Box, chakra, Grid, GridItem } from '@chakra-ui/react';
import RestaurantCard from '@/components/Common/Cards/RestaurantCard';
import LocationSelection from '@/components/Common/Selections/locationSelection';
import PopularSelectiion from '@/components/Common/Selections/popularSelectiion';
const IndexPage = () => {
    return (
        <Fragment>
            <LandingPageHero />
            <chakra.div
                as="section"
                my={{
                    base: 5,
                    sm: 20,
                }}
            >
                <LocationSelection />
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                        lg: 'repeat(4, 1fr)',
                    }}
                    my={8}
                    gap={10}
                >
                    {Array(4)
                        .fill(0)
                        .map((_, i) => (
                            <GridItem key={i}>
                                <RestaurantCard />
                            </GridItem>
                        ))}
                </Grid>
            </chakra.div>
            <chakra.div
                as="section"
                my={{
                    base: 5,
                    sm: 20,
                }}
            >
                <PopularSelectiion />
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                        lg: 'repeat(4, 1fr)',
                    }}
                    my={8}
                    gap={10}
                >
                    {Array(4)
                        .fill(0)
                        .map((_, i) => (
                            <GridItem key={i}>
                                <RestaurantCard />
                            </GridItem>
                        ))}
                </Grid>
            </chakra.div>
            <Box mx={{ base: -5, sm: '-1rem', md: '-5.75rem' }}>
                <AdsCarousel />
            </Box>
            <OrderSteps />
        </Fragment>
    );
};

export default IndexPage;

IndexPage.getLayout = (component: ReactNode) => <DefaultPageLayout>{component}</DefaultPageLayout>;
