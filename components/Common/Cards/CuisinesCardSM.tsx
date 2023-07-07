import React from 'react';
import { Card, CardBody, chakra, Flex, Icon, Stack, Text, CardFooter, Button } from '@chakra-ui/react';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';

const CuisinesCardSM = () => {
    return (
        <Card p={0} variant="unstyled">
            <CardBody p={0} overflow="hidden" rounded={5}>
                <chakra.div
                    position="relative"
                    width="100%"
                    paddingBottom="100%"
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
                        src="/cuisine.png"
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
                        <Text fontSize="1.1rem">Mexican Food</Text>
                        <Text color="primary">$399</Text>
                    </Flex>
                    <Flex alignItems="center" gap={2}>
                        <Icon as={CiLocationOn} color="primary" fontSize="1.2rem" />
                        <chakra.span fontSize="1rem" color="secondary">
                            Maitidevi Temple
                        </chakra.span>
                    </Flex>

                    <Button variant="brand">Order Now</Button>
                </Stack>
            </CardFooter>
        </Card>
    );
};

export default CuisinesCardSM;
