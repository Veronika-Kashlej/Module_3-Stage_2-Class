const ProductsDiscount = new WeakMap();

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

// Create products
let apple = new Product("apple", "1$");
let banana = new Product("banana", "2$");
let lemon = new Product("lemon", "4$");

// Set discounts
apple.setDiscount("15%");
banana.setDiscount("20%");
lemon.setDiscount("40%");

// Remove one product
apple = null;
console.log("Apple product removed");

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
