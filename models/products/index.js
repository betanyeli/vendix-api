/**
 * Product Model
 *
 */
class Product {
  /**
   * Creates a new Product instance.
   *
   * @param {number} id - The product ID.
   * @param {string} productName - The name of the product.
   * @param {number} sellerId - The ID of the seller.
   * @param {number} amountAvailable - The available amount.
   * @param {number} cost - The cost of the product.
   * @param {number} stock - The stock count.
   * @param {Date} createdAt - The creation date.
   */
  constructor(
    id,
    productName,
    sellerId,
    amountAvailable,
    cost,
    stock,
    createdAt
  ) {
    this.id = id;
    this.productName = productName;
    this.sellerId = sellerId;
    this.amountAvailable = amountAvailable;
    this.cost = cost;
    this.stock = stock;
    this.createdAt = createdAt;
  }
}

export default Product;
