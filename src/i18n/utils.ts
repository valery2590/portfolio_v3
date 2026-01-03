import type { Language, Translations } from './translations';
import { translations } from './translations';

export function getTranslations(lang: Language): Translations {
	return translations[lang];
}

export function getDefaultLanguage(): Language {
	if (typeof window === 'undefined') return 'es';
	
	const saved = localStorage.getItem('language') as Language | null;
	if (saved && (saved === 'es' || saved === 'en' || saved === 'it')) {
		return saved;
	}
	
	// Detectar idioma del navegador
	const browserLang = navigator.language.split('-')[0];
	if (browserLang === 'es' || browserLang === 'en' || browserLang === 'it') {
		return browserLang as Language;
	}
	
	return 'es';
}

export function setLanguage(lang: Language) {
	if (typeof window !== 'undefined') {
		localStorage.setItem('language', lang);
		document.documentElement.setAttribute('lang', lang);
		// Disparar evento personalizado para que los componentes se actualicen
		window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: lang } }));
	}
}

