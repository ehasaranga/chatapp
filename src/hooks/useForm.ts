import { useState } from 'react'

export const useForm = <T>(args: FormConfig<T>) => {

    const { initVal, onSubmit, validate } = args;

    const [state, setState] = useState<T>({ ...(initVal ?? {} as T) });

    const [fieldErrors, setFieldErrors] = useState<Record<any, string | string[]>>({} as any)

    const handleChange = (e: any) => {

        setState(state => ({ ...state, [e.target.name]: e.target.value }))

    }

    const handleSubmit = async (e: any) => {

        if (e) {

            e.preventDefault();
            e.persist() // not needed anymore

        }
        
        isValidated().then(() => {

            onSubmit(state as any, ctx)

        })


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

    const handleOnBlur = (e: any) => {

        const name = e.target.name;

        isValidated(name)

    }

    const isValidated = (name?: any): Promise<boolean> => {

        return new Promise((resolve, reject) => {

            //validate function was not passed so neglecting validation. hence resolve -> true
            if (typeof validate !== 'function') return resolve(true);

            try {

                const errors: any = validate(state)

                if (Object.keys(errors ?? {}).length) throw errors

                resolve(true)

            } catch (err: any) {

                const updateVal = name ? { [name]: err[name] } : err

                setFieldErrors(state => ({
                    ...state,
                    ...updateVal
                }))

            }

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


    const ctx: UseFormCtx<T> = {
        values: state,
        reset,
        onSubmit,
        errors: fieldErrors,
        setErrors: setErrors,
    } as const

    return {
        values: state,
        handleChange,
        handleSubmit,
        handleOnFocus,
        handleOnBlur,
        reset,
        onSubmit,
        errors: fieldErrors,
        setErrors: setErrors,
        formatError,
    } as const

}

type FormConfig<S> = {
    initVal?: S;
    onSubmit: (values: S, ctx: UseFormCtx<S>) => void,
    validate?: (values: S) => Record<any, string | string[]> | unknown
}


type UseFormCtx<T> = Omit<UseFormHook<T>, 'formatError' | 'handleOnFocus' | 'handleSubmit' | 'handleChange' | 'handleOnBlur'>

export type UseFormHook<T> = ReturnType<typeof useForm<T>>