import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Textarea, TextareaProps } from "../ui/textarea";
import React from "react";

interface InputTextAreaProps {
  title: string;
  placeholder: string;
  className?: string;
}

export default function InputTextArea({
  className,
  placeholder,
  title,
  ...rest
}: InputTextAreaProps) {
  return (
    <div className="flex flex-col">
      <label>{title}</label>
      <Textarea
        placeholder={placeholder}
        required
        className={`p-2 border ${className} `}
        {...rest}
      />
    </div>
  );
}
