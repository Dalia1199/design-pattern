class Pizza {
  getDescription() {}
  cost() {}
}
class Margherita extends Pizza {
  getDescription() {
    return "Margherita";
  }

  cost() {
    return 8;
  }
}
//
class PizzaDecorator extends Pizza {
  constructor(pizza) {
    super();
    this.pizza = pizza;
  }

  getDescription() {
    return this.pizza.getDescription();
  }

  cost() {
    return this.pizza.cost();
  }
}
class Cheese extends PizzaDecorator {
  getDescription() {
    return this.pizza.getDescription() + ", Cheese";
  }

  cost() {
    return this.pizza.cost() + 2;
  }
}

class Olives extends PizzaDecorator {
  getDescription() {
    return this.pizza.getDescription() + ", Olives";
  }

  cost() {
    return this.pizza.cost() + 1.5;
  }
}

class Mushrooms extends PizzaDecorator {
  getDescription() {
    return this.pizza.getDescription() + ", Mushrooms";
  }

  cost() {
    return this.pizza.cost() + 1;
  }
}
let pizza = new Margherita();

pizza = new Cheese(pizza); 
pizza = new Olives(pizza); 
pizza = new Mushrooms(pizza); 

console.log(pizza.getDescription());
console.log(pizza.cost());