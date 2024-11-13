/* We use this as a wrapper for form
so that we don't have to repeat code */

import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

// type declaration of validationSchema
type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

type TChildren = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
} & TFormConfig; // how type merge two type in one type

const HealthFormProvider = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
}: TChildren) => {
  const formConfig: TFormConfig = {}; // why?

  if (resolver) {
    formConfig["resolver"] = resolver; // like insert a object using key
  }

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig); /* finally add zod with form  || 
    Default values empty || 
    all methods of useForm */
  // const methods = useForm(); // previous

  console.log("provider page -> ", onSubmit); //asunc function show here

  const wrapperOnSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("provider page -> wrapperOnSubmit 1", data);
    /* 
    ContactNumber: "45353"
    adress: undefined
    email: "g@gmail.com"
    name: undefined
    password: "Asdf11!"  */
    onSubmit?.(data); // call onSubmit function & go login | register onSubmitHandleLogin
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
