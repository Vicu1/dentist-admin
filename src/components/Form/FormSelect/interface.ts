
import { IOption } from '@/components/Constructor/Form/interface';

interface style {
    maxHeight: number
}
type listBox = {
    style: style
}
export interface FormSelectProps {
    label?: string,
    options: IOption[],
    name: string,
    autoFocus?: boolean,
    returnObj?: boolean,
    moduleName?: string,
    groupedField?: string,
    handleChange?: (value: {id: number, name: string} | null) => void,
    listboxProps?: listBox,
    disabled?: boolean,
    defaultValue?: number,
    grouped?: boolean,
    disableClearable?: boolean,
    filterSelectedOptions?: boolean,
}
