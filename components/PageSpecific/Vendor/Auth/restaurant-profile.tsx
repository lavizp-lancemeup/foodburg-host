import { Box, Button, Flex, HStack, Input, Text } from '@chakra-ui/react';
import React from 'react';
import CheckBox from '@/components/Checkbox/CheckBox';
import DragAndDropImage from '@/components/Common/Input/DragAndDropImage';
import Image from 'next/image';
import ToggleSwitch from '@/components/Toggle';
import { BsThreeDotsVertical } from 'react-icons/bs';

function RestaurantProfile({ onSubmit }: { onSubmit: () => void }) {
    return (
        <Box bg="#F2F2F2" borderRadius="10px">
            <Box mt="5" mb="5" h="100%" bg="#F2F2F2" borderRadius="md" p={20} border="2px solid #E0E0E0">
                <Box>
                    <Flex justify={'center'} align={'center'} direction={'column'}>
                        <Text fontSize={'32px'} fontWeight={'500px'} lineHeight={'42px'} align={'center'}>
                            Setup your Restaurant Account
                        </Text>
                    </Flex>
                </Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                    <Box w="100%" mt="6">
                        <Text fontWeight="600" mb={1}>
                            Restaurant Name
                        </Text>
                        <Input placeholder="Enter your Restaurant name" border="none" bg="white" />
                    </Box>
                    <Box w="100%" mt="6">
                        <Text fontWeight="600" mb={1}>
                            ABN or ACN Number
                        </Text>
                        <Input border="none" bg="white" />
                    </Box>
                    <Box w="100%" mt="6">
                        <Text fontWeight="600" mb={1}>
                            Legal Address of Restaurant
                        </Text>
                        <Input border="none" bg="white" />
                    </Box>
                    <Box w="100%" mt="6">
                        <Text fontWeight="600" mb={1}>
                            Do you Registered GST?
                        </Text>
                        <HStack gap={5} pt={2}>
                            <HStack>
                                <CheckBox />
                                <Text>Yes</Text>
                            </HStack>
                            <HStack>
                                <CheckBox />
                                <Text>No</Text>
                            </HStack>
                        </HStack>
                    </Box>
                    <Box w="100%" mt="6">
                        <Text fontWeight="600" mb={2}>
                            Upload Documents
                        </Text>
                        <Input
                            type="file"
                            placeholder=" No File Chosen"
                            borderWidth={0.5}
                            borderColor="#292932"
                            bg="white"
                            px={0}
                            sx={{
                                '::file-selector-button': {
                                    height: '100%',
                                    px: '10px',
                                    background: '#292932',
                                    border: 'none',
                                    color: 'white',
                                    mr: '10px',
                                },
                            }}
                        />
                    </Box>
                    <Box w="100%" mt="6">
                        <Text fontWeight="600" mb={2}>
                            Restaurant Cover Image
                        </Text>
                        <Text fontWeight="400" mb={2} color="#626262">
                            Upload colorful and vibrant images as the banner for your event!
                        </Text>
                        <DragAndDropImage />
                    </Box>
                    <Box w="100%" mt="6">
                        <Text fontWeight="600" mb={2}>
                            Restaurant Profile Image
                        </Text>
                        <Text fontWeight="400" mb={2} color="#626262">
                            Upload colorful and vibrant images as the banner for your event!
                        </Text>
                        <DragAndDropImage />
                    </Box>
                    <Box w="100%" mt="6">
                        <Text fontWeight="600" mb={2}>
                            Pin your Restaurant Location
                        </Text>
                        <Text fontWeight="400" mb={2} color="#626262">
                            Please drop the pin accurately else customer might be confused
                        </Text>
                        <Box width="100%" pos="relative" height="300px" borderRadius="xl">
                            <Image src="/map.png" alt="map" fill />
                        </Box>
                    </Box>
                    <Box w="100%" mt="8">
                        <Text fontWeight="600" mb={2}>
                            Enable the services
                        </Text>
                        <Text fontWeight="400" mb={2} color="#626262">
                            If you cant provide certain service please toggle off !
                        </Text>
                        <Box>
                            <HStack>
                                <Box w="100%" mt="6">
                                    <Text fontWeight="600" mb={2}>
                                        Dellivery
                                    </Text>
                                    <Text fontWeight="400" mb={2}>
                                        Home delivery service, our rider will pick the order and drop
                                    </Text>
                                </Box>
                                <HStack>
                                    <ToggleSwitch />
                                    <Box
                                        bg="primary"
                                        borderRadius="md"
                                        width="40px"
                                        height="32px"
                                        color="white"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <BsThreeDotsVertical size={20} />
                                    </Box>
                                </HStack>
                            </HStack>
                            <HStack>
                                <Box w="100%" mt="6">
                                    <Text fontWeight="600" mb={2}>
                                        Take away
                                    </Text>
                                    <Text fontWeight="400" mb={2}>
                                        You have to prepare order and customer will pick it from your outlet
                                    </Text>
                                </Box>
                                <HStack>
                                    <ToggleSwitch />
                                    <Box
                                        bg="primary"
                                        borderRadius="md"
                                        width="40px"
                                        height="32px"
                                        color="white"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <BsThreeDotsVertical size={20} />
                                    </Box>
                                </HStack>
                            </HStack>
                            <HStack>
                                <Box w="100%" mt="6">
                                    <Text fontWeight="600" mb={2}>
                                        Done in / Reservation
                                    </Text>
                                    <Text fontWeight="400" mb={2}>
                                        Customer will be able to book your restaurant tables
                                    </Text>
                                </Box>
                                <HStack>
                                    <ToggleSwitch />
                                    <Box
                                        bg="primary"
                                        borderRadius="md"
                                        width="40px"
                                        height="32px"
                                        color="white"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <BsThreeDotsVertical size={20} />
                                    </Box>
                                </HStack>
                            </HStack>
                        </Box>
                    </Box>

                    <Box width="100%" mt="6">
                        <Button variant="brand" border="none" gap={2} w="100%" onClick={onSubmit}>
                            {' '}
                            Send Application
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default RestaurantProfile;
