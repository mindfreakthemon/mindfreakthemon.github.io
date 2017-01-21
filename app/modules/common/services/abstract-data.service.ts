export abstract class AbstractDataService<T> {

	private cache: T[];

	getList(): Promise<T[]> {
		if (this.cache) {
			return Promise.resolve(this.cache);
		}

		return this.fetch()
			.then((response: Response) => response.json())
			.then((json) => {
				let array = json.data;

				return this.cache = array.map((item) => this.createInstance(item));
			});
	}

	abstract createInstance(data: any): T;

	abstract fetch(): Promise<Response>;
}
