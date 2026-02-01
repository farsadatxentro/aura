import React, { useEffect, useState } from 'react';
import { config } from '../../config';
import { Language } from '../../types';
import { Button } from '../ui/Button';

interface Props {
  lang: Language;
  onReset: () => void;
}

export const Success: React.FC<Props> = ({ lang, onReset }) => {
  const t = config.translations[lang];
  const [refId, setRefId] = useState('');

  useEffect(() => {
    // Generate random reference ID
    setRefId('#' + Math.random().toString(36).substring(2, 7).toUpperCase());
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col items-center pt-12 pb-2 px-6">
        <div 
            className="w-20 h-20 rounded-full bg-cover bg-center mb-4 shadow-sm border border-gray-100 dark:border-gray-800"
            style={{ backgroundImage: `url('${config.logoUrl}')` }}
        />
        <h1 className="text-[#111418] dark:text-white tracking-tight text-xl font-semibold leading-tight text-center opacity-80">
          {config.hotelName}
        </h1>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-8 text-center pb-8">
        <div className="group relative mb-8 flex items-center justify-center">
          <div className="absolute h-32 w-32 rounded-full bg-primary/5 dark:bg-primary/10 animate-pulse"></div>
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 ring-1 ring-primary/20 dark:ring-primary/30">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '48px', fontWeight: 600 }}>check</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <h2 className="text-[#111418] dark:text-white text-3xl font-semibold tracking-tight">
            {t.successTitle}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-relaxed">
            {t.successSubtitle}
          </p>
        </div>

        <div className="mt-12 w-full max-w-xs border-t border-gray-100 dark:border-gray-800 pt-6">
          <p className="text-xs text-gray-400 dark:text-gray-500 font-medium leading-relaxed">
            {t.successNote}
          </p>
        </div>
      </div>

      <div className="w-full px-6 pb-12 pt-4 bg-white dark:bg-[#101922]">
        <Button 
          variant="secondary" 
          onClick={onReset}
          className="mb-8 h-12"
        >
          {t.newRequestButton}
        </Button>
        
        <div className="flex items-center justify-center">
          <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-600 select-all cursor-pointer hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
            REF: {refId}
          </p>
        </div>
      </div>
    </div>
  );
};