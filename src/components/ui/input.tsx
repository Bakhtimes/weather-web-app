import type { ClassAttributes, InputHTMLAttributes } from "react";
import type { JSX } from "react/jsx-runtime";

export function Input(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) {
    return ( 
        <input {...props}>
        </input>
    )
}