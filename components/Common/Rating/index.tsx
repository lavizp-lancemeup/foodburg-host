import React, { useMemo, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';

const Rating = () => {
    const [rating, setRatiing] = useState(0);

    const filledRatng = useMemo(() => {
        return Array(rating)
            .fill(0)
            .map((_, i) => i + 1)
            .map((idx) => (
                <AiFillStar
                    size={28}
                    key={idx}
                    className="cursor-pointer"
                    color="#EEA23E"
                    onClick={() => setRatiing(idx)}
                />
            ));
    }, [rating]);
    const emptyRatng = useMemo(() => {
        return Array(5 - rating)
            .fill(0)
            .map((_, i) => i + 1)
            .map((idx) => (
                <AiFillStar
                    size={28}
                    key={idx}
                    className="cursor-pointer"
                    color="#000000"
                    onClick={() => setRatiing(idx + rating)}
                />
            ));
    }, [rating]);

    return (
        <Flex gap="4px">
            {filledRatng}
            {emptyRatng}
        </Flex>
    );
};

export default Rating;
