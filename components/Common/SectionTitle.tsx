import React, { Fragment } from 'react';
import { Text } from '@chakra-ui/react';
import ConditionallyRender from './ConditionallyRender';

type Props = {
    title: string;
    subTitle?: string;
};
const SectionTitle = ({ title, subTitle }: Props) => {
    return (
        <Fragment>
            <Text variant="sectionHeading">{title}</Text>
            <ConditionallyRender
                condition={subTitle !== null}
                show={
                    <Text textAlign="center" color="secondary">
                        Follow These Steps
                    </Text>
                }
            />
        </Fragment>
    );
};

export default SectionTitle;
