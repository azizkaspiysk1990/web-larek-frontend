import { IEvents } from '../base/events';

import { IProduct } from '../../types';

export class ProductList {
	products: IProduct[];

	constructor(protected events: IEvents) {
		this.products = [];
	}

	setProducts(products: IProduct[]) {
		this.products = products;
		this.events.emit('productList:create', products);
	}
}
