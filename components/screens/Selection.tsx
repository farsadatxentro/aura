import React from 'react';
import { config } from '../../config';
import { Language } from '../../types';
import { BackButton } from '../ui/BackButton';

interface Props {
  lang: Language;
  onSelect: (typeId: string) => void;
  onBack: () => void;
}

export const Selection: React.FC<Props> = ({ lang, onSelect, onBack }) => {
  const t = config.translations[lang];

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#101922]">
      <div className="flex items-center pt-8 px-6">
        <BackButton onClick={onBack} />
      </div>
      
      <div className="flex flex-col items-center pt-2 pb-6 px-8 text-center shrink-0 z-10">
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500 mb-3">
            {config.hotelName}
        </p>
        <h1 className="text-[#111418] dark:text-white text-3xl font-light leading-tight tracking-tight">
          {t.helpTitle}
        </h1>
      </div>

      <div className="flex-1 px-6 pb-8 overflow-y-auto no-scrollbar">
        <div className="grid grid-cols-2 gap-4 h-full content-start">
            
          {config.categories.map((cat) => (
            <button 
                key={cat.id}
                onClick={() => onSelect(cat.id)}
                className="group relative flex flex-col items-center justify-center rounded-2xl bg-white dark:bg-[#1a2632] p-6 shadow-card hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-gray-50 dark:border-gray-800 aspect-square"
            >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-50 dark:bg-[#101922] text-[#111418] dark:text-white group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-[32px]">{cat.icon}</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100 text-center leading-tight">
                    {cat.label[lang]}
                </span>
            </button>
          ))}

          <button 
            onClick={() => onSelect('other')}
            className="col-span-2 group relative flex flex-row items-center justify-between rounded-2xl bg-gray-50 dark:bg-[#1a2632] p-5 pl-6 mt-2 shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:bg-white dark:hover:border-gray-700"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-[#101922] text-gray-600 dark:text-gray-300 shadow-sm border border-gray-100 dark:border-gray-800 group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">edit</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[15px] font-semibold text-gray-900 dark:text-white">{t.otherRequest}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">{t.otherRequestSub}</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};