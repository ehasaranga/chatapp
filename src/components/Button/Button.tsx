
const Button:React.FC<IButtonProps> = (props) => {

    const defaults:any = {
        type: 'button',
        kind: "primary",
    }

    const options:IButtonProps = {...defaults, ...props};

    const classes = ['btn'];
    if (options.className) classes.push(options.className)
    if (options.size) classes.push("btn-" + options.size)
    if (options.type) classes.push("btn-" + options.type)

    const onClick = (e: any) => {

        if(e) e.preventDefault();

        if (options.onClick) options.onClick(e);

    }

    return (
        <button 
            className={classes.join(" ")}
            type={'button'}
            onClick={onClick}
        >{options.label}</button>
    )
}

export default Button

interface IButtonProps {
    type?: "primary" | "secondary";
    size?: 'wide';
    className?: string;
    label: string;
    onClick?: (e:any) => void;
}
