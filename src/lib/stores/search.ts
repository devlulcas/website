import { writable } from 'svelte/store';

type Result = Record<PropertyKey, any>;

export interface SearchStoreModel<T extends Result> {
	data: T[];
	filtered: T[];
	query: string;
}

export const createSearchStore = <T extends Result>(data: T[]) => {
	const { subscribe, set, update } = writable<SearchStoreModel<T>>({
		data,
		filtered: data,
		query: ''
	});

	return {
		subscribe,
		set,
		update
	};
};

export const searchHandler = <T extends Result>(searchStore: SearchStoreModel<T>) => {
	const searchTerm = searchStore.query.toLowerCase() || '';

	searchStore.filtered = searchStore.data.filter((item) => {
		return item.searchTerms.toLowerCase().includes(searchTerm);
	});
};
