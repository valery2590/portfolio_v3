// Client-side i18n utilities
export const flagMap: Record<string, string> = {
	es: '🇪🇸',
	en: '🇬🇧',
	it: '🇮🇹'
};

export function getDefaultLanguage(): string {
	if (typeof window === 'undefined') return 'es';
	
	const saved = localStorage.getItem('language');
	if (saved && (saved === 'es' || saved === 'en' || saved === 'it')) {
		return saved;
	}
	
	// Detectar idioma del navegador
	const browserLang = navigator.language.split('-')[0];
	if (browserLang === 'es' || browserLang === 'en' || browserLang === 'it') {
		return browserLang;
	}
	
	return 'es';
}

export function setLanguage(lang: string) {
	if (typeof window !== 'undefined') {
		localStorage.setItem('language', lang);
		document.documentElement.setAttribute('lang', lang);
		// Disparar evento personalizado para que los componentes se actualicen
		window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: lang } }));
	}
}

