import { Component } from '@angular/core';

export class SeatNotFoundException extends Error {
	constructor(public person: string) {
		super();
	}
}

@Component({
	moduleId: module.id,
	selector: 'assigner',
	templateUrl: 'tmpl/assigner.html',
	styleUrls: ['styles/assigner.css']
})
export class AssignerComponent {

	public map = new Map();

	public array: any[];

	public result: string = '';

	constructor() {
		this.map.set('palpal', [14, 13, 15]);
		this.map.set('v', [15, 16, 10]);
		this.map.set('ivan', [15, 14, 16]);
		this.map.set('annushka', [13, 14, 18, 17]);
		this.map.set('galinka', [18, 14, 13, 17]);
		this.map.set('yuliia', [18, 8, 7, 6]);
		this.map.set('katyabo', [7, 3, 5, 1]);
		this.map.set('elena', [12, 11, 10, 9]);
		this.map.set('lena', [10, 11, 14, 18]);
		this.map.set('antonku', [13, 14, 10, 18]);
		this.map.set('maximsk', [13, 14, 12, 15]);
		this.map.set('evgeniy', [11, 10, 9]);
		this.map.set('konstantinsk', [12, 11, 9, 10]);
		this.map.set('dmytroo', [4, 8, 3, 7]);
		this.map.set('mykhaylo', [12, 15, 16]);

		this.rebuild();
	}

	removePlayer(person: string): void {
		this.map.delete(person);

		this.rebuild();
	}

	removeSeat(person: string, seat: number): void {
		const array = this.map.get(person);

		array.splice(array.indexOf(seat), 1);

		this.assign();
	}

	handleSeatsDrop(event: DragEvent): void {
		const target = event.target as HTMLElement;
		const { id, person } = JSON.parse(event.dataTransfer.getData('text/plain'));

		const seat = Number(id);

		const arraySource = this.map.get(person);
		arraySource.splice(arraySource.indexOf(seat), 1);

		const personTarget = target.dataset.person;
		const arrayTarget = this.map.get(personTarget);

		arrayTarget.push(seat);

		this.assign();
	}

	handleSeatDrop(event: DragEvent): void {
		const target = event.target as HTMLElement;
		const { id, person } = JSON.parse(event.dataTransfer.getData('text/plain'));
		const droppable = target.closest(`[data-person=${person}]`) as HTMLElement;
		const beforeSeat = Number(droppable.dataset.id);
		const seat = Number(id);

		if (beforeSeat === seat) {
			return;
		}

		const array = this.map.get(person);

		const index = array.indexOf(seat);
		array.splice(index, 1);

		const indexTarget = array.indexOf(beforeSeat);

		array.splice(indexTarget + (indexTarget < index ? 0 : 1), 0, seat);

		this.assign();
	}

	handlePersonDrop(event: DragEvent): void {
		const target = event.target as HTMLElement;
		const droppable = target.closest('[droppableId=persons]') as HTMLElement;
		const { person } = JSON.parse(event.dataTransfer.getData('text/plain'));
		const personTarget = droppable.dataset.person;

		const index = this.array.findIndex(([_person]) => _person === person);

		let [entry] = this.array.splice(index, 1);

		const indexTarget = this.array.findIndex(([_person]) => _person === personTarget);

		this.array.splice(indexTarget + (indexTarget < index ? 0 : 1), 0, entry);

		this.map = new Map(this.array);

		this.rebuild();
	}

	handlePersonDrag(event: DragEvent): void {
		const target = event.target as HTMLElement;

		event.dataTransfer.setData('text/plain', JSON.stringify({
			person: target.dataset.person
		}));

		this.assign();
	}

	handleSeatDrag(event: DragEvent): void {
		const target = event.target as HTMLElement;

		event.dataTransfer.setData('text/plain', JSON.stringify({
			id: target.dataset.id,
			person: target.dataset.person
		}));

		this.assign();
	}

	addSeat(person: string, seat: number) {
		const array = this.map.get(person);

		if (array.includes(seat) || seat <= 0 || seat > Number.MAX_SAFE_INTEGER) {
			return;
		}

		array.push(seat);

		this.assign();
	}

	rebuild(): void {
		this.array = Array.from(this.map.entries());

		this.assign();
	}

	seek(people, seated = []) {
		const [player, seats] = people.shift();

		for (const seat of seats) {
			console.log('checking %d for %s', seat, player);
			if (!seated.includes(seat)) {
				console.log('%d looks free', seat);

				try {
					const result = player + '=' + seat;

					if (people.length) {
						return [result, ...this.seek([...people], [seat, ...seated])];
					} else {
						return [result];
					}
				} catch (e) {
					if (e instanceof SeatNotFoundException) {
						continue;
					} else {
						throw e;
					}
				}
			}
		}

		throw new SeatNotFoundException(player);
	}

	assign() {
		try {
			this.result = this.seek(this.array.slice()).join('\n');
		} catch (e) {
			this.result = 'not possible to assign seat for ' + e.person;
		}
	}
}
