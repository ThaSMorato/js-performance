import { Product } from "../src/entities/product.js";

export class CartRmPropNew {
  constructor({ products }) {
    this.products = this.removeUndefinedProps(products);
  }

  removeUndefinedProps(products) {
    const result = [];

    for (const product of products) {
      const keys = Reflect.ownKeys(product);
      if (!keys.length) continue;
      keys.forEach((key) => product[key] || delete product[key]);
      result.push(new Product(product));
    }

    return result;
  }
}
