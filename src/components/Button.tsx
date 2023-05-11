import {ButtonHTMLAttributes, FC, ReactNode} from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: "button";
    children: ReactNode;
}

const Button: FC<ButtonProps> = ({type = "button", children, ...props}) => {
    return (
        <button type={type} {...props} className="btn btn-dark">
            {children}
        </button>
    )
}

export default Button;
