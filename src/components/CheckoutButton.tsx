import React, {ButtonHTMLAttributes, ReactNode, FC} from "react";

interface CheckoutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: "button";
    children: ReactNode;
}


const CheckoutButton: FC<CheckoutButtonProps> = ({ type = "button", children, ...props }) => {
    return (
        <button type={type} {...props} className="btn btn-primary btn-block btn-lg">
            {children}
        </button>
    );
}

export default CheckoutButton;
