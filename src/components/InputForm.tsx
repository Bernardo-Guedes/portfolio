import { useId } from "react";

interface InputFormProps {
    title: string;
    name:string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    placeholder: string;
    multiline?: boolean;
    reason?: boolean;
    error?: string;
    disabled?: boolean;
}

function InputForm({ title, placeholder, name, value, onChange, type="text", multiline = false, error, disabled }: InputFormProps) {
    const id = useId();
    const fieldClass = "w-full bg-transparent text-[12px] text-text border-none focus:outline-none focus:ring-0";
    return(
        <div className="w-full">
            <label htmlFor={id} className="block text-[10px] text-text font-medium mb-1">{title}</label>
            <div className={`text-text border rounded-md px-3 py-1 bg-text/5 hover:bg-turquesa/5 hover:border-turquesa focus-within:border-turquesa focus-within:bg-turquesa/5 transition-all ${error ? "border-red-500" : "border-text/20"}`}>
                {multiline ? (
                    <textarea
                        id={id}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        disabled={disabled}
                        rows={5}
                        onChange={(e) => onChange(e.target.value)}
                        className={`${fieldClass} resize-none py-1`}
                    />
                ) : (
                    <input
                        id={id}
                        name={name}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        disabled={disabled}
                        autoComplete={type === "email" ? "email" : "name"}
                        onChange={(e) => onChange(e.target.value)}
                        className={fieldClass}
                    />
            
                )}
            </div>
            <p className="mt-1 mb-3 min-h-4 text-[10px] text-red-500">{error}</p>
        </div>
    )
}

export default InputForm;