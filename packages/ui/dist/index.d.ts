import * as styled_components from 'styled-components';

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}
declare const Button: ({ primary, backgroundColor, size, label, onClick, ...props }: ButtonProps) => JSX.Element;

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
