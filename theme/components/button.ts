import { CustomTheme } from '@/types';
import { ButtonProps, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

type ButtonVariants = 'outline' | 'text' | 'brand';

export const buttonStyles: CustomTheme<ButtonVariants, ButtonProps> = {
    ...extendTheme(),
    components: {
        Button: {
            baseStyle: {
                borderRadius: 5,
                boxShadow: '45px 76px 113px 7px rgba(112, 144, 176, 0.08)',
                transition: '.25s all ease',
                boxSizing: 'border-box',
                _focus: {
                    boxShadow: 'none',
                },
                _active: {
                    boxShadow: 'none',
                },
                _disabled: {
                    cursor: 'not-allowed',
                },
            },
            variants: {
                text: (props: any) => ({
                    background: mode('none', 'none')(props),
                    fontWeight: 400,
                    fontSize: '18px',
                    _hover: {
                        opacity: '0.8',
                    },
                }),
                outline: (props: any) => ({
                    borderRadius: '5px',
                    borderColor: mode('secondary', 'secondary')(props),
                    color: mode('secondary', 'secondary')(props),
                }),
                brand: (props: any) => ({
                    background: mode('primary', 'primary')(props),
                    color: mode('white.100', 'white.100')(props),
                }),
            },
        },
    },
};
