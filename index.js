const ProductsDiscount = new Map();

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    console.log(`Product "${name}" with price ${price} created`);
  }

  setDiscount(discount) {
    ProductsDiscount.set(this, discount);
    console.log(`Discount ${discount} set for ${this.name}`);
  }

  getDiscount() {
    const discount = ProductsDiscount.get(this);
    console.log(`${this.name} has ${discount} discount`);
    return discount;
  }
}

function removeProduct(product) {
  ProductsDiscount.delete(product);
  console.log(`Discount for ${product.name} removed`);
  console.log(`The ${product.name} has been removed`);
  product = null;
}

// Create products
let apple = new Product("apple", "1$");
let banana = new Product("banana", "2$");
let lemon = new Product("lemon", "4$");

// Set discounts
apple.setDiscount("15%");
banana.setDiscount("20%");
lemon.setDiscount("40%");

// Remove one product
removeProduct(apple);

// Check discounts
console.log(
  ProductsDiscount.has(apple)
    ? "Apple discount exists"
    : "Apple discount removed"
); // false
console.log(
  ProductsDiscount.has(banana)
    ? "Banana discount exists"
    : "Banana discount removed"
); // true
