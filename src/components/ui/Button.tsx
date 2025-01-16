interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  ...props
}) => {
  const baseStyles =
    'font-bold text-sm py-3 px-8 rounded-full transition-colors duration-200 ease-in-out';
  const variantStyles = {
    primary:
      'bg-primary hover:bg-primary/90 text-white shadow-[0_15px_15px_-10px_rgba(243,96,60,0.25)]',
    secondary: 'bg-white hover:bg-white/90 text-primary',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
