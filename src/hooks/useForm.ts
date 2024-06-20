import { useState } from 'react'

export const useForm = <T>(args: FormConfig<T>) => {

    const { initVal, onSubmit } = args;

    const [state, setState] = useState<T>({ ...(initVal ?? {} as T) });

    const [fieldErrors, setFieldErrors] = useState<Record<any, string | string[]>>({} as any)

    const handleChange = (e: any) => {

        setState(state => ({ ...state, [e.target.name]: e.target.value }))

    }

    const handleSubmit = (e: any) => {

        if (e) {

            e.preventDefault();
            e.persist() // not needed anymore

        }

        onSubmit(state as any, ctx)

    }

    const handleOnFocus = (e: any) => {

        const name = e.target.name;

        if (!formatError(name)) return;

        setFieldErrors((state) => {

            const newState = { ...state }

            delete newState[name];

            return { ...newState }

        })

    }

    const formatError = (fieldName: any) => {

        const err = fieldErrors[fieldName];

        if (!err) return false

        const errMsg = Array.isArray(err) ? err[0] : err;

        return errMsg;
    }

    const reset = (data: any = {}) => {

        setState({ ...initVal, ...data })

    }

    const setErrors = (err: Record<any, string | string[]>) => {

        err = err ?? {};

        setFieldErrors(err)

    }

    const ctx = {
        values: state,
        reset,
        onSubmit,
        errors: fieldErrors,
        setErrors: setErrors,
    } as const

    const form = {
        values: state,
        handleChange,
        handleSubmit,
        handleOnFocus,
        reset,
        onSubmit,
        errors: fieldErrors,
        setErrors: setErrors,
        formatError
    } as const

    return form

}

type FormConfig<S> = {
    initVal?: S;
    onSubmit: (values: S, ctx: UseFormCtx<S>) => void
}


type UseFormCtx<T> = Pick<UseFormHook<T>, 'values' | 'setErrors' | 'onSubmit' | 'reset' | 'errors'>

export type UseFormHook<T> = ReturnType<typeof useForm<T>>