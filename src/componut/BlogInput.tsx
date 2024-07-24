import React, { InputHTMLAttributes, useId, ForwardedRef } from "react";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
  type?: 'submit' | 'text' | 'button' | 'password' | 'email';
}

const BlogInput = React.forwardRef<HTMLInputElement, MyInputProps>(function BlogInput(
  { placeholder, className, type = 'text', ...props }: MyInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const id = useId();

  return (
    <div className="flex flex-col w-full">
      <input
        style={{ fontFamily: 'medium-content-title-font, Georgia, Cambria, "Times New Roman", Times, serif' }}
        type={type}
        placeholder={placeholder}
        {...props}
        className={`outline-none text-2xl border-none text-black rounded-xl p-2 mt-1 mb-2 ${className}`}
        ref={ref}
        id={id}
      />
    </div>
  );
});

export default BlogInput;
