import React from 'react';
import DeliverySVG from '@/components/SVG/DeliverySVG';
import DinningSVG from '@/components/SVG/DinningSVG';
import TakeawaySVG from '@/components/SVG/TakeawaySVG';
import { Flex, Text, chakra, Card, CardBody, Grid, useMediaQuery, Button } from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const LandingPageHero = () => {
    const [isMobileDevice] = useMediaQuery('(max-width: 480px)', {
        ssr: true,
        fallback: false, // return false on the server, and re-evaluate on the client side
    });
    return (
        <Flex
            as="section"
            gap={[0, 0, 5, 10]}
            px={{
                base: 5,
                sm: 5,
                md: 0,
            }}
            direction={['column', 'column', 'row', 'row']}
            height="fit-content"
        >
            <Flex
                direction="column"
                flex={1}
                py={[0, 0, 8, 8, 12]}
                mt={{
                    base: 10,
                    sm: 10,
                    md: 2,
                }}
                gap={4}
            >
                <chakra.h1 as={Text} fontSize={['18px', '24px', '30px', '38px', '42px']} fontWeight="600">
                    Giving Hunger New Option
                </chakra.h1>
                <Text fontSize={['12px', '14px', '18px']}>
                    Taste the best food available in the town with foodbourg and enjoy the tech infused environment
                </Text>

                <Flex
                    borderRadius="5px"
                    alignItems="center"
                    my={[0, 2, 4, 4, 4]}
                    mb={[10, 10, 0, 0, 0]}
                    maxWidth="30.5rem"
                    gap={5}
                    flexWrap="wrap"
                >
                    <Button variant="brand" px={5} height="50px" fontWeight="600">
                        Start Ordering
                    </Button>
                    <Button variant="text" gap={2} fontWeight="600">
                        About Foodbourg <AiOutlineArrowRight />
                    </Button>
                </Flex>
            </Flex>
            <Grid
                templateColumns="repeat(3, 1fr)"
                templateRows="repeat(1, 1fr)"
                width={['100%', '100%', '60%', '50%']}
                gap={6}
                alignItems="center"
                justifyContent="center"
                height="fit-content"
                my="auto"
            >
                <Card height={['7.75rem', '12.75rem', '12.75rem', '15rem']} boxShadow="none">
                    <CardBody background="cardBg" px={0} border="1px solid #97979780" borderRadius="10px">
                        <Flex direction="column" flex={1} height="100%" justifyContent="space-evenly">
                            <DeliverySVG height={isMobileDevice ? '3.75rem' : '7.75rem'} />
                            <Text textAlign="center" fontSize={{ base: '12px', sm: '18px' }} fontWeight={600}>
                                Delivery
                            </Text>
                        </Flex>
                    </CardBody>
                </Card>

                <Card height={['7.75rem', '12.75rem', '12.75rem', '15rem']} boxShadow="none">
                    <CardBody background="cardBg" px={0} border="1px solid #97979780" borderRadius="10px">
                        <Flex direction="column" flex={1} height="100%" justifyContent="space-evenly">
                            <TakeawaySVG height={isMobileDevice ? '3.75rem' : '7.75rem'} />
                            <Text textAlign="center" fontSize={{ base: '12px', sm: '18px' }} fontWeight={600}>
                                Takeaway
                            </Text>
                        </Flex>
                    </CardBody>
                </Card>

                <Card height={['7.75rem', '12.75rem', '12.75rem', '15rem']} boxShadow="none">
                    <CardBody background="cardBg" px={0} border="1px solid #97979780" borderRadius="10px">
                        <Flex direction="column" flex={1} height="100%" justifyContent="space-evenly">
                            <DinningSVG height={isMobileDevice ? '3.75rem' : '7.75rem'} />
                            <Text textAlign="center" fontSize={{ base: '12px', sm: '18px' }} fontWeight={600}>
                                Dinning
                            </Text>
                        </Flex>
                    </CardBody>
                </Card>
            </Grid>
        </Flex>
    );
};

export default LandingPageHero;
