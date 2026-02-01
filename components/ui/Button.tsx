import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  isLoading?: boolean;
  icon?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  isLoading = false, 
  icon, 
  fullWidth = true, 
  className = '', 
  children, 
  disabled, 
  ...props 
}) => {
  const baseStyles = "relative flex items-center justify-center overflow-hidden rounded-xl transition-all active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50",
    secondary: "border border-gray-200 dark:border-gray-700 bg-transparent text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800",
    ghost: "bg-transparent text-primary hover:bg-primary/5"
  };

  const sizes = "h-14 text-lg font-semibold tracking-wide";
  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant]} ${sizes} ${width} ${className} group`}
      {...props}
    >
      {/* Ripple/Highlight effect for primary buttons */}
      {variant === 'primary' && !isLoading && !disabled && (
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      )}

      {isLoading ? (
        <svg className="animate-spin h-6 w-6 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <>
          {icon && (
            <span className="material-symbols-outlined mr-2" style={{ fontSize: '24px' }}>{icon}</span>
          )}
          <span>{children}</span>
        </>
      )}
    </button>
  );
};