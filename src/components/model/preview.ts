import { IEvents } from '../base/events';

import { IProduct } from '../../types';

export class Preview {
	product: IProduct | null;

	constructor(protected events: IEvents) {}

	setProduct(product: IProduct) {
		this.product = product;
		this.events.emit('preview:open', product);
	}
}
