import { ReactNode } from 'react';
import { FormProvider } from 'react-hook-form';

interface FormWrapperProps {
    form: any,
    onSubmit: (data: any) => void,
    children: ReactNode,
    className?: string
}

const FormWrapper = ({
  form, onSubmit, children, className,
}: FormWrapperProps) => {
  const { handleSubmit } = form;
  return (
    <FormProvider {...form}>
      <form
        autoComplete={'off'}
        className={className}
        onSubmit={handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default FormWrapper;
