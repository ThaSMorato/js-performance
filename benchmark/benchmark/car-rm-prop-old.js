import { Product } from "../src/entities/product.js";

export class CartRmPropOld {
  constructor({ products }) {
    this.products = this.removeUndefinedProps(products);
  }

  removeUndefinedProps(products) {
    const productsEntities = products
      .filter((product) => !!Reflect.ownKeys(product).length)
      .map((product) => new Product(product));

    return JSON.parse(JSON.stringify(productsEntities));
  }
}
