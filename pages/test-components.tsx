import FoodCategoryCard from '@/components/PageSpecific/Vendor/Category/foodCategory';
import AddItem from '@/components/PageSpecific/Vendor/Dashboard/addtem';
import UserReviewCard from '@/components/PageSpecific/Vendor/Dashboard/userReviewCard';
import { Box } from '@chakra-ui/react';
import React from 'react';

function TestComponent() {
    return (
        <Box>
            <FoodCategoryCard />
            <UserReviewCard />
            <AddItem />
        </Box>
    );
}

export default TestComponent;
