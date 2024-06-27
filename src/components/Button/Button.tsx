import { Spinner } from "@chakra-ui/spinner";
import React, { ReactNode } from "react";

const Button:React.FC<IButtonProps> = (props) => {

    const { loading } = props;

    const spinner = props.spinner ?? <Spinner thickness="3px" boxSize={10} /> ;

    const defaults:Partial<IButtonProps> = {
        type: 'button',
        variant: 'primary'
    }

    const options:IButtonProps = {...defaults, ...props};

    const classes = ['btn'];
    if (options.className) classes.push(options.className)
    if (options.size) classes.push("btn-" + options.size)
    if (options.variant) classes.push("btn-" + options.variant)

    const onClick = (e: any) => {

        if(e) e.preventDefault();

        if (options.onClick) options.onClick(e);

    }

    return (
        <button 
            className={classes.join(" ")}
            type={options.type}
            onClick={options.type === 'submit' ? undefined : onClick}
        >{loading ? spinner : options.label}</button>
    )
}

export default Button

interface IButtonProps {
    variant?: "primary" | "secondary";
    size?: 'wide';
    className?: string;
    label: string;
    onClick?: (e:any) => void;
    disabled?: boolean;
    icon?: ReactNode;
    loading?: boolean;
    spinner?: ReactNode;
    type?: 'button' | 'submit'
}
