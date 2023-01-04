import { ReactNode } from 'react';

interface ChildProps {
    children: ReactNode;
}
declare const CustomThemeProvider: ({ children }: ChildProps) => JSX.Element;

interface ButtonProps extends ChildProps {
    size: string;
    less: number;
    onClick?: () => void;
}
declare const Button: ({ children, less, size, onClick, ...props }: ButtonProps) => JSX.Element;

declare const Props: () => JSX.Element;

export { Button, ButtonProps, ChildProps, CustomThemeProvider, Props };
