
//Facade Design Pattern
class PaymentService {
  processPayment() {
    console.log("Payment processed ");
  }
}

class InventoryService {
  updateInventory() {
    console.log("Inventory updated ");
  }
}

class NotificationService {
  sendNotification() {
    console.log("Notification sent ");
  }
}

class LoggingService {
  log() {
    console.log("Transaction logged ");
  }
}
class CheckoutService {
  constructor() {
    this.payment = new PaymentService();
    this.inventory = new InventoryService();
    this.notification = new NotificationService();
    this.logger = new LoggingService();
  }

  checkout() {
    console.log("Starting checkout...");
    this.payment.processPayment();
    this.inventory.updateInventory();
    this.notification.sendNotification();
    this.logger.log();
    console.log("Checkout complete ");
  }
}
const checkout = new CheckoutService();
checkout.checkout();

