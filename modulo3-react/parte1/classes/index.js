class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} falando...`);
  }
}
const animal = new Animal("Totó");
animal.speak();

class cachorro extends Animal {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
  speak() {
    console.log(`${this.name} é ${this.type}`);
  }
}
const dog = new cachorro("Jack", "Shitzu");
dog.speak();

class cat extends Animal {
  constructor(name, cor) {
    super(name);
    this.cor = cor;
  }
  speak() {
    console.log(`${this.name} (${this.cor}) está miando...`);
  }
}
const cate = new cat("Sofia", "Branquinha");
cate.speak();
