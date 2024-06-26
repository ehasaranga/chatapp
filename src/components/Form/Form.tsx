import React, { PropsWithChildren } from "react";
import { FormProvider, UseForm } from "react-ezform";

type FormType = PropsWithChildren & { hook: UseForm }

export const Form: React.FC<FormType> = (props) => {

    const { children, hook } = props

    const { handleSubmit } = hook

    return (

        <FormProvider hook={hook} >

            <form className='form form-label-top' onSubmit={handleSubmit}>

                {children}

            </form>

        </FormProvider>

    )

}