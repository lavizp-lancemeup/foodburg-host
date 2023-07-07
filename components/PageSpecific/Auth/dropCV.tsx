import React from 'react';
import { Box, Button, Input, Text } from '@chakra-ui/react';
import { BsFillCloudDownloadFill } from 'react-icons/bs';

function DropCV() {
    return (
        <Box width="840px">
            <Text fontSize="24px" fontWeight="600" mb={5}>
                Apply now
            </Text>
            <Box mb={5}>
                <Text fontWeight="600" mb={1}>
                    Your Name
                </Text>
                <Input placeholder="Enter your Name" border="none" />
            </Box>
            <Text>Upload Your Resume/CV</Text>
            <Box
                width="full"
                height="300px"
                border="2px dashed gray"
                borderRadius="16px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                bg="transparent"
                pos="relative"
            >
                <BsFillCloudDownloadFill size={50} color="#9CA3AF" />
                <Box color="#9CA3AF" my={5}>
                    <Text align="center" fontSize="16px" fontWeight="600">
                        Click to upload or drag and drop
                    </Text>
                    <Text align="center" fontSize="12px" fontWeight="400">
                        Max File 3MB
                    </Text>
                </Box>

                <Button variant="brand">Browse File</Button>
                <Input
                    type="file"
                    height="100%"
                    width="100%"
                    position="absolute"
                    top="0"
                    left="0"
                    opacity="0"
                    aria-hidden="true"
                    accept="image/*"
                    cursor="pointer"
                />
            </Box>
            <Button variant="brand" width="100%" mt={5}>
                Apply Now
            </Button>
        </Box>
    );
}

export default DropCV;
