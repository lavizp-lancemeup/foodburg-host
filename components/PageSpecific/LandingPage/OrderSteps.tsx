import React from 'react';
import { Grid, GridItem, Flex, Text, chakra, usePrefersReducedMotion } from '@chakra-ui/react';
import SectionTitle from '@/components/Common/SectionTitle';
import MapSVG from '@/components/SVG/MapSVG';
import RestaurantSVG from '@/components/SVG/RestaurantSVG';
import OrderConfirmedSVG from '@/components/SVG/OrderConfirmedSVG';
import ScooterSVG from '@/components/SVG/ScooterSVG';
import { shimmy } from '@/utils/animations';

const howToOrderSteps: { title: string; image: React.JSX.Element }[] = [
    {
        title: 'Choose Your Location',
        image: <MapSVG />,
    },
    {
        title: 'Choose Restaurant',
        image: <RestaurantSVG />,
    },
    {
        title: 'Make Your Order',
        image: <OrderConfirmedSVG />,
    },
    {
        title: 'Delivery on the Way',
        image: <ScooterSVG />,
    },
];

const OrderSteps = () => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const animation = prefersReducedMotion ? undefined : `${shimmy} infinite 1.5s linear`;
    return (
        <chakra.div
            as="section"
            my={{
                base: 5,
                sm: 20,
            }}
        >
            <Text fontSize="24px" fontWeight="600">
                How to Order from foodbourg{' '}
            </Text>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(4, 1fr)',
                }}
                py={4}
            >
                {howToOrderSteps.map(({ title, image }, index) => (
                    <GridItem
                        px={{
                            md: 0,
                            lg: 10,
                            xl: 10,
                        }}
                        mt={{
                            base: 0,
                            // sm: index % 2 !== 0 ? '7rem' : '0',
                        }}
                        key={index}
                    >
                        <chakra.div
                            maxW={{
                                base: '15rem',
                                sm: '100%',
                            }}
                            mx="auto"
                            animation={animation}
                            style={{
                                animationDirection: 'alternate',
                            }}
                        >
                            {image}
                        </chakra.div>
                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            border="2px dashed"
                            borderColor="secondary"
                            width={10}
                            height={10}
                            borderRadius="full"
                            mx="auto"
                            mt={3}
                        >
                            {(index + 1).toString().padStart(2, '0')}
                        </Flex>
                        <Text color="secondary" textAlign="center" my={4}>
                            {title}
                        </Text>
                    </GridItem>
                ))}
            </Grid>
        </chakra.div>
    );
};

export default OrderSteps;
