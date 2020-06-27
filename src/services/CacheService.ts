import { injectable } from 'inversify';

@injectable()
export class CacheService<T> {
	constructor() {
		// DEBUG
		(window as any).CacheService = this;
	}

	get<V>(key: keyof T): V | undefined {
		const value = localStorage.getItem(key as string);
		if (value) {
			return JSON.parse(value) as V;
		}
	}
	set<V>(key: keyof T, value: V) {
		localStorage.setItem(key as string, JSON.stringify(value));
	}

	remove(key: keyof T) {
		localStorage.removeItem(key as string);
	}
}
