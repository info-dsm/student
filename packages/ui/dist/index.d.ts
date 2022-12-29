import * as styled_components from 'styled-components';

declare const Button: () => JSX.Element;

declare const theme: {
    colors: {
        admin: {
            blue: string;
            black: string;
            silver: string;
            gray: string;
            kaki: string;
            white: string;
            purple: string;
            line: string;
            false: string;
        };
        student: {
            balck: string;
            blue: string;
            indigo: string;
            cobalt: string;
            white: string;
        };
    };
    graduation: string;
};

declare const GlobalStyle: styled_components.GlobalStyleComponent<{}, styled_components.DefaultTheme>;

declare const Props: () => JSX.Element;

export { Button, GlobalStyle, Props, theme };
