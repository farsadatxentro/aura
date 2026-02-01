import React, { useState } from 'react';
import { Welcome } from './components/screens/Welcome';
import { Room } from './components/screens/Room';
import { Selection } from './components/screens/Selection';
import { Details } from './components/screens/Details';
import { Success } from './components/screens/Success';
import { Language, ScreenState, SubmitPayload } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('EN');
  const [screen, setScreen] = useState<ScreenState>('WELCOME');
  
  // Form Data
  const [roomNumber, setRoomNumber] = useState('');
  const [requestType, setRequestType] = useState('');
  const [refId, setRefId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Transitions
  const toWelcome = () => {
      setRoomNumber('');
      setRequestType('');
      setScreen('WELCOME');
  };
  const toRoom = () => setScreen('ROOM');
  const toSelection = (room: string) => {
      setRoomNumber(room);
      setScreen('SELECTION');
  };
  const toDetails = (typeId: string) => {
      setRequestType(typeId);
      setScreen('DETAILS');
  };
  const goBackFromRoom = () => setScreen('WELCOME');
  const goBackFromSelection = () => setScreen('ROOM');
  const goBackFromDetails = () => setScreen('SELECTION');

  const handleSubmit = async (details: string) => {
      setIsSubmitting(true);

      const payload: SubmitPayload = {
          roomNumber,
          requestType,
          details,
          language: lang
      };

      try {
          // Call the Vercel Serverless Function
          const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.error || 'Failed to submit request');
          }
          
          setRefId(data.refId);
          setScreen('SUCCESS');
      } catch (e) {
          console.error("Failed to send request", e);
          alert("Something went wrong. Please try again.");
      } finally {
          setIsSubmitting(false);
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center md:bg-black/10 md:p-4">
      {/* Mobile container constraint */}
      <div className="relative w-full h-[100dvh] md:h-[844px] max-w-md bg-white dark:bg-[#101922] shadow-2xl overflow-y-auto md:rounded-3xl">
        
        {screen === 'WELCOME' && (
            <Welcome lang={lang} setLang={setLang} onStart={toRoom} />
        )}

        {screen === 'ROOM' && (
            <Room 
                lang={lang} 
                onBack={goBackFromRoom} 
                onContinue={toSelection} 
                initialValue={roomNumber}
            />
        )}

        {screen === 'SELECTION' && (
            <Selection 
                lang={lang} 
                onSelect={toDetails} 
                onBack={goBackFromSelection}
            />
        )}

        {screen === 'DETAILS' && (
            <Details 
                lang={lang} 
                requestTypeId={requestType} 
                onBack={goBackFromDetails} 
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
            />
        )}

        {screen === 'SUCCESS' && (
            <Success 
                lang={lang} 
                onReset={toWelcome} 
                refId={refId}
            />
        )}

      </div>
    </div>
  );
}