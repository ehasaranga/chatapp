import React from 'react'

const FieldText:React.FC<IFieldTextProps> = (props) => {

    const { name, value, label, onChange, type, placeholder, className, ...rest } = props;

    const classes = ['form-field'];
    if (className) classes.push(className);

    return (
        <div className="field-group">

            {label && <label>{label}</label>}

            <input 
                className={classes.join(" ")} 
                type={type ? type : 'text'} 
                name={name} value={value ? value : ''} 
                onChange={onChange} 
                placeholder={placeholder} 
                {...rest} 
            />

            <span className="field-msg">Please enter a valid email</span>

        </div>
    )
}

export default FieldText

interface IFieldTextProps {
    type?: 'text' | 'password' | 'number' | 'tel',
    name: string;
    value: any;
    label?: string;
    onChange: (e:any) => void;
    className?: string;
    [key:string]: any
}

