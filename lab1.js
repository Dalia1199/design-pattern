class HTMLBuilder {
    constructor() {
        this._title = "";
        this._image = "";
        this._description = "";
        this._link = "";
    }

    setTitle(title) {
        this._title = title;
        return this;
    }

    setImage(url) {
        this._image = url;
        return this;
    }

    setDescription(description) {
        this._description = description;
        return this;
    }

    setLink(href) {
        this._link = href;
        return this;
    }

    build() {
        return `
<div class="card">
  ${this._image ? `<img src="${this._image}" alt="card image" />` : ""}
  ${this._title ? `<h2>${this._title}</h2>` : ""}
  ${this._description ? `<p>${this._description}</p>` : ""}
  ${this._link ? `<a href="${this._link}">Learn more</a>` : ""}
</div>`.trim();
    }
}


const card = new HTMLBuilder()
    .setTitle("My Card")
    .setImage("https://example.com/photo.jpg")
    .setDescription("This is a beautifully built card.")
    .setLink("https://example.com")
    .build();

console.log(card);
class Logger {
    log(msg) { throw new Error("log() not implemented"); }
}


class FileLogger extends Logger {
    log(msg) { console.log(`[FILE] ${msg}`); }
}

class ConsoleLogger extends Logger {
    log(msg) { console.log(`[CONSOLE] ${msg}`); }
}

class CloudLogger extends Logger {
    log(msg) { console.log(`[CLOUD] ${msg}`); }
}


class App {
    constructor(logger) {
        if (!(logger instanceof Logger)) {
            throw new Error("Must provide a Logger instance");
        }
        this.logger = logger;
    }

    run() {
        this.logger.log("App is running...");
    }
}


new App(new FileLogger()).run();
new App(new ConsoleLogger()).run();
new App(new CloudLogger()).run();
class Printable {
    print() { throw new Error("print() not implemented"); }
}

class Scannable {
    scan() { throw new Error("scan() not implemented"); }
}

class Faxable {
    fax() { throw new Error("fax() not implemented"); }
}


class BasicPrinter extends Printable {
    print() {
        console.log("Printing document...");
    }
}


class OfficePrinter extends Printable {
    print() { console.log("Printing document..."); }
    scan() { console.log("Scanning document..."); }
    fax() { console.log("Faxing document..."); }
}


const basic = new BasicPrinter();
basic.print(); 
class Notification {
    send(message) { throw new Error("send() not implemented"); }
}

class EmailNotification extends Notification {
    send(message) { console.log(`Email: ${message}`); }
}

class SMSNotification extends Notification {
    send(message) { console.log(`SMS: ${message}`); }
}

class PushNotification extends Notification {
    send(message) { console.log(`Push: ${message}`); }
}

class NotificationFactory {
    static create(type) {
        const types = {
            email: EmailNotification,
            sms: SMSNotification,
            push: PushNotification,
        };

        const NotificationClass = types[type.toLowerCase()];

        if (!NotificationClass) {
            throw new Error(`Unknown notification type: "${type}"`);
        }

        return new NotificationClass();
    }
}


NotificationFactory.create("email").send("Welcome aboard!");
NotificationFactory.create("sms").send("Your OTP is 4821");
NotificationFactory.create("push").send("You have a new message");
class Vehicle {
    move() {
        console.log("Vehicle is moving");
    }
}

class EngineVehicle extends Vehicle {
    startEngine() {
        console.log("Engine started");
    }
}

class NonEngineVehicle extends Vehicle {
    pedal() {
        console.log("Pedaling...");
    }
}

class Car extends EngineVehicle {
    move() {
        this.startEngine();
        console.log("Car is driving");
    }
}

class Bicycle extends NonEngineVehicle {
    move() {
        this.pedal();
        console.log("Bicycle is riding");
    }
}


const vehicles = [new Car(), new Bicycle()];
vehicles.forEach(v => v.move());
class Shape {
    draw() {
        throw new Error("draw() must be implemented");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}

class Square extends Shape {
    draw() {
        console.log("Drawing a square");
    }
}

class Triangle extends Shape {
    draw() {
        console.log("Drawing a triangle");
    }
}

class ShapeDrawer {
    draw(shape) {
        shape.draw();
    }
}


const drawer = new ShapeDrawer();
drawer.draw(new Circle());
drawer.draw(new Square());
drawer.draw(new Triangle()); 
class Report {
    constructor(data) {
        this.data = data;
    }

    generate() {
        return `Report Content: ${JSON.stringify(this.data)}`;
    }
}

class PDFExporter {
    export(report) {
        const content = report.generate();
        console.log(`Exporting to PDF: ${content}`);
    }
}

const report = new Report({ title: "Sales Q1", total: 5000 });
const exporter = new PDFExporter();
exporter.export(report);
class Config {
    constructor() {
        this.settings = {
            theme: "dark",
            language: "en",
            version: "1.0.0",
        };
    }

    static getInstance() {
        if (!Config._instance) {
            Config._instance = new Config();
        }
        return Config._instance;
    }

    get(key) {
        return this.settings[key];
    }

    set(key, value) {
        this.settings[key] = value;
    }
}


const config1 = Config.getInstance();
const config2 = Config.getInstance();

config1.set("theme", "light");

console.log(config2.get("theme"));
console.log(config1 === config2);  