import { SystemStyleInterpolation } from '@chakra-ui/react';
import { CSSProperties } from 'react';
import { StyleFunctionProps } from '@chakra-ui/styled-system';

export type CustomTheme<T extends string | number | symbol, P> = {
    components: Record<
        string,
        {
            parts?: never;
            baseStyle?: SystemStyleInterpolation;
            sizes?: Record<string, SystemStyleInterpolation>;
            variants?: Record<T, SystemStyleInterpolation>;
            defaultProps?: P;
        }
    >;
};

export type GlobalStyleType = Record<string, CSSProperties | StyleFunctionProps | Record<string, any>>;
