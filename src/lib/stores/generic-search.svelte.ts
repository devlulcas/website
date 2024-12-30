import Fuse from 'fuse.js';

export class GenericSearchStore<T> {
	data = $state<T[]>([]);
	query = $state('');
	loadedFuzzyFinder = $state<Fuse<T>>(
		new Fuse(this.data, { keys: ['searchTerms'], threshold: 0.2 })
	);

	get filtered() {
		if (!this.query) {
			return this.data;
		}

		return this.loadedFuzzyFinder.search(this.query.toLowerCase()).map((found) => found.item);
	}

	constructor(data: T[]) {
		this.data = data;

		this.loadedFuzzyFinder = new Fuse(data, {
			keys: ['searchTerms'],
			threshold: 0.2
		});
	}
}
