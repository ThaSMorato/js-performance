import { randomUUID as uuid } from "crypto";
import { Product } from "./product.js";

export class Cart {
  constructor({ at, products }) {
    this.id = uuid();
    this.at = at;
    this.products = this.removeUndefinedProps(products);
    this.total = this.getCartPrice();
  }

  removeUndefinedProps(products) {
    const result = [];

    for (const product of products) {
      const keys = Reflect.ownKeys(product);
      if (!keys.length) continue;
      const productEntity = new Product(product);
      keys.forEach((key) => productEntity[key] || Reflect.deleteProperty(productEntity, key));

      result.push(productEntity);
    }

    return result;
  }

  getCartPrice() {
    return this.products.reduce((acc, { price }) => acc + price, 0);
  }
}
