//Observer

class Device {
  constructor(name) {
    this.name = name;
  }
  update(temp, humidity) {
    console.log(`${this.name}: Temp ${temp}°C, Humidity ${humidity}%`);
  }
}

class WeatherStation {
  constructor() {
    this.devices = [];
  }

  subscribe(device) {
    this.devices.push(device);
  }

  unsubscribe(device) {
    this.devices = this.devices.filter(d => d !== device);
  }

  notify(temp, humidity) {
    this.devices.forEach(d => d.update(temp, humidity));
  }

  setWeatherData(temp, humidity) {
    console.log("Weather updated 🌦️");
    this.notify(temp, humidity);
  }
}
const station = new WeatherStation();

const phone = new Device("Phone");
const tablet = new Device("Tablet");

station.subscribe(phone);
station.subscribe(tablet);

station.setWeatherData(30, 60);