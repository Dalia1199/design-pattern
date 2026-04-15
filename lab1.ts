//SOLID Principles
class Report {
  constructor(private data: string) {}

  generate(): string {
    return `Report: ${this.data}`;
  }
}

class PDFExporter {
  export(content: string): void {
    console.log("Exporting PDF:", content);
  }
}

//OCP
interface Shape {
  draw(): void;
}

class Circle implements Shape {
  draw(): void {
    console.log("Drawing Circle");
  }
}

class Square implements Shape {
  draw(): void {
    console.log("Drawing Square");
  }
}

class ShapeDrawer {
  draw(shape: Shape): void {
    shape.draw();
  }
}

//LSP
class Vehicle {}

class EngineVehicle extends Vehicle {
  startEngine(): void {
    console.log("Engine started");
  }
}

class NonEngineVehicle extends Vehicle {
  move(): void {
    console.log("Moving...");
  }
}

class Car extends EngineVehicle {}
class Bicycle extends NonEngineVehicle {}

//ISP
interface IPrinter {
  print(): void;
}

interface IScanner {
  scan(): void;
}

interface IFax {
  fax(): void;
}

class BasicPrinter implements IPrinter {
  print(): void {
    console.log("Printing...");
  }
}

class AdvancedPrinter implements IPrinter, IScanner, IFax {
  print(): void {
    console.log("Printing...");
  }
  scan(): void {
    console.log("Scanning...");
  }
  fax(): void {
    console.log("Faxing...");
  }
}

//DIP
interface Logger {
  log(msg: string): void;
}

class ConsoleLogger implements Logger {
  log(msg: string): void {
    console.log("Console:", msg);
  }
}

class App {
  constructor(private logger: Logger) {}

  run(): void {
    this.logger.log("App running...");
  }
}

// SIngleton
class Config {
  private static instance: Config;

  private constructor() {}

  static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }
}

//Factory
interface INotification {
  send(msg: string): void;
}

class EmailNotification implements INotification {
  send(msg: string): void {
    console.log("Email:", msg);
  }
}

class SMSNotification implements INotification {
  send(msg: string): void {
    console.log("SMS:", msg);
  }
}

class PushNotification implements INotification {
  send(msg: string): void {
    console.log("Push:", msg);
  }
}

class NotificationFactory {
  static create(type: string): INotification {
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
  private card: Record<string, string> = {};

  setTitle(title: string): this {
    this.card.title = title;
    return this;
  }

  setImage(image: string): this {
    this.card.image = image;
    return this;
  }

  setDescription(desc: string): this {
    this.card.description = desc;
    return this;
  }

  build(): Record<string, string> {
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
