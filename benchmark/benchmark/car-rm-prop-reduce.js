import { Product } from "../src/entities/product.js";

export class CartRmPropReduce {
  constructor({ products }) {
    this.products = this.removeUndefinedProps(products);
  }

  removeUndefinedProps(products) {
    return products.reduce((acc, product) => {
      const keys = Reflect.ownKeys(product);
      const removeUndefinedProps = (keys, productObj) => {
        keys.forEach((key) => productObj[key] || delete productObj[key]);
        return productObj;
      };
      return !!keys.length ? [...acc, new Product(removeUndefinedProps(keys, product))] : acc;
    }, []);
  }
}
