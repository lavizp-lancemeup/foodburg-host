import React from 'react';
import { Card, CardBody, chakra, Flex, Stack, Text, CardFooter, Button } from '@chakra-ui/react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';

import { AiOutlineArrowRight } from 'react-icons/ai';

const FoodCardExpanded = () => {
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
        <Card p={0} variant="unstyled" _hover={{ '& .hover-box': { display: 'flex', color: 'black' } }} width="630px">
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
                        <Button variant="brand" bg={getFoodTypeBg('Non Veg')}>
                            Non Veg
                        </Button>
                    </Flex>
                </chakra.div>
            </CardBody>
            <CardFooter py={3} color="black" className="hover-box">
                <Stack width="100%">
                    <Flex justifyContent="space-between">
                        <Text fontSize="18px">Chicken MOMO</Text>
                        <Button variant="brand" gap={2}>
                            Add to <FaShoppingCart color="white" size={20} />
                        </Button>
                    </Flex>
                    <Flex alignItems="center" gap={4}>
                        <chakra.span fontSize="12px">Cook time: 25min</chakra.span>

                        <chakra.span fontSize="12px">Price: 500$</chakra.span>
                    </Flex>
                </Stack>
            </CardFooter>
            <Text fontSize="16px" fontWeight="400" mt={2}>
                <Text as="span" fontWeight="600">
                    Description :
                </Text>
                MoMo is an Nepali Cuisine so its steam wrapping up meat with flore. Nepali Cuisine so its steam wrapping
                up meat with flore{' '}
            </Text>
        </Card>
    );
};

export default FoodCardExpanded;
