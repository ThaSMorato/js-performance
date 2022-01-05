export class CartPriceOld {
  constructor({ products }) {
    this.products = products;
    this.total = this.getCartPrice();
  }

  getCartPrice() {
    return this.products.reduce((acc, { price }) => acc + price, 0);
  }
}
