import { Box, Button, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBinLine } from 'react-icons/ri';

function ActionButton() {
    const [isOpen, setOpen] = useState<Boolean>(false);

    return (
        <Box position="relative">
            <Button variant="brand" px={0} onClick={() => setOpen((val) => !val)}>
                <BsThreeDotsVertical size={20} />
            </Button>
            {isOpen && (
                <Stack pos="absolute" mt={2} width="auto">
                    <Button variant="brand" borderTopRadius="10px" borderBottomRadius="0" mb={-1} gap="12px" px="16px">
                        <CiEdit size={16} />
                        Edit Cateory
                    </Button>
                    <Button variant="brand" borderBottomRadius="10px" borderTopRadius="0" gap="12px">
                        <RiDeleteBinLine size={16} />
                        Delete Category
                    </Button>
                </Stack>
            )}
        </Box>
    );
}

export default ActionButton;
