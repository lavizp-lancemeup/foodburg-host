import React from 'react';
import { Card, CardBody, chakra, Flex, Icon, Stack, Text, CardFooter } from '@chakra-ui/react';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineStar } from 'react-icons/ai';
import { RiTimerLine } from 'react-icons/ri';

const FoodCardMd = () => {
    return (
        <Card p={0} variant="unstyled">
            <CardBody p={0} overflow="hidden" rounded={5}>
                <chakra.div
                    position="relative"
                    width="100%"
                    height="12rem"
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
                        src="/food1.png"
                        alt={'title'}
                        style={{
                            transition: 'all 0.3s linear',
                        }}
                        fill
                    />
                </chakra.div>
            </CardBody>
            <CardFooter py={3} px={2}>
                <Stack width="100%">
                    <Flex justifyContent="space-between" alignItems="center">
                        <Text fontSize="1.3rem">Lotteria - 135 Sandiago</Text>
                        <Text color="primary">$399</Text>
                    </Flex>

                    <Flex justifyContent="space-between" alignItems="center">
                        <Flex alignItems="center" justifyContent="center" gap={2}>
                            <Icon as={CiLocationOn} color="primary" fontSize="1.2rem" />
                            <chakra.span fontSize="1rem" color="secondary">
                                1.5 Km
                            </chakra.span>
                        </Flex>

                        <Flex alignItems="center" justifyContent="center" gap={2}>
                            <Icon as={AiOutlineStar} color="warning" fontSize="1.2rem" />
                            <chakra.span fontSize="1rem" color="secondary">
                                4.5 (250)
                            </chakra.span>
                        </Flex>

                        <Flex alignItems="center" justifyContent="center" gap={2}>
                            <Icon as={RiTimerLine} color="primary" fontSize="1.2rem" />
                            <chakra.span fontSize="1rem" color="secondary">
                                25 Mins
                            </chakra.span>
                        </Flex>
                    </Flex>
                </Stack>
            </CardFooter>
        </Card>
    );
};

export default FoodCardMd;
