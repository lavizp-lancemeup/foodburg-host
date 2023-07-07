import { GlobalStyleType } from '@/types/customTheme';
import { mode } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';
import { Inter } from 'next/font/google';

const inter = Inter({
    weight: '400',
    subsets: ['latin'],
});

export const globalStyles = {
    colors: {
        primary: '#E14658',
        secondary: '#718096',
        secondary2: '#BCB3E2',
        success: '#4DAE11',
        error: '#FFF5F5',
        info: '#F4F3FE',
        gray: '#808080',
        cardBg: '#FAFAFA',
        warning: '#FFA620',
        red: '#C41E24',
        darkRed: '#98222F',
        blue: {
            primary: '#4285F4',
            main: '#605DEC',
        },
        green: {
            primary: '#39B54A',
        },
        brand: {
            100: '#EDBCBD',
            200: '#E7A5A7',
            300: '#DC787C',
            400: '#D04B50',
            500: '#C41E24',
            600: '#9D181D',
            700: '#761216',
            800: '#4E0C0E',
            900: '#3B090B',
            1000: '#270607',
        },
        dark: {
            100: '#949494',
            200: '#858585',
            300: '#767676',
            400: '#686868',
            500: '#595959',
            600: '#3B3B3B',
            700: '#1E1E1E',
            800: '#000000',
            900: '#000000',
        },
        white: {
            100: '#FFFFFF',
            200: '#E1E1E1',
            300: '#C4C4C4',
            400: '#A6A6A6',
            500: '#979797',
            600: '#898989',
            700: '#7A7A7A',
            800: '#6B6B6B',
        },
    },
    styles: {
        global: (props: Dict<any>): GlobalStyleType => ({
            body: {
                overflowX: 'hidden',
                bg: mode('white.100', 'red')(props),
                fontFamily: inter.style.fontFamily,
                letterSpacing: '-0.5px',
            },
            html: {
                fontFamily: inter.style.fontFamily,
            },
            '.swiper-pagination-bullet': {
                background: '#fff',
                opacity: '1',
            },
            '.swiper-pagination-bullet-active': {
                background: '#C41E24',
            },
        }),
    },
};
