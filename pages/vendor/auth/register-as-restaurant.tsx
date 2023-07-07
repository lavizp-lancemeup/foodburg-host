import StepperComponent from '@/components/Common/Stepper';
import Congratulations from '@/components/PageSpecific/Vendor/Auth/congratulations';
import RegisterForm from '@/components/PageSpecific/Vendor/Auth/registerForm';
import RestaurantProfile from '@/components/PageSpecific/Vendor/Auth/restaurant-profile';
import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';

function RegisterAsRestaurant() {
    const [index, setIndex] = useState<number>(0);
    return (
        <>
            <Box px={['2%', '10%', '15%', '20%']} mt={2} pt={10}>
                <Box px={['10px', '30px', '80px']}>
                    {index == 0 && <StepperComponent index={0} />}
                    {index == 1 && <StepperComponent index={1} />}
                    {index == 2 && <StepperComponent index={2} />}
                </Box>
                {index == 0 && <RegisterForm onSubmit={() => setIndex(1)} />}
                {index == 1 && <RestaurantProfile onSubmit={() => setIndex(2)} />}
                {index == 2 && <Congratulations />}
            </Box>
        </>
    );
}

export default RegisterAsRestaurant;
