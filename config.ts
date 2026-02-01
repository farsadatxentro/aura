import { AppConfig, Language } from './types';

// Safely access process.env for frontend environments
const getEnv = (key: string, fallback: string) => {
  try {
    // @ts-ignore
    return (typeof process !== 'undefined' && process.env[key]) ? process.env[key] : fallback;
  } catch {
    return fallback;
  }
};

export const config: AppConfig = {
  hotelName: getEnv('APP_NAME', "Aura Boutique Hotel"),
  logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGhlfIQDJTS1QVsimWUiKmv2g_-8Xkz3uj63FMj-4jPvKwCDL_Vo7h6EtgUUnvy6tgsSwBv8KXiLhXh0zWTXbLZ1MLZbDaGDMmvYnBJLGJPqv1iB7r7V_L2wmrhJqaBvlsq-gsDFvPs-uK_iXlgxmxjmp1JHCPC6NTb0B75T1Q3a1h5SZCDDyuioQDrvHyOFKyj7HUbztEjKOJLKiP_Q7GMeXllSkldIVkdOjS-8GfO9muJKUtZCWxVv0cFqn7eUgTBfdeyoehP9Rn",
  heroImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB8WUJuPLwiKm15FYIyXJ6AlD_GkFQErdih-UvcBbqiDMJgSK3bCC1f60BN_DPkT22MvcLT0wQ7_7EFOv8nSxSn_0duUeT0y6L_lO4VX3Zgk67B4S7dgfYiWiwwv7YGwAWgXTrpmn9OxukfBOwNtfdEZTrr3MpAO4IjXC4vyKxo2p7z2cjF0itBNcv5eskJ6xPVQZ6VhQGrHCYXDO5ACwr94nVi-WdmASru5WGau70iHfdQyKiwdtYQtmP8En1c1PGlDo9GGBHiaSJ",
  languages: ['EN', 'ES', 'FR', 'DE'],
  
  categories: [
    {
      id: 'housekeeping',
      icon: 'cleaning_services',
      label: {
        EN: 'Housekeeping',
        ES: 'Limpieza',
        FR: 'Ménage',
        DE: 'Reinigung',
      }
    },
    {
      id: 'towels',
      icon: 'local_laundry_service',
      label: {
        EN: 'Towels & Linens',
        ES: 'Toallas y Sábanas',
        FR: 'Serviettes et Linge',
        DE: 'Handtücher & Wäsche',
      }
    },
    {
      id: 'ac',
      icon: 'ac_unit',
      label: {
        EN: 'Air Conditioning',
        ES: 'Aire Acondicionado',
        FR: 'Climatisation',
        DE: 'Klimaanlage',
      }
    },
    {
      id: 'wifi',
      icon: 'wifi',
      label: {
        EN: 'Wi-Fi / TV',
        ES: 'Wi-Fi / TV',
        FR: 'Wi-Fi / Télé',
        DE: 'WLAN / TV',
      }
    }
  ],

  translations: {
    EN: {
      welcomeTitle: "Need something from hotel staff?",
      welcomeSubtitle: "We are here to make your stay perfect. Request towels, room service, or concierge assistance in one tap.",
      ctaButton: "Make a Request",
      loginText: "No login required",
      roomTitle: "What is your room number?",
      roomPlaceholder: "e.g. 402",
      roomButton: "Continue",
      helpTitle: "How can we help you?",
      otherRequest: "Other Request",
      otherRequestSub: "Type your request manually",
      detailsTitle: "Your Request",
      detailsPlaceholder: "How can we help you? (e.g., 2 extra towels or AC issues)",
      submitButton: "Submit Request",
      successTitle: "Request received.",
      successSubtitle: "Hotel staff has been notified.",
      successNote: "To change or correct your request, please submit a new one or contact reception.",
      newRequestButton: "Submit another request"
    },
    ES: {
      welcomeTitle: "¿Necesita algo del personal?",
      welcomeSubtitle: "Estamos aquí para hacer su estancia perfecta. Solicite toallas, servicio de habitaciones o asistencia.",
      ctaButton: "Hacer una solicitud",
      loginText: "No requiere inicio de sesión",
      roomTitle: "¿Cuál es su número de habitación?",
      roomPlaceholder: "ej. 402",
      roomButton: "Continuar",
      helpTitle: "¿Cómo podemos ayudarle?",
      otherRequest: "Otra solicitud",
      otherRequestSub: "Escriba su solicitud manualmente",
      detailsTitle: "Su solicitud",
      detailsPlaceholder: "¿En qué podemos ayudarle? (ej., 2 toallas extra o problemas con el AA)",
      submitButton: "Enviar solicitud",
      successTitle: "Solicitud recibida.",
      successSubtitle: "El personal ha sido notificado.",
      successNote: "Para cambiar o corregir su solicitud, por favor envíe una nueva o contacte a recepción.",
      newRequestButton: "Enviar otra solicitud"
    },
    FR: {
      welcomeTitle: "Besoin de quelque chose ?",
      welcomeSubtitle: "Nous sommes là pour rendre votre séjour parfait. Demandez des serviettes, le service de chambre ou le concierge.",
      ctaButton: "Faire une demande",
      loginText: "Aucune connexion requise",
      roomTitle: "Quel est votre numéro de chambre ?",
      roomPlaceholder: "ex. 402",
      roomButton: "Continuer",
      helpTitle: "Comment pouvons-nous vous aider ?",
      otherRequest: "Autre demande",
      otherRequestSub: "Tapez votre demande manuellement",
      detailsTitle: "Votre demande",
      detailsPlaceholder: "Comment pouvons-nous vous aider ? (ex., 2 serviettes supplémentaires)",
      submitButton: "Envoyer la demande",
      successTitle: "Demande reçue.",
      successSubtitle: "Le personnel de l'hôtel a été notifié.",
      successNote: "Pour modifier ou corriger votre demande, veuillez en soumettre une nouvelle ou contacter la réception.",
      newRequestButton: "Soumettre une autre demande"
    },
    DE: {
      welcomeTitle: "Brauchen Sie etwas?",
      welcomeSubtitle: "Wir sind hier, um Ihren Aufenthalt perfekt zu machen. Fordern Sie Handtücher, Zimmerservice oder Concierge-Hilfe an.",
      ctaButton: "Anfrage stellen",
      loginText: "Kein Login erforderlich",
      roomTitle: "Was ist Ihre Zimmernummer?",
      roomPlaceholder: "z.B. 402",
      roomButton: "Weiter",
      helpTitle: "Wie können wir Ihnen helfen?",
      otherRequest: "Andere Anfrage",
      otherRequestSub: "Geben Sie Ihre Anfrage manuell ein",
      detailsTitle: "Ihre Anfrage",
      detailsPlaceholder: "Wie können wir helfen? (z.B. 2 extra Handtücher)",
      submitButton: "Anfrage senden",
      successTitle: "Anfrage erhalten.",
      successSubtitle: "Das Hotelpersonal wurde benachrichtigt.",
      successNote: "Um Ihre Anfrage zu ändern, senden Sie bitte eine neue oder kontaktieren Sie die Rezeption.",
      newRequestButton: "Eine weitere Anfrage senden"
    }
  }
};