import { CustomTheme } from '@/types';
import { SwitchProps } from '@chakra-ui/react';
// import { mode } from '@chakra-ui/theme-tools';

export const switchStyles: CustomTheme<'brand', SwitchProps> = {
    components: {
        Switch: {
            baseStyle: {
                thumb: {
                    fontWeight: 400,
                    borderRadius: '50%',
                    w: '16px',
                    h: '16px',
                    bg: '#FFFFFF',
                    _checked: {
                        transform: 'translate(20px, 0px)',
                    },
                },
                track: {
                    display: 'flex',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    w: '40px',
                    h: '20px',
                    p: '2px',
                    ps: '2px',
                    bg: 'gray',
                    _checked: {
                        bg: 'primary',
                    },
                    _focus: {
                        boxShadow: 'none',
                    },
                },
            },

            variants: {
                brand: () => ({
                    track: {},
                }),
            },
        },
    },
};
