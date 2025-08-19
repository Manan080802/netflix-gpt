export const checkValidate = (isLoginPage, email, password, name) => {
  let isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  let isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,30}$/.test(password);

  if (!isLoginPage) {
    let isname = /^[a-zA-Z]+(?:[ -'][a-zA-Z]+)*$/.test(name);
    console.log("isname :>> ", isname);
    if (!isname) return "Name is not valid";
  }

  if (!isEmailValid) return "Email id not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
