import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import CareerCard from '@/components/PageSpecific/CareerPage/careerCard';
import NavPath from '@/components/Common/NavPath';
function Career() {
    return (
        <>
            <NavPath path="Home/Career" />
            <Box mt={10}>
                <Text fontSize="32px" fontWeight="500">
                    Careers at Foodbourg
                </Text>
                <Text fontSize="16px" w={['80%', '80%']} mb="10">
                    We are hiring? Come work with us. If your profile matches below job openings then please do send us
                    your CV to hr@tickticketing.com.np or you can apply through this platform aslo.
                </Text>
                <CareerCard
                    title="Business Manager"
                    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aspernatur quos minima sed
                tempora est repellendus quia culpa vero laboriosam, vitae repellat optio hic quasi natus labore
                quisquam quod eum."
                    date="March 14, 2023"
                />
                <CareerCard
                    title="Business Manager"
                    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aspernatur quos minima sed
                tempora est repellendus quia culpa vero laboriosam, vitae repellat optio hic quasi natus labore
                quisquam quod eum."
                    date="March 14, 2023"
                />
                <CareerCard
                    title="Business Manager"
                    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aspernatur quos minima sed
                tempora est repellendus quia culpa vero laboriosam, vitae repellat optio hic quasi natus labore
                quisquam quod eum."
                    date="March 14, 2023"
                />
            </Box>
        </>
    );
}

export default Career;
