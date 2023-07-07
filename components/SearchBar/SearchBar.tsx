import { Flex, FormControl, FormLabel, Icon, Input, Menu, MenuButton, MenuList, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import SearchSettingIcon from '../Icons/SearchSettingIcon';
import { AiOutlineSearch } from 'react-icons/ai';
import CheckBox from '../Checkbox/CheckBox';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
    isExpanded: boolean;
    setIsExpanded: Function;
};

const SearchBar = ({ isExpanded, setIsExpanded }: Props) => {
    const [focused, setFocused] = useState<boolean>(false);
    return (
        <AnimatePresence>
            {isExpanded ? (
                <Flex
                    as={motion.div}
                    borderRadius="5px"
                    px={3}
                    alignItems="center"
                    outline="1px solid"
                    outlineColor={focused ? 'blue.primary' : 'rgba(151, 151, 151, 0.5)'}
                    display={['none', 'none', 'flex']}
                    initial={{
                        width: isExpanded ? '20rem' : '0',
                        opacity: 0,
                    }}
                    animate={{
                        width: 'auto',
                        opacity: 1,
                        transition: {
                            width: {
                                duration: 0.4,
                            },
                            opacity: {
                                duration: 0.25,
                                delay: 0.15,
                            },
                        },
                    }}
                    exit={{
                        width: 0,
                        opacity: 0,
                        transition: {
                            width: {
                                duration: 0.4,
                            },
                            opacity: {
                                duration: 0.25,
                            },
                        },
                    }}
                    key="animated-search-bar"
                >
                    <Icon as={AiOutlineSearch} fontSize="25px" color="secondary" />

                    <Input
                        type="text"
                        variant="search"
                        placeholder="Search Here..."
                        color="secondary"
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                    />
                    <Menu placement="top-end" direction="rtl">
                        <MenuButton>
                            <SearchSettingIcon stroke={focused ? '#4285F4' : '#718096'} />
                        </MenuButton>
                        <MenuList padding="1.5rem 10px" border="1px solid rgba(151, 151, 151, 0.5)" mt={1}>
                            <Text color="secondary" my={3}>
                                Food Preference
                            </Text>
                            <Stack>
                                {Array(3)
                                    .fill(1)
                                    .map((_, i) => (
                                        <FormControl gap={2} key={i}>
                                            <Flex flexDirection="row" alignItems="center" gap={6}>
                                                <CheckBox />
                                                <FormLabel m={0} color="dark.900">
                                                    Veg
                                                </FormLabel>
                                            </Flex>
                                        </FormControl>
                                    ))}
                            </Stack>

                            <Text color="secondary" my={3}>
                                Food Preference
                            </Text>
                            <Stack>
                                {Array(3)
                                    .fill(1)
                                    .map((_, i) => (
                                        <FormControl gap={2} key={i}>
                                            <Flex flexDirection="row" alignItems="center" gap={6}>
                                                <CheckBox />
                                                <FormLabel m={0} color="dark.900">
                                                    Recomended
                                                </FormLabel>
                                            </Flex>
                                        </FormControl>
                                    ))}
                            </Stack>
                        </MenuList>
                    </Menu>
                </Flex>
            ) : (
                <Icon
                    as={AiOutlineSearch}
                    display={['none', 'none', 'block']}
                    fontSize="25px"
                    color="dark.900"
                    onClick={() => setIsExpanded(true)}
                />
            )}
        </AnimatePresence>
    );
};

export default SearchBar;
