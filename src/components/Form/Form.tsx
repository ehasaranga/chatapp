import React from "react";
import { autoRegChild, FormProvider, FormProviderProps } from "react-ezform";

export const Form: React.FC<FormProviderProps> = (props) => {

    const { children, hook } = props

    const { handleSubmit } = hook

    const childrens = autoRegChild(children, hook)

    return (

        <FormProvider hook={hook} >

            <form className='form form-label-top' onSubmit={handleSubmit}>

                {childrens}

            </form>

        </FormProvider>

    )

}