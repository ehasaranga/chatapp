import { type UseFormHook } from "@/hooks/useForm";
import React, { PropsWithChildren, createContext, useContext } from "react";

type UseForm = Omit<UseFormHook<any>, 'register'>

type FormProps = PropsWithChildren & { hook: UseForm }

export const FormContext = createContext<UseForm>({} as UseForm);

export const useFormContext = (): UseForm => {
    return useContext(FormContext)
}

export const Form:React.FC<FormProps> = ({ children, hook }) => {

    const { handleSubmit } = hook;

    return (

        <FormContext.Provider value={hook}>

            <form className='form form-label-top' onSubmit={handleSubmit}>

                {children}

            </form>

        </FormContext.Provider>

    )

}