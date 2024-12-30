type ListFormatOptions = {
	style: 'long' | 'short' | 'narrow';
	type: 'conjunction' | 'disjunction' | 'unit';
};

const DEFAULT_LIST_FORMAT_OPTIONS: ListFormatOptions = {
	style: 'long',
	type: 'conjunction'
};

export function intlArrayToString(
	list: Iterable<string>,
	lang = 'en-US',
	listFormatOptions = DEFAULT_LIST_FORMAT_OPTIONS
) {
	const intl = new Intl.ListFormat(lang, listFormatOptions);
	return intl.format(list);
}
