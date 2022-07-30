export default function validOtpPassword(otp, password, confirmPassword) {
  const strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

  if (otp.length !== 6) {
    return { valid: false, msg: 'OTP must have 6 digits' };
  }
  if (password !== confirmPassword) {
    return { valid: false, msg: 'Password & Confirm Password must be same' };
  }
  if (!strongPassword.test(password)) {
    return { valid: false, msg: 'Password must have 1small, 1large, 1symbol, 1digit, 8letters' };
  }
  return { valid: true, msg: 'Password Updated Successfully' };
}
