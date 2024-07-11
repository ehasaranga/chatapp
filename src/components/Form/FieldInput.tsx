import React from 'react'

const FieldInput:React.FC<IFieldTextProps> = (props) => {

    const { 
        name, 
        value, 
        label, 
        onChange, 
        onBlur, 
        onFocus, 
        type, 
        placeholder, 
        className, 
        error
     } = props;

    const classes = ['form-field'];
    if (className) classes.push(className);

    return (
        <div className="field-group">

            {label && <label>{label}</label>}

            <input 
                className={classes.join(" ")} 
                value={value} 
                onChange={onChange} 
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholder}
                name={name}
                type={type}
            />

            {error && <span className="field-msg field-error">{error}</span>}

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
    onFocus?: (e:any) => void;
    onBlur?: (e:any) => void;
    className?: string;
    error?: string[] | string
    [key:string]: any
}

