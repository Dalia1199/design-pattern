"use strict";
//SOLID Principles
class Report {
    data;
    constructor(data) {
        this.data = data;
    }
    generate() {
        return `Report: ${this.data}`;
    }
}
class PDFExporter {
    export(content) {
        console.log("Exporting PDF:", content);
    }
}
class Circle {
    draw() {
        console.log("Drawing Circle");
    }
}
class Square {
    draw() {
        console.log("Drawing Square");
    }
}
class ShapeDrawer {
    draw(shape) {
        shape.draw();
    }
}
//LSP
class Vehicle {
}
class EngineVehicle extends Vehicle {
    startEngine() {
        console.log("Engine started");
    }
}
class NonEngineVehicle extends Vehicle {
    move() {
        console.log("Moving...");
    }
}
class Car extends EngineVehicle {
}
class Bicycle extends NonEngineVehicle {
}
class BasicPrinter {
    print() {
        console.log("Printing...");
    }
}
class AdvancedPrinter {
    print() {
        console.log("Printing...");
    }
    scan() {
        console.log("Scanning...");
    }
    fax() {
        console.log("Faxing...");
    }
}
class ConsoleLogger {
    log(msg) {
        console.log("Console:", msg);
    }
}
class App {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    run() {
        this.logger.log("App running...");
    }
}
// SIngleton
class Config {
    static instance;
    constructor() { }
    static getInstance() {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }
}
class EmailNotification {
    send(msg) {
        console.log("Email:", msg);
    }
}
class SMSNotification {
    send(msg) {
        console.log("SMS:", msg);
    }
}
class PushNotification {
    send(msg) {
        console.log("Push:", msg);
    }
}
class NotificationFactory {
    static create(type) {
        switch (type) {
            case "email":
                return new EmailNotification();
            case "sms":
                return new SMSNotification();
            case "push":
                return new PushNotification();
            default:
                throw new Error("Invalid type");
        }
    }
}
//Builder
class HTMLBuilder {
    card = {};
    setTitle(title) {
        this.card.title = title;
        return this;
    }
    setImage(image) {
        this.card.image = image;
        return this;
    }
    setDescription(desc) {
        this.card.description = desc;
        return this;
    }
    build() {
        return this.card;
    }
}
// SRP
const report = new Report("Sales");
const exporter = new PDFExporter();
exporter.export(report.generate());
// OCP
new ShapeDrawer().draw(new Circle());
// DIP
new App(new ConsoleLogger()).run();
// Singleton
console.log(Config.getInstance() === Config.getInstance());
// Factory
NotificationFactory.create("email").send("Hello");
// Builder
console.log(new HTMLBuilder().setTitle("Card").setDescription("Nice").build());
