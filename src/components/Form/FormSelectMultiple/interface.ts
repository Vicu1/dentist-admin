import { apiComplexType, IOption } from 'components/Constructor/Form/interface';

export interface optionsProps {
    id: number,
    name: string,
}
interface style {
    maxHeight: number
}
type listBox = {
    style: style
}
export interface FormSelectMultipleProps {
    label: string,
    options: IOption[],
    name: string,
    disableDefault?: boolean,
    limitTags?: number,
    returnObject?: boolean,
    groupedField?: string,
    moduleName?: string,
    handleChange?: (e: null) => void,
    listboxProps?: listBox,
    disabled?: boolean,
    defaultValue?: number[],
    grouped?: boolean,
    disableClearable?: boolean,
    filterSelectedOptions?: boolean,
    apiComplex?: apiComplexType | any,
}
