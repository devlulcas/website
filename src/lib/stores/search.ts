import { Fzf } from 'fzf';
import { writable } from 'svelte/store';

type Result = Record<PropertyKey, any> & {
	searchTerms: string;
};

export interface SearchStoreModel<T extends Result> {
	data: T[];
	filtered: T[];
	query: string;
	loadedFuzzyFinder: Fzf<T[]>;
}

// Creates a store that can be used to search through a list of data
export const createSearchStore = <T extends Result>(data: T[]) => {
	// This is working, but I'm not sure how to get the types to work correctly
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore - FzfOptions is not exported
	const fzf = new Fzf(data, {
		selector: (v) => {
			return v.searchTerms;
		},
		casing: 'case-insensitive',
		sort: true
	});

	const { subscribe, set, update } = writable<SearchStoreModel<T>>({
		data,
		filtered: data,
		query: '',
		loadedFuzzyFinder: fzf
	});

	return {
		subscribe,
		set,
		update
	};
};

// Uses the Fzf library to filter the data based on the query
export const searchHandler = <T extends Result>(searchStore: SearchStoreModel<T>) => {
	const searchTerm = searchStore.query.toLowerCase() || '';

	searchStore.filtered = searchStore.loadedFuzzyFinder.find(searchTerm).map((found) => found.item);
};
