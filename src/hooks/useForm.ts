import { useState } from 'react'

const useForm = <T extends {[key:string]: any}> (defaultValues: T = {} as T) => {

    const [state, setState] = useState<T>({...defaultValues});

    const handleChange = (e: any) => {

        setState(state => ({ ...state, [e.target.name]: e.target.value }))

    }

    const handleSubmit = ( onSubmit: any) => (e:any) => {

        if (e) {

            e.preventDefault();
            e.persist()

        }

        onSubmit(state, e)

    }

    const reset = (data:any = {}) => {

        setState({...defaultValues, ...data})

    }

    const form = {
        formValues: state,
        handleChange,
        handleSubmit,
        reset
    } as const

    return form

}

export default useForm;