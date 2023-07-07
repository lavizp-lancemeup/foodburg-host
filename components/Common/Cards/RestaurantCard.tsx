import React from 'react';
import { Card, CardBody, chakra, Flex, Stack, Text, CardFooter, CardProps, Button } from '@chakra-ui/react';
import Image from 'next/image';
import { GiPlainCircle } from 'react-icons/gi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import NextLink from 'next/link';
type Props = {
    cardPrpos?: CardProps;
};
const RestaurantCard = ({ cardPrpos }: Props) => {
    return (
        <Card p={0} variant="unstyled" _hover={{ '& .hover-box': { display: 'flex', color: 'black' } }} {...cardPrpos}>
            <Flex
                className="hover-box"
                w="100%"
                height="20rem"
                position="absolute"
                zIndex={10}
                borderRadius="lg"
                justifyContent="center"
                alignItems="center"
                direction="column"
                bg="rgba(0, 0, 0, 0.6)"
                gap={5}
                display="none"
            >
                <Button variant="brand" width="147px">
                    Start Ordering
                </Button>
                <NextLink href="/restaurant">
                    <Button
                        variant="outline"
                        bg="transparent"
                        color="white"
                        borderColor="white"
                        _hover={{
                            background: 'transparent',
                        }}
                        gap={1}
                        width="147px"
                    >
                        View Details
                        <AiOutlineArrowRight />
                    </Button>
                </NextLink>
            </Flex>
            <CardBody p={0} overflow="hidden" rounded={5}>
                <chakra.div
                    position="relative"
                    width="100%"
                    height="20rem"
                    _hover={{
                        cursor: 'pointer',
                        '& > .overlay': {
                            backgroundColor: '#0002',
                        },

                        '& > img': {
                            transform: 'scale(1.1)',
                        },
                    }}
                >
                    <Image
                        src="/resturant.png"
                        alt={'title'}
                        style={{
                            transition: 'all 0.3s linear',
                            objectFit: 'cover',
                            borderRadius: '10px',
                        }}
                        fill
                    />
                    <Flex
                        bg="white"
                        position="absolute"
                        rounded="full"
                        justifyContent="center"
                        alignItems="center"
                        right={0}
                        top={3}
                    >
                        <Button variant="brand" bg="red">
                            Restaurant
                        </Button>
                    </Flex>
                </chakra.div>
            </CardBody>
            <CardFooter py={4} px={3} color="black" className="hover-box">
                <Stack width="100%">
                    <Text fontSize="18px" fontWeight="600">
                        Burger House
                    </Text>
                    <Flex alignItems="center" justifyContent="start" gap={2} width="100%">
                        <GiPlainCircle color="#9CD861" size={10} />
                        <chakra.span fontSize="12px" fontWeight="500">
                            Open now
                        </chakra.span>
                    </Flex>
                    <Flex alignItems="center" gap={4}>
                        <chakra.span fontSize="12px" fontWeight="500">
                            500 meter away
                        </chakra.span>

                        <chakra.span fontSize="12px" fontWeight="500">
                            Kathmandu, Nepal
                        </chakra.span>
                    </Flex>
                </Stack>
            </CardFooter>
        </Card>
    );
};

export default RestaurantCard;
