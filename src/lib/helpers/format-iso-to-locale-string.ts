/**
 * Format ISO date to locale string
 * @param str Date in ISO format
 * @param locale Locale to format
 * @returns Date in locale format
 */
export function formatISOToLocaleString(str: string, locale: 'en' | 'pt' = 'en') {
	const dateTimeFormat = new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	const date = new Date(str);

	return dateTimeFormat.format(date);
}
