// violates OCP
class PaymentProcessor {
  processCreditCard(payment) {
    // process credit card payment
  }
  processPaypal(payment) {
    // process paypal payment
  }
}
// adheres to OCP
class PaymentProcessor {
  process(paymentMethod) {
    paymentMethod.processPayment();
  }
}
class CreditCardPayment {
  processPayment() {
    // implement credit card processing
  }
}
class PayPalPayment {
  processPayment() {
    // implement paypal processing
  }
}

const paymentProcessor = new PaymentProcessor();
const creditCardPayment = new CreditCardPayment();
paymentProcessor.process(creditCardPayment);

const payPalPayment = new PayPalPayment();
paymentProcessor.process(payPalPayment);
