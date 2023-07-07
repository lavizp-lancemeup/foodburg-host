import { Button, Icon } from '@chakra-ui/react';
import React, { Fragment, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';

const SelectLocation = () => {
    const [locationSelected, setLocationSelected] = useState<boolean>(false);
    return (
        <Fragment>
            {locationSelected ? (
                <Button
                    variant="text"
                    color="secondary"
                    rightIcon={<Icon as={CiLocationOn} color="secondary" fontSize="1.5rem" />}
                    onClick={() => setLocationSelected(!locationSelected)}
                    p={0}
                >
                    Select Location
                </Button>
            ) : (
                <Button
                    variant="text"
                    color="primary"
                    onClick={() => setLocationSelected(!locationSelected)}
                    leftIcon={<Icon as={CiLocationOn} color="primary" fontSize="1.5rem" />}
                    p={0}
                >
                    Kathmandu, Nepal
                </Button>
            )}
        </Fragment>
    );
};

export default SelectLocation;
