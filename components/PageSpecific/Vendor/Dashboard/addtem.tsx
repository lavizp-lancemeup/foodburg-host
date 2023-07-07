import React from 'react';
import { Box, Button, Divider, HStack, Input, Text } from '@chakra-ui/react';

function AddItem() {
    return (
        <Box borderRadius="10px" p={5} bg="#F2F2F2">
            <HStack width="100%" justifyContent="space-between" mb={5}>
                <Text fontWeight="600" fontSize="24px">
                    Add New Item
                </Text>
                <Button variant="brand">x</Button>
            </HStack>
            <Divider />
            <Box>
                <Box w="100%" mt="6">
                    <Text fontWeight="400" fontSize="18px" mb={1}>
                        Item Name
                    </Text>
                    <Input placeholder="i.e MOMO" border="none" bg="white" color="#838282" />
                </Box>
                <Box w="100%" mt="6">
                    <Text fontWeight="400" fontSize="18px" mb={1}>
                        Item PRice
                    </Text>
                    <Input placeholder="i.e MOMO" border="none" bg="white" color="#838282" />
                </Box>
                <Box w="100%" mt="6">
                    <Text fontWeight="400" fontSize="18px" mb={1}>
                        Item Description
                    </Text>
                    <Input placeholder="i.e MOMO" border="none" bg="white" color="#838282" />
                </Box>
                <Box w="100%" mt="6">
                    <Text fontWeight="400" fontSize="18px" mb={1}>
                        Sub Catogery
                    </Text>
                    <Input placeholder="i.e MOMO" border="none" bg="white" color="#838282" />
                </Box>
                <Box w="100%" mt="6">
                    <Text fontWeight="400" fontSize="18px" mb={1}>
                        Upload Image
                    </Text>
                    <Input
                        type="file"
                        placeholder=" No File Chosen"
                        borderWidth={0}
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
            </Box>
            <HStack justifyContent="flex-end">
                <HStack>
                    <Button variant="brand" bg="#292932">
                        Cancel
                    </Button>
                    <Button variant="brand">Save</Button>
                </HStack>
            </HStack>
        </Box>
    );
}

export default AddItem;
