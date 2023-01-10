var passwordValue;
const validatePass = (rule, value, callback) => {
  passwordValue = value;
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  if (value === "") {
    callback(new Error("Please input the password"));
  } else if (!regex.test(value)) {
    callback(
      new Error(
        "This file is required!"
      )
    );
  } else {
    callback();
  }
};
const validateConfirm = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("This file is required!"));
  } else if (value !== passwordValue) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};
const phoneValidator = (rule, value, callback) => {
  var phoneno = /^(?=.*[0-9])(?=.{14,})(?=.*[+])/;
  if (value === "") {
    callback(new Error("The store phone field may only contain numeric characters"));
  } else if (!phoneno.test(value)) {
    callback(new Error("This file is required!"));
  } else {
    callback();
  }
};
const validateName = (rule, value, callback) => {
  const name = /^[a-zA-Z]/;
  if (value === "") {
    callback(new Error("This file is required!"));
  } else if (!name.test(value)) {
    callback(new Error("This file is required!"));
  } else {
    callback();
  }
};
const validateLast = (rule, value, callback) => {
  const last = /^[a-zA-Z]/;
  if (value === "") {
    callback(new Error("This file is required!"));
  } else if (!last.test(value)) {
    callback(new Error("This file is required!"));
  } else {
    callback();
  }
};
const validateSelect = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please choose one of them"));
  } else {
    callback();
  }
};
const validateInteger = (rule, value, callback) => {
  const quantity = /^(?=.*[0-9])/;
  if (value === "") {
    callback(new Error("This file is required!"));
  } else if (!quantity.test(value)) {
    callback(new Error("This field may only contain numeric characters"));
  } else {
    callback();
  }
};
export {
  validatePass,
  validateConfirm,
  phoneValidator,
  validateName,
  validateLast,
  validateInteger,
  validateSelect
};
