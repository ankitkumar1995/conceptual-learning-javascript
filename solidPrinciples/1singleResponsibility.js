class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // user data management

  getUserInfo() {
    return `${this.name} ${this.email}`;
  }
  senEmail() {
    // send email to user
  }
}

// adheres to SRP
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // user data management
  getUserInfo() {
    return `${this.name} ${this.email}`;
  }
}

// email service
class EmailService {
  senEmail(user, message) {
    // send email to the user
  }
}
