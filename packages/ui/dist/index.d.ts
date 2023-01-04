import { ReactNode } from 'react';
import * as styled_components from 'styled-components';

interface ButtonProps {
    children: ReactNode;
    size: string;
    less: number;
    onClick?: () => void;
}
declare const Button: ({ children, less, size, onClick, ...props }: ButtonProps) => JSX.Element;

declare const theme: {
    colors: {
        balck: string;
        black40: string;
        black50: string;
        blue: string;
        indigo: string;
        cobalt: string;
        white: string;
        red: string;
        gray: string;
        gray2: string;
        pink: string;
        skeleton: string;
    };
    graduation: string;
};

declare const GlobalStyle: styled_components.GlobalStyleComponent<{}, styled_components.DefaultTheme>;

declare const Props: () => JSX.Element;

export { Button, ButtonProps, GlobalStyle, Props, theme };
