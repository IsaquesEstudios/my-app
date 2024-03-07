import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputFormProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title: string;
  placeholder: string;
  className?: string;
  type: string;
}

export default function InputForm({
  className,
  placeholder,
  title,
  type,
  ...rest
}: InputFormProps) {
  return (
    <div className="flex flex-col">
      <label>{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`p-2 border ${className} `}
        {...rest}
      />
    </div>
  );
}
