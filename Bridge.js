//Control Methods
class ControlMethod {
    drive() {
      
  }
}

class ManualControl extends ControlMethod {
  drive() {
    return "Driving manually";
  }
}

class AutomaticControl extends ControlMethod {
  drive() {
    return "Driving automatically";
  }
}
//Vehicle
class Vehicle {
  constructor(controlMethod) {
    this.controlMethod = controlMethod;
  }

  drive() {
    console.log(this.controlMethod.drive());
  }
}
class Car extends Vehicle {}
class Bike extends Vehicle { }
const manual = new ManualControl();
const auto = new AutomaticControl();

const car = new Car(manual);
car.drive(); 

const bike = new Bike(auto);
bike.drive(); 