import { type UseFormHook } from "@/hooks/useForm";
import React, { PropsWithChildren, createContext } from "react";

type FormProps = PropsWithChildren & { hook: UseFormHook<any> }

export const FormContext = createContext<UseFormHook<any>>({} as UseFormHook<any>);

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
