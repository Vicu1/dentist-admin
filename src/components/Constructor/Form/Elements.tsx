
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

import { FormElement, IOption } from '@/components/Constructor/Form/interface';
import FormCheckbox from '@/components/Form/FormCheckbox';

const FormInput = dynamic(() => import('@/components/Form/FormInput'), { ssr: false });
// const FileUploader = dynamic(() => import('components/Form/FileUploader'), { ssr: false });
// const FormDatePicker = dynamic(() => import('components/Form/FormDatePicker'), { ssr: false });
const FormSelect = dynamic(() => import('@/components/Form/FormSelect'), { ssr: false });
const FormSelectMultiple = dynamic(() => import('@/components/Form/FormSelectMultiple'), { ssr: false });
// const TextEditor = dynamic(() => import('components/Form/TextEditor'), { ssr: false });

const getFormElement = (el: FormElement, options: any, loading: boolean): ReactNode => {

  const getOptions = (): IOption[] => {
    return options[typeof el.options === 'string' ? el.options : ''] || el.options;
  };

  const inputs: {[key: string]: ReactNode} = {
    text: (
      <FormInput
        label={el.label}
        name={el.name}
        type={el.inputType}
        disabled={loading || el?.disabled}
        rows={el.rows}
      />
    ),
    select: (
      <FormSelect
        label={el.label}
        name={el.name}
        moduleName={typeof el.options === 'string' ? el.options : ''}
        disabled={loading || el?.disabled}
        listboxProps={{
          style: {
            maxHeight: 160,
          },
        }}
        options={getOptions()}
      />
    ),
    // datePicker: (
    //   <FormDatePicker
    //     label={el.label}
    //     name={el.name}
    //     disabled={loading || el?.disabled}
    //     minDate={el.minDate}
    //     maxDate={el.maxDate}
    //     views={el.views}
    //   />
    // ),
    selectMultiple: (
      <FormSelectMultiple
        label={el.label}
        name={el.name}
        disabled={loading || el?.disabled}
        limitTags={3}
        moduleName={typeof el.options === 'string' ? el.options : ''}
        listboxProps={{
          style: {
            maxHeight: 160,
          },
        }}
        options={getOptions()}
      />
    ),
    // editor: (
    //   <TextEditor
    //     label={el.label}
    //     name={el.name}
    //     hasImage={el.hasImage}
    //   />
    // ),
    // uploader: (
    //   <FileUploader
    //     label={el.label}
    //     name={el.name}
    //     disabled={loading || el?.disabled}
    //     maxFilesSize={el.maxFilesSize}
    //     allowedTypes={el.allowedTypes}
    //     withoutSave={el.withoutSave}
    //   />
    // ),
    checkbox: (
      <FormCheckbox
        label={el.label}
        disabled={loading || el?.disabled}
        name={el.name}
      />
    ),
  };

  return inputs[el.type];
};
export default getFormElement;
