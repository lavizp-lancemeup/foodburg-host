import React from 'react';
import { Box, Button, Image, Input } from '@chakra-ui/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

function DragAndDropImage() {
    return (
        <Box
            width="full"
            height="300px"
            border="2px dashed"
            borderColor="#97ABC0"
            borderRadius="16px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bg="transparent"
            pos="relative"
        >
            <Image src="/upload.png" alt="image-upload"></Image>
            <Button
                variant="brand"
                leftIcon={<AiOutlineCloudUpload />}
                color="#97ABC0"
                borderColor="#97ABC0"
                border="1px solid"
                bg="transparent"
            >
                Upload Image
            </Button>
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
    );
}

export default DragAndDropImage;
