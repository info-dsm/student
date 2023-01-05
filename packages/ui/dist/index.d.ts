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
declare const MiniButton: ({ children, less, size, onClick, ...props }: ButtonProps) => JSX.Element;

interface TableProps {
    children: ReactNode;
}
declare const Table: () => JSX.Element;

interface PaginationProps {
    nowIndex: number;
    lastIndex: number;
    changeIndex: (index: number) => void;
}
declare const Pagination: ({ nowIndex, lastIndex, changeIndex, }: PaginationProps) => JSX.Element;

interface SelectProps {
    now: string;
    list: string[];
    onClick: (item: string) => void;
}
declare const LittleSelectComplete: ({ now, list, onClick }: SelectProps) => JSX.Element;

export { Button, ButtonProps, ChildProps, CustomThemeProvider, LittleSelectComplete, MiniButton, Pagination, PaginationProps, SelectProps, Table, TableProps };
