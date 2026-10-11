interface InputFormProps {
title: string;
placeholder?: string;
className?: string;
multiline?: boolean;
reason?: boolean;
}

function InputForm({ title, placeholder, multiline = false }: InputFormProps) {
    return(
        <div className="w-full">
            <label className="block text-[10px] text-text font-medium mb-1">{title}</label>
            <div className="text-text border border-text/20 rounded-md px-3 py-1 mb-5 bg-text/5 hover:bg-turquesa/5 hover:border-turquesa focus-within:border-turquesa focus-within:bg-turquesa/5 transition-all">
                {multiline ? (
                    <textarea
                        placeholder={placeholder}
                        className="custom-scrollbar w-full min-h-30 resize-y bg-transparent text-[12px] text-text border-none focus:outline-none focus:ring-0"
                    />
                ) : (
                    <input
                        type="text"
                        placeholder={placeholder}
                        className="w-full bg-transparent text-[12px] text-text border-none focus:outline-none focus:ring-0"
                    />
            
                )}
            </div>
        </div>
    )
}

export default InputForm;