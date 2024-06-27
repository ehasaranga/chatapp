import React from "react";
import { FormProvider, FormProviderProps } from "react-ezform";

export const Form: React.FC<FormProviderProps> = (props) => {

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