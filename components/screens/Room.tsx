import React, { useState } from 'react';
import { config } from '../../config';
import { Language } from '../../types';
import { Button } from '../ui/Button';
import { BackButton } from '../ui/BackButton';

interface Props {
  lang: Language;
  onBack: () => void;
  onContinue: (room: string) => void;
  initialValue: string;
}

export const Room: React.FC<Props> = ({ lang, onBack, onContinue, initialValue }) => {
  const t = config.translations[lang];
  const [room, setRoom] = useState(initialValue);

  const handleSubmit = (e?: React.FormEvent) => {
      e?.preventDefault();
      if(room.trim().length > 0) {
          onContinue(room);
      }
  };

  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between px-6 pt-12 pb-2">
        <BackButton onClick={onBack} />
      </header>

      <main className="flex-1 flex flex-col justify-center px-8 pb-32">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-[#111418] dark:text-white text-[32px] font-light leading-tight tracking-tight text-center">
              {t.roomTitle.split('room number').length > 1 ? (
                 <>
                   {t.roomTitle.split('room number')[0]} <br/> <span className="font-medium">room number?</span>
                 </>
              ) : t.roomTitle}
            </h1>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-10 mt-2">
            <div className="relative group">
              <input 
                autoFocus
                className="w-full h-20 rounded-2xl bg-gray-50 dark:bg-[#1a2632] border border-gray-200 dark:border-gray-700 text-center text-3xl font-medium text-[#111418] dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:ring-0 focus:border-primary transition-all outline-none shadow-sm" 
                inputMode="numeric" 
                pattern="[0-9]*" 
                placeholder={t.roomPlaceholder} 
                type="number"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
            </div>
            
            <Button type="submit" disabled={!room}>
              {t.roomButton}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};