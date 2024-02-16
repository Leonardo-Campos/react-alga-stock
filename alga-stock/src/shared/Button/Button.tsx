import React from "react";
import './Button.css'

declare interface BottonProps {
    content?: string;
    onClick?: () => void;
    appendIcon: JSX.Element
    children: string
}


const Button: React.FC<BottonProps> = (props) => {
    return <button className="AppButton"
    onClick={props.onClick}
    >
        { props.children || 'Nameless Button' }
        { props.appendIcon }
    </button>
}

export default Button