import React, { useState } from 'react';
import { config } from '../../config';
import { Language } from '../../types';
import { Button } from '../ui/Button';
import { BackButton } from '../ui/BackButton';

interface Props {
  lang: Language;
  requestTypeId: string;
  onBack: () => void;
  onSubmit: (details: string) => void;
  isSubmitting: boolean;
}

export const Details: React.FC<Props> = ({ lang, requestTypeId, onBack, onSubmit, isSubmitting }) => {
  const t = config.translations[lang];
  const [details, setDetails] = useState('');

  const category = config.categories.find(c => c.id === requestTypeId);
  const placeholder = category 
    ? `${t.detailsPlaceholder.split('(')[0]} (${category.label[lang]}...)` 
    : t.detailsPlaceholder;

  // Validation: 'Other' requests cannot be empty.
  const isOther = requestTypeId === 'other';
  const isEmpty = !details.trim();
  const isDisabled = isSubmitting || (isOther && isEmpty);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center pt-8 pb-2 px-6">
        <BackButton onClick={onBack} />
      </div>

      <div className="flex flex-1 flex-col px-6 pt-2">
        <div className="mb-4">
          <h1 className="text-[#111418] dark:text-white text-[32px] font-serif font-medium leading-tight mb-2 tracking-tight">
            {t.detailsTitle}
          </h1>
        </div>
        <div className="w-full flex-1 mb-4">
          <label className="sr-only" htmlFor="details">Request Details</label>
          <textarea 
            id="details" 
            name="details" 
            autoFocus
            className="w-full h-64 p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1a2632] text-[#111418] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-base focus:border-primary focus:ring-1 focus:ring-primary resize-none outline-none transition-all duration-200 shadow-sm"
            placeholder={placeholder}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="w-full px-6 pb-10 pt-4 bg-white dark:bg-[#101922]">
        <Button 
          onClick={() => onSubmit(details)}
          isLoading={isSubmitting}
          disabled={isDisabled}
        >
          {t.submitButton}
        </Button>
      </div>
    </div>
  );
};