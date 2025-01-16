interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`rounded-full py-3 px-6 w-full ${className}`}
      {...props}
    />
  );
};
