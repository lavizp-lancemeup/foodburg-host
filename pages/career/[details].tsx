import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import NavPath from '@/components/Common/NavPath';

function DetailedCareerPage() {
    return (
        <>
            <NavPath path="Home/Careers/Business Manager" />
            <Box mb={5} mt={14}>
                <Text fontSize="32px" fontWeight="500">
                    Business Manager
                </Text>
            </Box>
            <Box borderRadius="8px" p={10} bg="#F2F2F2">
                <Text color="primary" fontSize="20px" fontWeight="500" fontStyle="20px">
                    Job Description
                </Text>
                <Text>
                    We are seeking a skilled and experienced Business Manager to oversee our company’s daily operations
                    and long-term business strategies. The ideal candidate will be responsible for developing and
                    implementing effective business plans, managing financial resources, identifying new opportunities
                    for growth, and leading cross-functional teams to achieve organizational objectives. The Business
                    Manager will report directly to the CEO and collaborate with key stakeholders to ensure successful
                    implementation of business initiatives.
                </Text>
                <Text color="primary" fontSize="20px" mt={10}>
                    Responsibilities
                </Text>
                <Text>
                    <ul>
                        <li>
                            Develop and implement comprehensive business plans and strategies to achieve organizational
                            goals
                        </li>
                        <li>
                            Manage and allocate financial resources, monitor budget performance, and ensure financial
                            sustainability of the organization
                        </li>
                        <li>Conduct market research and identify new opportunities for growth and expansion</li>
                        <li>Lead cross-functional teams to ensure successful implementation of business initiatives</li>
                        <li>Collaborate with department heads to identify and resolve operational challenges </li>
                        <li>Monitor key performance indicators and prepare reports for senior management</li>
                        <li>
                            Establish and maintain effective relationships with key stakeholders, including customers,
                            partners, and vendors
                        </li>
                        <li>Ensure compliance with all legal and regulatory requirements</li>
                        <li>Monitor industry trends and adapt business strategies accordingly</li>
                        <li>
                            Provide mentorship and leadership to staff members, fostering a positive work environment
                            and promoting professional development
                        </li>
                    </ul>
                </Text>
                <Text color="primary" fontSize="20px" mt={10}>
                    Requirements
                </Text>
                <Text>
                    <ul>
                        <li>Bachelors degree in Business Administration, Management, Finance, or a related field</li>
                        <li>
                            Proven experience as a Business Manager, with a track record of successful business
                            development and growth
                        </li>
                        <li>Excellent analytical and problem-solving skills</li>
                        <li>Demonstrated ability to lead and manage cross-functional teams</li>
                        <li>
                            Strong communication and interpersonal skills, with the ability to build effective
                            relationships with key stakeholders
                        </li>
                        <li>Experience in real estate, property management, or related industries is a plus</li>
                    </ul>
                </Text>
            </Box>
            <Flex direction="column" alignItems={['center', 'center', 'start']} my={10}>
                <Text fontSize="12px" color="#97ABC0">
                    Application ends:
                </Text>
                <Text color="primary" fontSize="18px">
                    14 March, 2022
                </Text>
                <Button variant="brand" mt="5" w={300}>
                    Apply Now
                </Button>
            </Flex>
        </>
    );
}

export default DetailedCareerPage;
