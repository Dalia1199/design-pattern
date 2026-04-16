class RedState {
  change(light) {
    console.log("Red → Green");
    light.setState(new GreenState());
  }
}

class GreenState {
  change(light) {
    console.log("Green → Yellow");
    light.setState(new YellowState());
  }
}

class YellowState {
  change(light) {
    console.log("Yellow → Red");
    light.setState(new RedState());
  }
}
class TrafficLight {
  constructor() {
    this.state = new RedState();
  }

  setState(state) {
    this.state = state;
  }

  change() {
    this.state.change(this);
  }
}
const light = new TrafficLight();

light.change();
light.change();
light.change();