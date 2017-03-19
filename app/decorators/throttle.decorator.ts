function throttle(fn, threshhold: number = 100, scope?: any) {

	let last;
	let deferTimer;

	return function () {
		let context = scope || this;
		let now = +new Date;
		let args = arguments;

		if (last && now < last + threshhold) {
			clearTimeout(deferTimer);
			deferTimer = setTimeout(function () {
				last = now;
				fn.apply(context, args);
			}, threshhold);
		} else {
			last = now;
			fn.apply(context, args);
		}
	};
}

export function Throttle(threshhold?: number) {
	return function (target, propertyKey: string, descriptor: TypedPropertyDescriptor<Function>) {
		descriptor.value = throttle(descriptor.value, threshhold);
	}
}
