import { Box, Step, StepIcon, StepIndicator, StepSeparator, StepStatus, Stepper, useSteps } from '@chakra-ui/react';

const steps = [{ title: '' }, { title: '' }, { title: '' }];

function StepperComponent({ index }: { index: number }) {
    const { activeStep } = useSteps({
        index: index,
        count: steps.length,
    });

    return (
        <Stepper index={activeStep} colorScheme="brand" size="lg" mb={20}>
            {steps.map((step, index) => (
                <Step key={index}>
                    <StepIndicator
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                        }}
                    >
                        {step.title}
                        <Box position="relative">
                            <StepStatus
                                complete={
                                    <StepIcon bg="#9CD861" color="#9CD861" borderRadius="100%" mt={1} boxSize={10} />
                                }
                                incomplete={<StepIcon bg="#1C1C24" color="#1C1C24" borderRadius="100%" boxSize={10} />}
                                active={<StepIcon bg="primary" color="primary" borderRadius="100%" boxSize={10} />}
                            />
                        </Box>
                    </StepIndicator>
                    <StepSeparator
                        style={{
                            padding: '4px',
                            backgroundColor: '#292932',
                            margin: '-15px',
                        }}
                    />
                </Step>
            ))}
        </Stepper>
    );
}

export default StepperComponent;
