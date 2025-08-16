export type ModelsList = 
    | 'voxtral-small-latest' 
    | 'voxtral-mini-latest' 
    | `voxtral-small-${number}` 
    | `voxtral-mini-${number}`;

export type LanguageList =
    | 'en'  // English
    | 'it'  // Italian
    | 'fr'  // French
    | 'de'  // German
    | 'es'  // Spanish
    | 'pt'  // Portuguese
    | 'ru'  // Russian
    | 'zh'  // Chinese
    | 'ja'  // Japanese
    | 'ko'  // Korean
    | 'ar'  // Arabic
    | 'hi'  // Hindi