import { CustomTheme } from '@/types';
import { TextProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const textStyle: CustomTheme<'brand' | 'logo' | 'link' | 'sectionHeading', TextProps> = {
    components: {
        Text: {
            baseStyle: {
                fontFamily: 'Inter',
            },
            variants: {
                logo: (props: any) => ({
                    color: mode('brand.500', 'brand.400')(props),
                    fontSize: '1.5rem',
                    fontWeight: 600,
                }),
                link: (props: any) => ({
                    color: mode('dark.900', 'dark.900')(props),
                    fontWeight: 400,
                    fontSize: '18px',
                    fontStyle: 'normal',
                }),
                sectionHeading: (props: any) => ({
                    fontSize: '2rem',
                    color: mode('dark.900', 'dark.900')(props),
                    textAlign: 'center',
                    marginTop: '1.8rem',
                    fontWeight: 500,
                }),
                brand: (props: any) => ({
                    color: mode('brand.500', 'brand.400')(props),
                    _focus: {
                        color: mode('brand.500', 'brand.400')(props),
                    },
                    _active: {
                        color: mode('brand.500', 'brand.400')(props),
                    },
                    _hover: {
                        color: mode('brand.600', 'brand.400')(props),
                    },
                }),
            },
        },
    },
};
