import { FormContext } from '@/components/Form/Form';
import React, { useContext } from 'react'

const FieldInput:React.FC<IFieldTextProps> = (props) => {

    const ctx = useContext(FormContext);

    const { name, value, label, onChange, type, placeholder, className, ...rest } = props;

    const classes = ['form-field'];
    if (className) classes.push(className);

    const handleChange = ctx.handleChange ?? onChange

    const inputValue = ctx.values[name] ?? value ?? '';

    const validationError = ctx.formatError(name);

    return (
        <div className="field-group">

            {label && <label>{label}</label>}

            <input 
                className={classes.join(" ")} 
                type={type ? type : 'text'} 
                name={name} 
                value={inputValue} 
                onChange={handleChange} 
                placeholder={placeholder}
                onFocus={ctx.handleOnFocus}
                onBlur={ctx.handleOnBlur}
                {...rest} 
            />

            {validationError && <span className="field-msg field-error">{validationError}</span>}

        </div>
    )
}

export default FieldInput

interface IFieldTextProps {
    type?: 'text' | 'password' | 'number' | 'tel',
    name: string;
    value?: any;
    label?: string;
    onChange?: (e:any) => void;
    className?: string;
    [key:string]: any
}

