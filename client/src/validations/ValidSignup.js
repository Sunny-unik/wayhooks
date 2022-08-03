export default function validSignup(name, username, date, email, password) {
  const nameFormat = /^[A-Za-z]\w{2,50}$/;
  const emailFormat = /\S+@\S+\.\S+/;
  const passwordFormat = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const age = date ? new Date().getFullYear() - date.getFullYear() : null;

  if (!name || !nameFormat.test(name)) {
    return {
      valid: false,
      msg: 'Your name should be greater than 2 characters & it should not contain any speacial character',
    };
  }
  if (!username || username.length < 5) {
    return {
      valid: false,
      msg: 'Your username should be greater than 4 characters',
    };
  }
  if (age === null || age < 18) {
    return { valid: false, msg: 'Your age should be greater than 18 years for register' };
  }
  if (email.length < 5 || !emailFormat.test(email)) {
    return {
      valid: false,
      msg: 'Incorrect email format',
    };
  }
  if (!passwordFormat.test(password) || password.length > 16) {
    return {
      valid: false,
      msg: 'Your password length must be between among 8 to 16 characters which will include combination of capital letter,small letter,digits & special character',
    };
  }

  return { valid: true, msg: 'Details Submmited Sucessfully' };
}
