import { useRef, useState } from 'react'

export const useForm = <T>(args: FormConfig<T>) => {

    const { initVal, onSubmit, validate } = args;

    const _state = useRef<T | any>({ ...(initVal ?? {} as T) })

    const _childRef = useRef<object | any>({})

    // const [state, setState] = useState<T>({ ...(initVal ?? {} as T) });

    const [refresh , setRefresh] = useState<number>(0);

    const [fieldErrors, setFieldErrors] = useState<Record<any, string | string[]>>({} as any)

    const handleChange = (e: any) => {

        const { name, value } = e.target;

        // console.log('g handleChange')

        set(name, value)

        // setState(state => ({ ...state, [e.target.name]: e.target.value }))

    }

    const handleSubmit = async (e: any) => {

        if (e) {

            e.preventDefault();
            e.persist() // not needed anymore

        }

        // console.log(_state.current)

        if (await runValidation()) {
            
            onSubmit(get() as any, ctx)

        }


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

    const handleOnBlur = async (e: any) => {

        const name = e.target.name;

        await runValidation(name)

    }

    const runValidation = (name?: any): Promise<boolean> => {

        return new Promise((resolve, reject) => {

            //validate function was not passed so neglecting validation. hence resolve -> true
            if (typeof validate !== 'function') return resolve(true);

            try {

                const errors: any = validate(_state.current)

                if (Object.keys(errors ?? {}).length) throw errors

                return resolve(true)

            } catch (err: any) {

                const updateVal = name ? { [name]: err[name] } : err

                setFieldErrors(state => ({
                    ...state,
                    ...updateVal
                }))

                return resolve(false)

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

        _state.current = {...initVal, ...data}

        // console.log('reset ran');

        trigger()

        // setState(state => ({...initVal, ...data}))

    }

    const setErrors = (err: Record<any, string | string[]>) => {

        err = err ?? {};

        setFieldErrors(err)

    }

    const get = (field?: any) => {

        if (!field) return _state.current;

        return _state.current[field];

    }

    const set = (field: any, val: any) => {

        _state.current[field] = val;

        _childRef.current[field].current.refresh()

    }

    const trigger = () => {

        setRefresh(val => val + 1)

    }

    const register = (args:RegisterType) => {     

        const type = args.type ?? 'text';

        const ref = useRef()

        const props = {
            ...args,
            ref,
            type
        }

        _childRef.current[args.name] = ref

        return props
    }

    const ctx: UseFormCtx<T> = {
        values: get(),
        reset,
        onSubmit,
        errors: fieldErrors,
        setErrors: setErrors,
    } as const

    const form = {
        register,
        refresh,
        set,
        values: get(),
        handleChange,
        handleSubmit,
        handleOnFocus,
        handleOnBlur,
        reset,
        onSubmit,
        errors: fieldErrors,
        setErrors: setErrors,
        formatError,
    } as const;

    return form

}

type RegisterType = {
    name: string;
    label: string;
    type?: 'text' | 'password' | 'number' | 'tel';
    required?: boolean;
}

type FormConfig<S> = {
    initVal?: S;
    onSubmit: (values: S, ctx: UseFormCtx<S>) => void,
    validate?: (values: S) => Record<any, string | string[]> | unknown
}


type UseFormCtx<T> = Omit<UseFormHook<T>, 
    'formatError' | 
    'handleOnFocus' | 
    'handleSubmit' | 
    'handleChange' | 
    'handleOnBlur' | 
    'set' | 
    'register' | 
    'refresh'
>

export type UseFormHook<T> = ReturnType<typeof useForm<T>>