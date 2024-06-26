/* eslint-disable */
import { Dayjs } from 'dayjs';
// import {DateOrTimeView} from "@mui/x-date-pickers";

export enum FormElementTypes {
    TEXT = 'text',
    SELECT = 'select',
    DATEPICKER = 'datePicker',
    SELECT_MULTIPLE = 'selectMultiple',
    EDITOR = 'editor',
    UPLOADER = 'uploader',
    BOX_ITEMS = 'boxItems',
    CHECKBOX = 'checkbox'
}

export interface IOption {
    id: number | string,
    name: string,
    color?: string
}

export interface apiComplexType {
    id: number | string,
    name: string
}

export interface FormElement {
    type: FormElementTypes,
    label: string,
    name: string,
    xs: number,
    inputType?: string,
    hasImage?: boolean,
    options?: string | IOption[],
    apiComplex?: apiComplexType | any,
    minDate?: Dayjs,
    maxDate?: Dayjs,
    disabled?: boolean,
    maxFilesSize?: number,
    rows?: number,
    allowedTypes?: string[],
    // views?: DateOrTimeView[],
    handleChange?: (data: any, form: any) => void,
    createOption?: boolean,
    withoutSave?: boolean,
    condition?: (form: any) => boolean
}

export interface FormConstructorProps {
    formElements: FormElement[],
    loading: boolean,
    forFilters?: boolean
}
