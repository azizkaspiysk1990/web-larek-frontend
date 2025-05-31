import { Api, ApiListResponse } from '../base/api';

import { IProduct, IOrder, IResOrder } from '../../types';

interface IShopAPI {
	getProducts: () => Promise<IProduct[]>;
	getProduct: (id: string) => Promise<IProduct>;
	createOrder: (invoice: IOrder) => Promise<IResOrder>;
}

class ShopApi extends Api implements IShopAPI {
	readonly cdn: string;

	constructor(cdn: string, baseUrl: string, options?: RequestInit) {
		super(baseUrl, options);
		this.cdn = cdn;
	}

	getProduct(id: string) {
		return this.get(`/product/${id}`).then((item: IProduct) => ({
			...item,
			image: this.cdn + item.image,
		}));
	}

	getProducts() {
		return this.get('/product').then((data: ApiListResponse<IProduct>) =>
			data.items.map((item) => ({
				...item,
				image: this.cdn + item.image,
			}))
		);
	}

	createOrder(invoice: IOrder) {
		return this.post('/order', invoice).then((data: IResOrder) => data);
	}
}

export { ShopApi, IShopAPI };
