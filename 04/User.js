export default class User {
  constructor({ email = "", password = "" }) {
    if (!this.isValidEmail(email)) {
      throw new Error("Email jest błędny");
    }
    if (!this.isValidPassword(password)) {
      throw new Error("Hasło jest błędne");
    }
    this.email = email;
    this.password = password;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }
  isValidEmail(email) {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(email);
  }
  isValidPassword(pass) {
    return pass.length > 3;
  }
  login() {
    if (this.email.includes("devmentor.pl")) {
      return true;
    } else return false;
  }
}

// class User {
//   constructor({ email = "", password = "" }) {
//     if (this.isValidEmail(email)) {
//       throw new Error("Email jest błędny");
//     }
//     if (this.isValidPassword(password)) {
//       throw new Error("Hasło jest błędne");
//     }
//     this.email = email;
//     this.password = password;
//   }

//   getEmail() {
//     return this.email;
//   }

//   getPassword() {
//     return this.password;
//   }
//   isValidEmail(email) {
//     const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return reg.test(email);
//   }
//   isValidPassword(pass) {
//     return pass.length > 6;
//   }
//   login() {
//     if (this.email.includes("devmentor.pl")) {
//       return true;
//     } else return false;
//   }
// }
// const email = "koder@gmail.com";
// // const email = "koder@devmentor.pl";
// const password = "pw123456";

// const user = new User({ email, password });
// console.log(user.getPassword());
