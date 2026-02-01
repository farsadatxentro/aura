import React from 'react';

interface BackButtonProps {
  onClick: () => void;
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center justify-center w-10 h-10 -ml-2 rounded-full text-[#111418] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${className}`}
    >
      <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back</span>
    </button>
  );
};