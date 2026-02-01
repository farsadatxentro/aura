export type Language = 'EN' | 'ES' | 'FR' | 'DE';

export type ScreenState = 'WELCOME' | 'ROOM' | 'SELECTION' | 'DETAILS' | 'SUCCESS';

export interface Translation {
  welcomeTitle: string;
  welcomeSubtitle: string;
  ctaButton: string;
  loginText: string;
  roomTitle: string;
  roomPlaceholder: string;
  roomButton: string;
  helpTitle: string;
  otherRequest: string;
  otherRequestSub: string;
  detailsTitle: string;
  detailsPlaceholder: string;
  submitButton: string;
  successTitle: string;
  successSubtitle: string;
  successNote: string;
  newRequestButton: string;
}

export interface RequestCategory {
  id: string;
  icon: string;
  label: Record<Language, string>;
}

export interface AppConfig {
  hotelName: string;
  logoUrl: string;
  heroImageUrl: string;
  languages: Language[];
  translations: Record<Language, Translation>;
  categories: RequestCategory[];
}

export interface SubmitPayload {
    roomNumber: string;
    requestType: string; // The ID of the category or 'other'
    details: string;
    language: Language;
}