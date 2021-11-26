import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";

import InputGroup from "./InputGroup.js";

// const au

class Register {
  $formEl;
  $displayNameEl;
  $emailEl;
  $passwordEl;
  $confirmPasswordEl;
  $submitButtonEl;

  constructor() {
    this.$formEl = document.createElement("form");
    this.$formEl.setAttribute(
      "class",
      "w-1/3 bg-blue-400 py-12 px-4 mx-auto mt-24 rounded-xl"
    );

    this.$displayNameEl = new InputGroup(
      "text",
      "Full name",
      "Enter your full name"
    );

    this.$emailEl = new InputGroup("email", "Email", "Enter your email");

    this.$passwordEl = new InputGroup(
      "password",
      "Password",
      "Enter your password"
    );

    this.$confirmPasswordEl = new InputGroup(
      "password",
      "Confirm password",
      "Enter your password"
    );

    this.$submitButtonEl = document.createElement("button");
    this.$submitButtonEl.type = "submit";
    this.$submitButtonEl.addEventListener("click", this.handleSubmit);
    this.$submitButtonEl.textContent = "Submit";
    this.$submitButtonEl.setAttribute(
      "class",
      "bg-white py-2 px-4 rounded-md font-bold"
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const validated = this.validation();
    if (validated !== null) {
      createUserWithEmailAndPassword(auth, validated.email, validated.password)
        .then((user) => {})
        .catch((erro) => {
          alert(error.message);
        });
    }
  };
  validation() {
    const displayName = this.$displayNameEl.getInputValue();
    const email = this.$emailEl.getInputValue();
    const password = this.$passwordEl.getInputValue();
    const confirmPassword = this.$confirmPasswordEl.getInputValue();

    let flag = true;
    if (displayName.trim().length === 0) {
      this.$displayNameEl.setError("Full name can not be empty");
      flag = false;
    } else {
      this.$displayNameEl.setError("");
    }

    if (email.trim().length === 0) {
      this.$emailEl.setError("Email can not be empty");
      flag = false;
    } else {
      this.$emailEl.setError("");
    }
    if (password.trim().length === 0) {
      this.$passwordEl.setError("Password can not be empty");
      flag = false;
    } else {
      this.$passwordEl.setError("");
    }
    if (confirmPassword.trim().length === 0) {
      this.$confirmPasswordEl.setError("confirm Password can not be empty");
      flag = false;
    } else {
      this.$confirmPasswordEl.setError("");
    }
    if (password !== confirmPassword) {
      this.$confirmPasswordEl.setError("Password does not match");
      flag = false;
    } else {
      this.$confirmPasswordEl.setError("");
    }
    if (flag === true) {
      return {
        displayName: displayName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };
    }
    return null;
  }
  
  render() {
    this.$formEl.appendChild(this.$displayNameEl.render());
    this.$formEl.appendChild(this.$emailEl.render());
    this.$formEl.appendChild(this.$passwordEl.render());
    this.$formEl.appendChild(this.$confirmPasswordEl.render());
    this.$formEl.appendChild(this.$submitButtonEl);

    return this.$formEl;
  }

}

export default Register;
