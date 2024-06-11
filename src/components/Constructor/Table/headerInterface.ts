import { ReactNode } from 'react';

interface HeaderFormatInterface<T> {
    value: T[keyof T],
    item: T
}

export interface HeaderInterface<T> {
    label: string;
    fieldName: keyof T;
    format?: ({ value, item }: HeaderFormatInterface<T>) => ReactNode | string | number
}
