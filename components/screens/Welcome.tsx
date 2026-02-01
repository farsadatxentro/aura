import React from 'react';
import { config } from '../../config';
import { Language } from '../../types';
import { Button } from '../ui/Button';

interface Props {
  lang: Language;
  setLang: (l: Language) => void;
  onStart: () => void;
}

export const Welcome: React.FC<Props> = ({ lang, setLang, onStart }) => {
  const t = config.translations[lang];

  return (
    <div className="flex flex-col h-full">
      {/* Header / Logo Section */}
      <div className="flex flex-col items-center pt-12 pb-2 px-6">
        <div 
            className="w-20 h-20 rounded-full bg-cover bg-center mb-4 shadow-sm border border-gray-100 dark:border-gray-800"
            style={{ backgroundImage: `url('${config.logoUrl}')` }}
        />
        <h1 className="text-[#111418] dark:text-white tracking-tight text-2xl font-semibold leading-tight text-center">
          {config.hotelName}
        </h1>
      </div>

      {/* Language Selector */}
      <div className="flex justify-center w-full px-6 py-4">
        {/* Added p-1 to container to allow scale transformation without clipping */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar p-1">
          {config.languages.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full pl-3 pr-4 transition-all ${
                lang === l
                  ? 'bg-[#111418] dark:bg-white scale-105 shadow-md'
                  : 'bg-background-light dark:bg-[#1a2632] border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {lang === l && (
                <span className={`material-symbols-outlined text-[18px] ${lang === l ? 'text-white dark:text-[#111418]' : ''}`}>
                  language
                </span>
              )}
              <p className={`text-sm font-medium leading-normal ${
                  lang === l ? 'text-white dark:text-[#111418]' : 'text-[#111418] dark:text-gray-300'
              }`}>
                {l}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Hero / Middle Section */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 pb-6 mt-4">
        <div 
            className="w-full aspect-[4/3] rounded-2xl bg-cover bg-center mb-8 shadow-lg relative overflow-hidden group"
            style={{ backgroundImage: `url('${config.heroImageUrl}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        
        <div className="max-w-xs mx-auto text-center space-y-4">
          <h2 className="text-[#111418] dark:text-white text-[28px] font-light leading-tight tracking-tight">
            {t.welcomeTitle}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed">
            {t.welcomeSubtitle}
          </p>
        </div>
      </div>

      {/* Action Section */}
      <div className="w-full px-6 pb-10 pt-4 bg-white dark:bg-[#101922]">
        <Button onClick={onStart}>
          {t.ctaButton}
        </Button>
        
        <div className="flex items-center justify-center gap-2 mt-5 opacity-60">
          <span className="material-symbols-outlined text-[#111418] dark:text-white text-xs" style={{ fontSize: '14px' }}>lock_open</span>
          <p className="text-[#111418] dark:text-white text-xs font-medium">{t.loginText}</p>
        </div>
      </div>
    </div>
  );
};