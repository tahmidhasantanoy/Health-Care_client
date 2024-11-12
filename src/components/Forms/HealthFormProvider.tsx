/* We use this as a wrapper for form
so that we don't have to repeat code */

import {
  useForm,
  FormProvider,
  useFormContext,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

type TChildren = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};

const HealthFormProvider = ({ children, onSubmit }: TChildren) => {
  const methods = useForm();
  console.log("provider page -> ", onSubmit);

  const wrapperOnSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("provider page -> wrapperOnSubmit 1", data);
    onSubmit?.(data); // call onSubmit function & go login onSubmitHandleLogin
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      {/* Here inputfields data come 1st & call wrapperOnSubmit function  */}
      <form onSubmit={methods.handleSubmit(wrapperOnSubmit)}>
        {/* <form onSubmit={handleSubmit(submit)}>{children}</form> */}
        {/* <NestedInput />  All input are here */}
        {children}
      </form>
    </FormProvider>
  );
};

export default HealthFormProvider;
