import React from 'react';
import { Card, CardBody, chakra, Flex, Stack, Text, CardFooter, Button, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';

import { BiTime } from 'react-icons/bi';

const BuyFoodCard = ({ addToCart }: { addToCart: () => void }) => {
    const getFoodTypeBg = (foodType: string) => {
        if (foodType == 'Veg') {
            return '#54BA56';
        }
        if (foodType == 'Halal') {
            return '#093F68';
        }
        return 'red';
    };
    return (
        <Card p={0} variant="unstyled" _hover={{ '& .hover-box': { display: 'flex', color: 'black' } }}>
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
                        src="/food.png"
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
                        <Button variant="brand" bg={getFoodTypeBg('Non Veg')} fontSize="14px" fontWeight="600">
                            Non Veg
                        </Button>
                    </Flex>
                </chakra.div>
            </CardBody>
            <CardFooter py={3} color="black" className="hover-box">
                <Stack width="100%">
                    <Flex justifyContent="space-between">
                        <Text fontSize="18px" fontWeight="600">
                            Chicken MOMO
                        </Text>
                        <Button variant="brand" gap={2} onClick={addToCart}>
                            Add to <FaShoppingCart color="white" size={20} />
                        </Button>
                    </Flex>
                    <Flex alignItems="center" gap={4} justifyContent="space-between">
                        <HStack>
                            <BiTime color="primary" />
                            <Text fontSize="12px" fontWeight="500">
                                Cook time: 25min
                            </Text>
                        </HStack>

                        <chakra.span fontSize="12px" fontWeight="700">
                            Price: 500$
                        </chakra.span>
                    </Flex>
                </Stack>
            </CardFooter>
        </Card>
    );
};

export default BuyFoodCard;
